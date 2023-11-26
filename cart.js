

console.log("Script loaded: cart.js");


// Carrito y localStorage

let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage);

let cartContainer = document.querySelector(".containerArticles");

function renderCart(cartItems) {
    cartContainer.innerHTML = "";
    cartItems.forEach(cartItem => {
        const cart = document.createElement("article");
        cart.classList.add("cartList");
        cart.setAttribute("data-product-id", cartItem.id);
        cart.innerHTML =
        `
                            <img class="itemProduct" src="${cartItem.image}" alt="Product pic">
                            <div class="description">
                                <p class="price"> $${cartItem.pricing} </p>
                                <div class="icons">
                                    <img src="../img/trash_Icon.svg" alt="Trash icon" class="delete-icon">
                                    <img src="../img/edit_Icon.svg" alt="Edit icon" class="edit-icon">
                                </div>
                            </div>
                            <div class="itemNumber">
                                <div class="counter">
                                    <button class="minus-button">-</button>
                                    <span class="counter-value">${cartItem.quantity}</span>
                                    <button class="plus-button">+</button>
                                </div>
                            </div>
                            <p class="total">$${cartItem.pricing * cartItem.quantity}</p>
        `;

        cartContainer.appendChild(cart);

        const counterValue = cart.querySelector(".counter-value");
        const plusButton = cart.querySelector(".plus-button");
        const minusButton = cart.querySelector(".minus-button");

        plusButton.addEventListener('click', () => {
            actualizarContador(cartItem, counterValue, 1);
        });

        minusButton.addEventListener('click', () => {
            actualizarContador(cartItem, counterValue, -1);
        });

            const deleteIcon = cart.querySelector(".delete-icon");
            deleteIcon.addEventListener('click', () => {
                eliminarDelCarrito(cartItem.id);
            });
        });

            // Ahora, agrega un manejador de eventos en un nivel superior para los íconos de editar
            const editIcons = document.querySelectorAll(".edit-icon");
            editIcons.forEach(editIcon => {
            editIcon.addEventListener('click', (e) => {
            // Obtén el ID del producto desde el atributo data-product-id del contenedor del producto
            const productId = e.currentTarget.closest(".cartList").getAttribute("data-product-id");
            const showroomUrl = `showRoom.html?id=${productId}`;
            window.location.href = showroomUrl;
        });
    });
}


renderCart(cartStorage);


function actualizarContador(cartItem, counterElement, incremento) {
    let contador = parseInt(counterElement.textContent);

    // Verifica si la cantidad es mayor al límite de 5 unidades o menor al límite de 1 unidad
    if ((contador + incremento) > 5 || (contador + incremento) < 1) {
        if (contador + incremento > 5) {
            alert(`¡No puedes agregar más de 5 unidades de un producto!`);
        } else {
            alert(`La cantidad mínima permitida es 1 unidad.`);
        }
        return;
    }

    // Actualiza el contador y el valor en el DOM
    contador += incremento;
    counterElement.textContent = contador;

    // Actualiza la cantidad en el objeto cartItem
    cartItem.quantity = contador;

    // Actualiza el localStorage después de modificar la cantidad
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    // Actualiza el total en el DOM
    const totalElement = counterElement.closest(".cartList").querySelector(".total");
    totalElement.textContent = `$${cartItem.pricing * contador}`;
}


// Función para eliminar un producto del carrito por su ID

function eliminarDelCarrito(productId) {
    // Encuentra el índice del producto con el ID proporcionado en el array cartProducts
    const index = cartProducts.findIndex(product => product.id == productId);

    // Si se encuentra el producto, elimínalo del array
    if (index !== -1) {
        cartProducts.splice(index, 1);
        console.log("Producto eliminado del carrito:", productId);

        // Actualiza el localStorage después de eliminar el producto
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

        // Vuelve a renderizar el carrito
        renderCart(cartProducts);
    } else {
        console.log("Producto no encontrado en el carrito:", productId);
    }
}













