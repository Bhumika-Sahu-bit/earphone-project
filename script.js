const imgSlider = document.querySelector(".img-slider");
const items = document.querySelectorAll(".item");
const imgItems = document.querySelectorAll(".img-item")
const infoItems = document.querySelectorAll(".info-item")

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let colors = ['rgba(0, 0, 0, 0.477)','rgba(216, 55, 168, 0.966)','rgba(200, 255, 49, 0.767)','rgba(245, 29, 29, 0.866)','rgba(141, 33, 141, 0.621)','rgba(21, 118, 254, 0.693)',];

let indexSlider = 0;
let index = 0;

const slider = () => {
    imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`;
    
    items.forEach( (item) => {
        item.style.transform = `rotate(${indexSlider * -60}deg)`;
    })

    document.querySelector('.img-item.active').classList.remove('active');
    imgItems[index].classList.add('active')

    document.querySelector('.info-item.active').classList.remove('active');
    infoItems[index].classList.add('active')

    document.body.style.background = colors[index];
}

nextBtn.addEventListener('click',() => {
    indexSlider++ ;

    index++ ;

    if (index > imgItems.length -1 ){
        index = 0;
    }
    
    slider();
});

prevBtn.addEventListener('click',() => {
    indexSlider-- ;

    index-- ;

    if (index < 0 ){
        index = imgItems.length - 1;
    }
    slider();
});

