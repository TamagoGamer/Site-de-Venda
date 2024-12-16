const cart = []; // Array para armazenar os produtos do carrinho

// Seleciona o botão de adicionar ao carrinho
const addToCartButton = document.getElementById('add-to-cart-button');

// Adiciona um evento de clique ao botão
addToCartButton.addEventListener('click', () => {
    const productName = addToCartButton.getAttribute('data-nome'); // Obtém o nome do produto
    const productPrice = parseFloat(addToCartButton.getAttribute('data-preco')); // Obtém o preço do produto

    // Adiciona o produto ao carrinho
    cart.push({ nome: productName, preco: productPrice, quantidade: 1 });
    alert(`${productName} foi adicionado ao carrinho!`); // Mensagem de confirmação
});