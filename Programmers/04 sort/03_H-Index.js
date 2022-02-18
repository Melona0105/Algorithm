function solution(citations) {
    // 큰 순서대로 정렬
    citations.sort(function (a, b) { return b - a; });
    // 현재 인용횟수
    var cited = 0;
    // 순회하면서, 인용횟수가 인덱스보다 클 경우에만, 인용횟수를 올려준다.
    for (var i = 0; i < citations.length; i++) {
        console.log(i, citations[i]);
        if (i < citations[i]) {
            cited++;
        }
    }
    return cited;
}
var sample = [3, 0, 6, 1, 5];
var result = solution(sample);
console.log(result);
