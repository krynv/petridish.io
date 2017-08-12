var cell;
var cellPool = [];
var zoom = 1;

function setup() {
    createCanvas(600, 600);
    cell = new Cell(0, 0, 64);

    for (var i = 0; i < 200; i++) {
        var x = random(-width, width);
        var y = random(-height, height);

        cellPool[i] = new Cell(x, y, 16);
    }
}

function draw() {
    background(0);

    translate(width / 2, height / 2);
    var newZoom = 64 / cell.radius;
    zoom = lerp(zoom, newZoom, 0.05);
    scale(zoom);
    translate(-cell.position.x, -cell.position.y);

    for (var i = cellPool.length - 1; i >= 0; i--) {
        cellPool[i].show();

        if (cell.consumes(cellPool[i])) {
            cellPool.splice(i, 1);
        }
    }

    cell.show();
    cell.update();
}