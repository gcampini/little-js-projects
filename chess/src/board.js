class Board {
  constructor(dim, border) {
    this.dim = dim;

    this.cases = [];
    this.border = border;

    // Create cases
    for (let i = 0; i < dim * dim; i++) {
      const x = i % dim;
      const y = parseInt(i / dim);
      const color = (i + (y % 2)) % 2 === 0 ? 'white' : 'black';
      this.cases.push(new Case(x, y, this, color));
    }

    // Fill cases
    this.cases.forEach((c) => {});
  }

  show() {
    noFill();
    stroke(255, 0, 0);
    strokeWeight(this.border);
    rect(0, 0, width, height);

    this.cases.forEach((c) => {
      c.show();
    });
  }

  getCase(x, y) {
    if (x >= dim || y >= dim) return null;
    return this.cases[y * dim + x];
  }
}
