// script.js
document.addEventListener('DOMContentLoaded', function() {
    const productsSection = document.getElementById('products');

    // Example product data
    const products = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
        { id: 3, name: 'Product 3', price: 39.99 },
    ];

    // Display products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });

    // Example function to handle adding products to the cart
    window.addToCart = function(productId) {
        alert(`Product with ID ${productId} added to the cart!`);
    };
});
