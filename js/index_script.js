

const districtData = {
    "Aveiro": {
        "PM10": 22,
        "N02": 3,
        "O3": 35,
        "air_pollution": 20,
        "sound_pollution": 30
    },
    "Braga": {
        "PM10": 6,
        "N02": 1,
        "O3": 27,
        "air_pollution": 57,
        "sound_pollution": 40
    },
    "Coimbra": {
        "PM10": 10,
        "N02": 5,
        "O3": 40,
        "air_pollution": 45,
        "sound_pollution": 50
    },
    "Lisboa": {
        "PM10": 20,
        "N02": 5,
        "O3": 49,
        "air_pollution": 152,
        "sound_pollution": 60
    },
    "Porto": {
        "PM10": 20,
        "N02": 7,
        "O3": 35,
        "air_pollution": 140,
        "sound_pollution": 70
    },
    "Setúbal": {
        "PM10": 25,
        "N02": 1,
        "O3": 31,
        "air_pollution": 128,
        "sound_pollution": 80
    },
    "Viana do Castelo": {
        "PM10": 6,
        "N02": 1,
        "O3": 39,
        "air_pollution": 30,
        "sound_pollution": 90
    },
    "Vila Real": {
        "PM10": 10,
        "N02": 2,
        "O3": 39,
        "air_pollution": 32,
        "sound_pollution": 100
    },
    "Viseu": {
        "PM10": 11,
        "N02": 4,
        "O3": 29,
        "air_pollution": 28,
        "sound_pollution": 110
    },
    "Faro": {
        "PM10": 21,
        "N02": 1,
        "O3": 33,
        "air_pollution": 110,
        "sound_pollution": 120
    },
    "Beja": {
        "PM10": 18,
        "N02": 2,
        "O3": 32,
        "air_pollution": 88,
        "sound_pollution": 130
    },
    "Bragança": {
        "PM10": 5,
        "N02": 1,
        "O3": 41,
        "air_pollution": 47,
        "sound_pollution": 140
    },
    "Castelo Branco": {
        "PM10": 10,
        "N02": 1,
        "O3": 44,
        "air_pollution": 62,
        "sound_pollution": 150
    },
    "Évora": {
        "PM10": 10,
        "N02": 2,
        "O3": 22,
        "air_pollution": 44,
        "sound_pollution": 160
    },
    "Guarda": {
        "PM10": 5,
        "N02": 5,
        "O3": 30,
        "air_pollution": 48,
        "sound_pollution": 170
    },
    "Leiria": {
        "PM10": 12,
        "N02": 6,
        "O3": 40,
        "air_pollution": 75,
        "sound_pollution": 180
    },
    "Portalegre": {
        "PM10": 10,
        "N02": 2,
        "O3": 19,
        "air_pollution": 50,
        "sound_pollution": 190
    },
    "Santarém": {
        "PM10": 10,
        "N02": 2,
        "O3": 22,
        "air_pollution": 65,
        "sound_pollution": 200
    },
    "Açores": {
        "PM10": 3,
        "N02": 1,
        "O3": 20,
        "air_pollution": 20,
        "sound_pollution": 210
    },
    "Madeira": {
        "PM10": 10,
        "N02": 1,
        "O3": 21,
        "air_pollution": 21,
        "sound_pollution": 220
    }
};

function toggleButtons(activeBtnId, inactiveBtnId) {
    var activeBtn = document.getElementById(activeBtnId);
    var inactiveBtn = document.getElementById(inactiveBtnId);


    // Ativa o botão ativo
    
    activeBtn.classList.add('btn-success'); // Cor "ativada"

    if(document.getElementById('air_pollution').style.display == 'none'){
        
        document.getElementById('air_pollution').style.display = 'block';
        document.getElementById('sound_pollution').style.display = 'none'; 

        
    }else {

        document.getElementById('air_pollution').style.display = 'none';
        document.getElementById('sound_pollution').style.display = 'block';
    }
    // Desativa o botão inativo
    inactiveBtn.classList.remove('btn-success'); // Cor "ativada"
    inactiveBtn.classList.add('btn-secondary');

}

function sendData(distrito) {
    document.getElementById('distrito').innerHTML = distrito;

    if(document.getElementById('air_pollution').style.display == 'none'){
        
        document.getElementById('no2').innerHTML = 'NO2: ' + districtData[distrito].air_pollution;
        document.getElementById('pm10').innerHTML = 'PM10: ' + districtData[distrito].air_pollution;
        document.getElementById('airQuality').innerHTML = 'Air quality: ' + districtData[distrito].air_pollution;
            
    }else {
        document.getElementById('o3').innerHTML = 'O3: ' + districtData[distrito].O3;
        document.getElementById('no2').innerHTML = 'NO2: ' + districtData[distrito].N02;
        document.getElementById('pm10').innerHTML = 'PM10: ' + districtData[distrito].PM10;
        document.getElementById('airQuality').innerHTML = 'Air quality: ' + districtData[distrito].air_pollution;
    }
}




document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('sound_pollution').style.display = 'none';

    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('userName');
    

    console.log("type: " + userType);
    console.log("name: " + userName);

    if (userType === null) {
        // Hide both free and premium content for anonymous users
       
        document.getElementById('addData').style.display = 'none';
        
    } else if (userType === 'free') {
        // Hide premium content for free users
        
        document.getElementById('name_navbar').textContent = userName;
        //document.getElementById('account').setAttribute('href', 'profile.html');
        document.getElementById('account').setAttribute('href', 'profile.html');


    } else if (userType === 'premium') {
        // Show all content for premium users
        name_navbar.textContent = userName;
        //document.getElementById('account').setAttribute('href', 'profile.html');
    }

    tippy('.svg-tooltip', {
        allowHTML: true,
        placement: 'top', 
        theme: 'light',
        
    });
});



function publishData() {

    const number = document.getElementById('number-data').value;
    const number_error = document.getElementById('number-error');

    number_error.textContent = '';

    let hasError = false;

    if (!number) {
        number_error.textContent = 'Please enter a number.';
        hasError = true;

    }else if (number < 0 || number > 500) {
        number_error.textContent = 'Please enter a number between 0 and 500.';
        hasError = true;
    }

    if (hasError) {
        return;
    }


    alert('Data published successfully.');

    location.reload();



}