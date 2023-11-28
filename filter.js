


// console.log("Script loaded: filter.js");


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





