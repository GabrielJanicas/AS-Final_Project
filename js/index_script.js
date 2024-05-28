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

function sendData(val1) {
    document.getElementById('distrito').innerHTML = val1;
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