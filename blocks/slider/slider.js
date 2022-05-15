
window.addEventListener('load', () => {
    const sliderItems = document.getElementsByClassName('slider__item');

    for (const item of sliderItems) {
        item.addEventListener("click", () => sliderItemOnClick(item));
    }
});

const sliderItemOnClick = (item) => {
    const sliderItems = document.getElementsByClassName('slider__item');
    const sliderItemsArray = Array.from(sliderItems);
    const activeItemsExceptCurrent = sliderItemsArray.filter(i => 
        i != item && i.classList.contains('slider__item--active'));

    for (activeItem of activeItemsExceptCurrent) {
        activeItem.classList.remove("slider__item--active");
    };

    item.classList.add("slider__item--active");

    const carouselElement = document.getElementsByClassName('carousel__inner')[0];
    const carouselWidth = carouselElement.clientWidth;
    const currentSliderItemIndex = sliderItemsArray.indexOf(item);
    
    carouselElement.style.transform = 'translateX(' + `${(-carouselWidth - 20) * currentSliderItemIndex}px)`;
};