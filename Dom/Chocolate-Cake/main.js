var img = document.querySelector('img');

function shakeNo() {
    img.classList.add('shakeNo');
}

function Bigger() {
    var cakesize = img.width;
    var screensize = window.innerWidth;
    img.classList.remove('shakeNo')
    if (cakesize < (screensize / 3)) {
        img.style.width = cakesize + 100 + 'px';
    } else {
        setTimeout(shakeNo, 1);
    }
}
img.addEventListener('click', Bigger)