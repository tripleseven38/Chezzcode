
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
              count = count + 10
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






var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var queen = document.getElementById("queenpiece");
// starting square












function FindCoor(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo6").innerHTML = coords;  
}