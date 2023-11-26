

// // // Pseudocodigo
// // // *crear los estilos de background y color en css
// // // *crear dos constantes en el archivo de js osea main:
// // //  una clase para body y otra para button o sea la clase toggleDarkMode
// // // *en la clase creada para el button toggleDarkMode escuche el evento para encender y pagar

// // // const toggleDarkMode = document.querySelector(".toggleDarkMode");
// // // const body = document.querySelector("body");

// // // toggleDarkMode.addEventListener("click", e =>{
// // //     body.classList.toggle("roomDarkMode");
// // // });



// // // const toggleDarkMode = document.querySelector('iconMoon');
// // // const body = document.querySelector('body');

// // // load();

// // // toggleDarkMode.addEventListener('click', e =>{
// // //     body.classList.toggle('roomDarkMode');
// // //     store(body.classList.contains('roomDarkMode'));
// // // });

// // // function load(){
// // //     const roomDarkMode = localStorage.getItem('roomDarkMode');

// // //     if(!roomDarkMode){
// // //         store('false');
// // //     }
// // //     else if(roomDarkMode == 'true'){
// // //             body.classList.add('roomDarkMode');
// // //         }
// // //     }

// // // function store(valor){
// // //     localStorage.setItem('roomDarkMode', valor);

// // // }




// // // Form "SIgn in"

// // document.addEventListener('DOMContentLoaded', function() {
// //     const formSignIn = document.querySelector('.formSignIn');
// //     const emailInput = document.getElementById('floatingInput');
// //     const passwordInput = document.getElementById('floatingPassword');

// //     formSignIn.addEventListener('submit', function(e) {
// //         // Validar el campo de correo electrónico
// //         if (!validateEmail(emailInput.value)) {
// //             alert('Por favor, ingresa una dirección de correo electrónico válida.');
// //             e.preventDefault(); // Evitar el envío del formulario
// //             return;
// //         }

// //         // Validar el campo de contraseña (puedes agregar tus propias reglas aquí)
// //         if (passwordInput.value.length < 6) {
// //             alert('La contraseña debe tener al menos 6 caracteres.');
// //             e.preventDefault(); // Evitar el envío del formulario
// //         }
// //     });

// //     // Función para validar un correo electrónico
// //     const validateEmail = (email) => {
// //         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         return emailPattern.test(email);
// //     };

// // });


// // // Form Create Account

// // document.addEventListener('DOMContentLoaded', function() {
// //     const formCreateAccount = document.querySelector('.formCreateAccount');
// //     const firstNameInput = document.querySelector('input[placeholder="Enter your first name"]');
// //     const lastNameInput = document.querySelector('input[placeholder="Enter your last name"]');
// //     const emailInput = document.querySelector('input[placeholder="Enter your Email"]');
// //     const passwordInput = document.getElementById('floatingPassword');

// //     formCreateAccount.addEventListener('submit', function(e) {
// //         e.preventDefault(); // Evitar el envío por defecto del formulario

// //         // Validar los campos del formulario
// //         if (!validateName(firstNameInput.value, "First name")) {
// //             alert('Por favor, ingresa un nombre válido.');
// //             return;
// //         }

// //         if (!validateName(lastNameInput.value, "Last name")) {
// //             alert('Por favor, ingresa un apellido válido.');
// //             return;
// //         }

// //         if (!validateEmail(emailInput.value)) {
// //             alert('Por favor, ingresa una dirección de correo electrónico válida.');
// //             return;
// //         }

// //         if (!validatePassword(passwordInput.value)) {
// //             alert('La contraseña debe tener al menos 6 caracteres.');
// //             return;
// //         }

// //         // Procesar los datos del formulario
// //         alert('¡Cuenta creada exitosamente!');
// //         formCreateAccount.reset(); // Limpiar el formulario después del envío
// //     });

// //     // Función para validar un nombre
// //     const validateName = (name, fieldName) => {
// //         // Validar que el nombre no esté vacío y contenga solo letras y espacios
// //         const namePattern = /^[A-Za-z\s]+$/;
// //         if (namePattern.test(name)) {
// //             return true;
// //         } else {
// //             alert(`Por favor, ingresa un ${fieldName} válido.`);
// //             return false;
// //         }
// //     };

// //     // Función para validar un correo electrónico
// //     const validateEmail = (email) => {
// //         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         return emailPattern.test(email);
// //     };

// //     // Función para validar una contraseña
// //     const validatePassword = (password) => {
// //         return password.length >= 6;
// //     };
// // });




// /******************************* Break a leg JS files ******************************/


// /******************** STORE & LOCAL STORAGE *********************/

// // console.log("Script loaded: store.js");


// const outfits = [
//     {
//         "id": 1,
//         "category": "Xtreme",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 499,
//         "image": "../img/pic1.webp"
//     },
//     {
//         "id": 2,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 599,
//         "image": "../img/pic2.webp"
//     },
//     {
//         "id": 3,
//         "category": "Street",
//         "stock": 0,
//         "availability": "Sold-out",
//         "pricing": 999,
//         "image": "../img/pic5.webp"
//     },
//     {
//         "id": 4,
//         "category": "Xtreme",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 599,
//         "image": "img/pic6.webp"
//     },
//     {
//         "id": 5,
//         "category": "Street",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 499,
//         "image": "img/pic37.webp"
//     },
//     {
//         "id": 6,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 499,
//         "image": "img/pic8.webp"
//     },
//     {
//         "id": 7,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 599,
//         "image": "img/pic38.webp"
//     },
//     {
//         "id": 8,
//         "category": "Street",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 599,
//         "image": "img/pic11.webp"
//     },
//     {
//         "id": 9,
//         "category": "Aggressive",
//         "stock": 0,
//         "availability": "Sold-out",
//         "pricing": 999,
//         "image": "img/pic13.webp"
//     },
//     {
//         "id": 10,
//         "category": "Xtreme",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 999,
//         "image": "img/pic14.webp"
//     },
//     {
//         "id": 11,
//         "category": "Street",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 599,
//         "image": "img/pic15.webp"
//     },
//     {
//         "id": 12,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 499,
//         "image": "img/pic16.webp"
//     },
//     {
//         "id": 13,
//         "category": "Xtreme",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 499,
//         "image": "img/pic17.webp"
//     },
//     {
//         "id": 14,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 999,
//         "image": "img/pic18.webp"
//     },
//     {
//         "id": 15,
//         "category": "Street",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 999,
//         "image": "img/pic20.webp"
//     },
//     {
//         "id": 16,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 499,
//         "image": "img/pic22.webp"
//     },
//     {
//         "id": 17,
//         "category": "Street",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 599,
//         "image": "img/pic23.webp"
//     },
//     {
//         "id": 18,
//         "category": "Xtreme",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 999,
//         "image": "img/pic24.webp"
//     },
//     {
//         "id": 19,
//         "category": "Aggressive",
//         "stock": 0,
//         "availability": "Sold-out",
//         "pricing": 499,
//         "image": "img/pic25.webp"
//     },
//     {
//         "id": 20,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 499,
//         "image": "img/pic28.webp"
//     },
//     {
//         "id": 21,
//         "category": "Street",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 599,
//         "image": "img/pic29.webp"
//     },
//     {
//         "id": 22,
//         "category": "Aggressive",
//         "stock": 0,
//         "availability": "Sold-out",
//         "pricing": 999,
//         "image": "img/pic38.webp"
//     },
//     {
//         "id": 23,
//         "category": "Xtreme",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 999,
//         "image": "img/pic31.webp"
//     },
//     {
//         "id": 24,
//         "category": "Street",
//         "stock": 5,
//         "availability": "Best Sellers",
//         "pricing": 499,
//         "image": "img/pic32.webp"
//     },
//     {
//         "id": 25,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 599,
//         "image": "img/pic33.webp"
//     },
//     {
//         "id": 26,
//         "category": "Street",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 999,
//         "image": "img/pic34.webp"
//     },
//     {
//         "id": 27,
//         "category": "Xtreme",
//         "stock": 0,
//         "availability": "Sold-out",
//         "pricing": 599,
//         "image": "img/pic35.webp"
//     },
//     {
//         "id": 28,
//         "category": "Aggressive",
//         "stock": 5,
//         "availability": "New Arrivals",
//         "pricing": 999,
//         "image": "img/pic36.webp"
//     }
// ]


// // Storage
// let cartProducts;
// let cartProductsLS = localStorage.getItem("cartProducts")
// if(cartProductsLS) {
//     cartProducts = JSON.parse(cartProductsLS)
// } else {
//     cartProducts = []
// }


// let addButton = document.querySelectorAll(".linkStore");
// let sectionCard = document.querySelector(".sectionCard");

// function renderProducts(outfitsArray) {
//     outfitsArray.forEach(outfit => {
//         // Verificar si el producto tiene un ID antes de intentar acceder a él
//         if (!outfit.id) {
//             console.error("El producto no tiene un ID válido:", outfit);
//             return;
//         }

//         const cart = document.createElement("article");
//         cart.classList.add("cardProducts");

//         // Modificación: No necesitas buscar el elemento padre aquí, ya tienes el ID en el objeto outfit
//         const outfitId = outfit.id;

//         const availabilityClass = outfit.availability === "Sold-out" || outfit.stock === 0 ? "sold-out" : "";

//         cart.innerHTML = `
//             <div class="article ${availabilityClass}">
//                 ${outfit.availability === "Sold-out" || outfit.stock === 0 ? '<p class="sold-out-label">Sold Out</p>' : ''}
//                 <img class="outFit" src="${outfit.image}" alt="Outfit Image">

//                 <div class="info">
//                     <img class="heartIcon" src="img/wishlist_Icon.svg" alt="Wishlist icon" >
//                     <p class="price">${outfit.category}.......... $${outfit.pricing}</p>
//                     <button class="linkStore" type="button" id="${outfitId}"> Add to cart </button>
//                 </div>
//             </div>
//         `;


//         sectionCard.appendChild(cart);


//     });

//     addToCartButton();

// }

// renderProducts(outfits);


// function addToCartButton() {
//     addButton = document.querySelectorAll(".linkStore");
//     addButton.forEach(button => {
//         button.onclick = (e) => {
//             const outfitId = e.currentTarget.id;
//             const selectedOutfit = outfits.find(outfit => outfit.id == outfitId);

//             // Verificar si el producto está agotado o tiene 0 unidades disponibles
//             if (selectedOutfit.stock === 0 || selectedOutfit.availability === "Sold-out") {
//                 alert("¡Este producto está agotado o no hay unidades disponibles!");
//                 return;
//             }

//             // Continuar con la lógica de agregar al carrito solo si no está agotado
//             agregarAlCarrito(selectedOutfit);
//         };
//     });

//     const heartIcons = document.querySelectorAll(".heartIcon");
//     heartIcons.forEach(icon => {
//         icon.addEventListener('click', (e) => {
//             console.log("Clic en el icono de corazón");

//             // Obtén el elemento padre con la clase .linkStore
//             const linkStoreElement = e.currentTarget.parentElement.querySelector(".linkStore");

//             // Asegurémonos de que el elemento exista y tenga un ID antes de intentar acceder a él
//             if (linkStoreElement && linkStoreElement.id) {
//                 const outfitId = linkStoreElement.id;
//                 console.log("ID del producto:", outfitId);

//                 // Asegurémonos de que estemos encontrando el producto en la lista de outfits
//                 const selectedOutfit = outfits.find(outfit => outfit.id == outfitId);
//                 console.log("Producto seleccionado:", selectedOutfit);

//                 // Intentemos agregar a la wishlist
//                 agregarAWishlist(selectedOutfit);
//             } else {
//                 console.error("No se pudo obtener el ID del producto.");
//             }
//         });
//     });
// }

// function agregarAlCarrito(selectedOutfit) {
//     const existingCartItem = cartProducts.find(item => item.id == selectedOutfit.id);

//     if (existingCartItem) {
//         // Si el producto ya está en el carrito, verifica si la cantidad es menor que 5 antes de agregar
//         if (existingCartItem.quantity < 5) {
//             existingCartItem.quantity++;
//         } else {
//             alert("¡No puedes agregar más de 5 unidades de un producto!");
//             return;
//         }
//     } else {
//         // Si el producto no está en el carrito, agrega uno nuevo
//         selectedOutfit.quantity = 1;
//         cartProducts.push(selectedOutfit);
//     }

//     console.log(cartProducts);
//     renderCart(cartProducts);

//     localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
// }



// /****************************** CART & LOCAL STORAGE ***************************/


// // console.log("Script loaded: cart.js");


// let cartStorage = localStorage.getItem("cartProducts");
// cartStorage = JSON.parse(cartStorage);

// let cartContainer = document.querySelector(".containerArticles");

// function renderCart(cartItems) {
//     cartContainer.innerHTML = "";
//     cartItems.forEach(cartItem => {
//         const cart = document.createElement("article");
//         cart.classList.add("cartList");
//         cart.setAttribute("data-product-id", cartItem.id);
//         cart.innerHTML =
//         `
//                             <img class="itemProduct" src="${cartItem.image}" alt="Product pic">
//                             <div class="description">
//                                 <p class="price"> $${cartItem.pricing} </p>
//                                 <div class="icons">
//                                     <img src="img/trash_Icon.svg" alt="Trash icon" class="delete-icon">
//                                     <img src="img/edit_Icon.svg" alt="Edit icon" class="edit-icon">
//                                 </div>
//                             </div>
//                             <div class="itemNumber">
//                                 <div class="counter">
//                                     <button class="minus-button">-</button>
//                                     <span class="counter-value">${cartItem.quantity}</span>
//                                     <button class="plus-button">+</button>
//                                 </div>
//                             </div>
//                             <p class="total">$${cartItem.pricing * cartItem.quantity}</p>
//         `;

//         cartContainer.appendChild(cart);

//         const counterValue = cart.querySelector(".counter-value");
//         const plusButton = cart.querySelector(".plus-button");
//         const minusButton = cart.querySelector(".minus-button");

//         plusButton.addEventListener('click', () => {
//             actualizarContador(cartItem, counterValue, 1);
//         });

//         minusButton.addEventListener('click', () => {
//             actualizarContador(cartItem, counterValue, -1);
//         });

//             const deleteIcon = cart.querySelector(".delete-icon");
//             deleteIcon.addEventListener('click', () => {
//                 eliminarDelCarrito(cartItem.id);
//             });
//         });

//             // Ahora, agrega un manejador de eventos en un nivel superior para los íconos de editar
//             const editIcons = document.querySelectorAll(".edit-icon");
//             editIcons.forEach(editIcon => {
//             editIcon.addEventListener('click', (e) => {
//             // Obtén el ID del producto desde el atributo data-product-id del contenedor del producto
//             const productId = e.currentTarget.closest(".cartList").getAttribute("data-product-id");
//             const showroomUrl = `showRoom.html?id=${productId}`;
//             window.location.href = showroomUrl;
//         });
//     });
// }


// renderCart(cartStorage);


// function actualizarContador(cartItem, counterElement, incremento) {
//     let contador = parseInt(counterElement.textContent);

//     // Verifica si la cantidad es mayor al límite de 5 unidades o menor al límite de 1 unidad
//     if ((contador + incremento) > 5 || (contador + incremento) < 1) {
//         if (contador + incremento > 5) {
//             alert(`¡No puedes agregar más de 5 unidades de un producto!`);
//         } else {
//             alert(`La cantidad mínima permitida es 1 unidad.`);
//         }
//         return;
//     }

//     // Actualiza el contador y el valor en el DOM
//     contador += incremento;
//     counterElement.textContent = contador;

//     // Actualiza la cantidad en el objeto cartItem
//     cartItem.quantity = contador;

//     // Actualiza el localStorage después de modificar la cantidad
//     localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

//     // Actualiza el total en el DOM
//     const totalElement = counterElement.closest(".cartList").querySelector(".total");
//     totalElement.textContent = `$${cartItem.pricing * contador}`;
// }


// // Función para eliminar un producto del carrito por su ID

// function eliminarDelCarrito(productId) {
//     // Encuentra el índice del producto con el ID proporcionado en el array cartProducts
//     const index = cartProducts.findIndex(product => product.id == productId);

//     // Si se encuentra el producto, elimínalo del array
//     if (index !== -1) {
//         cartProducts.splice(index, 1);
//         console.log("Producto eliminado del carrito:", productId);

//         // Actualiza el localStorage después de eliminar el producto
//         localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

//         // Vuelve a renderizar el carrito
//         renderCart(cartProducts);
//     } else {
//         console.log("Producto no encontrado en el carrito:", productId);
//     }
// }



// /*************************** FILTER & LOCAL STORAGE *****************************/


// // console.log("Script loaded: filter.js");


// // Obtén elementos del filtro
// const inStockCheckbox = document.getElementById("inStock");
// const newArrivalsCheckbox = document.getElementById("newArrivals");
// const soldOutCheckbox = document.getElementById("soldOut");

// const priceOneCheckbox = document.getElementById("priceOne");
// const priceTwoCheckbox = document.getElementById("priceTwo");
// const priceThreeCheckbox = document.getElementById("priceThree");

// // const resetButton = document.querySelector(".btnReset");

// // Manejadores de eventos para checkboxes
// inStockCheckbox.addEventListener("change", applyFilter);
// newArrivalsCheckbox.addEventListener("change", applyFilter);
// soldOutCheckbox.addEventListener("change", applyFilter);

// priceOneCheckbox.addEventListener("change", applyFilter);
// priceTwoCheckbox.addEventListener("change", applyFilter);
// priceThreeCheckbox.addEventListener("change", applyFilter);

// // Manejador de eventos para el botón de reinicio
// // resetButton.addEventListener("click", resetFilter);

// function applyFilter() {
//     // Filtra la lista de productos según los checkboxes seleccionados
//     const filteredProducts = outfits.filter(product => {
//         const isInStock = inStockCheckbox.checked ? product.stock > 0 : true;
//         const isNewArrival = newArrivalsCheckbox.checked ? product.availability === "New Arrivals" : true;
//         const isSoldOut = soldOutCheckbox.checked ? product.availability === "Sold-out" : true;

//         const isPriceOne = priceOneCheckbox.checked ? product.pricing === 499 : true;
//         const isPriceTwo = priceTwoCheckbox.checked ? product.pricing === 599 : true;
//         const isPriceThree = priceThreeCheckbox.checked ? product.pricing === 999 : true;

//         return isInStock && isNewArrival && isSoldOut && isPriceOne && isPriceTwo && isPriceThree;
//     });

//     // Limpia la sección de productos antes de renderizar
//     clearProducts();

//     // Llama a la función renderProducts con la nueva lista filtrada
//     renderProducts(filteredProducts);
// }

// document.addEventListener("DOMContentLoaded", () => {
//     // Limpia la sección de productos antes de renderizar
//     clearProducts();

//     // Renderiza todos los productos sin filtrar
//     renderProducts(outfits);
// });



// // Función para reiniciar el filtro
// function resetFilter() {
//     // Reinicia los checkboxes
//     inStockCheckbox.checked = true;
//     newArrivalsCheckbox.checked = true;
//     soldOutCheckbox.checked = true;

//     priceOneCheckbox.checked = true;
//     priceTwoCheckbox.checked = true;
//     priceThreeCheckbox.checked = true;

//     // Limpia la sección de productos antes de renderizar
//     clearProducts();

//     // Renderiza todos los productos sin filtrar
//     renderProducts(outfits);
// }

// // Función para limpiar la sección de productos
// function clearProducts() {
//     const sectionCard = document.querySelector(".sectionCard");
//     sectionCard.innerHTML = "";
// }

// // Lógica para inicializar la página con todos los productos
// document.addEventListener("DOMContentLoaded", () => {
//     // Limpia la sección de productos antes de renderizar
//     clearProducts();

//     // Renderiza todos los productos sin filtrar
//     renderProducts(outfits);
// });




// /*************************** WISHLIST  & LOCAL STORAGE ***************************/

// // console.log("Script loaded: wishlist.js");


// // Obtén la sección de la wishlist
// const wishlistContainer = document.querySelector('.sectionWishlist .containerWishlist');

// // Storage
// let wishlistProducts;
// let wishlistProductsLS = localStorage.getItem("wishlistProducts");
// if(wishlistProductsLS) {
//     wishlistProducts = JSON.parse(wishlistProductsLS);
// } else {
//     wishlistProducts = [];
// }


// // // Función para renderizar la wishlist
// function renderWishlist(wishlistItems) {
//     wishlistContainer.innerHTML = "";

//     wishlistItems.forEach(wishlistItem => {
//         if (wishlistItem) {
//             const wishlistProduct = document.createElement("article");
//             wishlistProduct.classList.add("wishlist");
//             wishlistProduct.setAttribute("data-product-id", wishlistItem.id);

//             wishlistProduct.innerHTML = `
//                 <div class="blockProduct">
//                     <img class="itemProduct" src="${wishlistItem.image}" alt="Product pic">
//                     <div class="description">
//                         <p class="wishPrice">$${wishlistItem.pricing}</p>
//                         <div class="icons">
//                             <img class="delete" src="img/trash_Icon.svg" alt="Trash icon">
//                             <img class="edit" src="img/edit_Icon.svg" alt="Edit icon">
//                         </div>
//                     </div>
//                     <img class="itemWishlist" src="img/wishlist_Icon.svg" alt="Wishlist icon">
//                 </div>
//             `;

//             wishlistProduct.querySelector('.delete').addEventListener('click', () => {
//                 eliminarDeWishlist(wishlistItem.id);
//             });

//             wishlistProduct.querySelector('.edit').addEventListener('click', () => {
//                 alert('Corregir ruta logica para editar producto');
//             });

//             wishlistContainer.appendChild(wishlistProduct);
//         }
//     });
// }


// // Función para agregar a la wishlist


// function agregarAWishlist(selectedOutfit) {

//     // Asegurémonos de que selectedOutfit y su propiedad 'id' estén definidos
//     if (!selectedOutfit || !selectedOutfit.id) {
//         console.error("El producto seleccionado no tiene un ID válido:", selectedOutfit);
//         return;
//     }



//     // Verifica si el producto ya está en la wishlist
//     const existingWishlistItem = wishlistProducts.find(item => item && item.id === selectedOutfit.id);

//     if (existingWishlistItem) {
//         alert("¡Este producto ya esta agregado en tu wishlist!");
//         return;
//     }


//     // Agrega el producto a la wishlist
//     wishlistProducts.push(selectedOutfit);

//     // Actualiza localStorage después de agregar a la wishlist
//     localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));

//     // Renderiza la wishlist actualizada
//     renderWishlist(wishlistProducts);

//     console.log("Producto agregado a la wishlist:", selectedOutfit);
// }


// function eliminarDeWishlist(productId) {
//     // Encuentra el índice del producto con el ID proporcionado en el array wishlistProducts
//     const index = wishlistProducts.findIndex(product => product && product.id == productId);

//     // Si se encuentra el producto, elimínalo del array
//     if (index !== -1) {
//         wishlistProducts.splice(index, 1);
//         console.log("Producto eliminado de la wishlist:", productId);

//         // Actualiza localStorage después de eliminar el producto
//         localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));

//         // Vuelve a renderizar la wishlist
//         renderWishlist(wishlistProducts);
//     } else {
//         console.log("Producto no encontrado en la wishlist:", productId);
//     }
// }


// // Renderiza la wishlist inicial
// renderWishlist(wishlistProducts);

























































