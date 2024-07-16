let width = 0;
let height = 0;
let lifes = 1;
let time = 30;
let timeOfCreation = 750;
let level = window.location.search;
level = level.replace('?','');

if(level === 'easy'){
    timeOfCreation = 1500;
}else if(level === 'normal'){
    timeOfCreation = 1000;
}


window.onload = resizeBackground();
window.onresize = resizeBackground();

function resizeBackground() {
    width = window.innerWidth;
    height = window.innerHeight;
}

let timer = setInterval(function () {
    time--;

    if (time < 0) {
        clearInterval(timer);
        clearInterval(creationOfEnemies);
        window.location.replace('victory.html');
    } else {
        document.getElementById('time').innerHTML = time;
    }
}, 1000);

function createEnemy() {
    if (document.getElementById('enemy')) {
        document.getElementById('enemy').remove();

        if (lifes > 2) {
            window.location.replace('game_over.html');
        }
        document.getElementById('l' + lifes).src = 'images/empty_heart.png';
        lifes++;
    }

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    let enemy = document.createElement('img');
    enemy.src = 'images/mosquito.png';
    enemy.classList.add(randomSize());
    enemy.classList.add(mirrorEnemySide());
    enemy.style.left = positionX + 'px';
    enemy.style.top = positionY + 'px';
    enemy.style.position = 'absolute';
    enemy.id = 'enemy';
    enemy.onclick = function () {
        this.remove();
    }

    document.body.appendChild(enemy);
}

function randomSize() {
    let enemyClass = Math.floor(Math.random() * 3);

    switch (enemyClass) {
        case 0:
            return 'enemy1';
        case 1:
            return 'enemy2';
        default:
            return 'enemy3';
    }
}

function mirrorEnemySide() {
    let side = Math.floor(Math.random() * 2);

    if (side) {
        return 'sideA';
    } else {
        return 'sideB';
    }
}