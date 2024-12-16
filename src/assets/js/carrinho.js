function addToCart() {
    const cartKey = "shoppingCart"; // Nome da chave no localStorage
    const cart = JSON.parse(localStorage.getItem(cartKey)) || []; // Recupera o carrinho ou inicializa vazio

    // Verifica se o produto já existe no carrinho
    const existingProductIndex = cart.findIndex(item => item.nome === productName);

    if (existingProductIndex >= 0) {
        // Incrementa a quantidade do produto existente
        cart[existingProductIndex].quantidade += 1;
    } else {
        // Adiciona um novo produto ao carrinho
        cart.push({
            nome: productName,
            preco: parseFloat(productPrice),
            imagem: productImage,
            quantidade: 1
        });
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem(cartKey, JSON.stringify(cart));

    // Exibe feedback visual ao usuário
    const feedback = document.getElementById('cart-feedback');
    feedback.style.display = 'block';
    setTimeout(() => feedback.style.display = 'none', 3000); // Esconde após 3 segundos
}
// Adiciona o evento ao botão de adicionar ao carrinho
document.getElementById('add-to-cart-button').addEventListener('click', addToCart);