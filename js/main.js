
$(function(){
    $('.header__content-item').slick({
        infinite: true,
        nextArrow: '<img class="slider-arrows slider-arrows__left" src="img/right-carousel.png" alt=""></img>',
        prevArrow: '<img class="slider-arrows slider-arrows__right" src="img/left-carousel.png" alt=""></img>',
    });
    $('.choise__slider').slick({
        arrows:true,
        slidesToShow:2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: ' <img class="choise__slider-arrow--img" src="img/arrow-choise.png" alt="">',
        prevArrow: '',
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    })
    const deliveryArrowTable = document.querySelector('.delivery-services__table-img--arrow')
    const deliveryArrowFood = document.querySelector('.delivery-services__food-img--arrow')
    const deliveryMainSubtitleText = document.querySelector('.delivery-main__subtitle-lorem')
    const bookingImgLeft = document.querySelector('.booking__img-left')
    const choiseLink = document.querySelector('.choise__link-arrow')
    const burgerButton = document.querySelector('.header__burger')
    const headerNavigation = document.querySelector('.header__navigation')
    if (matchMedia) {
        let screenOne = window.matchMedia('(max-width:1194px)');
        let screenTwo = window.matchMedia('(max-width:554px)');
        let screenThree = window.matchMedia('(max-width:1500px)');
        let screenFour = window.matchMedia('(max-width:1024px)');
        let screenFive = window.matchMedia('(max-width:768px)');
        screenFive.addListener(changesFive)
        screenFour.addListener(changesFour)
        screenThree.addListener(changesThree)
        screenTwo.addListener(changesTwo)
        screenOne.addListener(changes);
        changes(screenOne)
    }
    function changesFive(screen) {
        if (screen.matches){
            deliveryArrowFood.src = 'img/food-arrow2.png'
            deliveryArrowTable.src = 'img/table-arrow2.png'
        }else {
            deliveryArrowFood.src = 'img/food-arrow3.png'
            deliveryArrowTable.src = 'img/table-arrow3.png'
        }
    }
    function changesFour(screen) {
        if (screen.matches){
            deliveryArrowFood.src = 'img/food-arrow3.png'
            deliveryArrowTable.src = 'img/table-arrow3.png'
        }else {
            deliveryArrowFood.src = 'img/food-arrow2.png'
            deliveryArrowTable.src = 'img/table-arrow2.png'
        }
    }
    function changesThree(screen) {
        if (screen.matches){
            deliveryArrowFood.src = 'img/food-arrow2.png'
            deliveryArrowTable.src = 'img/table-arrow2.png'
        }else {
            deliveryArrowFood.src = 'img/food-arrow.png'
            deliveryArrowTable.src = 'img/table-arrow.png'
        }
    }
    function changesTwo(screen) {
        if (screen.matches){
            bookingImgLeft.src = 'img/—Pngtree—lettuce_1175257 4.png'
            deliveryMainSubtitleText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accums+'
        }else {
            bookingImgLeft.src = 'img/—Pngtree—lettuce_1175257 3.png'
            deliveryMainSubtitleText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.'
        }
    }
    function changes(screen) {
        if (screen.matches){
            bookingImgLeft.src = 'img/—Pngtree—lettuce_1175257 3.png'
        }else {
            bookingImgLeft.src = 'img/—Pngtree—lettuce_1175257 2.png'
        }
    }
    burgerButton.addEventListener('click', function(){
        headerNavigation.classList.toggle('active')
    })
});
$(window).on('load', function(){
    new WOW().init(); 
});