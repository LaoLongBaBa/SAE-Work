var img = document.createElement('img');
img.setAttribute('src', 'https://img.icons8.com/fluency/452/doge.png')
img.style.width = '80px'
img.style.position = 'absolute'
img.style.transition = '.1s';
document.body.appendChild(img);

function dogeMove(event) {
    img.style.top = (event.clientY - 40) + 'px';
    img.style.left = (event.clientX - 40) + 'px';
}

document.addEventListener('mousemove',dogeMove)