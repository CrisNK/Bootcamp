var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 3, 2, 2, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 2, 2, 3, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 1, 1, 1, 2, 2, 0, 2, 2, 1, 1, 1, 2, 2, 2, 2],
    [0, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 0],
    [2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 3, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 3, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

var pacman = {
    x: 1,
    y: 1
};

var score = 0;

function displayWorld() {
    var output = '';

    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 3) {
                output += "\n\t<div class='cherry'></div>"
            }
            if (world[i][j] == 2) {
                output += "\n\t<div class='brick'></div>"
            }
            else if (world[i][j] == 1) {
                output += "\n\t<div class='coin'></div>"
            }
            if (world[i][j] == 0) {
                output += "\n\t<div class='empty'></div>"
            }
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}
function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 20 + 'px';
    document.getElementById('pacman').style.left = pacman.x * 20 + 'px';
}
function displayScore() {
    document.getElementById('score').innerHTML = score;
}
displayWorld();
displayPacman();
document.onkeydown = function (e) {
    if (e.keyCode == 37 && (world[pacman.y][pacman.x - 1] != 2)) { // flecha izquierda
        pacman.x--;
        document.getElementById('pacman').style.transform = 'rotate(0deg)';
    }
    if (e.keyCode == 39 && (world[pacman.y][pacman.x + 1] != 2)) { // flecha derecha
        pacman.x++;
        document.getElementById('pacman').style.transform = 'rotate(180deg)';
    }
    if (e.keyCode == 38 && (world[pacman.y - 1][pacman.x] != 2)) { // flecha arriba
        pacman.y--;
        document.getElementById('pacman').style.transform = 'rotate(90deg)';   
    }
    if (e.keyCode == 40 && (world[pacman.y + 1][pacman.x] != 2)) { // flecha abajo
        pacman.y++;
        document.getElementById('pacman').style.transform = 'rotate(270deg)';   
    }
    if (world[pacman.y][pacman.x] == 1 || world[pacman.y][pacman.x] == 3) {
        if (world[pacman.y][pacman.x] == 3) {
            score += 50;
        } else {
            score+=10;
        }
        world[pacman.y][pacman.x] = 0;
        displayWorld();
        displayScore();
    }
    displayPacman();
    console.log(e.keyCode);
}