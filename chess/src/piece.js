class Piece {
  constructor(x, y, casee, color) {
    this.x = x;
    this.y = y;
    this.case = casee;
    this.color = color;
  }

  show() {
    noStroke();
    fill(255, 0, 0);
    text('piece', (this.x + 1 / 2) * this.case.size + this.case.board.border / 2, (this.y + 1 / 2) * this.case.size + this.case.board.border / 2);
  }
}
