const sample1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const sample2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

function solution(matrixArr) {
  for (let offset = 0; offset <= Math.ceil(matrixArr.length / 2); offset += 1) {
    printClockwise(matrixArr, offset);
  }
}

function printClockwise(matrixArr, offset) {
  const end = matrixArr.length - 1 - offset;
  if (offset === end) {
    console.log(matrixArr[offset][offset]);
    return;
  }
  for (let i = offset; i < end; i += 1) {
    console.log(matrixArr[offset][i]);
  }
  for (let i = offset; i < end; i += 1) {
    console.log(matrixArr[i][end]);
  }
  for (let i = end; i > offset; i -= 1) {
    console.log(matrixArr[end][i]);
  }
  for (let i = end; i > offset; i -= 1) {
    console.log(matrixArr[i][offset]);
  }
}

solution(sample2);
