function showCoords(event) {
    console.log('X axis coord is ' + event.clientX);
    console.log('Y axis coord is ' + event.clientY);

    document.querySelector('#Xaxis span').innerText = event.clientX;
    document.querySelector('#Yaxis span').innerText = event.clientY;
}


document.addEventListener('mousemove', showCoords)