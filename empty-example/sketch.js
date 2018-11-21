class Cell {
  constructor() {
    this.value;
    this.i;
    this.j;
  }
}
let rows = 3;
let cols = 3;
let record = [];
let initialState = [1,"_", 2, 8, 4, 3, 7, 6, 5];

// indian problem
// let initialState = [2, 8, 3, 1, 6, 4, 7, "_", 5];
// let goalState = [1, 2, 3, 8, "_", 4, 7, 6, 5];

// most lengthy traversal without backtracking.
// let goalState = [8, 1, 2, "_", 4, 3, 7, 6, 5];

// lengthy traversal without backtracking.
let goalState = [  1, 6, 4, 8,5, 2, "_", 7, 3];

// Backtracking when leftSlider is Disabled.
// let goalState = [1, 4, "_", 8, 3, 2, 7,6, 5];

let counter = 0;
let nodeNumber = 0;
let flag = true;
function setup() {
  createCanvas(windowWidth, 5000);
  background(0);
  textSize(9);
  createGrid();
  while(flag) {
   applyOperation(record[record.length - 1], (record.length - 1));

  } 
  dipslayState(record);
}
function dipslayState(record) {
  let rectOffsetX = (windowWidth / 2) - 30;
  let rectOffsetY = 10;
  let textOffsetY = 12;
  let textOffsetX = 5;
  noFill();
  stroke(255);
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        noFill();
        stroke(255);
        rect((i * 15) + rectOffsetX, (j * 15) + rectOffsetY, 15, 15);  
        noStroke();
        fill(255);
        text(record[0].cells[j][i].value, (i * 15) + rectOffsetX + textOffsetX, (j * 15) + rectOffsetY + textOffsetY);
    }
  }
  record[0].x = (windowWidth / 2);
  record[0].y = 10;

  for(let i = 0; i < record.length; i++) {
    let tempStateHolder = [];
    for(let j = 0; j < record.length; j++) {
      if(record[j].parent === record[i].nodeNumber) {
        tempStateHolder.push(record[j]);
      }
    }
    // console.log(nodeNumber);
    // console.log(tempStateHolder);
    if(tempStateHolder.length === 1) {
      let rectOffsetX = record[i].x;
      let rectOffsetY = record[i].y + 60;
      let textOffsetY = 12;
      let textOffsetX = 5;
      noFill();
      stroke(255);
      line(record[i].x + 22.5, record[i].y + 45, record[i].x + 22.5, rectOffsetY);
      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            noFill();
            stroke(255);
            rect((i * 15) + rectOffsetX, (j * 15) + rectOffsetY, 15, 15);  
            tempStateHolder[0].x = rectOffsetX + 30;
            tempStateHolder[0].y = rectOffsetY;
            noStroke();
            fill(255);
            text(tempStateHolder[0].cells[j][i].value, (i * 15) + rectOffsetX + textOffsetX, (j * 15) + rectOffsetY + textOffsetY);
        }
      }      
    }else if(tempStateHolder.length === 4) {
      let rectOffsetX = record[i].x;
      let rectOffsetY = record[i].y + 60;
      let textOffsetY = 12;
      let textOffsetX = 5;
      for(let n = 0; n < tempStateHolder.length; n++) {
        tempStateHolder[n].x = (rectOffsetX + 90) - 80 * n;
        tempStateHolder[n].y = rectOffsetY;
        for(let i = 0; i < 3; i++) {
          for(let j = 0; j < 3; j++) {
              noFill();
              stroke(255);
              rect((i * 15) + (rectOffsetX + 90) - 80 * n, (j * 15) + rectOffsetY, 15, 15);  
              noStroke();
              fill(255);
              text(tempStateHolder[n].cells[j][i].value, (i * 15) +(rectOffsetX + 90) - 80 * n + textOffsetX, (j * 15) + rectOffsetY + textOffsetY);
          }
        }            
      }
    }else if(tempStateHolder.length === 3) {
      let rectOffsetX = record[i].x + 50;
      let rectOffsetY = record[i].y + 60;
      let textOffsetY = 12;
      let textOffsetX = 5;
      for(let n = 0; n < tempStateHolder.length; n++) {
        tempStateHolder[n].x = (rectOffsetX + 30) - 80 * n;
        tempStateHolder[n].y = rectOffsetY;
        stroke(255);
        line(record[i].x - 7.5 , record[i].y + 45, rectOffsetX + 22.5 - 80 * n, rectOffsetY);
        for(let i = 0; i < 3; i++) {
          for(let j = 0; j < 3; j++) {
              noFill();
              stroke(255);
              rect((i * 15) + (rectOffsetX) - 80 * n, (j * 15) + rectOffsetY, 15, 15);  
              noStroke();
              fill(255);
              text(tempStateHolder[n].cells[j][i].value, (i * 15) + (rectOffsetX) - 80 * n + textOffsetX, (j * 15) + rectOffsetY + textOffsetY);
          }
        }            
      }      
    }else if(tempStateHolder.length === 2) {
      let rectOffsetX = record[i].x + 35;
      let rectOffsetY = record[i].y + 60;
      let textOffsetY = 12;
      let textOffsetX = 5;
      for(let n = 0; n < tempStateHolder.length; n++) {
        stroke(255);
        line(record[i].x - 7.5, record[i].y + 45,(rectOffsetX) + 22.5 - 130 * n, rectOffsetY);
        tempStateHolder[n].x = (rectOffsetX) - 130 * n;
        tempStateHolder[n].y = rectOffsetY;
        for(let i = 0; i < 3; i++) {
          for(let j = 0; j < 3; j++) {
              noFill();
              stroke(255);
              rect((i * 15) + (rectOffsetX) - 130 * n, (j * 15) + rectOffsetY, 15, 15);  
              noStroke();
              fill(255);
              text(tempStateHolder[n].cells[j][i].value, (i * 15) + (rectOffsetX) - 130 * n + textOffsetX, (j * 15) + rectOffsetY + textOffsetY);
          }
        }            
      }        
    }
  }
}
function createGrid() {
  let state = {
    cells: [],
    visited: false,
    x: '',
    y: '',
    nodeNumber: nodeNumber,
  };
  counter = 0;
  for(let i = 0; i < rows; i++) {
    state.cells[i] = []; 
    for(let j = 0; j < cols; j++) {
      state.cells[i][j] = new Cell();
      state.cells[i][j].value = initialState[counter];
      state.cells[i][j].i = i;
      state.cells[i][j].j = j;
      counter++;
    }
  }
    record.push(state);
}
function applyOperation(currentState, index) {
  // console.log(index);
  if(currentState.visited) {
    applyOperation(record[index - 1], index - 1);
  }else if(!currentState.visited){
    currentState.visited = true;
    console.log(currentState.cells);

    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        if(currentState.cells[i][j].value === '_') {
          // (i, j - 1)
          // Left Slide
          if(j - 1 >= 0) {
            leftSlider(currentState, i, j);
          }               
          // (i, j + 1)
          // Right Slide
          if(j + 1 <= 2) {
            rightSlider(currentState, i, j);
          }
          // (i - 1, j)
          // Up slide
          if(i - 1 >= 0) {
            upSlider(currentState, i, j);
          }
          // (i + 1, j)
          // Down Slide
          if(i + 1 <= 2) {
            downSlider(currentState, i, j);
          }
      
        }
      }
    }
  }
  // if(index === 0) {
  //   currentState.visited = true;    
  // }else {
  //   if(currentState.visited === true) { 
  //       applyOperation(record[index - 1], index - 1);
  //     // console.log(record[index - 1], index - 1);
  //   }else {
  //     currentState.visited = true;
  //   }
  // }

}
function leftSlider(parent, parentX, parentY) {
  let state = {
    cells: [],
    visited: false,
    x: '',  
    y: '',
    nodeNumber: nodeNumber + 1,
  };
  nodeNumber++;
  counter = 0;
  for(let i = 0; i < rows; i++) {
    state.cells[i] = []; 
    for(let j = 0; j < cols; j++) {
      state.cells[i][j] = new Cell();
      if(i == parentX && j == parentY - 1) {
        state.cells[i][j].value = '_';
      }else if(i == parentX && j == parentY) {
        state.cells[i][j].value = parent.cells[parentX][parentY - 1].value;
      }else {
       state.cells[i][j].value = parent.cells[i][j].value;
      }
      state.cells[i][j].i = i;
      state.cells[i][j].j = j;
      state.parent = parent.nodeNumber;
      counter++;
    }
  }
  if(!goalStateChecker(state.cells)) {
    if(repetitionChecker(state.cells)) {
      record.push(state);
    }
  }else {
    record.push(state);
    console.log("The goal state reached here:");
    console.table(state.cells);
    flag = false;
  }
}
function rightSlider(parent, parentX, parentY) {
  let state = {
    cells: [],
    visited: false,
    x: '',
    y: '',
    nodeNumber: nodeNumber + 1,
  };
  nodeNumber++;
  counter = 0;
  for(let i = 0; i < rows; i++) {
    state.cells[i] = []; 
    for(let j = 0; j < cols; j++) {
      state.cells[i][j] = new Cell();
      if(i == parentX && j == parentY + 1) {
        state.cells[i][j].value = '_';
      }else if(i == parentX && j == parentY) {
        state.cells[i][j].value = parent.cells[parentX][parentY + 1].value;
      }else {
       state.cells[i][j].value = parent.cells[i][j].value;
      }
      state.cells[i][j].i = i;
      state.cells[i][j].j = j;
      state.parent = parent.nodeNumber;
      counter++;
    }
  }
  if(!goalStateChecker(state.cells)) {
    if(repetitionChecker(state.cells)) {
      record.push(state);
    }
  }else {
    record.push(state);    
    console.log("The goal state reached here:");
    console.table(state.cells);
    flag = false;
  }
}
function upSlider(parent, parentX, parentY) {
  let state = {
    cells: [],
    visited: false,
    x: '',
    y: '',
    nodeNumber: nodeNumber + 1,
  };
  nodeNumber++;
  counter = 0;
  for(let i = 0; i < rows; i++) {
    state.cells[i] = []; 
    for(let j = 0; j < cols; j++) {
      state.cells[i][j] = new Cell();
      if(i == parentX - 1 && j == parentY) {
        state.cells[i][j].value = '_';
      }else if(i == parentX && j == parentY) {
        state.cells[i][j].value = parent.cells[parentX - 1][parentY].value;
      }else {
       state.cells[i][j].value = parent.cells[i][j].value;
      }
      state.cells[i][j].i = i;
      state.cells[i][j].j = j;
      state.parent = parent.nodeNumber;
      counter++;
    }
  }
  if(!goalStateChecker(state.cells)) {
    if(repetitionChecker(state.cells)) {
      record.push(state);
    }
  }else {
    record.push(state);
    console.log("The goal state reached here:");
    console.table(state.cells);
    flag = false;
  }
}
function downSlider(parent, parentX, parentY) {
  let state = {
    cells: [],
    visited: false,
    x: '',
    y: '',
    nodeNumber: nodeNumber + 1,
  };
  nodeNumber++;
  counter = 0;
  for(let i = 0; i < rows; i++) {
    state.cells[i] = []; 
    for(let j = 0; j < cols; j++) {
      state.cells[i][j] = new Cell();
      if(i == parentX + 1 && j == parentY) {
        state.cells[i][j].value = '_';
      }else if(i == parentX && j == parentY) {
        state.cells[i][j].value = parent.cells[parentX + 1][parentY].value;
      }else {
       state.cells[i][j].value = parent.cells[i][j].value;
      }
      state.cells[i][j].i = i;
      state.cells[i][j].j = j;
      state.parent = parent.nodeNumber;
      counter++;
    }
  }
  if(!goalStateChecker(state.cells)) {
    if(repetitionChecker(state.cells)) {
      record.push(state);
    }
  }else {
    record.push(state);
    console.log("The goal state reached here:");
    console.table(state.cells);
    flag = false;
  }
}
function repetitionChecker(cells) {
  for(let n = 0; n < record.length; n++) {
    if(record[n].cells[0][0].value === cells[0][0].value &&
       record[n].cells[0][1].value === cells[0][1].value &&
       record[n].cells[0][2].value === cells[0][2].value &&
       record[n].cells[1][0].value === cells[1][0].value && 
       record[n].cells[1][1].value === cells[1][1].value && 
       record[n].cells[1][2].value === cells[1][2].value &&
       record[n].cells[2][0].value === cells[2][0].value &&
       record[n].cells[2][1].value === cells[2][1].value &&
       record[n].cells[2][2].value === cells[2][2].value) 
       {
        return false;
    }
  }
  return true;
}
function goalStateChecker(cells) {
  let _1DCells = [];
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      _1DCells.push(cells[i][j].value);
    }
  }
  // array comparison using string conversion method(not the safest method)
  if(_1DCells.toString() === goalState.toString()) {
    return true;
  }
  return false;
}
