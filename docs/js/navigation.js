// Set flag before navigating away from zoomed pages
document.querySelectorAll('nav a:not([href*="#"]), #navigation a').forEach(link => {
    link.addEventListener('click', () => {
        sessionStorage.setItem('comingFromZoom', 'true');
    });
});
