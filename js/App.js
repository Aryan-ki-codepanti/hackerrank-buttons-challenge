const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const btn5 = document.getElementById("btn5");

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

const matrixToGrid = () => {
    let a = [];
    for (let v of arr) {
        for (let i of v) a.push(i);
    }
    let element;
    for (let i = 0; i < a.length; i++) {
        element = document.getElementById("btn" + (i + 1));
        element.innerHTML = a[i];
    }
};

matrixToGrid();
btn5.addEventListener("click", e => {
    shift(arr);
    matrixToGrid();
});
