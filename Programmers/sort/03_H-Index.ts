function solution(citations: number[]): any {
  // 큰 순서대로 정렬
  citations.sort((a, b) => b - a);

  // 현재 인용횟수
  let cited: number = 0;
  // 순회하면서, 인용횟수가 인덱스보다 클 경우에만, 인용횟수를 올려준다.
  for (let i = 0; i < citations.length; i++) {
    console.log(i, citations[i]);
    if (i < citations[i]) {
      cited++;
    }
  }
  return cited;
}

const sample = [3, 0, 6, 1, 5];
const result = solution(sample);
console.log(result);
