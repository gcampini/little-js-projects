const xf = (t) => 16 * pow(sin(t), 3);
const yf = (t) => 13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t);

const xd = (t) => 16 * cos(t) * 3 * pow(sin(t), 2);
const yd = (t) => -13 * sin(t) + 5 * 2 * sin(2 * t) + 2 * 3 * sin(3 * t) + 4 * sin(4 * t);

// const xf = (t) => cos(t);
// const yf = (t) => sin(t);

// const xd = (t) => sin(t);
// const yd = (t) => -cos(t);

const phase = Math.PI * 2;
const puls = Math.PI / 100;
const fade = 10;
const noiseStrength = 100;
const ampl = 15;

const traces = [];

function setup() {
  createCanvas(800, 800);
  // frameRate(1);
  background(0);
  noFill();

  for (let i = 0; i < 100; i++) {
    spawn();
  }

  // setInterval(() => {
  //   spawn();
  // }, 100);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  traces.forEach((trace) => {
    trace.show();
    trace.update();
  });
}

function spawn() {
  const ph = Math.random() * phase * 0;
  const pu = (Math.random() + 1) * puls;
  const fa = fade;
  const no = Math.random() * noiseStrength;
  traces.push(new Trace(ph, pu, ampl, fa, no, 0));
}
