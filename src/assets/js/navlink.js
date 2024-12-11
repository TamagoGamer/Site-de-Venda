// Seleciona o botão de menu e os links de navegação
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Adiciona um evento de clique ao botão de menu
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'show' nos links de navegação
    navLinks.classList.toggle('show');
});