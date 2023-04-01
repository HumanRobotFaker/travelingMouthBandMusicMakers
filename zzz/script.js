const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const notes = [];
const colors = ['#5bc0de', '#d9534f', '#f0ad4e', '#5cb85c'];

class Note {
  constructor(x, y, radius, color, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.angle = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.angle += 0.1;
    this.draw();
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }
}

function init() {
  for (let i = 0; i < 50; i++) {
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = Math.random() * 10 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const speed = Math.random() * 3 + 1;
    notes.push(new Note(x, y, radius, color, speed));
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < notes.length; i++) {
    notes[i].update();
  }
}

init();
animate();
