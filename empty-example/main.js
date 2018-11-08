
let record = [];
let cell = [1, 2, 3];

function setup() {
    record.push([4, 5, 6]);
    let tempVal = cell;
    temp(tempVal);

}

function temp(val) {
    val[0] = 65656565565;
    record.push(val);
}

