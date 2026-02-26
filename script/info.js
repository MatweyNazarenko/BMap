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