let gravity;
let bounciness;
const power = 20;

const dt = 1;

const balls = [];

function setup() {
  createCanvas(800, 800);
  frameRate(60);
  noStroke();
  angleMode(DEGREES);

  reset();

  for (let i = 0; i < 20; i++) balls.push(new Ball(Math.random() * 700, Math.random() * 700, 20, 1, 1));
}

function draw() {
  background(0);
  balls.forEach((ball) => {
    ball.update(dt);
    ball.show();
  });
}

function reset() {
  const g = parseFloat(document.getElementById('grav').value);
  if (!Number.isNaN(g)) gravity = g;
  balls.forEach((b) => {
    b.reset();
  });
}

function addVelocity(vel) {
  balls.forEach((b) => {
    b.vel.add(vel);
  });
}

function keyPressed() {
  if (key === 'ArrowUp') addVelocity(createVector(0, -power));
  else if (key === 'ArrowDown') addVelocity(createVector(0, power));
  else if (key === 'ArrowRight') addVelocity(createVector(power, 0));
  else if (key === 'ArrowLeft') addVelocity(createVector(-power, 0));
}
