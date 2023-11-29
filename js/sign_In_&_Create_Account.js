// // Form "SIgn in"

// document.addEventListener('DOMContentLoaded', function() {
//     const formSignIn = document.querySelector('.formSignIn');
//     const emailInput = document.getElementById('floatingInput');
//     const passwordInput = document.getElementById('floatingPassword');

//     formSignIn.addEventListener('submit', function(e) {

//         if (!validateEmail(emailInput.value)) {
//             alert('Por favor, ingresa una dirección de correo electrónico válida.');
//             e.preventDefault();
//             return;
//         }

//         if (passwordInput.value.length < 6) {
//             alert('La contraseña debe tener al menos 6 caracteres.');
//             e.preventDefault();
//         }
//     });

//     const validateEmail = (email) => {
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailPattern.test(email);
//     };

// });


// // Form Create Account

// document.addEventListener('DOMContentLoaded', function() {
//     const formCreateAccount = document.querySelector('.formCreateAccount');
//     const firstNameInput = document.querySelector('input[placeholder="Enter your first name"]');
//     const lastNameInput = document.querySelector('input[placeholder="Enter your last name"]');
//     const emailInput = document.querySelector('input[placeholder="Enter your Email"]');
//     const passwordInput = document.getElementById('floatingPassword');

//     formCreateAccount.addEventListener('submit', function(e) {
//         e.preventDefault();

//         if (!validateName(firstNameInput.value, "First name")) {
//             alert('Por favor, ingresa un nombre válido.');
//             return;
//         }

//         if (!validateName(lastNameInput.value, "Last name")) {
//             alert('Por favor, ingresa un apellido válido.');
//             return;
//         }

//         if (!validateEmail(emailInput.value)) {
//             alert('Por favor, ingresa una dirección de correo electrónico válida.');
//             return;
//         }

//         if (!validatePassword(passwordInput.value)) {
//             alert('La contraseña debe tener al menos 6 caracteres.');
//             return;
//         }


//         alert('¡Cuenta creada exitosamente!');
//         formCreateAccount.reset();
//     });

//     const validateName = (name, fieldName) => {
//         const namePattern = /^[A-Za-z\s]+$/;
//         if (namePattern.test(name)) {
//             return true;
//         } else {
//             alert(`Por favor, ingresa un ${fieldName} válido.`);
//             return false;
//         }
//     };

//     const validateEmail = (email) => {
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailPattern.test(email);
//     };

//     const validatePassword = (password) => {
//         return password.length >= 6;
//     };
// });


