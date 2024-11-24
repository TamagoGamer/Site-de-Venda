function filterProducts() {
    const categoryFilter = document.getElementById('category').value;
    const priceFilter = document.getElementById('price').value;
    const popularityFilter = document.getElementById('popularity').value;

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const category = product.getAttribute('data-category');
        const price = parseInt(product.getAttribute('data-price'));
        const popularity = product.getAttribute('data-popularity');

        let showProduct = true;

        // Filtrar por categoria
        if (categoryFilter !== 'all' && category !== categoryFilter) {
            showProduct = false;
        }

        // Filtrar por preço
        if (priceFilter === 'baixo' && price >= 500) {
            showProduct = false;
        } else if (priceFilter === 'medio' && (price < 500 || price > 1000)) {
            showProduct = false;
        } else if (priceFilter === 'alto' && price <= 1000) {
            showProduct = false;
        }

        // Filtrar por popularidade
        if (popularityFilter !== 'all' && popularity !== popularityFilter) {
            showProduct = false;
        }

        product.style.display = showProduct ? 'block' : 'none';
    });
}