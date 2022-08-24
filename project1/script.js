
const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('Password2');

// All Functions
// Function to show error
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Function to check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(input.value.trim()) ) {
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid email`)
    }
}

// Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if ( input.value === '' ) {
            console.log(input.id);
            showError(input,`${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Function to check length of input field
function checkLength(input, min, max) {
    if ( input.value.length < min ) {
        showError(input,`${getFieldId(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input,`${getFieldId(input)} needs to be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Function to check if password and confirm password match
function checkPasswordsMatch(input1, input2) {
    if ( input1.value !== input2.value ) {
        showError(input2,"Passwords don't match")
    }
}

// Function to get the id of the input field with proper case
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// This is an event listener for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([Username,Email,Password,Password2]);
    checkLength(Username,3,10);
    checkLength(Password,6,30);
    checkEmail(Email);
    checkPasswordsMatch(Password,Password2);

})
