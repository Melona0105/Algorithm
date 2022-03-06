function convertFunc(input: string | number): string | number {
  let isNeg = false;
  if (typeof input === "string") {
    let result: number = 0;
    if (input[0] === "-") {
      isNeg = true;
      result = searchString(1, input, result, isNeg);
    } else {
      result = searchString(0, input, result, isNeg);
    }
    return result;
  } else if (typeof input === "number") {
    let result: string = "";
    if (input < 0) {
      result = "-";
      input = Math.abs(input);
    }
    const numberLength: number = getNumLength(input);
    for (let i = numberLength; i >= 1; i--) {
      const now = Math.round(input / Math.pow(10, i - 1));
      result = result + numObj[now];
      input = input - now * Math.pow(10, i - 1);
    }
    return result;
  }
}

function searchString(
  startIndex: number,
  input: string,
  result: number,
  isNeg: boolean
): number {
  for (let i = startIndex; i < input.length; i++) {
    const now: string = input[i];
    // 자릿수
    const numlocation: number = Math.pow(10, input.length - i - 1);
    if (isNeg) {
      result = result + strObj[now] * numlocation * -1;
    } else {
      result = result + strObj[now] * numlocation;
    }
  }
  return result;
}

function getNumLength(input: number): number {
  let current: number = 1;
  let length: number = 0;
  while (current <= input) {
    current = current * 10;
    length++;
  }
  return length;
}

const strObj = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "0": 0,
};

const numObj = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "0": "0",
};

const strToNum = convertFunc("-123");
// console.log(strToNum);
const numToStr = convertFunc(-123);
console.log(numToStr);
