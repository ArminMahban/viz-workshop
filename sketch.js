function setup() {
  createCanvas(800, 800);
}

function draw() {
  let red = random(255);
  let green = random(255);
  let blue = random(255);
  stroke(255, 255, 255, 25);

  if (mouseIsPressed) {
    fill(0);
  } else {
    // fill(red, green, blue);
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
  rect(mouseX, mouseY, 80, 80);
}
