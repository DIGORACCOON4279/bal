

console.log("Script loaded: cart.js");


// Carrito y localStorage

let cartStorage = localStorage.getItem("cartProducts");
cartStorage = JSON.parse(cartStorage);

let cartContainer = document.querySelector(".containerArticles");
// let outcomeCart = document.querySelector(".outcomeCart");

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



// Funcion actualizar el contador

function actualizarContador(cartItem, counterElement, incremento) {
    let contador = parseInt(counterElement.innerHTML);

    // Verifica si la cantidad es mayor al límite de 5 unidades o menor al límite de 1 unidad
    if ((contador + incremento) > 5 || (contador + incremento) < 1) {
        if (contador + incremento > 5) {
            // Muestra el mensaje si se supera el límite
            const messageProduct = document.createElement("div");
            messageProduct.classList.add("messageProduct");
            messageProduct.innerHTML = `<p class="stockProduct">"You cannot add more than 5 units of a product 🚀"</p>`;


            const messageContainer = document.getElementById('messageNewProduct'); // Reemplaza con el ID real de tu contenedor
            messageContainer.appendChild(messageProduct);

            // Eliminar el mensaje después de 3 segundos
            setTimeout(() => {
                messageProduct.remove();
            }, 3000);
        } else {
            // Muestra el mensaje si la cantidad es menor al límite
            const messageProduct = document.createElement("div");
            messageProduct.classList.add("messageProduct");
            messageProduct.innerHTML = `<p class="stockProduct">"The minimum allowed quantity is 1 unit 👍"</p>`;

            const messageContainer = document.getElementById('messageNewProduct'); // Reemplaza con el ID real de tu contenedor
            messageContainer.appendChild(messageProduct);


            // Eliminar el mensaje después de 2 segundos
            setTimeout(() => {
                messageProduct.remove();
            }, 2250);
        }
        return;
    }

    // Actualiza el contador y el valor en el DOM
    contador += incremento;
    counterElement.innerHTML = contador;

    // Actualiza la cantidad en el objeto cartItem
    cartItem.quantity = contador;

    // Actualiza el localStorage después de modificar la cantidad
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    // Actualiza el total en el DOM
    const totalElement = counterElement.closest(".cartList").querySelector(".total");
    totalElement.innerHTML = `$${cartItem.pricing * contador}`;
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













