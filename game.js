let width = 0;
let height = 0;

window.onload = resizeBackground();
window.onresize = resizeBackground();

function resizeBackground() {
    width = window.innerWidth;
    height = window.innerHeight;
}

function createEnemy() {
    if (document.getElementById('enemy')) {
        document.getElementById('enemy').remove();
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