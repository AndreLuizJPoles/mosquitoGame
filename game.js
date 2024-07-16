let width = 0;
let height = 0;

window.onload = resizeBackground();
window.onresize = resizeBackground();

function resizeBackground() {
    width = window.innerWidth;
    height = window.innerHeight;
}

function createEnemy(){
    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    let enemy = document.createElement('img');
    enemy.src = 'images/mosquito.png';
    enemy.className = 'enemy1';
    enemy.style.left = positionX + 'px';
    enemy.style.top = positionY + 'px';
    enemy.style.position = 'absolute';

    document.body.appendChild(enemy);

    console.log(enemy.style.left);
    console.log(enemy.style.top);
}