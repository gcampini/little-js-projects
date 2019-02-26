class Trace {
  constructor(phase, puls, ampl, fade, noise, lifetime) {
    this.t = phase;

    this.phase = phase;
    this.puls = puls;
    this.ampl = ampl;

    this.fade = fade;
    this.noise = noise;

    if (lifetime)
      setInterval(() => {
        const i = traces.indexOf(this);
        if (i !== -1) traces.splice(i, 1);
      }, lifetime * 1000);

    this.noisePhase = Math.random() * Math.PI * 2;

    this.points = [];
  }

  update() {
    this.t += this.puls;
  }

  show() {
    const xoff = (cos(this.t + this.noisePhase) + 1) * 0.5;
    const yoff = (sin(this.t + this.noisePhase) + 1) * 0.5;

    const n = createVector(yd(this.t), xd(this.t));
    n.normalize();

    const noisee = (noise(xoff, yoff) - 0.5) * this.noise;

    const x = xf(this.t) * this.ampl + n.x * noisee;
    const y = -yf(this.t) * this.ampl + n.y * noisee;

    this.points.unshift(createVector(x, y));

    this.strength = 255;
    for (let i = 0; i < this.points.length - 1; i++) {
      stroke(this.strength);
      line(this.points[i].x, this.points[i].y, this.points[i + 1].x, this.points[i + 1].y);
      this.strength -= this.fade;
      if (this.strength < 1) this.points.pop();
    }
  }
}
