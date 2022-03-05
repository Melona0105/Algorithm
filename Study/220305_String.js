function convertFunc(input) {
  var isNeg = false;
  if (typeof input === "string") {
    var result = 0;
    if (input[0] === "-") {
      isNeg = true;
      result = searchString(1, input, result, isNeg);
    } else {
      result = searchString(0, input, result, isNeg);
    }
    return result;
  } else if (typeof input === "number") {
    var result = "";
    if (input < 0) {
      result = "-";
      input = Math.abs(input);
    }
    var numberLength = getNumLength(input);
    for (var i = numberLength; i >= 1; i--) {
      var now = Math.round(input / Math.pow(10, i - 1));
      result = result + numObj[now];
      input = input - now * Math.pow(10, i - 1);
    }
    return result;
  }
}
function searchString(startIndex, input, result, isNeg) {
  for (var i = startIndex; i < input.length; i++) {
    var now = input[i];
    // 자릿수
    var numlocation = Math.pow(10, input.length - i - 1);
    if (isNeg) {
      result = result + strObj[now] * numlocation * -1;
    } else {
      result = result + strObj[now] * numlocation;
    }
  }
  return result;
}
function getNumLength(input) {
  var current = 1;
  var length = 0;
  while (current <= input) {
    current = current * 10;
    length++;
  }
  return length;
}
var strObj = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
};
var numObj = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  0: "0",
};
var strToNum = convertFunc("-123");
// console.log(strToNum);
var numToStr = convertFunc(-123);
console.log(numToStr);
