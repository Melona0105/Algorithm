function solution(operations) {
  let result = [];

  // 연산이 존재하는동안 반복
  while (operations.length) {
    const now = operations.shift().split(" ");
    const method = now[0];
    const value = +now[1];

    if (method === "I") {
      result.push(value);
      result.sort((a, b) => a - b);
    } else if (method === "D") {
      if (value === 1) {
        result.pop();
      } else if (value === -1) {
        result.shift();
      }
    }
  }
  if (result.length === 0) {
    return [0, 0];
  } else {
    return [result[result.length - 1], result[0]];
  }
}
