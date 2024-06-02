const districtData = {
    "Aveiro": {
        "PM10": 22,
        "N02": 3,
        "O3": 35,
        "air_pollution": 20,
        "traffic_noise": 15,
        "industrial_noise": 10,
        "noise_pollution": 25
    },
    "Braga": {
        "PM10": 6,
        "N02": 1,
        "O3": 27,
        "air_pollution": 57,
        "traffic_noise": 20,
        "industrial_noise": 10,
        "noise_pollution": 30
    },
    "Coimbra": {
        "PM10": 10,
        "N02": 5,
        "O3": 40,
        "air_pollution": 45,
        "traffic_noise": 25,
        "industrial_noise": 15,
        "noise_pollution": 40
    },
    "Lisboa": {
        "PM10": 20,
        "N02": 5,
        "O3": 49,
        "air_pollution": 152,
        "traffic_noise": 70,
        "industrial_noise": 30,
        "noise_pollution": 100
    },
    "Porto": {
        "PM10": 20,
        "N02": 7,
        "O3": 35,
        "air_pollution": 140,
        "traffic_noise": 75,
        "industrial_noise": 30,
        "noise_pollution": 105
    },
    "Setúbal": {
        "PM10": 25,
        "N02": 1,
        "O3": 31,
        "air_pollution": 128,
        "traffic_noise": 30,
        "industrial_noise": 20,
        "noise_pollution": 50
    },
    "Viana do Castelo": {
        "PM10": 6,
        "N02": 1,
        "O3": 39,
        "air_pollution": 30,
        "traffic_noise": 35,
        "industrial_noise": 15,
        "noise_pollution": 50
    },
    "Vila Real": {
        "PM10": 10,
        "N02": 2,
        "O3": 39,
        "air_pollution": 32,
        "traffic_noise": 40,
        "industrial_noise": 15,
        "noise_pollution": 55
    },
    "Viseu": {
        "PM10": 11,
        "N02": 4,
        "O3": 29,
        "air_pollution": 28,
        "traffic_noise": 45,
        "industrial_noise": 15,
        "noise_pollution": 60
    },
    "Faro": {
        "PM10": 21,
        "N02": 1,
        "O3": 33,
        "air_pollution": 110,
        "traffic_noise": 80,
        "industrial_noise": 30,
        "noise_pollution": 110
    },
    "Beja": {
        "PM10": 18,
        "N02": 2,
        "O3": 32,
        "air_pollution": 88,
        "traffic_noise": 30,
        "industrial_noise": 15,
        "noise_pollution": 45
    },
    "Bragança": {
        "PM10": 5,
        "N02": 1,
        "O3": 41,
        "air_pollution": 47,
        "traffic_noise": 35,
        "industrial_noise": 10,
        "noise_pollution": 45
    },
    "Castelo Branco": {
        "PM10": 10,
        "N02": 1,
        "O3": 44,
        "air_pollution": 62,
        "traffic_noise": 40,
        "industrial_noise": 10,
        "noise_pollution": 50
    },
    "Évora": {
        "PM10": 10,
        "N02": 2,
        "O3": 22,
        "air_pollution": 44,
        "traffic_noise": 45,
        "industrial_noise": 10,
        "noise_pollution": 55
    },
    "Guarda": {
        "PM10": 5,
        "N02": 5,
        "O3": 30,
        "air_pollution": 48,
        "traffic_noise": 50,
        "industrial_noise": 10,
        "noise_pollution": 60
    },
    "Leiria": {
        "PM10": 12,
        "N02": 6,
        "O3": 40,
        "air_pollution": 75,
        "traffic_noise": 55,
        "industrial_noise": 10,
        "noise_pollution": 65
    },
    "Portalegre": {
        "PM10": 10,
        "N02": 2,
        "O3": 19,
        "air_pollution": 50,
        "traffic_noise": 60,
        "industrial_noise": 10,
        "noise_pollution": 70
    },
    "Santarém": {
        "PM10": 10,
        "N02": 2,
        "O3": 22,
        "air_pollution": 65,
        "traffic_noise": 65,
        "industrial_noise": 10,
        "noise_pollution": 75
    },
    "Açores": {
        "PM10": 3,
        "N02": 1,
        "O3": 20,
        "air_pollution": 20,
        "traffic_noise": 70,
        "industrial_noise": 10,
        "noise_pollution": 80
    },
    "Madeira": {
        "PM10": 10,
        "N02": 1,
        "O3": 21,
        "air_pollution": 21,
        "traffic_noise": 75,
        "industrial_noise": 10,
        "noise_pollution": 85
    }
};


function toggleButtons(activeBtnId, inactiveBtnId) {
    var activeBtn = document.getElementById(activeBtnId);
    var inactiveBtn = document.getElementById(inactiveBtnId);


    // Ativa o botão ativo
    
    activeBtn.classList.add('btn-success'); // Cor "ativada"

    if(activeBtnId == 'airPollutionBtn'){
        
        document.getElementById('air_pollution').style.display = 'block';
        document.getElementById('noise_pollution').style.display = 'none'; 

        document.getElementById('air_quality').style.display = 'block';
        document.getElementById('noise_quality').style.display = 'none';

        
    }else{

        document.getElementById('air_pollution').style.display = 'none';
        document.getElementById('noise_pollution').style.display = 'block';

        document.getElementById('air_quality').style.display = 'none';
        document.getElementById('noise_quality').style.display = 'block';
    }
    // Desativa o botão inativo
    activeBtn.disabled = true;
    inactiveBtn.disabled = false;

    inactiveBtn.classList.remove('btn-success'); // Cor "ativada"
    inactiveBtn.classList.add('btn-secondary');

}



function sendData(distrito) {
    
    document.getElementById('distrito').innerHTML = distrito;

    if(document.getElementById('air_pollution').style.display == 'none'){
        
        document.getElementById('data1').innerHTML = 'Traffic noise: ' + districtData[distrito].traffic_noise + 'dB';
        document.getElementById('data2').innerHTML = 'Industrial noise: ' + districtData[distrito].industrial_noise + 'dB';
        document.getElementById('data3').innerHTML = 'Noise pollution: ' + districtData[distrito].noise_pollution;

        document.getElementById('data4').innerHTML = '';
            
    }else{
        document.getElementById('data1').innerHTML = 'O3: ' + districtData[distrito].O3 + ' (ug/m3)';
        document.getElementById('data2').innerHTML = 'NO2: ' + districtData[distrito].N02 + ' (ug/m3)';
        document.getElementById('data3').innerHTML = 'PM10: ' + districtData[distrito].PM10 + ' (ug/m3)';
        document.getElementById('data4').innerHTML = 'Air quality: ' + districtData[distrito].air_pollution;
    }
}




document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('noise_pollution').style.display = 'none';

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

    const pollutionType = document.getElementById('pollutionType').value;

    number_error.textContent = '';

    let hasError = false;

    if (!number) {
        number_error.textContent = 'Please enter a number.';
        hasError = true;

    }else if (number < 0 || number > 150) {

        if(pollutionType === 'air' && number > 500){
            number_error.textContent = 'Please enter a number between 0 and 500.';
        }else{
            number_error.textContent = 'Please enter a number between 0 and 150.';
        }
        
        hasError = true;
    }

    if (hasError) {
        return;
    }


    alert('Data published successfully.');

    location.reload();



}


function updateRange() {
    const pollutionType = document.getElementById('pollutionType').value;
    const pollutionLevel = document.getElementById('pollutionLevel');

    

    if (pollutionType === 'air') {
        document.getElementById('level_pollution').innerHTML = 'Level of polution (0 - 500):';
        pollutionLevel.max = 500;
    } else if (pollutionType === 'noise') {
        document.getElementById('level_pollution').innerHTML = 'Level of polution (0 - 150):';
        pollutionLevel.max = 150;
    }

    
    
}