const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const printArr = arr => {
    for (let a of arr) console.log(a.toString());
};

const shift = a => {
    let carryTop, carryRight, carryBottom;

    // Top row
    carryTop = a[0][2];
    a[0][2] = a[0][1];
    a[0][1] = a[0][0];

    // Right row
    carryRight = a[2][2];
    a[2][2] = a[1][2];
    a[1][2] = carryTop;

    // Bottom Row
    carryBottom = a[2][0];
    a[2][0] = a[2][1];
    a[2][1] = carryRight;

    // Left Row
    a[0][0] = a[1][0];
    a[1][0] = carryBottom;
};

printArr(arr);
console.log();
shift(arr);
printArr(arr);
console.log();
shift(arr);
printArr(arr);
console.log();