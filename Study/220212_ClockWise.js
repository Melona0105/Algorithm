// const sample1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const sample2 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

const sample3 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

function clockWise(matrix) {
  let result = [];
  for (let i = 0; i <= Math.ceil(matrix.length / 2); i++) {
    cutMatrixSide(matrix, i);
  }

  function cutMatrixSide(matrix, offset) {
    let up = [];
    let right = [];
    let down = [];
    let left = [];
    let len = matrix.length - 1 - offset;
    if (offset === len) {
      result = result.concat([matrix[offset][offset]]);
      return;
    }
    for (let i = offset; i < len; i++) {
      up.push(matrix[offset][i]);
      right.push(matrix[i][len]);
      down.push(matrix[len][i + 1]);
      left.push(matrix[i + 1][offset]);
    }
    down.reverse();
    left.reverse();
    result = result.concat(up, right, down, left);
  }
  return result.join(" ");
}

const aa = clockWise(sample3);
console.log(aa);
