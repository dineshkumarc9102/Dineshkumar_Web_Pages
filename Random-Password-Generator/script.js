const passwordInput = document.getElementById("pass");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_-~`+=}{[]:;><.?/|\,";

const allChars = upperCase + lowerCase + numbers + symbols;

function createpass() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordInput.value = password;
}

function copypass() {
    passwordInput.select();
    navigator.clipboard.writeText(passwordInput.value).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy password: ", err);
    });
}


