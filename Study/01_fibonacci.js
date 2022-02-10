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
