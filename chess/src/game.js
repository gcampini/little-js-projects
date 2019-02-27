class Game {
  constructor(time) {
    this.time = time;
    this.board = new Board(8, 10);
  }

  show() {
    this.board.show();
  }
}
