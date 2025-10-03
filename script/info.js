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
