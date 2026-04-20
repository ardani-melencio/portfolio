function navigate(pageName) {
    const page = PAGES[pageName];
    if (!page) return;
    
    const mainPage = document.querySelector('.main-page');
    mainPage.classList.add('fade-out');
    
    setTimeout(() => {
        mainPage.innerHTML = page;
        mainPage.classList.remove('fade-out');
        mainPage.classList.add('fade-in');
        
        // Rebind navigation clicks after content swap
        bindNavigation();
        
        setTimeout(() => {
            mainPage.classList.remove('fade-in');
        }, 300);
    }, 250);
}

function bindNavigation() {
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            navigate(link.dataset.page);
        });
    });
}

// Initial bind on load
document.addEventListener('DOMContentLoaded', bindNavigation);
