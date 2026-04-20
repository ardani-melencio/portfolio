document.querySelectorAll('nav a, #navigation a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetURL = link.href;

        document.querySelector('.main-page').classList.add('fade-out');
        sessionStorage.setItem('comingFromZoom', 'true');

        setTimeout(() => {
            window.location.href = targetURL;
        }, 250);
    });
});
