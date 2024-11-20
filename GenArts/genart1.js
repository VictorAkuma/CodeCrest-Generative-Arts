let shapes = [];
let colors = ['#e8184a', '#d5204c', '#0a4460', '#f9d062', '#fe8452', '#4a3b3d', '#085a9b', '#fff1e1'];

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	noStroke();
	drawingContext.shadowColor = color('#000000');
	drawingContext.shadowBlur = 7;
	INIT();
}

function draw() {
	background('#f0f0f0');
	for (let i of shapes) {
		i.show();
		i.move();
	}

	if (frameCount % 160 == 0) {
		INIT();
	}
}

function INIT() {
	shapes = [];
	for (let i = 0; i < 150; i++) {
		let x = randomGaussian(0.5, 0.15) * width;
		let y = randomGaussian(0.5, 0.15) * height;
		let s = (random(20, 450) * random(random(random()))) + 10;
		let a = int(random(4)) * TAU / 4;
		let rnd = int(random(2));
		if (rnd == 0) {
			shapes.push(new Circle(x, y, s));
		}
		if (rnd == 1) {
			shapes.push(new Line(x, y, s * random(1, 5), a));
		}
	}
}

function easeOutElastic(x) {
	const c4 = (2 * Math.PI) / 3;
	return x === 0 ?
		0 :
		x === 1 ?
		1 :
		pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
}

class Circle {
	constructor(x, y, d) {
		this.x = x;
		this.y = y;
		this.d = 0;
		this.d0 = 0;
		this.d1 = d;
		this.t = -int(random(60));
		this.t1 = int(random(30, 90));
		this.col = random(colors);
	}

	show() {
		fill(this.col);
		circle(this.x, this.y, this.d);
	}

	move() {
		if (0 < this.t && this.t < this.t1) {
			let amt = norm(this.t, 0, this.t1 - 1);
			this.d = lerp(this.d0, this.d1, easeOutElastic(amt));
		}
		this.t++
	}
}

class Line extends Circle {
	constructor(x, y, l, a) {
		super(x, y, l);
		this.a = a;
		this.sw = random(2, 10);
	}

	show() {
		push();
		translate(this.x, this.y);
		rotate(this.a);
		fill(this.col);
		rect(0, 0, this.d, this.sw);
		pop();
	}
}