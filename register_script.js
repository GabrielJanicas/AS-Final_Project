function registerUser() {
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const nameError = document.getElementById('name-error');
    const passwordError = document.getElementById('password-error');
    const emailError = document.getElementById('email-error');
    const confirmPasswordError = document.getElementById('confirmPassword-error');

    nameError.textContent = '';
    passwordError.textContent = '';
    emailError.textContent = '';
    confirmPasswordError.textContent = '';

    let hasError = false;

    if (!password) {
        passwordError.textContent = 'Please enter your password.';
        hasError = true;
    }

    if (!name) {
        nameError.textContent = 'Please enter your name.';
        hasError = true;
    }

    if (!email) {
        emailError.textContent = 'Please enter your email.';
        hasError = true;
    }

    if (!confirmPassword) {
        confirmPasswordError.textContent = 'Please confirm your password.';
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Create user object
    const user = {
        name: name,
        email: email,
        password: password,
        type: 'free'
    };

    // Check if user already exists
    if (nameExists(name) && emailExists(email)) {
        console.log('Name and Email already exists.');
        alert('Name and Email already exists.');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        return;

    } else if (nameExists(name)) {
        console.log('Name already exists.');
        alert('Name already exists.');
        document.getElementById('name').value = '';
        return;

    } else if (emailExists(email)) {
        console.log('Email already exists.');
        alert('Email already exists.');
        document.getElementById('email').value = '';
        return;
    }

    console.log("nameExists: " + nameExists(name));
    console.log(user);

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the list
    users.push(user);

    // Store updated users list in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect user to login page
    alert('User registered successfully.');

    window.location.href = 'login.html';
}

function nameExists(name) {
    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if any user has the same name
    return users.some(user => user.name === name);
}

function emailExists(email) {
    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if any user has the same email
    return users.some(user => user.email === email);
}



const localStorageItems = { ...localStorage };
console.log(localStorageItems);