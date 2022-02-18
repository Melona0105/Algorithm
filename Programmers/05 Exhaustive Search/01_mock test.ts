function solution(answers: number[]): number[] {
  let checkAnswers = (user: number[], answers: number[]) => {
    let len: number = user.length;
    let count: number = 0;
    // 바로 answers를 참조하면, 다음 에 받아올 때 빈 값을 받아온다.
    let newAnswer: number[] = answers.slice();
    // 답이 존재하는 동안 반복한다.
    while (newAnswer.length) {
      // 답을 답변들의 길이로 자른다.
      let sliceAnswer = newAnswer.splice(0, len);
      // 답변들과 답이 일치한다면, count++
      for (let i = 0; i < sliceAnswer.length; i++) {
        if (sliceAnswer[i] === user[i]) count++;
      }
    }
    return count;
  };
  let user1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  let user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answers1 = checkAnswers(user1, answers);
  let answers2 = checkAnswers(user2, answers);
  let answers3 = checkAnswers(user3, answers);
  let obj = {};
  obj[1] = answers1;
  obj[2] = answers2;
  obj[3] = answers3;
  // 셋 중에 가장 큰 수
  let largeNum: number = Math.max(answers1, answers2, answers3);
  // 결과를 비교하면서 리턴한다.
  let result: number[] = [];
  for (let key in obj) {
    if (obj[key] === largeNum) {
      result.push(Number(key));
    }
  }
  return result;
}

let answers = [1, 3, 2, 4, 2];
console.log(solution(answers));
