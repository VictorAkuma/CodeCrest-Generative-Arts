
let colors = ['#ffffff', '#000000'];
let ctx;

function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	ctx = drawingContext;
	let numRows = 4;
	let numCols = 4;
	let cellW = width / numCols;
	let cellH = height / numRows;
	let offset = min(cellH, cellW) / 10;
	let patternCounter = 1;
	background(255);
	push();
	translate(width / 2, height / 2);
	scale(0.87);
	translate(-width / 2, -height / 2);
	for (let j = 0; j < numRows; j++) {
		for (let i = 0; i < numCols; i++) {
			let x = cellW * i + (cellW / 2);
			let y = cellH * j + (cellH / 2);
			let col1 = col2 = '🐊🐊🐊🐊🐊🐊';
			while (col1 == col2) {
				col1 = random(colors);
				col2 = random(colors);
			}
			let patternName = 'drawPattern' + String(nf(patternCounter, 2));
			let sep = 4;
			let ang = int(random(4)) * (TAU / 4);
			push();
			translate(x, y);
			rotate(ang);
			scale(random([-1, 1]), random([-1, 1]));
			window[patternName](0, 0, cellW - offset, cellH - offset, sep, col1, col2);
			noFill();
			stroke(0);
			strokeWeight(width * 0.005);
			rect(0, 0, cellW - offset, cellH - offset);
			stroke(255);
			strokeWeight(width * 0.001);
			rect(0, 0, cellW - offset, cellH - offset);
			pop();
			patternCounter++;
			if (patternCounter > 16) patternCounter = 1;
		}
	}
	pop();
}

function draw() {

}

function drawPattern01(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			if ((i + j) % 2 == 0) {
				rect(cellX, cellY, cellSize, cellSize);
			}
		}
	}
	pop();
}

function drawPattern02(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	strokeWeight(cellSize * 0.1);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			noFill();
			stroke(col2);
			rect(cellX, cellY, cellSize, cellSize);
			fill(col2);
			noStroke();
			rect(cellX, cellY, cellSize * 0.5, cellSize * 0.5);
		}
	}
	pop();
}

function drawPattern03(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	strokeWeight(maxSide * 0.005);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			fill(col2);
			noStroke();
			circle(cellX, cellY, cellSize * 0.5);
		}
	}
	pop();
}

function drawPattern04(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			rect(cellX, cellY, cellSize / 2, cellSize * 1.01);
		}
	}
	pop();
}

function drawPattern05(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			beginShape();
			vertex(cellX - (cellSize * 0.5), cellY - (cellSize * 0.503));
			vertex(cellX + (cellSize * 0.5), cellY - (cellSize * 0.503));
			vertex(cellX - (cellSize * 0.5), cellY + (cellSize * 0.503));
			vertex(cellX + (cellSize * 0.5), cellY + (cellSize * 0.503));
			endShape(CLOSE);
		}
	}
	pop();
}

function drawPattern06(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	noFill();
	stroke(col2);
	strokeWeight(maxSide * 0.05);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			if ((i + j) % 2 == 0) {
				arc(cellX, cellY, cellSize, cellSize, 0, PI);
			} else {
				arc(cellX, cellY, cellSize, cellSize, PI, TAU);
			}
		}
	}
	pop();
}

function drawPattern07(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	noFill();
	stroke(col2);
	strokeWeight(cellSize * 0.1);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			push();
			translate(cellX, cellY);
			for (let a = 0; a < 4; a++) {
				rotate(PI / 2);
				line(cellSize * 0.1, cellSize * 0.1, cellSize * 0.4, cellSize * 0.4);
			}
			pop();
		}
	}
	pop();
}

function drawPattern08(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	noFill();
	stroke(col2);
	strokeWeight(cellSize * 0.1);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			line(cellX + (cellSize * 0.25), cellY - (cellSize * 0.25), cellX - (cellSize * 0.25), cellY + (cellSize * 0.25));
			beginShape();
			vertex(cellX - (cellSize * 0.5), cellY);
			vertex(cellX - (cellSize * 0.5), cellY - (cellSize * 0.25));
			vertex(cellX + (cellSize * 0.5), cellY + (cellSize * 0.25));
			vertex(cellX + (cellSize * 0.5), cellY);
			endShape();
		}
	}
	pop();
}

function drawPattern09(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	noFill();
	stroke(col2);
	strokeWeight(cellSize * 0.1);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			if ((i + j) % 2 == 0) {
				rect(cellX, cellY, cellSize * 2, cellSize);
			}
		}
	}
	pop();
}

function drawPattern10(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			push();
			translate(cellX, cellY);
			rotate(PI / 4);
			ellipse(0, 0, cellSize * 1.25, cellSize * 0.3);
			circle(0, cellSize * 0.35, cellSize * 0.3);
			circle(0, -cellSize * 0.35, cellSize * 0.3);
			pop();
		}
	}
	pop();
}

function drawPattern11(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			push();
			translate(cellX, cellY);
			if ((i + j) % 2 == 0) {
				rotate(PI / 2);
			}
			rect(0, 0, cellSize / 3, cellSize);
			pop();
		}
	}
	pop();
}

function drawPattern12(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			push();
			translate(cellX, cellY);
			if ((i + j) % 2 == 0) {
				rotate(PI / 2);
			} 
			rect(cellSize * 0.3, 0, cellSize * 0.2, cellSize, cellSize * 0.1);
			rect(0, 0, cellSize * 0.2, cellSize, cellSize * 0.1);
			rect(-cellSize * 0.3, 0, cellSize * 0.2, cellSize, cellSize * 0.1);
			pop();
		}
	}
	pop();
}

function drawPattern13(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			triangle(cellX - (cellSize / 2), cellY - (cellSize / 2), cellX + (cellSize / 2), cellY - (cellSize / 2), cellX - (cellSize / 2), cellY + (cellSize / 2));
		}
	}
	pop();
}

function drawPattern14(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			push();
			translate(cellX, cellY);
			if ((i + j) % 2 == 0) {
				fill(col2);
				rect(0, 0, cellSize, cellSize);
				fill(col1);
			} else {
				fill(col2);
			}
			for (let a = 0; a < 4; a++) {
				rotate(TAU / 4);
				arc(cellSize * 0.5, cellSize * 0.25, cellSize * 0.5, cellSize * 0.5, PI * 0.49, PI * 1.52, CHORD);
			}
			pop();
		}
	}
	pop();
}

function drawPattern15(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			push();
			translate(cellX, cellY);
			for (let a = 0; a < 4; a++) {
				rotate(TAU / 4);
				arc(cellSize * 0.3, cellSize * 0.3, cellSize * 0.4, cellSize * 0.4, -PI / 2, PI, PIE);
			}
			pop();
		}
	}
	pop();
}

function drawPattern16(x, y, w, h, num, col1, col2) {
	let maxSide = max(w, h);
	let cellSize = maxSide / num;
	push();
	translate(x, y);
	noStroke();
	fill(col1);
	rect(0, 0, w, h);
	translate(- (maxSide / 2), - (maxSide / 2));
	ctx.clip();
	fill(col2);
	for (let j = 0; j < num; j++) {
		for (let i = 0; i < num; i++) {
			let cellX = i * cellSize + (cellSize / 2);
			let cellY = j * cellSize + (cellSize / 2);
			push();
			translate(cellX, cellY);
			if ((i + j) % 2 == 0) {
				rotate(PI / 2);
			}
			fill(col2);
			rect(0, 0, cellSize * 0.25, cellSize);
			fill(col1);
			rect(0, 0, cellSize, cellSize * 0.5);
			fill(col2);
			rect(0, 0, cellSize * 1.1, cellSize * 0.25);
			pop();
		}
	}
	pop();
}
