let shapes = [];
let colors = ['#F54A17', '#F5C204', '#1C1A6C', '#F5E5DC', '#0D609C'];

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	let c = 50;
	let w = width / c;
	for (let i = 0; i < c; i++) {
		for (let j = 0; j < c; j++) {
			let x = i * w + w / 2;
			let y = j * w + w / 2;
			let colNum1 = int(random(colors.length));
			let colNum2 = int(random(colors.length));
			shapes.push({ x: x, y: y, w: w, n1:colNum1, n2:colNum2});
		}
	}
	frameRate(15);
}

function draw() {
	background(255);
	noStroke();
	for (let i of shapes) {
		let dst = dist(width / 2, height / 2, i.x, i.y);
		let p = map(dst, 0, sqrt(sq(width / 2) + sq(height / 2)), 0, 1.4) ** 2;
		if (p < random()) {
			fill(colors[i.n1]);
			square(i.x, i.y, i.w);
		}
		if (p < random()) {
			fill(colors[i.n2]);
			circle(i.x, i.y, i.w * 0.5);
		}
	}
}