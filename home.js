// home.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleTheme');
    const body = document.body;
    const sunIcon = '<i class="fas fa-sun"></i>';
    const moonIcon = '<i class="fas fa-moon"></i>';

    // Check for saved user preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(currentTheme);
    toggleButton.innerHTML = currentTheme === 'dark-mode' ? sunIcon : moonIcon;

    toggleButton.addEventListener('click', function() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            toggleButton.innerHTML = sunIcon;
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            toggleButton.innerHTML = moonIcon;
        }
    });
});
