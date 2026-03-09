//but-up

window.onscroll = function() {
    const scrollBtn = document.querySelector('.arrow-up');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

document.querySelector('.arrow-up').addEventListener('click',()=>{
    window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
});


// ymaps.ready(init);

// function init(){
//     if (!ymaps.panorama.isSupported()) {
//         alert("Панорамы не поддерживаются");
//     }


//     let locateRan = ymaps.panorama.locate([55.83403, 37.623370]);


//     locateRan.then(function (panoramas){
//         if (panoramas.length){
//             new ymaps.panorama.Player(
//                 'tour',
//                 panoramas[0]
//             )
//         }
//     })
// }


// const slideGap = 20;

// class slideAdd {
//     constructor(infoSlide, op = {}){
//         this.parent = document.querySelector('.slider');
//         this.infoSlide = infoSlide;
        
//         this.op = {
//             slidesNum: op.slidesNum,
//             sliderScroll: op.sliderScroll,
//             autoplay: op.autoplay,
//             autoPlaySpeed: op.autoPlaySpeed,
//         }

//         this.nowSlide = 0;
//         this.width = 0;
//         this.isDrag = false;
//         this.startPos = 0;
//         this.nowPos = 0;
//         this.animation = 0;
//         this.slides = [];

//         this.init();

//     }

//     init() {
//         this.addSlides();

//         this.updateWidth();

//         this.addEventListener();

//         if(this.op.autoplay){
//             this.startAutoplay();
//         }
//     }


//     addSlides(){
//         this.infoSlide.forEach(item => {
//             const slide = document.createElement('div');
//             slide.className = 'slide';
//             slide.innerHTML = `
//                 <img src="${item.prof}" alt="${item.title}">
//                     <h3>${item.name}</h3>
//                     <p>${item.data}</p>
//                 </div>`;
//             this.parent.appendChild(slide);
//         });

//         this.slides = document.querySelectorAll('.slide');
//     }

//     updateWidth(){
//         const pWidth = this.parent.offsetWidth;
//         this.width = (pWidth - gap*(this.op.slidesNum-1)) / this.op.slidesNum;

//         this.slides.forEach(slide => {
//             slide.style.width = `${this.slideWidth}px`;
//         });
//     }
// }




// let currentTr;
// let oldTr;
// let isDrag;
// let startPos;
// let slideWidth = 0;
// let slidesShown = 4;
// const gap = 20;
// const slides = document.querySelectorAll('.slide');
// const parent = document.querySelector('.sliderMove');
// const arrowRight = document.querySelector('.arrow-right');
// const arrowLeft = document.querySelector('.arrow-left');
// const root = document.querySelector(':root');
// root.style.setProperty('--gapSlide',`${gap}px`);
// let totalSl = slides.length;
// let nowSl = totalSl - 2;
// let slideIndex = 0;
// let maxIndex = slides.lenght - slidesShown;
// slideWidth = slides[0].offsetWidth+gap;
// slides.forEach(item =>{
//     item.style.width = `calc(${100/slidesShown}% - ${gap}px)`
// })

// function slide(sl){
//     parent.style.transform = `translateX(${slideWidth*-sl}px)`;
//     oldTr = -slideIndex*slideWidth;
//     currentTr = -slideIndex*slideWidth;
// }

// function plusSlide(n){
//     slideIndex = slideIndex + n
//     slide(slideIndex);
// }


// function getPos(event){
//     if(event.type.includes('mouse')){
//         return event.pageX;
//     }else{
//         return event.touches[0].clientX;
//     }
// }

// slides.forEach(item =>{
//     function touchStart(event){
//         // event.preventDefault();
//         isDrag = true;
//         startPos = getPos(event);
//         parent.style.cursor = "grabbing";
//         parent.style.transition = '0';
//     }
//     function touchEnd(event){

//         parent.style.transition = '.5s';
//         const move = currentTr - oldTr;

//         if(move < -50  && slideIndex < maxIndex){
//             plusSlide(1);
//         }
//         if(move > 50 && slideIndex > 0){
//             plusSlide(-1);
//         }
//         isDrag = false;
//         parent.style.cursor = "grab";
        
//     }
//     function touchMove(event){
//         // event.preventDefault();
//         if(isDrag){
//             currentTr = oldTr + getPos(event) - startPos;
//         }

//         if(currentTr <  -(maxIndex*slideWidth)){
//             currentTr = -(maxIndex*slideWidth);
//         }else if(currentTr > 0){
//             currentTr = 0;
//         }
//         parent.style.transform = `translateX(${currentTr}px)`
//     }
//     item.addEventListener('touchstart', (event)=>{
//         touchStart(event);
//     })
//     item.addEventListener('touchmove', (event)=>{
//         touchMove(event);

//     })
//     item.addEventListener('touchend', (event)=>{
//         touchEnd(event);
//     })
//     item.addEventListener('mousedown', (event)=>{
//         touchStart(event);
//     })
//     item.addEventListener('mouseup', (event)=>{
//         touchEnd(event);
//     })
//     item.addEventListener('mouseleave', (event)=>{
//         touchEnd(event);
//     })
//     item.addEventListener('mousemove', (event)=>{
//         touchMove(event);
//     })
// })

// slide(0);


// arrowLeft.addEventListener('click', ()=>{
//     plusSlide(-1);
// })
// arrowRight.addEventListener('click', ()=>{
//     plusSlide(1);   
// })




//sliderHeroes

const backModal = document.querySelector('.modalHeroes');
const modal = document.querySelectorAll('.modalBox');
const slides = document.querySelectorAll('.swiper-slide');

slides.forEach(item =>{
    modal.forEach(it =>{
        it.style.display = 'none';
    });
    item.addEventListener('click', ()=>{
        backModal.style.display = 'block';
        document.querySelector(`[data-modal="${item.dataset.slide}"]`).style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
    })
})

modal.forEach(item =>{
    const close = item.querySelector('.close');
    close.addEventListener('click', ()=>{
        item.style.display = 'none';
        backModal.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    });
    backModal.addEventListener('click', (event)=>{
        if(event.target === backModal){
            item.style.display = 'none';
            backModal.style.display = 'none';
            document.querySelector('body').style.overflow = 'auto';
        }
    });
    document.addEventListener('keydown', (event)=>{
        if(event.key = "Escape"){
            item.style.display = 'none';
            backModal.style.display = 'none';
            document.querySelector('body').style.overflow = 'auto';
        }
    })
})