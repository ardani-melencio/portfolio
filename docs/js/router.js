// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const MAIN = document.querySelector('main');
    const navLinks = document.querySelectorAll('nav a');

    // Initial fade-in
    MAIN.classList.add('fade-in');

    // Set background position based on page class
    if (document.body.classList.contains('main-page')) {
        reposition("100% 50%");
    } else if (document.body.classList.contains('terms')) {
        reposition("50% 50%");
    }

    // Handle navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            if (!targetUrl) return;

            // Store current background position
            const currentPos = getComputedStyle(document.body).backgroundPosition;
            localStorage.setItem('bgPos', currentPos);

            // Fade out before navigation
            MAIN.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
});

// Reposition background with cached position
function reposition(newPosition) {
    const cached = localStorage.getItem('bgPos');

    if (cached && cached !== newPosition) {
        // Start from cached position
        document.body.style.backgroundPosition = cached;
        
        // Animate to new position
        requestAnimationFrame(() => {
            document.body.style.transition = 'all 0.5s';
            requestAnimationFrame(() => {
                document.body.style.backgroundPosition = newPosition;
            });
        });
    } else {
        document.body.style.backgroundPosition = newPosition;
    }
}
