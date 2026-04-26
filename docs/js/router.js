
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // Select all navigation links
    const MAIN = document.querySelector('main');
    const navLinks = document.querySelectorAll('a');

    MAIN.classList.add('fade-in');
    document.body.style.transition = '0s';

    if (document.body.classList.contains('main-page')) reposition("100% 50%");
    if (document.body.classList.contains('terms')) reposition("50% 50%");
    if (document.body.classList.contains('inner-page')) reposition('0% 50%');


    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop default navigation
            const targetUrl = link.getAttribute('href');

            if (!targetUrl) return;

            const currentPos = getComputedStyle(document.body).backgroundPosition;
            localStorage.setItem('bgPos', currentPos);
            // Optional: animate current page out (e.g., fade-out)    
            MAIN.classList.add('fade-out');


            // Wait for animation to finish before navigating
            setTimeout(() => {
                // Update URL without reloading (SPA-like behavior)
                window.history.pushState({}, '', targetUrl);

                // Load new page content dynamically (if you want single-page feel)
                // or just let the browser load the new page naturally via assignment
                window.location.href = targetUrl;
            }, 300); // Match this to your fade duration
        });
    });    
});

function reposition(newPosition) {
    const cached = localStorage.getItem('bgPos');
    

    console.log(cached);
    if (cached && cached !== newPosition) {
        document.body.style.backgroundPosition = cached;
        // Then animate to new position

        requestAnimationFrame(() => {
            document.body.style.transition = 'all 0.5s ease-in-out';
            requestAnimationFrame(() => {
                document.body.style.backgroundPosition = newPosition;
            });
        });
    }
    else {
        document.body.style.backgroundPosition = newPosition;
    }
}
