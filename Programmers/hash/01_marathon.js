function solution(participant, completion) {
  const p = participant.sort();
  const c = completion.sort();

  for (let i = 0; i < c.length; i++) {
    if (p[i] !== c[i]) {
      return p[i];
    }
  }
  // 전부 같다면
  return p.pop();
}
