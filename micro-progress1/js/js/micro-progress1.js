let showFact = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  fill(0, 150, 100);
  ellipse(250, 150, 100, 100);

  if (showFact) {
    fill(0);
    textSize(16);
    text("The Eiffel Tower grows in summer heat.", 150, 350);
  }
}

function mousePressed() {
  if (
    mouseX > 250 &&
    mouseX < 350 &&
    mouseY > 150 &&
    mouseY < 250
  ) {
    showFact = true;
  } else {
    showFact = false;
  }
}