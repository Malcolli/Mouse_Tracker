/// <reference path="PIXI.d.ts" />
var renderer = new PIXI.WebGLRenderer(800, 600);
var stage = new PIXI.Stage(0x000000);
document.body.appendChild(renderer.view);

var drawing = new PIXI.Graphics();
stage.addChild(drawing);

/*
var ratings:number[] = [60, 80, 80, 70];
var colors:number[] = [0xFF0000, 0x00FF00, 0x0000FF, 0xFFFFFF];
for( var i:number = 0; i <ratings.length; i++) {
//Begin a fill
drawing.beginFill(colors[i]);
drawing.drawRect(i * 100, 0, ratings[i], ratings[i]);
}
*/
var positionsX = new Array();
var positionsY = new Array();

for (var i = 0; i < 50; i++) {
    positionsX[i] = 0;
    positionsY[i] = 0;
}

function draw() {
    drawing.clear();

    //get mouse position
    var mousePosition = stage.getMousePosition();

    //insert the latest position
    positionsX.unshift(mousePosition.x);
    positionsY.unshift(mousePosition.y);

    //remove last entry in array
    positionsX.pop();
    positionsY.pop();

    console.log(positionsX.length, positionsX[0]);

    for (var i = 0; i < positionsX.length; i++) {
        drawing.beginFill(0x999900);

        //draw a 15-pixel radius circle at the current
        //index of positions x, y
        drawing.drawCircle(positionsX[i], positionsY[i], (i + 1) * 1.2);
        drawing.endFill();
    }
}

animate();
function animate() {
    renderer.render(stage);
    draw();
    requestAnimationFrame(animate);
}
//# sourceMappingURL=main.js.map
