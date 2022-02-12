function solution(progresses, speeds) {
  const duringTime = [];
  for (let i = 0; i < progresses.length; i++) {
    duringTime.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  const result = [];
  checkArray(duringTime, result);
  return result;
}

function checkArray(array, result) {
  let currentWork = array[0];
  let nextIndex = array.findIndex((el) => el > currentWork);

  if (nextIndex !== -1) {
    result.push(nextIndex);
  } else {
    result.push(array.length);
    return;
  }

  checkArray(array.slice(nextIndex, array.length), result);
}
