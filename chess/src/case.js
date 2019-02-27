class Case {
  constructor(x, y, board, color) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.color = color;

    this.piece = new Piece(x, y, this, 'l');
  }

  show() {
    this.size = (width - this.board.border) / this.board.dim;
    noStroke();
    fill(this.color === 'white' ? 255 : 0);
    rect(this.x * this.size + this.board.border / 2, this.y * this.size + this.board.border / 2, this.size, this.size);

    if (this.piece) this.piece.show();
  }
}
