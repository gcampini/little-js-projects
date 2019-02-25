class Ball {
  constructor(x, y, r, m, bounciness) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, m * gravity);

    this.r = r;
    this.m = m;

    this.bounciness = bounciness;

    this.collided = [];
  }

  reset() {
    // this.pos = createVector(this.pos.x, this.pos.y);
    // this.vel = createVector(0, 0);
    this.acc = createVector(0, this.m * gravity);
  }

  update(dt) {
    const fv = createVector(this.vel.x + this.acc.x * dt, this.vel.y + this.acc.y * dt);
    const fp = createVector(this.pos.x + fv.x, this.pos.y + fv.y);

    const colls = this.collisions(fp);
    if (colls.length === 0) this.vel = fv;

    colls.forEach((c) => {
      if (c === 'bot') this.vel.y *= -this.bounciness;
      if (c === 'top') this.vel.y *= -this.bounciness;
      if (c === 'right') this.vel.x *= -this.bounciness;
      if (c === 'left') this.vel.x *= -this.bounciness;
      if (typeof c === 'object') {
        if (this.collided.includes(c)) return;

        const n = createVector(c.pos.x - fp.x, c.pos.y - fp.y);
        n.normalize();
        let t = createVector(-n.y, n.x);

        const angleT = degrees(Math.acos(t.dot(this.vel.copy().normalize())));
        if (angleT === 90) t = n.copy();
        if (angleT > 90) t.mult(-1);

        let ratio = 1 - Math.abs((angleT - 90) / 90);
        if (Number.isNaN(ratio)) ratio = 0.5;

        t.mult((this.vel.mag() * (1 - ratio) + c.vel.mag() * ratio) * this.bounciness);
        n.mult((this.vel.mag() * ratio + c.vel.mag() * (1 - ratio)) * this.bounciness);

        this.vel = t;
        c.vel = n;

        c.collided.push(this);
      }
    });

    this.pos.add(this.vel);
    this.collided = [];
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  collisions(fp) {
    const colls = [];
    if (fp.y + this.r > height) colls.push('bot');
    else if (fp.y - this.r < 0) colls.push('top');
    if (fp.x + this.r > width) colls.push('right');
    else if (fp.x - this.r < 0) colls.push('left');

    balls.forEach((b) => {
      if (b === this) return;
      if (dist(fp.x, fp.y, b.pos.x, b.pos.y) < this.r + b.r) colls.push(b);
    });
    return colls;
  }
}
