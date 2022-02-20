function solution(numbers) {
  const data = numbers.split("");
  const set = new Set();

  dfs(set, data, "");

  console.log(set);

  return set.size;
}

function dfs(set, arr, calibration) {
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      let newCalibration = calibration + arr[i];
      let copied = [...arr];
      copied.splice(i, 1);

      if (isPrime(parseInt(newCalibration))) {
        set.add(parseInt(newCalibration));
      }
      dfs(set, copied, newCalibration);
    }
  }
}

// 소수를 확인하는 함수
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const sample = "011";

const output = solution(sample);

console.log(output);
