let cartCount = 0;

// Function to update cart count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.getAttribute('data-name');
        const productPrice = product.getAttribute('data-price');

        // Update cart count
        cartCount++;
        updateCartCount();

        alert(`${productName} has been added to your cart for ${productPrice} GHS.`);
    });
});

// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const material = product.getAttribute('data-material').toLowerCase();
        if (material.includes(searchTerm)) {
            product.style.display = 'block'; // Show product
        } else {
            product.style.display = 'none'; // Hide product
        }
    });
});

// Currency selector functionality
document.getElementById('currency-selector').addEventListener('change', function() {
    const selectedCurrency = this.value;
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => {
        const originalPrice = price.textContent;
        if (selectedCurrency === 'GHS') {
            price.textContent = originalPrice; // Keep price as is for GHS
            price.nextElementSibling.textContent = 'GHS'; // Update currency text
        } else {
            price.textContent = (originalPrice * 