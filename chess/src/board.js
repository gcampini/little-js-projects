class Board {
  constructor(row, col, boxSize) {
    this.boxes = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        this.boxes.push(new Box(j, i, boxSize));
      }
    }
  }

  show() {
    this.boxes.forEach(box => {
      box.show();
    });
  }
}
