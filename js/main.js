(function () {
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js');

    var menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.nav-button',
        widthEnabled: 1025
    })

    var carouselImgs = new Carousel ({
        container: '.quote-container',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var carouselImgs = new Carousel ({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})();