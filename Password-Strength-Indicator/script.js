var pass = document.getElementById('password');
var msg = document.getElementById('message');
var sgt = document.getElementById('strength');
var togglePass = document.getElementById('togglePassword');

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    var strength = 0;
    if (pass.value.length >= 8) strength++;
    if (/[A-Z]/.test(pass.value)) strength++;
    if (/[a-z]/.test(pass.value)) strength++;
    if (/[0-9]/.test(pass.value)) strength++;
    if (/[\W_]/.test(pass.value)) strength++; 

    if (strength <= 2) {
        sgt.innerHTML = "Weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (strength === 3 || strength === 4) {
        sgt.innerHTML = "Medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (strength === 5) {
        sgt.innerHTML = "Strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});

togglePass.addEventListener('change', () => {
    if (togglePass.checked) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
});