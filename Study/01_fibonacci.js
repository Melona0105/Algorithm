// * 재귀함수 이용
// 이 경우, 계속 반복해서 계산하게 된다.
function firstFibo(n) {
  if (n <= 2) {
    return 1;
  }
  return firstFibo(n - 1) + firstFibo(n - 2);
}

// * 재귀함수 + 메모이제이션 이용
function secondFibo(n, memo = []) {
  if (!memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  const res = secondFibo(n - 1, memo) + secondFibo(n - 2, memo);
  memo[n] = res;
  return res;
}

// * 반복문 이용
function fibonaci(n) {
  const fibo = [1, 1];

  // 인덱스를 증가하면서, 해당 인덱스는 이전 인덱스들의 합
  for (let i = 2; i <= n; i++) {
    //
    if (!fibo[i]) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
  }
  return fibo;
}

console.log(fibonaci(10));
