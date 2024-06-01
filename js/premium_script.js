function toggleAreas(activeBtnId, inactiveBtnId) {
    var activeBtn = document.getElementById(activeBtnId);
    var inactiveBtn = document.getElementById(inactiveBtnId);

    inactiveBtn.style.backgroundColor = 'lightgray';
    

    // Desativa o botão inativo
    activeBtn.style.backgroundColor = 'white';
    

    
}


document.addEventListener('DOMContentLoaded', function() {
    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('userName');

    console.log("type: " + userType);
    console.log("name: " + userName);

    if(userType === null){
        window.location.href = 'login.html';
    
    }else if(userType === 'free'){
        document.getElementById('premium').style.display = 'none';

        document.getElementById('name_navbar').textContent = userName;
        //document.getElementById('account').setAttribute('href', 'profile.html');
        document.getElementById('account').setAttribute('href', 'profile.html');
        
    }else if(userType === 'premium'){
        name_navbar.textContent = userName;
        document.getElementById('account').setAttribute('href', 'profile.html');

        document.getElementById('free').style.display = 'none';
        
    }
});

