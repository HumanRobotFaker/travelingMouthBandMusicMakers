var canvas = document.getElementById("stars");
var ctx = canvas.getContext("2d");
var stars = [];

// Create 10 million stars
for (var i = 0; i < 10000000; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var size = Math.random() * 3;
  stars.push({x: x, y: y, size: size});
}

// Draw the stars
var draw = function() {
  for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

// Animate the stars
var animate = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  requestAnimationFrame(animate);
}

animate();
