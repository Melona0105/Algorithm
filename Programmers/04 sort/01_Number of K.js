function solution(array, commands) {
  let result = [];
  commands.forEach((el) => {
    let [from, to, number] = el;
    let newArray = array.slice(from - 1, to);
    newArray.sort((a, b) => a - b);
    result.push(newArray[number - 1]);
  });
  return result;
}
