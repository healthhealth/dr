// Scroll suave para links da barra lateral
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Verifica se o elemento alvo existe
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove a classe 'active' de todos os links
            document.querySelectorAll('.sidebar a').forEach(link => {
                link.classList.remove('active');
            });

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        }
    });
});

// Função para abrir modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Função para fechar modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Função para expandir a seção "Quem Sou Eu"
function expandAbout() {
    const aboutSection = document.getElementById('about');
    const expandButton = aboutSection.querySelector('.expand-about');
    const aboutExpanded = aboutSection.querySelector('.about-expanded');

    if (aboutExpanded.style.display === 'none' || aboutExpanded.style.display === '') {
        aboutExpanded.style.display = 'block';
        expandButton.textContent = 'Saiba menos';
    } else {
        aboutExpanded.style.display = 'none';
        expandButton.textContent = 'Saiba mais';
    }
}

// Função para alternar a visibilidade do conteúdo dos cards de serviço
function toggleServiceCard(card) {
    card.classList.toggle('expanded');
}

// Função para expandir a seção "Como Trabalho"
function expandWorkflow() {
    const workflowSection = document.getElementById('workflow');
    const expandButton = workflowSection.querySelector('.expand-workflow');
    const workflowSteps = workflowSection.querySelector('.workflow-steps');

    if (workflowSteps.style.display === 'none' || workflowSteps.style.display === '') {
        workflowSteps.style.display = 'flex';
        expandButton.textContent = 'Ocultar Etapas';
    } else {
        workflowSteps.style.display = 'none';
        expandButton.textContent = 'Ver Etapas';
    }
}
