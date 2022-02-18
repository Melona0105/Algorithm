function solution(numbers) {
  var answer = numbers
    .map(function (el) {
      return el + "";
    })
    .sort(function (a, b) {
      return +(b + a) - +(a + b);
    })
    .join("");
  if (answer[0] === "0") {
    return "0";
  }
  return answer;
}
var a = [3, 30, 34, 5, 9, 0];
var b = solution(a);
console.log(b);
