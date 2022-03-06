function getIPAddress(ipString) {
    var answer = [];
    for (var i = 1; i < 4; i++) {
        var firstPart = ipString.slice(0, i);
        if (!isValidIP(firstPart)) {
            continue;
        }
        for (var j = i; j < i + 4; j++) {
            var secondPart = ipString.slice(i, j);
            if (!isValidIP(secondPart)) {
                continue;
            }
            for (var k = j; k < j + 4; k++) {
                var thirdPart = ipString.slice(j, k);
                if (!isValidIP(thirdPart)) {
                    continue;
                }
                for (var m = k; m < k + 4; m++) {
                    var last = ipString.slice(k, m);
                    if (!isValidIP(last)) {
                        continue;
                    }
                    if (firstPart && secondPart && thirdPart && last) {
                        answer.push("".concat(firstPart, ".").concat(secondPart, ".").concat(thirdPart, ".").concat(last));
                    }
                }
            }
        }
    }
    return answer;
}
function isValidIP(ipNum) {
    return !(+ipNum > 255 ||
        ipNum.length > 4 ||
        (ipNum[0] === "0" && ipNum.length >= 2));
}
var a = "19216801";
var result = getIPAddress(a);
console.log(result);
