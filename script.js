// const form = document.getElementById('register-form');
// const userName = document.getElementById('username');
// const email = document.getElementById('email');
// const password1 = document.getElementById('password1');
// const password2 = document.getElementById('password2');

// function checkRequired(inputArr) {
//     inputArr.forEach(formField => {
//         if (formField.value.trim() === '') {
//             showError(formField, `${capitalizeFieldName(formField.id)} is required`);
//         } else {
//             showSuccess(formField);
//         }
//     })
// }

// function checkEmail(input) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (re.test(input.value.trim())) {
//         showSuccess(input);
//     } else {
//         showError(input, 'Email is not valid');
//     }
// }

// function checkPassword(input1, input2) {
//     const pass1 = input1.value.trim();
//     const pass2 = input2.value.trim();
//     if (pass1 !== pass2) {
//         showError(input2, 'Password do not match');
//     }
// }

// function capitalizeFieldName(fieldName) {
//     return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
// }

// function showError(formField, message) {
//     const formControl = formField.parentElement;
//     formControl.className = 'form-control error';
//     const hint = formControl.querySelector('small');
//     hint.innerText = message;
// }

// function showSuccess(formField) {
//     const formControl = formField.parentElement;
//     formControl.className = 'form-control success';
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     checkRequired([userName, email, password1, password2]);
//     checkEmail(email);
//     checkPassword(password1, password2);
// });

const form = document.querySelector('.register-form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

function checkRequired(formArr) {
    formArr.forEach(formField => {
        if(!formField.value.trim()) {
            showError(formField, `${getFieldName(formField)} is required`);
        } else {
            showSuccess(formField);
        }
    })
}

function showError(formField, error) {
    const formControl = formField.parentElement;
    formControl.className = 'form-control error';
    const hint = formControl.querySelector('small');
    hint.innerText = error;
}

function showSuccess(formField) {
    const formControl = formField.parentElement;
    formControl.className = 'form-control success';
}



function getFieldName(formField) {
    const name = formField.id;
    return name.charAt(0).toUpperCase() + name.slice(1);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([userName, email, password1, password2]);
});