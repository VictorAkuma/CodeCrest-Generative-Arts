let minSide = 20;
let side;
let center;

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	side = width * 0.5;
	center = createVector(width / 2, height / 2);
	let dc = drawingContext;
	dc.shadowColor = 'black';
	dc.shadowBlur = 5;
	background(255);
	divideRect((width - side) / 2, (height - side) / 2, side, side);
}

function draw() {

}

function divideRect(x, y, w, h) {
	let dst = dist(center.x, center.y, x + w / 2, y + h / 2);
	let nrm = norm(dst, 0, sqrt(sq(width / 2) + sq(height / 2)));
	if (w > minSide && h > minSide && random() < 0.9) {
		if (w >= h) {
			let rndw = random(0.1, 0.9) * w;
			divideRect(x, y, rndw, h);
			divideRect(x + rndw, y, w - rndw, h);
		}
		if (w < h) {
			let rndh = random(0.1, 0.9) * h;
			divideRect(x, y, w, rndh);
			divideRect(x, y + rndh, w, h - rndh);
		}
	} else {
		fill(0);
		noStroke();
		shiftRect(x + w / 2, y + h / 2, w, h);
	}
}

function shiftRect(x, y, w, h) {
	let dst = dist(x, y, center.x, center.y);
	let shift = dst * 0.2;
	let theta = atan2(y - center.y, x - center.x);
	let ang = dst * 0.0002 * pom();
	push();
	translate(x, y);
	rotate(ang);
	rect(shift * cos(theta), shift * sin(theta), w, h);
	pop();
}

function pom() {
	return random() < 0.5 ? -1 : 1;
}