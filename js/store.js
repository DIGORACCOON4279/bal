console.log("Script loaded: store.js");


// Arrays de objetos constante outfits

const outfits = [
    {
        "id": 1,
        "category": "Xtreme",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 499,
        "image": "../img/pic1.webp"
    },
    {
        "id": 2,
        "category": "Aggressive",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 599,
        "image": "../img/pic2.webp"
    },
    {
        "id": 3,
        "category": "Street",
        "stock": 0,
        "availability": "Sold-out",
        "pricing": 999,
        "image": "../img/pic5.webp"
    },
    {
        "id": 4,
        "category": "Xtreme",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 599,
        "image": "../img/pic6.webp"
    },
    {
        "id": 5,
        "category": "Street",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 499,
        "image": "../img/pic37.webp"
    },
    {
        "id": 6,
        "category": "Aggressive",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 499,
        "image": "../img/pic8.webp"
    },
    {
        "id": 7,
        "category": "Aggressive",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 599,
        "image": "../img/pic38.webp"
    },
    {
        "id": 8,
        "category": "Street",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 599,
        "image": "../img/pic11.webp"
    },
    {
        "id": 9,
        "category": "Aggressive",
        "stock": 0,
        "availability": "Sold-out",
        "pricing": 999,
        "image": "../img/pic13.webp"
    },
    {
        "id": 10,
        "category": "Xtreme",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 999,
        "image": "../img/pic14.webp"
    },
    {
        "id": 11,
        "category": "Street",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 599,
        "image": "../img/pic15.webp"
    },
    {
        "id": 12,
        "category": "Aggressive",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 499,
        "image": "../img/pic16.webp"
    },
    {
        "id": 13,
        "category": "Xtreme",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 499,
        "image": "../img/pic17.webp"
    },
    {
        "id": 14,
        "category": "Aggressive",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 999,
        "image": "../img/pic18.webp"
    },
    {
        "id": 15,
        "category": "Street",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 999,
        "image": "../img/pic20.webp"
    },
    {
        "id": 16,
        "category": "Aggressive",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 499,
        "image": "../img/pic22.webp"
    },
    {
        "id": 17,
        "category": "Street",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 599,
        "image": "../img/pic23.webp"
    },
    {
        "id": 18,
        "category": "Xtreme",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 999,
        "image": "../img/pic24.webp"
    },
    {
        "id": 19,
        "category": "Aggressive",
        "stock": 0,
        "availability": "Sold-out",
        "pricing": 499,
        "image": "../img/pic25.webp"
    },
    {
        "id": 20,
        "category": "Aggressive",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 499,
        "image": "../img/pic28.webp"
    },
    {
        "id": 21,
        "category": "Street",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 599,
        "image": "../img/pic29.webp"
    },
    {
        "id": 22,
        "category": "Aggressive",
        "stock": 0,
        "availability": "Sold-out",
        "pricing": 999,
        "image": "../img/pic38.webp"
    },
    {
        "id": 23,
        "category": "Xtreme",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 999,
        "image": "../img/pic31.webp"
    },
    {
        "id": 24,
        "category": "Street",
        "stock": 5,
        "availability": "Best Sellers",
        "pricing": 499,
        "image": "../img/pic32.webp"
    },
    {
        "id": 25,
        "category": "Aggressive",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 599,
        "image": "../img/pic33.webp"
    },
    {
        "id": 26,
        "category": "Street",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 999,
        "image": "../img/pic34.webp"
    },
    {
        "id": 27,
        "category": "Xtreme",
        "stock": 0,
        "availability": "Sold-out",
        "pricing": 599,
        "image": "../img/pic35.webp"
    },
    {
        "id": 28,
        "category": "Aggressive",
        "stock": 5,
        "availability": "New Arrivals",
        "pricing": 999,
        "image": "../img/pic36.webp"
    }
]


// Storage
let cartProducts;
let cartProductsLS = localStorage.getItem("cartProducts")
if(cartProductsLS) {
    cartProducts = JSON.parse(cartProductsLS)
} else {
    cartProducts = []
}


let addButton = document.querySelectorAll(".linkStore");
let sectionCard = document.querySelector(".sectionCard");

function renderProducts(outfitsArray) {
    outfitsArray.forEach(outfit => {

        // Verificar si el producto tiene un ID antes de acceder
        if (!outfit.id) {
            console.error("El producto no tiene un ID válido:", outfit);
            return;
        }

        const cart = document.createElement("article");
        cart.classList.add("cardProducts");

        const outfitId = outfit.id;
        const availabilityClass = outfit.availability === "Sold-out" || outfit.stock === 0 ? "Sold-out" : "";

        cart.innerHTML =
        `
                        <div class="article ${availabilityClass}">
                            ${outfit.availability === "Sold-out" || outfit.stock === 0 ? '<p class="soldOutLabel">Sold Out</p>' : ''}
                            <img class="outFit" src="${outfit.image}" alt="Outfit Image">
                            <div class="info">
                                <img class="heartIcon" src="../img/wishlist_Icon.svg" alt="Wishlist icon" >
                                <p class="price">${outfit.category}.......... $${outfit.pricing}</p>
                                <button class="linkStore" type="button" id="${outfitId}"> Add to cart </button>
                            </div>
                        </div>
        `;

        sectionCard.appendChild(cart);

    });

    addToCartButton();

}

renderProducts(outfits);


// Funcion agregar al carrito

function addToCartButton() {
    addButton = document.querySelectorAll(".linkStore");
    addButton.forEach(button => {
        button.onclick = async (e) => {
            const outfitId = e.currentTarget.id;
            const selectedOutfit = outfits.find(outfit => outfit.id == outfitId);

            // Verifica si el producto está agotado o tiene 0 unidades
            if (selectedOutfit.stock === 0 || selectedOutfit.availability === "Sold-out") {

                // Crea una nueva sección en el documento
                const messageSection = document.createElement("section");
                messageSection.setAttribute("id", "out-of-stock-message");

                // Verifica si el body existe antes de intentar agregar la sección
                const bodyElement = document.body;
                if (bodyElement) {

                    // Crea un elemento 'div' con el mensaje
                    const messageParagraph = document.createElement("div");
                    messageParagraph.innerHTML = `<p class="soldOutProduct">"¡This product is out of stock or there are no units available 🔕!"</p>`;

                    // Agrega el párrafo a la sección
                    messageSection.appendChild(messageParagraph);

                    // Agrega la sección al cuerpo del documento
                    bodyElement.appendChild(messageSection);

                    // Resalta el botón del producto con la clase 'sold-out-button' al hacer clic
                    e.currentTarget.classList.add("sold-out-button");

                    // Espera 3 segundos (3000 milisegundos) y luego eliminar el mensaje y la clase
                    await new Promise(resolve => setTimeout(resolve, 2250));

                    // Elimina la sección después de espera
                    messageSection.remove();

                    // Elimina la clase 'sold-out-button' después del tiempo de espera
                    // e.currentTarget.classList.remove("sold-out-button");
                }

                return;
            }

            // Lógica para agregar al carrito solo si no está agotado
            agregarAlCarrito(selectedOutfit);
        };
    });

    const heartIcons = document.querySelectorAll(".heartIcon");
    heartIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            console.log("Clic en el icono de corazón");

            const linkStoreElement = e.currentTarget.parentElement.querySelector(".linkStore");

            if (linkStoreElement && linkStoreElement.id) {
                const outfitId = linkStoreElement.id;
                console.log("ID del producto:", outfitId);

                // Estento encontrar el producto en la lista de outfits
                const selectedOutfit = outfits.find(outfit => outfit.id == outfitId);
                console.log("Producto seleccionado:", selectedOutfit);

                // Intento agregar a la wishlist
                agregarAWishlist(selectedOutfit);
            } else {
                console.error("No se pudo obtener el ID del producto.");
            }
        });
    });
}


// Funcion agregar al carrito

function agregarAlCarrito(selectedOutfit) {
    const existingCartItem = cartProducts.find(item => item.id == selectedOutfit.id);

    if (existingCartItem) {

        // Si el producto ya está en el carrito, verifica si la cantidad es menor
        if (existingCartItem.quantity < 5) {
            existingCartItem.quantity++;
        } else {

            // Muestra el modal si se supera el límite
            const messageProduct = document.createElement("div");
            messageProduct.classList.add("messageProduct");
            messageProduct.innerHTML = `<p class="stockProduct">"You cannot add more than 5 units of a product 🚀"</p>`;

            const messageContainer = document.getElementById('messageNewProduct'); // Reemplaza con el ID real de tu contenedor
            messageContainer.appendChild(messageProduct);

            // Elimina el mensaje después de 3 segundos
            setTimeout(() => {
                messageProduct.remove();
            }, 2250);
            return;
        }
    } else {

        // Si el producto no está en el carrito, agrega uno nuevo
        selectedOutfit.quantity = 1;
        cartProducts.push(selectedOutfit);
    }

    console.log(cartProducts);
    renderCart(cartProducts);

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}










