

console.log("Script loaded: cart.js");

// Carrito y localStorage

let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage);

let cartContainer = document.querySelector(".containerArticles");


//Funcion para renderizar el carrito

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
                                    <button class="minusBtn">-</button>
                                    <span class="counterValue">${cartItem.quantity}</span>
                                    <button class="plusBtn">+</button>
                                </div>
                            </div>
                            <p class="total">$${cartItem.pricing * cartItem.quantity}</p>
        `;

        cartContainer.appendChild(cart);

        const counterValue = cart.querySelector(".counterValue");
        const plusButton = cart.querySelector(".plusBtn");
        const minusButton = cart.querySelector(".minusBtn");

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

            const editIcons = document.querySelectorAll(".edit-icon");
            editIcons.forEach(editIcon => {
            editIcon.addEventListener('click', (e) => {

            const productId = e.currentTarget.closest(".cartList").getAttribute("data-product-id");
            const showroomUrl = `showRoom.html?id=${productId}`;
            window.location.href = showroomUrl;
        });
    });
}

renderCart(cartStorage);


// Funcion actualizar el contador

function actualizarContador(cartItem, counterElement, incremento) {
    let contador = parseInt(counterElement.innerHTML);

    if ((contador + incremento) > 5 || (contador + incremento) < 1) {
        if (contador + incremento > 5) {

            const messageProduct = document.createElement("div");
            messageProduct.classList.add("messageProduct");
            messageProduct.innerHTML = `<p class="stockProduct">"You cannot add more than 5 units of a product 🚀"</p>`;

            const messageContainer = document.getElementById('messageNewProduct'); // Reemplaza con el ID real de tu contenedor
            messageContainer.appendChild(messageProduct);

            setTimeout(() => {
                messageProduct.remove();
            }, 3000);
        } else {

            const messageProduct = document.createElement("div");
            messageProduct.classList.add("messageProduct");
            messageProduct.innerHTML = `<p class="stockProduct">"The minimum allowed quantity is 1 unit 👍"</p>`;

            const messageContainer = document.getElementById('messageNewProduct'); // Reemplaza con el ID real de tu contenedor
            messageContainer.appendChild(messageProduct);

            setTimeout(() => {
                messageProduct.remove();
            }, 2250);
        }
        return;
    }

    contador += incremento;
    counterElement.innerHTML = contador;

    cartItem.quantity = contador;

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    const totalElement = counterElement.closest(".cartList").querySelector(".total");
    totalElement.innerHTML = `$${cartItem.pricing * contador}`;
}


// Función para eliminar un producto del carrito por su ID

function eliminarDelCarrito(productId) {

    const index = cartProducts.findIndex(product => product.id == productId);

    if (index !== -1) {
        cartProducts.splice(index, 1);
        console.log("Producto eliminado del carrito:", productId);

        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

        renderCart(cartProducts);
    } else {
        console.log("Producto no encontrado en el carrito:", productId);
    }
}













