console.log('Script loaded successfully');

function toggleForms(formType) {
    if (formType === 'signup') {
        document.querySelector('.login_box').style.display = 'none';
        document.querySelector('.sign_box').style.display = 'block';
    } else if (formType === 'login') {
        document.querySelector('.login_box').style.display = 'block';
        document.querySelector('.sign_box').style.display = 'none';
    }
}

function validateLogin() {
    var email = document.getElementById('login_email').value;
    var password = document.getElementById('login_password').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit');
        return false;
    }

    alert('Login successful!');
    window.close();
    return true;
}

function validateSignup() {
    var email = document.getElementById('signup_email').value;
    var password = document.getElementById('signup_password').value;
    var confirmPassword = document.getElementById('signup_confirm_password').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    alert('Account created successfully!');
    showLoginForm();
    return true;
}
function showLoginForm() {
    document.querySelector('.login_box').style.display = 'block';
    document.querySelector('.sign_box').style.display = 'none';
}