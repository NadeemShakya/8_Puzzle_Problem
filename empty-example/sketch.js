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
let goalState = [8, 1, 2, "_", 4, 3, 7, 6, 5];
let counter = 0;
let nodeNumber = 0;
let flag = true;
function setup() {
  createGrid();
  while(flag) {
   applyOperation(record[record.length - 1], (record.length - 1));
  } 
}
function createGrid() {
  let state = {
    cells: [],
    visited: false,
    x: '',
    y: '',
    nodeNumber: nodeNumber
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
  console.table(currentState.cells);
  if(index === 0) {
    currentState.visited = true;    
  }else {
    if(currentState.visited === true) {
      applyOperation(record[index - 1], index - 1);
    }else {
      currentState.visited = true;
    }
  }
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
