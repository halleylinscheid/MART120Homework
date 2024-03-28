function setup() {
    createCanvas(500,600)
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
      } else {
fill(225);
background(210)
      }
      ellipse(mouseX, mouseY, 80, 80);
}