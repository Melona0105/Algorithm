function solution(jobs) {
  let total = jobs.length;
  let answer = 0;
  let now = 0;
  let queue = [];

  while (true) {
    let index = 0;
    while (true) {
      if (index >= jobs.length) break;
      if (jobs[index][0] <= now) {
        queue.push(jobs.splice(index, 1)[0]);
      } else {
        index += 1;
      }
    }

    if (queue.length === 0) {
      if (jobs.length === 0) {
        break;
      } else {
        now += 1;
      }
    } else {
      let minIndex = 0;
      for (let i = 1; i < queue.length; i++) {
        if (queue[minIndex][1] > queue[i][1]) {
          minIndex = i;
        }
      }
      now += queue[minIndex][1];
      answer += now - queue[minIndex][0];
      queue.splice(minIndex, 1);
    }
  }

  return Math.floor(answer / total);
}
