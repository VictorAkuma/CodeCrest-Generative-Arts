let colors = ['#d63230', '#f7d002', '#1A53C0', '#0D274B', '#ffffff'];

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	let wid = width * 0.9;
	let c = 14;
	let w = wid / c;
	background(255);
	strokeWeight(width * 0.0015);
	for (let i = 0; i < c; i++) {
		for (let j = 0; j < c; j++) {
			let x = w * i + (w / 2) + ((width - wid)/2);
			let y = w * j + (w / 2) + ((width - wid)/2);
			form(x, y, w);
		}
	}
}

function draw() {

}

function form(x, y, w) {
	let opt = int(random(12));
	push();
	translate(x, y);
	scale(pn(), 1);
	rotate(int(random(4)) * (TAU / 4));
	noFill();
	stroke(0);
	fill(random(colors));
	if (opt == 0) {
		line(w * 0.5, w * 0.5, -w * 0.5, w * 0.5);
	} else if (opt == 1) {
		line(-w / 2, w / 2, w / 2, w / 2);
		
		triangle(-w * 0.1, 0, -w * 0.1, w * 0.4, w * 0.1, w * 0.4);
		circle(-w * 0.1, -w * 0.1, w * 0.2);

		line(-w * 0.1, w * 0.4, -w * 0.1, w * 0.5);
		line(0, w * 0.4, 0, w * 0.5);
	} else if (opt == 2) {
		noFill();
		beginShape();
		vertex(-w * 0.5, w * 0.5);
		vertex(-w * 0.4, w * 0.5);
		vertex(-w * 0.4, w * 0.3);
		vertex(-w * 0.2, w * 0.3);
		vertex(-w * 0.2, w * 0.1);
		vertex(-w * 0, w * 0.1);
		vertex(-w * 0, -w * 0.1);
		vertex(w * 0.2, -w * 0.1);
		vertex(w * 0.2, -w * 0.3);
		vertex(w * 0.4, -w * 0.3);
		vertex(w * 0.4, -w * 0.5);
		vertex(w * 0.5, -w * 0.5);
		endShape();
	} else if (opt == 3) {
		line(-w * 0.1, -w * 0.5, -w * 0.1, w * 0.5);
		line(w * 0.1, -w * 0.5, w * 0.1, w * 0.5);
		for (let i = 0; i < 6; i++) {
			let yy = map(i, 0, 5, -w * 0.4, w * 0.4);
			line(-w * 0.1, yy, w * 0.1, yy);
		}
		line(-w * 0.3, w * 0.5, w * 0.3, w * 0.5);

	} else if (opt == 4) {
		rotate(PI);

		circle(0, -w * 0.1, w * 0.2);
		circle(0, -w * 0.3, w * 0.1);
		circle(w * 0.2, -w * 0.1, w * 0.1);
		circle(-w * 0.2, -w * 0.1, w * 0.1);
		line(0, 0, 0, w * 0.3);
		triangle(w * 0.2, w * 0.5, 0, w * 0.3, -w * 0.2, w * 0.5);
		line(-w * 0.5, w * 0.5, w * 0.5, w * 0.5);
	} else if (opt == 5) {
		line(-w * 0.5, -w * 0.5, -w * 0.1, -w * 0.5);
		line(w * 0.5, -w * 0.5, w * 0.1, -w * 0.5);
		line(w * 0.25, -w * 0.5, w * 0.25, -w * 0.3);
		line(-w * 0.25, -w * 0.5, -w * 0.25, -w * 0.3);
		rect(0, -w * 0.1, w * 0.5, w * 0.4);
		rect(w * 0.2, w * 0.4, w * 0.6, w * 0.2);
	} else if (opt == 6) {
		rect(0, 0, w * 0.4, w * 0.4);
		for (let i = 0; i < 3; i++) {
			let a = map(i, 0, 3, PI, TAU*0.75+PI);
			line(w * 0.15 * cos(a), w * 0.15 * sin(a), w * 0.3 * cos(a), w * 0.3 * sin(a));
		}
		circle(0, -w*0.3, w * 0.1);
		line(0, w*0.2, 0, w*0.5);
		line(-w*0.5, w*0.5, w*0.5, w*0.5);
	} else if (opt == 7) {
		line(w * 0.5, 0, -w * 0.5, 0);
		line(w * 0.5, w * 0.5, -w * 0.5, w * 0.5);
		for (let i = 0; i < 5; i++) {
			let xx = map(i, 0, 4, -w * 0.4, w * 0.4);
			line(xx, 0, xx, w * 0.5);
		}
	} else if (opt == 8) {
		line(-w * 0.5, -w * 0.5, -w * 0.5, w * 0.5);
		arc(-w * 0.5, 0, w * 0.7, w * 0.7, -PI / 2, PI / 2, PIE);
		line(w * 0.5, w * 0.5, -w * 0.5, w * 0.5);
		fill(random(colors));
		circle(0, w * 0.4, w * 0.2);
		fill(random(colors));
		circle(w * 0.3, w * 0.1, w * 0.4);
	} else if (opt == 9) {
		triangle(0, -w * 0.1, w * 0.1, w * 0.2, -w * 0.1, w * 0.2);
		circle(0, -w * 0.2, w * 0.2);

		line(w * 0.5, w * 0.2, -w * 0.5, w * 0.2);
		line(0, w * 0.2, -w * 0.1, w * 0.4);
		line(0, w * 0.2, w * 0.1, w * 0.4);
		line(-w * 0.5, -w * 0.5, -w * 0.5, w * 0.5);
		line(w * 0.5, -w * 0.5, w * 0.5, w * 0.5);
	} else if (opt == 10) {
		triangle(-w * 0.3, w * 0.5, 0, w * 0.2, w * 0.3, w * 0.5);
		noFill();
		arc(w * 0.5, 0, w, w, PI, PI * 1.5);
		arc(-w * 0.5, 0, w, w, PI * 1.5, TAU);
		line(0, 0, 0, w * 0.2);
		line(-w * 0.5, w * 0.5, w * 0.5, w * 0.5);

	} else if (opt == 11) {
		let st = w * 0.3
		line(-w * 0.5, -w * 0.4, w * 0.5, -w * 0.4);
		line(0, -w * 0.4, 0, -w * 0.3);
		triangle(0, -w * 0.3, w * 0.1, w * 0.1, -w * 0.1, w * 0.1);
		line(st, -w * 0.4, st, -w * 0.3);
		triangle(st, -w * 0.3, w * 0.1 + st, w * 0.25, -w * 0.1 + st, w * 0.25);
		line(-st, -w * 0.4, -st, -w * 0.3);
		triangle(-st, -w * 0.3, w * 0.1 + -st, w * 0.4, -w * 0.1 + -st, w * 0.4);
	}
	pop();
}

function pn() {
	return random() < 0.5 ? -1 : 1;
}