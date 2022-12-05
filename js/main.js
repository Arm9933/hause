function menu() {
    let open = document.querySelector('#menu-burger');
    let menuBar = document.querySelector('.menu-open');
    let close = document.querySelector('#menu-close');

    open.onclick = () => {
        menuBar.style.transform = 'translate(0)';
    }
    close.onclick = () => {
        menuBar.style.transform = 'translate(-100%)';
    }
}
menu();

addEventListener('scroll', () => {
    let header = document.querySelector('#header');
    let scr = window.scrollY;

    if(scr >= 100) {
        header.style.height = "80px";
    }else{
        header.style.height = '120px';
    }
});

function slider() {
    let img = document.querySelectorAll('.slide-img');
    let next = document.querySelector('#next');
    let prev = document.querySelector('#prev');
    let flag = 0;
    let flag1;
    // console.log(img);
    next.onclick = () => {
        flag -= 315;
        flag1 = flag / img.length;
        console.log(flag1);
        if(flag1 <= 315 / 2) {
            for (let i = 0; i < img.length; i++) {
                img[i].style.left = flag + 'px';
            }
        }else{
            flag = 0;
        }
    }
    prev.onclick = () => {
        flag += 315;
        console.log(flag1);
        for (let i = 0; i<img.length; i++) {
            img[i].style.left = flag + 'px';
        }
    }
}
slider();