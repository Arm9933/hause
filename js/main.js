function menu() {
    let open = document.querySelector('#menu-burger');
    let menuBar = document.querySelector('.menu-open');
    let close = document.querySelector('#menu-close');

    open.onclick = () => {
        menuBar.style.transform = 'translate(0)';
    };
    close.onclick = () => {
        menuBar.style.transform = 'translate(-100%)';
    }
}
menu();