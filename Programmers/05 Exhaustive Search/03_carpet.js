function solution(brown, yellow) {
  // brown 8이상, 5,000 이하
  // yellow 1이상, 2,000,000이하
  // 가로길이 >= 세로길이
  return [brown, yellow];
}

const result1 = solution(10, 2);
const result2 = solution(8, 1);
const result3 = solution(24, 24);

console.log(result1);
console.log(result2);
console.log(result3);
