

// Pseudocodigo
// *crear los estilos de background y color en css
// *crear dos constantes en el archivo de js osea main:
//  una clase para body y otra para button o sea la clase toggleDarkMode
// *en la clase creada para el button toggleDarkMode escuche el evento para encender y pagar

// const toggleDarkMode = document.querySelector(".toggleDarkMode");
// const body = document.querySelector("body");

// toggleDarkMode.addEventListener("click", e =>{
//     body.classList.toggle("roomDarkMode");
// });



// const toggleDarkMode = document.querySelector('iconMoon');
// const body = document.querySelector('body');

// load();

// toggleDarkMode.addEventListener('click', e =>{
//     body.classList.toggle('roomDarkMode');
//     store(body.classList.contains('roomDarkMode'));
// });

// function load(){
//     const roomDarkMode = localStorage.getItem('roomDarkMode');

//     if(!roomDarkMode){
//         store('false');
//     }
//     else if(roomDarkMode == 'true'){
//             body.classList.add('roomDarkMode');
//         }
//     }

// function store(valor){
//     localStorage.setItem('roomDarkMode', valor);

// }




// Form "SIgn in"

document.addEventListener('DOMContentLoaded', function() {
    const formSignIn = document.querySelector('.formSignIn');
    const emailInput = document.getElementById('floatingInput');
    const passwordInput = document.getElementById('floatingPassword');

    formSignIn.addEventListener('submit', function(e) {
        // Validar el campo de correo electrónico
        if (!validateEmail(emailInput.value)) {
            alert('Por favor, ingresa una dirección de correo electrónico válida.');
            e.preventDefault(); // Evitar el envío del formulario
            return;
        }

        // Validar el campo de contraseña (puedes agregar tus propias reglas aquí)
        if (passwordInput.value.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            e.preventDefault(); // Evitar el envío del formulario
        }
    });

    // Función para validar un correo electrónico
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

});


// Form Create Account

document.addEventListener('DOMContentLoaded', function() {
    const formCreateAccount = document.querySelector('.formCreateAccount');
    const firstNameInput = document.querySelector('input[placeholder="Enter your first name"]');
    const lastNameInput = document.querySelector('input[placeholder="Enter your last name"]');
    const emailInput = document.querySelector('input[placeholder="Enter your Email"]');
    const passwordInput = document.getElementById('floatingPassword');

    formCreateAccount.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar el envío por defecto del formulario

        // Validar los campos del formulario
        if (!validateName(firstNameInput.value, "First name")) {
            alert('Por favor, ingresa un nombre válido.');
            return;
        }

        if (!validateName(lastNameInput.value, "Last name")) {
            alert('Por favor, ingresa un apellido válido.');
            return;
        }

        if (!validateEmail(emailInput.value)) {
            alert('Por favor, ingresa una dirección de correo electrónico válida.');
            return;
        }

        if (!validatePassword(passwordInput.value)) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        // Procesar los datos del formulario
        alert('¡Cuenta creada exitosamente!');
        formCreateAccount.reset(); // Limpiar el formulario después del envío
    });

    // Función para validar un nombre
    const validateName = (name, fieldName) => {
        // Validar que el nombre no esté vacío y contenga solo letras y espacios
        const namePattern = /^[A-Za-z\s]+$/;
        if (namePattern.test(name)) {
            return true;
        } else {
            alert(`Por favor, ingresa un ${fieldName} válido.`);
            return false;
        }
    };

    // Función para validar un correo electrónico
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Función para validar una contraseña
    const validatePassword = (password) => {
        return password.length >= 6;
    };
});
