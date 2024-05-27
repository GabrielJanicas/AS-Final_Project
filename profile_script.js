function logOut() {
    localStorage.removeItem('userType');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('userEmail');
    
    location.reload();
}


function premium() {
    
    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('userName');
    const userPassword = localStorage.getItem('userPassword');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = users.find(user => user.name === userName && user.password === userPassword);

    if(userType === 'premium'){

        localStorage.setItem('userType', 'free');

        
    
        user.userType = 'free';
    
        // Salva a lista de usuários atualizada de volta no localStorage
        localStorage.setItem('users', JSON.stringify(users));

    }else{
        localStorage.setItem('userType', 'premium');


        user.userType = 'premium';

        // Salva a lista de usuários atualizada de volta no localStorage
        localStorage.setItem('users', JSON.stringify(users));
    }

    location.reload();
}


function userPage() {
    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('userName');
    const userPassword = localStorage.getItem('userPassword');
    const userEmail = localStorage.getItem('userEmail');
    

    console.log("type: " + userType);
    console.log("name: " + userName);
    console.log("password: " + userPassword);
    console.log("email: " + userEmail);

    
    
    

    if (userType === null) {
        // Hide both free and premium content for anonymous users
       
        document.getElementById('login').style.display = 'none';
        
    } else{

        if (userType === 'premium') {
            // Hide premium content for free users
            document.getElementById('premium').textContent = "Remove premium";
            document.getElementById('premium_text').textContent = "You will lose access to  all the data collected and the analysis is not that precise.";
            document.getElementById('premium_confirm').textContent = "Confirm";
            document.getElementById('premium_confirm').backgroundColor = "red";
            
        }else{
            document.getElementById('premium').textContent = "Buy premium";
            document.getElementById('premium_text').textContent = "Premium grants access to  all the data collected, so the analysis is more precise.";
            document.getElementById('premium_confirm').textContent = "Make Payment";
        }

        document.getElementById('user_name').textContent = userName;
        document.getElementById('firstletter').textContent = userName.charAt(0).toUpperCase();
        document.getElementById('email').textContent = userEmail;
        document.getElementById('name').textContent = userName;
        document.getElementById('password').textContent = userPassword;
        document.getElementById('type').textContent = userType;


        document.getElementById('name_navbar').textContent = userName;
        
        document.getElementById('account').setAttribute('href', 'profile.html');
    }
     
}