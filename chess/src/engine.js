let game;

function setup() {
  createCanvas(800, 800);
  game = new Game();
}

function draw() {
  background(0);
  game.show();
}
