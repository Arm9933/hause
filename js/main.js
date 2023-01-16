let topButt = document.getElementById('top-button');

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
    // let topButt = document.getElementById('top-button');

    if(scr >= 100) {
        header.style.height = "80px";
    }else{
        header.style.height = '120px';
    };
    if(scr >= 300) {
        topButt.style.display = 'flex';
    }else{
        topButt.style.display = 'none';
    };
});

topButt.onclick = () => {
    let scr = window.scrollY;
    let interval = setInterval(() => {
        if( scr > 0) {
          scr -= 10;
        }
        if(scr <= 0) {
          clearInterval(interval);
        }
        window.scrollTo(0,scr);
      },0.5)
}

function sliderTop() {
    let img = document.querySelectorAll('.slide-img2');
    let next = document.querySelector('#next2');
    let prev = document.querySelector('#prev2');
    let flag = 0;
    let flag1 = 0;

    setInterval(next.onclick = () => {
        flag -= 265;
        flag1 = flag / img.length;
        for (let i = 0; i < img.length; i++) {
            if(flag1 < -265 / 2) {
                flag = 0;
           }if(flag1 > -265){
            img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';   
           }
        }
    },'3000')
    

    prev.onclick = () => {
        flag += 265;
        flag1 = flag / img.length;
        for (let i = 0; i<img.length; i++) {
            if(flag1 > 0){
                flag = -265 * img.length / 2;
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }if(flag1 <= 0){
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }
        }
    }
}
sliderTop();

function sliderBottom() {
    let img = document.querySelectorAll('.slide-img');
    let next = document.querySelector('#next');
    let prev = document.querySelector('#prev');
    let flag = 0;
    let flag1 = 0;

    setInterval(next.onclick = () => {
        flag -= 265;
        flag1 = flag / img.length;
        for (let i = 0; i < img.length; i++) {
            if(flag1 < -265 / 2) {
                flag = 0;
           }if(flag1 > -265){
            img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';   
           }
        }
    },'3000')
    

    prev.onclick = () => {
        flag += 265;
        flag1 = flag / img.length;
        for (let i = 0; i<img.length; i++) {
            if(flag1 > 0){
                flag = -265 * img.length / 2;
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }if(flag1 <= 0){
                img[i].style.transform = 'translate3d(' + flag + 'px,0,0)';
            }
        }
    }
}
sliderBottom();

function callTab() {
    let callButt = document.getElementById('call');
    let tabBox = document.getElementById('sec-3-tab'); 
    let closeTab = document.getElementById('close-tab');
    let tabBack = document.getElementById('tab-back');

    callButt.onclick = () => {
        tabBox.style.display = 'flex';
        tabBack.style.display = 'flex';
    }
    closeTab.onclick = () => {
        tabBox.style.display = 'none';
        tabBack.style.display = 'none';
    }
    tabBack.onclick = () => {
        tabBox.style.display = 'none';
        tabBack.style.display = 'none';
    }

}
callTab();