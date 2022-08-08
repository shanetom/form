const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipValue = zip.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    checkEmail(emailValue);
    checkCountry(countryValue);
    checkZip(zipValue);
    checkPassword(passwordValue, password2Value);
}

function checkEmail(emailValue) {
    if (emailValue !== '' && isEmail(emailValue)) {
        setSuccessFor(email)
    } else {
        setErrorFor(email, 'Please enter a valid email');
    }
}

function checkCountry(countryValue) {
    if (countryValue === '') {
        setErrorFor(country, 'Please enter a country');
    } else {
        setSuccessFor(country);
    }
}

function checkZip(zipValue) {
    if (zipValue === '') {
        setErrorFor(zip, 'Please enter a zip code');
    } else {
        setSuccessFor(zip);
    }
}

function checkPassword(passwordValue, password2Value) {
     if (passwordValue === password2Value) {
        setSuccessFor(password);
        setSuccessFor(password2);
     } 

     if (passwordValue !== password2Value) {
        setErrorFor(password, '');
        setErrorFor(password2, 'Passwords do not match');
     }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
