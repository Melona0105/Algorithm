function solution(genres, plays) {
  // 같은 장르는 최대 2개까지 저장 그거를 개수 순서대로
  const data = {};
  const totalPlays = {};
  for (let i = 0; i < genres.length; i++) {
    if (data[genres[i]]) {
      data[genres[i]][i] = plays[i];
    } else {
      data[genres[i]] = {};
      data[genres[i]][i] = plays[i];
    }

    if (totalPlays[genres[i]]) {
      totalPlays[genres[i]] += plays[i];
    } else {
      totalPlays[genres[i]] = plays[i];
    }
  }
  function getObjPriority(obj) {
    const result = [];
    for (let key in obj) {
      result.push([obj[key], key]);
    }
    return result.sort((a, b) => b[0] - a[0]).map((el) => el[1]);
  }
  const getPriority = getObjPriority(totalPlays);

  for (let key in data) {
    data[key] = getObjPriority(data[key]);
  }

  // 이거를 getPriority 순으로 순회하면서 2개씩 컷
  let result = [];
  for (let i = 0; i < getPriority.length; i++) {
    const target = getPriority[i];
    console.log(target);
    result = result.concat(data[target].slice(0, 2));
  }
  return result.map((el) => +el);
}

const a = solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

console.log(a);
