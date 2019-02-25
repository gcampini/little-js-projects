let board;

function setup() {
  createCanvas(800, 800);
  board = new Board(8, 8, width / 8, width / 8);
}

function draw() {
  background(0);
  board.show();
}
