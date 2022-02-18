function solution(clothes) {
  const obj = {};
  for (let i = 0; i < clothes.length; i++) {
    const key = clothes[i][1];
    if (obj[key]) {
      obj[key].push(clothes[i][0]);
    } else {
      obj[key] = [clothes[i][0]];
    }
  }
  let result = 1;
  for (let key in obj) {
    result = result * (obj[key].length + 1);
  }
  return result - 1;
}
