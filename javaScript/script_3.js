let value = prompt('tape un nombre pour la pyramide stp ?');


function createHalfPyramid (height) {
  
  for (var i = 0; i < height; i++) {
    var row = '';
    
    for (var j = 0; j < (height - i); j++) {
      row += ' ';
    }
    
    for (var k = 0; k < i+1; k++) {
      row += '*';
    }
    
    console.log(row);
  }
}

createHalfPyramid(value);