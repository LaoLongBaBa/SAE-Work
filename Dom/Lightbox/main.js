var AMG = document.createElement('img');
AMG.src = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2016&q=80';
AMG.style.width = '300px';

function openLightbox() {
    document.querySelector('.overlay').style.display = 'flex';
}

AMG.addEventListener('click', openLightbox);
document.body.appendChild(AMG);


function closeOverlay(){
    document.querySelector('.overlay').style.display = "none"
}
document.querySelector('.overlaybackground').addEventListener('click', closeOverlay);