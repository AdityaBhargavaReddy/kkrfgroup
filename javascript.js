document.addEventListener("DOMContentLoaded", function() {
    const scrollHelper = document.querySelector('.scroll-helper');
    scrollHelper.addEventListener('click', function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});
