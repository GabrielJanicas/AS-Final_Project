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

const districtData = {
    "Aveiro": {
        "air_pollution": 20,
        "sound_pollution": 30
    },
    "Braga": {
        "air_pollution": 30,
        "sound_pollution": 40
    },
    "Coimbra": {
        "air_pollution": 40,
        "sound_pollution": 50
    },
    "Lisboa": {
        "air_pollution": 50,
        "sound_pollution": 60
    },
    "Porto": {
        "air_pollution": 60,
        "sound_pollution": 70
    },
    "Setúbal": {
        "air_pollution": 70,
        "sound_pollution": 80
    },
    "Viana do Castelo": {
        "air_pollution": 80,
        "sound_pollution": 90
    },
    "Vila Real": {
        "air_pollution": 90,
        "sound_pollution": 100
    },
    "Viseu": {
        "air_pollution": 100,
        "sound_pollution": 110
    },
    "Faro": {
        "air_pollution": 110,
        "sound_pollution": 120
    },
    "Beja": {
        "air_pollution": 120,
        "sound_pollution": 130
    },
    "Bragança": {
        "air_pollution": 130,
        "sound_pollution": 140
    },
    "Castelo Branco": {
        "air_pollution": 140,
        "sound_pollution": 150
    },
    "Évora": {
        "air_pollution": 150,
        "sound_pollution": 160
    },
    "Guarda": {
        "air_pollution": 160,
        "sound_pollution": 170
    },
    "Leiria": {
        "air_pollution": 170,
        "sound_pollution": 180
    },
    "Portalegre": {
        "air_pollution": 180,
        "sound_pollution": 190
    },
    "Santarém": {
        "air_pollution": 190,
        "sound_pollution": 200
    },
    "Açores": {
        "air_pollution": 200,
        "sound_pollution": 210
    },
    "Madeira": {
        "air_pollution": 210,
        "sound_pollution": 220
    }
};

function sendData(distrito) {
    document.getElementById('distrito').innerHTML = distrito;
    document.getElementById('o3').innerHTML = 'O3: ' + districtData[distrito].air_pollution;
    document.getElementById('no2').innerHTML = 'NO2: ' + districtData[distrito].air_pollution;
    document.getElementById('pm10').innerHTML = 'PM10: ' + districtData[distrito].air_pollution;
    document.getElementById('airQuality').innerHTML = 'Air quality: ' + districtData[distrito].air_pollution;

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