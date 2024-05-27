function login() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const nameError = document.getElementById('name-error');
    const passwordError = document.getElementById('password-error');
    

    nameError.textContent = '';
    passwordError.textContent = '';
    

    let hasError = false;

    if (!password) {
        passwordError.textContent = 'Please enter your password.';
        hasError = true;
    }

    if (!name) {
        nameError.textContent = 'Please enter your name.';
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.name === name && user.password === password);

    if (user) {
        localStorage.setItem('userType', user.type);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userPassword', user.password);
        localStorage.setItem('userEmail', user.email);

        window.location.href = 'index.html';
    } else {
        alert('Invalid name or password.');
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
    }
}

// Function to redirect user based on their type
function redirectToUserPage(userType) {
    if (userType === 'free') {
        window.location.href = 'free.html';
    } else if (userType === 'premium') {
        window.location.href = 'premium.html';
    }
}


const localStorageItems = { ...localStorage };
console.log(localStorageItems);