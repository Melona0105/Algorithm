function solution(answers) {
    var checkAnswers = function (user, answers) {
        var len = user.length;
        var count = 0;
        // 바로 answers를 참조하면, 다음 에 받아올 때 빈 값을 받아온다.
        var newAnswer = answers.slice();
        // 답이 존재하는 동안 반복한다.
        while (newAnswer.length) {
            // 답을 답변들의 길이로 자른다.
            var sliceAnswer = newAnswer.splice(0, len);
            // 답변들과 답이 일치한다면, count++
            for (var i = 0; i < sliceAnswer.length; i++) {
                if (sliceAnswer[i] === user[i])
                    count++;
            }
        }
        return count;
    };
    var user1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    var user2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var answers1 = checkAnswers(user1, answers);
    var answers2 = checkAnswers(user2, answers);
    var answers3 = checkAnswers(user3, answers);
    var obj = {};
    obj[1] = answers1;
    obj[2] = answers2;
    obj[3] = answers3;
    // 셋 중에 가장 큰 수
    var largeNum = Math.max(answers1, answers2, answers3);
    // 결과를 비교하면서 리턴한다.
    var result = [];
    for (var key in obj) {
        if (obj[key] === largeNum) {
            result.push(Number(key));
        }
    }
    return result;
}
var answers = [1, 3, 2, 4, 2];
console.log(solution(answers));
