document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.form-page');
    const nextButtons = document.querySelectorAll('.next-btn');
    const backButtons = document.querySelectorAll('.back-btn');
    const skipButtons = document.querySelectorAll('.skip-btn');
    const imageElement = document.querySelector('#main-figure img');
    let currentPage = 0;

    const images = [
        '../../public/images/one.png',
        '../../public/images/two.png',
        '../../public/images/three.png',
        '../../public/images/four.png',
        '../../public/images/five.png'
    ];

    function showPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < images.length) {
            imageElement.src = images[pageIndex];
        }
        pages.forEach((page, index) => {
            page.classList.toggle('hide', index !== pageIndex);
        });
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
    });

    skipButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentPage = pages.length - 1;
            showPage(currentPage);
        });
    });

    showPage(currentPage);
});