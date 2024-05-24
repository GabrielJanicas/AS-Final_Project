function toggleButtons(activeBtnId, inactiveBtnId) {
    var activeBtn = document.getElementById(activeBtnId);
    var inactiveBtn = document.getElementById(inactiveBtnId);

    // Ativa o botão ativo
    
    activeBtn.classList.add('btn-success'); // Cor "ativada"

    // Desativa o botão inativo
    inactiveBtn.classList.remove('btn-success'); // Cor "ativada"
    inactiveBtn.classList.add('btn-secondary');

}


function userPage() {
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
}