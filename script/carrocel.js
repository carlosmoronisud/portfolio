document.querySelectorAll('.section-title').forEach(title => {
    // Inicialmente, define as cores dos títulos e oculta as seções
    const collapsible = title.nextElementSibling;
    collapsible.style.display = "none"; // Garante que as seções estão fechadas ao carregar
    title.style.color = "#ffffff"; // Cor padrão ao carregar

    title.addEventListener('click', () => {
        const isOpen = collapsible.style.display === "block"; // Verifica se está aberto

        // Alterna o display do collapsible
        collapsible.style.display = isOpen ? "none" : "block";

        // Muda a cor do título baseado no estado
        title.style.color = isOpen ? "#ffffff" : "#F25C05";
    });
});


// Função para navegar nos slides
document.querySelectorAll('.collapsible').forEach(collapsible => {
    let index = 0;

    const slides = collapsible.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const prevBtn = collapsible.querySelector('.prevBtn');
    const nextBtn = collapsible.querySelector('.nextBtn');

    // Exibe a imagem correspondente ao índice
    function mostrarImagem() {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Função para ir para o próximo slide
    function proximo() {
        index = (index + 1) % totalSlides;
        mostrarImagem();
    }

    // Função para ir para o slide anterior
    function anterior() {
        index = (index - 1 + totalSlides) % totalSlides;
        mostrarImagem();
    }

    // Inicializa o carrossel
    mostrarImagem();

    // Adiciona eventos aos botões
    nextBtn.addEventListener('click', proximo);
    prevBtn.addEventListener('click', anterior);
});

