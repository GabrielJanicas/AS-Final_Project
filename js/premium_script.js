document.addEventListener('DOMContentLoaded', function() {
    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('userName');

    if (userType === null) {
        window.location.href = 'login.html';
    } else if (userType === 'free') {
        document.getElementById('premium').style.display = 'none';
        document.getElementById('name_navbar').textContent = userName;
        document.getElementById('account').setAttribute('href', 'profile.html');
    } else if (userType === 'premium') {
        document.getElementById('name_navbar').textContent = userName;
        document.getElementById('account').setAttribute('href', 'profile.html');
        document.getElementById('free').style.display = 'none';
    }

    // Load tables from local storage
    loadTables();

    document.getElementById('addAreaBtn').addEventListener('click', function() {
        addNewTable();
    });
});

// Sensor density variable
const sensorDensity = 5; // Adjust this value as needed

// Sensor name arrays
const o3Sensors = ['DGS2', 'O3ONE', 'O3 - Sesotec', '2B Tech - O3'];
const no2Sensors = ['DGS2', 'NO2 - Sesotec', '2B Tech - NO2', 'NO2 - Aeroqual'];
const pm10Sensors = ['DGS2', 'PM10 - Sesotec', 'DustTrak - PM10'];
const decibelSensors = ['Decibel 1000', 'Toolsonic', 'RAE Systems - Decibel 1310'];

function loadTables() {
    const savedTables = JSON.parse(localStorage.getItem('tables')) || [];
    savedTables.forEach((table, index) => {
        addTabToDOM(table.name, table.coordinates, table.data, index + 1);
    });
}

function addNewTable() {
    const areaName = document.getElementById('areaName').value || `Table ${tableCount}`;
    const coordinates = JSON.parse(localStorage.getItem('coordinates'));
    if (!coordinates) {
        alert('Please select an area on the map first.');
        return;
    }

    generateTableData(coordinates, sensorDensity).then(tableData => {
        saveTable(areaName, coordinates, tableData);
        addTabToDOM(areaName, coordinates, tableData, tableCount);
    });
}

function saveTable(name, coordinates, data) {
    const savedTables = JSON.parse(localStorage.getItem('tables')) || [];
    savedTables.push({ name, coordinates, data });
    localStorage.setItem('tables', JSON.stringify(savedTables));
}

function addTabToDOM(name, coordinates, data, tabId) {
    const tabContainer = document.getElementById('tab-container');
    const newTab = document.createElement('div');
    newTab.className = 'tab-item';
    newTab.innerHTML = `
        <button type="button" class="btn btn-secondary" onclick="showTablesForArea(${tabId})">${name}</button>
    `;
    tabContainer.insertBefore(newTab, document.getElementById('createAreabtn'));

    // Create container for tables
    const tablesContainer = document.createElement('div');
    tablesContainer.id = `tables-container-${tabId}`;
    tablesContainer.style.display = 'none';

    // Add O3 Table
    const o3Table = createTable(`O3 Data for ${name}`, data.filter(item => item.o3 !== undefined), 'o3');
    tablesContainer.appendChild(o3Table);

    // Add NO2 Table
    const no2Table = createTable(`NO2 Data for ${name}`, data.filter(item => item.no2 !== undefined), 'no2');
    tablesContainer.appendChild(no2Table);

    // Add PM10 Table
    const pm10Table = createTable(`PM10 Data for ${name}`, data.filter(item => item.pm10 !== undefined), 'pm10');
    tablesContainer.appendChild(pm10Table);

    // Add Decibels Table
    const decibelsTable = createTable(`Decibels Data for ${name}`, data.filter(item => item.decibels !== undefined), 'decibels');
    tablesContainer.appendChild(decibelsTable);

    // Add Remove Button at the end
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'btn btn-danger';
    removeButton.innerText = 'Remove area';
    removeButton.style.display = 'block';
    removeButton.style.margin = '0 auto';

    removeButton.onclick = () => removeTable(tabId);
    tablesContainer.appendChild(removeButton);

    document.getElementById('tables-container').appendChild(tablesContainer);

    tableCount++;
}

function createTable(title, data, type) {
    const unit = type === 'pm10' ? 'µg/m³' : (type === 'decibels' ? 'dB' : 'ppb');
    const table = document.createElement('table');
    table.className = 'table table-bordered table-striped';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Location</th>
                <th>${type.toUpperCase()} (${unit})</th>
                <th>Coordinates</th>
                <th>Sensor Name</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(item => `
                <tr>
                    <td>${item.location}</td>
                    <td>${item[type]}</td>
                    <td><a href="#" class="coordinate-link" data-lat="${item[`${type}Coordinates`].lat}" data-lng="${item[`${type}Coordinates`].lng}">(${item[`${type}Coordinates`].lat.toFixed(2)}, ${item[`${type}Coordinates`].lng.toFixed(2)})</a></td>
                    <td>${item[`${type}SensorName`]}</td>
                </tr>`).join('')}
        </tbody>
    `;
    return table;
}

function showTablesForArea(tabId) {
    document.querySelectorAll('[id^="tables-container-"]').forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(`tables-container-${tabId}`).style.display = 'block';

    // Add event listeners to coordinate links
    document.querySelectorAll('.coordinate-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));
            showLocationOnMap(lat, lng);
        });
    });
}

async function generateTableData(coordinates, density) {
    const numRows = density; // Use sensor density to determine the number of sensors
    const data = [];
    for (let i = 0; i < numRows; i++) {
        const coord = coordinates[getRandomInt(0, coordinates.length - 1)];
        const district = await getDistrictName(coord.lat, coord.lng);

        const sensors = generateSensorData(coordinates);

        data.push({
            location: district,
            o3: sensors.o3,
            o3Coordinates: sensors.o3Coordinates,
            o3SensorName: sensors.o3SensorName,
            no2: sensors.no2,
            no2Coordinates: sensors.no2Coordinates,
            no2SensorName: sensors.no2SensorName,
            pm10: sensors.pm10,
            pm10Coordinates: sensors.pm10Coordinates,
            pm10SensorName: sensors.pm10SensorName,
            decibels: sensors.decibels,
            decibelsCoordinates: sensors.decibelsCoordinates,
            decibelsSensorName: sensors.decibelsSensorName
        });
    }
    return data;
}

function generateSensorData(coordinates) {
    const sensors = {};
    if (Math.random() > 0.5) {
        sensors.o3 = getRandomInt(0, 100);
        sensors.o3Coordinates = coordinates[getRandomInt(0, coordinates.length - 1)];
        sensors.o3SensorName = o3Sensors[getRandomInt(0, o3Sensors.length)];
    }
    if (Math.random() > 0.5) {
        sensors.no2 = getRandomInt(0, 200);
        sensors.no2Coordinates = coordinates[getRandomInt(0, coordinates.length - 1)];
        sensors.no2SensorName = no2Sensors[getRandomInt(0, no2Sensors.length)];
    }
    if (Math.random() > 0.5) {
        sensors.pm10 = getRandomInt(0, 150);
        sensors.pm10Coordinates = coordinates[getRandomInt(0, coordinates.length - 1)];
        sensors.pm10SensorName = pm10Sensors[getRandomInt(0, pm10Sensors.length)];
    }
    if (Math.random() > 0.5) {
        sensors.decibels = getRandomInt(30, 120); // Typical range for decibels
        sensors.decibelsCoordinates = coordinates[getRandomInt(0, coordinates.length - 1)];
        sensors.decibelsSensorName = decibelSensors[getRandomInt(0, decibelSensors.length)];
    }
    return sensors;
}

async function getDistrictName(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const address = data.address;
        if (address && address.city) {
            return address.city;
        } else if (address && address.town) {
            return address.town;
        } else if (address && address.village) {
            return address.village;
        } else if (address && address.county) {
            return address.county;
        }
        return "Unknown";
    } catch (error) {
        console.error('Error fetching district name:', error);
        return "Unknown";
    }
}

function showLocationOnMap(lat, lng) {
    $('#mapModal').modal('show');
    setTimeout(() => {
        const map = L.map('sensorMap').setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map).bindPopup(`Sensor Location: (${lat.toFixed(2)}, ${lng.toFixed(2)})`).openPopup();
    }, 300); // Delay to allow modal to open
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeTable(tabId) {
    // Remove table data from local storage
    let savedTables = JSON.parse(localStorage.getItem('tables')) || [];
    savedTables = savedTables.filter((table, index) => index + 1 !== tabId);
    localStorage.setItem('tables', JSON.stringify(savedTables));

    // Remove the tab and table container from the DOM
    const tabContainer = document.getElementById('tab-container');
    const tableContainer = document.getElementById(`tables-container-${tabId}`);
    tabContainer.childNodes.forEach(tab => {
        if (tab.querySelector(`button[onclick="showTablesForArea(${tabId})"]`)) {
            tab.remove();
        }
    });
    if (tableContainer) {
        tableContainer.remove();
    }
}

let tableCount = 1;
