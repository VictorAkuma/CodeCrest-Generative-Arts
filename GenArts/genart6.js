let objs = [];
let colors = ['#ffffff', '#0073ff', '#ff4d00', '#00f7ff'];
let SEED = Math.floor(Math.random() * 10000);

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textFont('Orbitron');
	randomSeed(SEED);
	noiseSeed(SEED);
	background(0);

	INIT();
}

function draw() {
	background(0);
	for (let i of objs) {
		i.run();
	}

	if(frameCount % 180 == 0){
		INIT();
	}
}

function INIT(){
	objs = [];
	SEED = int(random(10000));
	randomSeed(SEED);
	noiseSeed(SEED);
	tiling();
}

function tiling() {
	let offset = 0;
	let gridCountW = int(random(15, 18));
	let gridCountH = gridCountW;
	let gridW = (width - (offset * 2)) / gridCountW;
	let gridH = (height - (offset * 2)) / gridCountH;
	let emp = gridCountW * gridCountH;
	let grids = [];

	for (let j = 0; j < gridCountW; j++) {
		let arr = []
		for (let i = 0; i < gridCountH; i++) {
			arr[i] = false;
		}
		grids[j] = arr;
	}

	while (emp > 0) {
		let w = int(random(1, 3));
		let h = w;
		let x = int(random(gridCountW - w + 1));
		let y = int(random(gridCountH - h + 1));
		let lap = true;
		for (let j = 0; j < h; j++) {
			for (let i = 0; i < w; i++) {
				if (grids[x + i][y + j]) {
					lap = false;
					break;
				}
			}
		}

		if (lap) {
			for (let j = 0; j < h; j++) {
				for (let i = 0; i < w; i++) {
					grids[x + i][y + j] = true;
				}
			}
			let xx = offset + x * gridW;
			let yy = offset + y * gridH;
			let ww = w * gridW;
			let opt = int(random(7) + 1);
			if (opt == 1) objs.push(new HUD01(xx + ww / 2, yy + ww / 2, ww - (width * 0.005)));
			if (opt == 2) objs.push(new HUD02(xx + ww / 2, yy + ww / 2, ww - (width * 0.005)));
			if (opt == 3) objs.push(new HUD03(xx + ww / 2, yy + ww / 2, ww - (width * 0.005)));
			if (opt == 4) objs.push(new HUD04(xx + ww / 2, yy + ww / 2, ww - (width * 0.005)));
			if (opt == 5) objs.push(new HUD05(xx + ww / 2, yy + ww / 2, ww - (width * 0.005)));
			if (opt == 6) objs.push(new HUD06(xx + ww / 2, yy + ww / 2, ww - (width * 0.005)));
			if (opt == 7) objs.push(new HUD07(xx + ww / 2, yy + ww / 2, ww - (width * 0.005)));
			emp -= w * h;
		}
	}
}


class HUD01 {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.t = int(random(2024));
		this.tStep = random(0.2, 1);
		this.inv = random() < 0.5 ? -1 : 1;
		this.ang = int(random(4)) * (TAU / 4);
		this.col = color(random(colors));
		this.mhk = random(0.2, 0.01);
		this.rad = this.w * random(0.1, 0.45);
		this.wop = int(random(2));
	}

	show() {
		push();
		translate(this.x, this.y);
		rotate(this.ang);
		scale(this.inv, 1);
		this.col.setAlpha(20);
		fill(this.col);
		this.col.setAlpha(255);
		stroke(this.col);
		strokeWeight(width * 0.001);
		square(0, 0, this.w);
		noFill();
		beginShape();
		for (let i = 0; i < this.w; i++) {
			let xx = map(i, 0, this.w, -this.w / 2, this.w / 2);
			let yy = this.rad * 2 * noise((i * this.mhk * 0.1) + (this.t * 0.02)) - (this.rad);
			if (this.wop) {
				yy = this.rad * sin((i * this.mhk) + (this.t * 0.075));
			}
			vertex(xx, yy);
		}
		endShape();
		strokeWeight(width * 0.0005);
		line(this.w / 2, 0, -this.w / 2, 0);
		line(0, this.w / 2, 0, -this.w / 2);
		pop();
	}

	move() {
		this.t += this.tStep;
	}

	run() {
		this.show();
		this.move();
	}
}

class HUD02 {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.t = int(random(2024));
		this.tStep = random(0., 1);
		this.c = int(random(4, 8));
		this.col = color(random(colors));
	}

	show() {
		push();
		translate(this.x, this.y);
		noFill();
		stroke(this.col);
		strokeWeight(width * 0.001);
		square(0, 0, this.w);
		let ww = this.w / this.c;
		for (let i = 0; i < this.c; i++) {
			for (let j = 0; j < this.c; j++) {
				let xx = i * ww + (ww / 2) - (this.w / 2);
				let yy = j * ww + (ww / 2) - (this.w / 2);
				this.col.setAlpha(noise(i, j, this.t / 70) * 300);
				fill(this.col);
				this.col.setAlpha(255);
				strokeWeight(ww * 0.02);
				stroke(this.col);
				square(xx, yy, ww * 0.9);
			}
		}
		pop();
	}

	move() {
		this.t += this.tStep = random(0.1, 1);
	}

	run() {
		this.show();
		this.move();
	}
}

class HUD03 {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.t = int(random(2024));
		this.c = int(random(4, 7));
		this.ang = int(random(4)) * (TAU / 4);
		this.rnd = random(190287);
		this.tStep = random(0.5, 1);
		this.col = color(random(colors));
		this.ns = random(60, 100);
	}

	show() {
		let ww = this.w / this.c;
		push();
		translate(this.x, this.y);
		rotate(this.ang);
		this.col.setAlpha(20);
		fill(this.col);
		this.col.setAlpha(255);
		stroke(this.col);
		strokeWeight(width * 0.001);
		square(0, 0, this.w);
		noFill();
		strokeWeight(ww * 0.05);

		for (let i = 0; i < this.c; i++) {
			let hh = this.w * noise(this.t / this.ns, i);
			let xx = i * ww + (ww / 2) - (this.w / 2);
			this.col.setAlpha(noise(i, this.rnd) * 300);
			fill(this.col);
			rect(xx, this.w / 2 - hh / 2, ww * 0.9, hh);
		}
		pop();
	}

	move() {
		this.t += this.tStep;
	}

	run() {
		this.show();
		this.move();
	}
}

class HUD04 {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.t = int(random(2024));
		this.tStep = random(0.5, 1);
		this.col = color(random(colors));
		this.gc = random(5, 20);
	}

	show() {
		push();
		translate(this.x, this.y);
		this.col.setAlpha(20);
		fill(this.col);
		this.col.setAlpha(255);
		stroke(this.col);
		strokeWeight(width * 0.001);
		square(0, 0, this.w);
		noFill();
		strokeWeight(this.w / 50);
		for (let i = 0; i < 12; i++) {
			let a = map(i, 0, 12, 0, TAU);
			let r = this.w * 0.45
			line(r * cos(a), r * sin(a), r * 0.9 * cos(a), r * 0.9 * sin(a));
		}

		let ang = noise(this.t / 300) * this.gc;
		noFill();
		strokeWeight(this.w / 200);
		this.col.setAlpha(255);
		stroke(this.col);
		this.col.setAlpha(100);
		fill(this.col);
		beginShape();
		vertex(this.w * 0.4 * cos(ang), this.w * 0.4 * sin(ang));
		vertex(this.w * 0.05 * cos(ang + PI / 2), this.w * 0.05 * sin(ang + PI / 2));
		vertex(this.w * 0.1 * cos(ang + PI), this.w * 0.1 * sin(ang + PI));
		vertex(this.w * 0.05 * cos(ang - PI / 2), this.w * 0.05 * sin(ang - PI / 2));
		endShape(CLOSE);
		this.col.setAlpha(255);
		fill(this.col);
		circle(0, 0, this.w * 0.02);
		pop();
	}

	move() {
		this.t += this.tStep;
	}

	run() {
		this.show();
		this.move();
	}
}

class HUD05 {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.t = int(random(2024));
		this.rnd = random(0.5, 1);
		this.ang = int(random(4)) * (TAU / 4);
		this.amt = 0;
		this.col = color(random(colors));
		this.tStep = random(1);
	}

	show() {
		push();
		translate(this.x, this.y);
		rotate(this.ang);
		this.col.setAlpha(20);
		fill(this.col);
		this.col.setAlpha(255);
		stroke(this.col);
		strokeWeight(width * 0.001);
		square(0, 0, this.w);

		this.col.setAlpha(150);
		noFill();
		stroke(this.col);
		strokeWeight(this.w / 8);
		strokeCap(SQUARE);
		arc(0, 0, this.w * 0.5, this.w * 0.5, 0, TAU * this.amt);
		strokeWeight(this.w / 50);
		circle(0, 0, this.w * 0.75);

		for (let i = 0; i < 4; i++) {
			let a = map(i, 0, 4, 0, TAU);
			let r = this.w * 0.4
			line(r * cos(a), r * sin(a), r * 0.8 * cos(a), r * 0.8 * sin(a));
		}

		fill(this.col);
		strokeWeight(this.w / 100);
		textSize(this.w * 0.15);
		text(nf(this.amt * 100, 1, 0), 0, 0);
		pop();
	}

	move() {
		this.t += this.tStep;
		this.amt = noise(this.t / 120);
	}

	run() {
		this.show();
		this.move();
	}
}

class HUD06 {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.t = int(random(2024));
		this.tStep = random(1);
		this.ang = int(random(4)) * (TAU / 4);
		this.inv = random() < 0.5 ? -1 : 1;
		this.col = color(random(colors));

		this.c = int(random(5, 11));
		this.ns = random(80, 100);
	}

	show() {
		push();
		translate(this.x, this.y);
		rotate(this.ang);
		scale(this.inv, 1);

		this.col.setAlpha(20);
		fill(this.col);
		this.col.setAlpha(255);
		stroke(this.col);
		strokeWeight(width * 0.001);
		square(0, 0, this.w);
		strokeWeight(this.w * 0.01);
		beginShape();
		this.col.setAlpha(255);
		noStroke();
		fill(this.col);
		for (let i = 0; i < this.c; i++) {
			let hh = map(noise((this.t / this.ns), i), 0, 1, 0, this.w) - (this.w / 2);
			let xx = map(i, 0, this.c - 1, 0, this.w) - (this.w / 2);
			this.col.setAlpha(noise(i, this.rnd) * 300);
			circle(xx, hh, this.w * 0.03);
			vertex(xx, hh);
		}
		vertex(this.w / 2, this.w / 2);
		vertex(-this.w / 2, this.w / 2);
		this.col.setAlpha(50);
		fill(this.col);
		this.col.setAlpha(120);
		stroke(this.col);
		endShape();
		line(this.w / 2, 0, -this.w / 2, 0);
		pop();
	}

	move() {
		this.t += this.tStep;
		this.amt = noise(this.t / 120);
	}

	run() {
		this.show();
		this.move();
	}
}

class HUD07 {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.t = int(random(2024));
		this.tStep = 1;
		this.ang = int(random(4)) * (TAU / 4);
		this.inv = random() < 0.5 ? -1 : 1;
		this.col = color(random(colors));
		this.cc = int(random(5, 9));
		this.xx = [];
		this.yy = [];
		for(let i=0; i<this.cc; i++){
			this.xx.push(random(-this.w/2, this.w/2));
			this.yy.push(random(-this.w/2, this.w/2));
		}
	}

	show() {
		push();
		translate(this.x, this.y);
		rotate(this.ang);
		scale(this.inv, 1);

		this.col.setAlpha(20);
		fill(this.col);
		this.col.setAlpha(255);
		stroke(this.col);
		strokeWeight(width * 0.001);
		square(0, 0, this.w);

		strokeWeight(this.w * 0.003);
		for (let i = 0; i < 11; i++) {
			let p = map(i, 0, 10, -this.w / 2, this.w / 2);
			line(p, -this.w / 2, p, this.w / 2);
			line(-this.w / 2, p, this.w / 2, p);
		}

		strokeWeight(this.w * 0.05);
		for(let i=0; i<this.cc; i++){
			this.col.setAlpha(noise(this.t * 0.1 ,i) * 300);
			stroke(this.col);
			point(this.xx[i], this.yy[i]);
		}

		strokeWeight(this.w * 0.01);
		line(0, 0, this.w * 0.5 * cos(this.t * 0.05), this.w * 0.5 * sin(this.t * 0.05));
		pop();
	}

	move() {
		this.t += this.tStep;
	}

	run() {
		this.show();
		this.move();
	}
}
