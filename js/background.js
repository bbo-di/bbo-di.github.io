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

