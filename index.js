// get handles
let pass1 = document.querySelector('.pass1');
let pass2 = document.querySelector('.pass2');
let signUpBtn = document.querySelector('.btn');

function validatePass() {
    let pass1Value = pass1.value;
    let pass2Value = pass2.value;
    if (pass1Value !== pass2Value) {
        alert('Password doesn\'t match');
    };
};

const strongPass = () => {
    if (pass1.value.length < 8) {
        alert('Password must be atleast 8 character long.');
    };
};

pass2.addEventListener('change', validatePass);
pass1.addEventListener('change', strongPass);