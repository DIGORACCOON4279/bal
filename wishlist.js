console.log("Script loaded: wishlist.js");


// Wishlist y localStorage

// Obtén la sección de la wishlist
const wishlistContainer = document.querySelector('.sectionWishlist .containerWishlist');

// Storage
let wishlistProducts;
let wishlistProductsLS = localStorage.getItem("wishlistProducts");
if(wishlistProductsLS) {
    wishlistProducts = JSON.parse(wishlistProductsLS);
} else {
    wishlistProducts = [];
}


// // Función para renderizar la wishlist

function renderWishlist(wishlistItems) {
    wishlistContainer.innerHTML = "";

    wishlistItems.forEach(wishlistItem => {
        if (wishlistItem) {
            const wishlistProduct = document.createElement("article");
            wishlistProduct.classList.add("wishlist");
            wishlistProduct.setAttribute("data-product-id", wishlistItem.id);

            wishlistProduct.innerHTML =
            `
                                        <div class="blockProduct">
                                            <img class="itemProduct" src="${wishlistItem.image}" alt="Product pic">
                                            <div class="description">
                                                <p class="wishPrice">$${wishlistItem.pricing}</p>
                                                <div class="icons">
                                                    <img class="delete" src="../img/trash_Icon.svg" alt="Trash icon">
                                                    <img class="edit" src="../img/edit_Icon.svg" alt="Edit icon">
                                                </div>
                                            </div>
                                            <img class="itemWishlist" src="../img/wishlist_Icon.svg" alt="Wishlist icon">
                                        </div>
            `;

            wishlistProduct.querySelector('.delete').addEventListener('click', () => {
                eliminarDeWishlist(wishlistItem.id);
            });

            wishlistProduct.querySelector('.edit').addEventListener('click', () => {
                alert('Corregir ruta logica para editar producto');
            });

            wishlistContainer.appendChild(wishlistProduct);
        }
    });
}


// Función para agregar a la wishlist

function agregarAWishlist(selectedOutfit) {
    // Asegurémonos de que selectedOutfit y su propiedad 'id' estén definidos
    if (!selectedOutfit || !selectedOutfit.id) {
        console.error("El producto seleccionado no tiene un ID válido:", selectedOutfit);
        return;
    }

    // Verifica si el producto ya está en la wishlist
    const existingWishlistItem = wishlistProducts.find(item => item && item.id === selectedOutfit.id);

    if (existingWishlistItem) {
        // Reemplaza la alerta con un mensaje en el DOM
        const message = document.createElement('div');
        message.innerHTML = `<p class='messageWishlist'>"This product is already added to your wishlist ⚡!!!"</p>`;

        // Inserta el mensaje dentro de un contenedor específico con el ID 'mensaje-container'
        const messageContainer = document.getElementById('messageContainer'); // Reemplaza con el ID real de tu contenedor
        messageContainer.appendChild(message);

        // Puedes agregar lógica adicional aquí según tus necesidades

        setTimeout(() => {
            // Elimina el mensaje después de unos segundos (ajusta según tus necesidades)
            message.remove();
        }, 2250); // 2000 milisegundos (2 segundos) en este ejemplo

        return;
    }

    // Agrega el producto a la wishlist
    wishlistProducts.push(selectedOutfit);

    // Actualiza localStorage después de agregar a la wishlist
    localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));

    // Renderiza la wishlist actualizada
    renderWishlist(wishlistProducts);

    console.log("Producto agregado a la wishlist:", selectedOutfit);
}


// Función para eliminar desde wishlist

function eliminarDeWishlist(productId) {
    // Encuentra el índice del producto con el ID proporcionado en el array wishlistProducts
    const index = wishlistProducts.findIndex(product => product && product.id == productId);

    // Si se encuentra el producto, elimínalo del array
    if (index !== -1) {
        wishlistProducts.splice(index, 1);
        console.log("Producto eliminado de la wishlist:", productId);

        // Actualiza localStorage después de eliminar el producto
        localStorage.setItem("wishlistProducts", JSON.stringify(wishlistProducts));

        // Vuelve a renderizar la wishlist
        renderWishlist(wishlistProducts);
    } else {
        console.log("Producto no encontrado en la wishlist:", productId);
    }
}

// Renderiza la wishlist inicial
renderWishlist(wishlistProducts);






