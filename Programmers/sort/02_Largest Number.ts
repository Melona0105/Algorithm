function solution(numbers: number[]) {
  const answer: string = numbers
    .map((el) => el + "")
    .sort((a, b) => +(b + a) - +(a + b))
    .join("");

  if (answer[0] === "0") {
    return "0";
  }

  return answer;
}

const a = [3, 30, 34, 5, 9, 0];

const b = solution(a);
console.log(b);
