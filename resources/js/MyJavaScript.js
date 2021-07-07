var squarelength = 780 / 8;
var squarestartx = 780 / 30;
var squarestarty = 780 / 1.04;
var pieces = [["queen", 0], ["rook", 0], ["rook", 0], ["pawn", 0]]
var legalmoves = []
var moves = [0, 3]
var plays = [3]
var queenclick = 0
var works = 0
var clickedsquare = [33]
var total = 1/pieces.length

// If not noreen, don't read
const squares = []
for (i = 1; i < 65; i++) {
  if (i % 8 == 0) {
    var inumx = 8
    var inter2 = inumx-1
    var inter3 = inter2 * squarelength
    var ix = inter3+squarestartx
  } else {
    var inumx = i % 8
    var inter2 = inumx-1
    var inter3 = inter2 * squarelength
    var ix = inter3+squarestartx
  }
  var inumy = Math.ceil(i / 8)
  var intermediate = (inumy-1)*squarelength
  var iy = squarestarty-intermediate
  squares.push([i, ix, iy + 20])
  
}
// Start Variables


/*================================
      DRAW BOARD FUNCTIONS
================================*/

// Draw first pattern of row
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
  var n = l / 8
  var q = l / 35
  var b;
  for (b = 0; b < 4; b+=1) {
    var g = n * b * 2
    var h = g+n+q
    var c = document.getElementById("myCanvas");
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
  DrawRows(x)
  DrawRows2(x)
  WriteLetters(x)
  WriteNumbers(x)
}

function FindSquare(x, y) {
  for (i = 0; i < 64; i++) {
    var xsquare = squares[i][1] + 97.5
    var ysquare = squares[i][2] - 97.5
    if (x > squares[i][1]) {
      if (x < xsquare) {
        if (y < squares[i][2]) {
          if (y > ysquare) {
            clickedsquare.push(i)
            
          }
        }
      }
    } 
  }
}

// Find Orthogonal Legal Moves
function FindOrthogonal(startsquare, endsquare) {
  var count = 0
  // horizontal move
  if (squares[startsquare][2] == squares[endsquare][2]) {
    // Check if y value between start and end is same
    if (squares[startsquare][1] > squares[endsquare][1]) {
      // Finds direction between start and end
      var gridx = squares[startsquare][1] - squares[endsquare][1]
      var gridx2 = gridx / 97.5 + 0.1
      var gridx3 = gridx2 +0.901
      var gridx4 = gridx3 - 0.01
      // Intermediate Calculations to find amount of squares to endsquare
      while (count < gridx2) {
        var checksquarex = squares[startsquare][0] - count
        for (d = 0; d < pieces.length; d++) {
          var num = pieces[d][1]
          if (checksquarex != squares[num][0]) {
            count = count + total
          } else {
            count = count + 9
            document.getElementById("demo").innerHTML = "Not Valid"
          }
        }
      }
      
      if (count < gridx3) {
        if (count > gridx4) {
          legalmoves.push(endsquare)
          document.getElementById("demo").innerHTML = "It works"
        }
      }
    }
    else if (squares[startsquare][1] < squares[endsquare][1]) {
      var gridy = squares[endsquare][1] - squares[startsquare][1]
      var gridy2 = gridy / 97.5 + 0.1
      var gridy3 = gridy2 +0.901
      var gridy4 = gridy3 - 0.01
      while (count < gridy2) {
        var checksquarey = squares[startsquare][0] - count
        for (d = 0; d < pieces.length; d++) {
          var num = pieces[d][1]
          if (checksquarey != squares[num][0]) {
            count = count + total
          } else {
            count = count + 9
            document.getElementById("demo").innerHTML = "Not Valid"
          }
        }
      }

      if (count < gridy3) {
        if (count > gridy4) {
          legalmoves.push(endsquare)
          document.getElementById("demo").innerHTML = "It works"
        }
      }
    }
  }
  if (squares[startsquare][1] == squares[endsquare][1]) {
    if (squares[startsquare][2] < squares[endsquare][2]) {
      var griddown = squares[endsquare][2] - squares[startsquare][2]
      var griddown2 = griddown / 97.5 - 0.01
      var griddown3 = griddown2 +0.02
      while (count < griddown2) {
        var countdown = count * 8
        var checksquaredown = squares[startsquare][0] - countdown
        for (d = 0; d < pieces.length; d++) {
          var num = pieces[d][1]
          if (checksquaredown != squares[num][0]) {
            count = count + total
          } else {
            count = count + 9
            document.getElementById("demo").innerHTML = "Not Valid"
          }
        }
      }
     
        
      if (count < griddown3) {
        if (count > griddown2) {
          legalmoves.push(endsquare)
          document.getElementById("demo").innerHTML = "Itqworks"
        }
      }
    } else if (squares[startsquare][2] > squares[endsquare][2]) {
      var gridup = squares[startsquare][2] - squares[endsquare][2]
      var gridup2 = gridup / 97.5 - 0.01
      var gridup3 = gridup2 +0.02
      while (count < gridup2) {
        var countup = count * 8
        var checksquareup = squares[startsquare][0] + countup
        for (d = 0; d < pieces.length; d++) {
          var num = pieces[d][1]
          document.getElementById("demo2").innerHTML = squares[endsquare][0]
          if (checksquareup != squares[num][0]) {
            count = count + total
          } else {
            count = count + 9
            document.getElementById("demo").innerHTML = "Not Valid"
          }
        }
      }
     

      if (count < gridup3) {
        if (count > gridup2) {
          legalmoves.push(endsquare)
          document.getElementById("demo").innerHTML = "it works!"
        }
      }
    }
  }
}

function FindDiagonal(startsquare, endsquare) {
  var count = 0
  var xdifference = squares[startsquare][1] - squares[endsquare][1]
  var ydifference = squares[startsquare][2] - squares[endsquare][2]
  var absolutex = Math.abs(xdifference)
  var absolutey = Math.abs(ydifference)
  if (absolutex == absolutey) {
    if (squares[startsquare][1] > squares[endsquare][1]) {
      if (squares[startsquare][2] > squares[endsquare][2]) {
        // Bottom Right to Top Left
        var gridRL = squares[startsquare][2] - squares[endsquare][2]
        var gridRL2 = gridRL / 97.5 - 0.01
        var gridRL3 = gridRL2 +0.02
        while (count < gridRL2) {
          var countRL = count * 7
          var checksquareRL = squares[startsquare][0] + countRL
          for (d = 0; d < pieces.length; d++) {
            var num = pieces[d][1]
            document.getElementById("demo2").innerHTML = squares[endsquare][0]
            if (checksquareRL != squares[num][0]) {
              count = count + total
            } else {
              count = count + 9
              document.getElementById("demo").innerHTML = "Not Valid"
            }
          }
        }
        if (count < gridRL3) {
          if (count > gridRL2) {
            legalmoves.push(endsquare)
            document.getElementById("demo").innerHTML = "it works!"
          }
        }
      }
      if (squares[startsquare][2] < squares[endsquare][2]) {
        // Top Right to Bottom Left
        var gridTRL = squares[endsquare][2] - squares[startsquare][2]
        var gridTRL2 = gridTRL / 97.5 - 0.01
        var gridTRL3 = gridTRL2 +0.02
        while (count < gridTRL2) {
          var countTRL = count * 9
          var checksquareTRL = squares[startsquare][0] - countTRL
          for (d = 0; d < pieces.length; d++) {
            var num = pieces[d][1]
            if (checksquareTRL != squares[num][0]) {
              count = count + total
            } else {
              count = count + 9
              document.getElementById("demo").innerHTML = "Not Valid"
            }
          }
        }
        if (count < gridTRL3) {
          if (count > gridTRL2) {
            legalmoves.push(endsquare)
            document.getElementById("demo").innerHTML = "it works!"
          }
        }
      }
    }
    if (squares[startsquare][1] < squares[endsquare][1]) {
      if (squares[startsquare][2] > squares[endsquare][2]) {
        // Bottom Left to Top Right
        var gridLR = squares[startsquare][2] - squares[endsquare][2]
        var gridLR2 = gridLR / 97.5 - 0.01
        var gridLR3 = gridLR2 +0.02
        while (count < gridLR2) {
          var countLR = count * 9
          var checksquareLR = squares[startsquare][0] + countLR
          for (d = 0; d < pieces.length; d++) {
            var num = pieces[d][1]
            document.getElementById("demo2").innerHTML = squares[endsquare][0]
            if (checksquareLR != squares[num][0]) {
              count = count + total
            } else {
              count = count + 9
              document.getElementById("demo").innerHTML = "Not Valid"
            }
          }
        }
        if (count < gridLR3) {
          if (count > gridLR2) {
            legalmoves.push(endsquare)
            document.getElementById("demo").innerHTML = "it works!"
          }
        }
      }
      if (squares[startsquare][2] < squares[endsquare][2]) {
        // Top Left to Bottom Right
        var gridTLR = squares[endsquare][2] - squares[startsquare][2]
        var gridTLR2 = gridTLR / 97.5 - 0.01
        var gridTLR3 = gridTLR2 +0.02
        while (count < gridTLR2) {
          var countTLR = count * 7
          var checksquareTLR = squares[startsquare][0] - countTLR
          for (d = 0; d < pieces.length; d++) {
            var num = pieces[d][1]
            if (checksquareTLR != squares[num][0]) {
              count = count + total
            } else {
              count = count + 9
              document.getElementById("demo").innerHTML = "Not Valid"
            }
          }
        }
        if (count < gridTLR3) {
          if (count > gridTLR2) {
            legalmoves.push(endsquare)
            document.getElementById("demo").innerHTML = "it works!"
          }
        }
      }
    }
  }
}

/* If Top left to Bottom Right
Find Distance between y-value of start and y-value of end 




*/




var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var queen = document.getElementById("queenpiece");
ctx.drawImage(queen, squares[36][1], squares[36][2]-77.5);
// starting square

DrawBoard(780)

for (i = 0; i < 64; i++) {
  FindDiagonal(36, i)
  FindOrthogonal(36, i)
}

document.getElementById("demo4").innerHTML = legalmoves








