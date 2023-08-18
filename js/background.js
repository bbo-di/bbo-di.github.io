const images = [
    'bg01.jpeg',
    'bg02.jpeg',
    'bg03.jpeg',
    'bg04.jpeg',
    'bg05.jpeg',
]

const chosenlmage = images[Math.floor(Math.random()*images.length)];
const body = document.querySelector('body');
const bgImg = document.createElement('img');

body.style.backgroundImage = "url("+`/images/${chosenlmage}`+")"

document.body.appendChild(); //body맨앞에 위치 prepend() === body 마지막에 위치
