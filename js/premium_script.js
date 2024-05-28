function toggleAreas(activeBtnId, inactiveBtnId) {
    var activeBtn = document.getElementById(activeBtnId);
    var inactiveBtn = document.getElementById(inactiveBtnId);

    inactiveBtn.style.backgroundColor = 'lightgray';
    

    // Desativa o botão inativo
    activeBtn.style.backgroundColor = 'white';
    

    
}


document.addEventListener('DOMContentLoaded', function() {
    const userType = localStorage.getItem('userType');

    console.log("type: " + userType);

    if(userType === null){
        window.location.href = 'login.html';
    }
});

