document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    // Verifica se há um tema salvo no localStorage
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    
    // Função para alternar o tema
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Adiciona o event listener
    toggleSwitch.addEventListener('change', switchTheme, false);
    
    // Efeito de partículas para o modo escuro
    function createParticles() {
        const slider = document.querySelector('.toggle-slider');
        
        if (toggleSwitch.checked) {
            // Cria partículas apenas no modo escuro
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('span');
                particle.classList.add('particle');
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.width = `${Math.random() * 2 + 1}px`;
                particle.style.height = particle.style.width;
                particle.style.animationDelay = `${Math.random() * 2}s`;
                slider.appendChild(particle);
            }
        } else {
            // Remove as partículas no modo claro
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => particle.remove());
        }
    }
    
    // Adiciona o efeito de partículas quando o tema muda
    toggleSwitch.addEventListener('change', createParticles);
    
    // Verifica se precisa criar partículas ao carregar
    createParticles();
});