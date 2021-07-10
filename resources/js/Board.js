var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Draw First Pattern of Row
function drawFirstPattern(x, l) {
  var e = l / 8
  var r = l / 35
  var i;
  for (i = 0; i < 4; i+=1) {
    var a = e * i * 2 + r
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(a, x, e, e);
    ctx.fillStyle="white";
    ctx.fill();
  }
}

// Draw second pattern of row
function drawSecondPattern(y, l) {
  var c = document.getElementById("myCanvas");
  var n = l / 8
  var q = l / 35
  var b;
  for (b = 0; b < 4; b+=1) {
    var g = n * b * 2
    var h = g+n+q
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(h, y, n, n);
    ctx.fillStyle="white";
    ctx.fill();
  }
}

// Draw rows with first pattern
function DrawRows(x) {
  var c = x / 4
  var g;
  for (g = 0; g < x; g+=c) {
    drawFirstPattern(g, x);
  }
}

// Draw rows with second pattern
function DrawRows2(y) {
  var s = y / 8
  var d = y / 4
  var q;
  for (q = s; q < y; q+=d) {
    drawSecondPattern(q, y);
  }
}

// Write Numbers
function WriteNumbers(z) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var k = 0.9465 * z;
  var g = 0.00625 * z;
  var number;
  for (number = 1; number < 9; number++) {
    ctx.fillStyle = "white";
    ctx.font = "16px Georgia";
    ctx.fillText(number, g, k);
    k -= squarelength;
  }
}

 // Write Letters   
function WriteLetters(x) {
  var d = 1.02 * x
  var o = x / 8
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var k = 0.67 * o
  var number;
  for (number = 97; number < 105; number++) {
    var j = String.fromCharCode(number)
    ctx.fillStyle = "white";
    ctx.font = "16px Georgia";
    ctx.fillText(j, k, d);
    k += o
  }
}

function DrawBoard(x) {
  WriteLetters(x)
  WriteNumbers(x)
  DrawRows(x)
  DrawRows2(x)
}


DrawBoard(780)



