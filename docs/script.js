document.getElementById('DOMContentLoaded', () => {
    const displaySize = document.getElementById("tamano-tela");
    function updateScreenSize() {
        const container = document.querySelector('.container');
        let currentAlignment = "Desktop (justify-content: center)"

        if (width <= 900 && width > 600) {
            currentAlignment = "Tablet (justify-content: space-between)"
        } else if (width <= 600) {
            currentAlignment = "Mobile (flex-direction: column; justify-content: flex-start)"
        }
        container.setAttribute('data-alignment', currentAlignment);
    }

    // Adiciona um listener para o redimensionamento da tela
    window.addEventListener('resize', updateScreenSize);
    // Chama a função uma vez ao carregar
    updateScreenSize();
})