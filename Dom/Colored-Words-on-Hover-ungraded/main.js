var Green = document.querySelector('span');
var All = document.querySelector('p')

function Mousover(){
    Green.style.color = 'green'
}
function Mouseout(){
    Green.style.color = 'black'
}
All.addEventListener('mouseover',Mousover)
All.addEventListener('mouseout',Mouseout)