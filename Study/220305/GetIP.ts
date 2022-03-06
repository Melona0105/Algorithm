function getIPAddress(ipString: string): string[] {
  const answer: string[] = [];
  for (let i = 1; i < 4; i++) {
    const firstPart: string = ipString.slice(0, i);
    if (!isValidIP(firstPart)) {
      continue;
    }

    for (let j = i; j < i + 4; j++) {
      const secondPart: string = ipString.slice(i, j);
      if (!isValidIP(secondPart)) {
        continue;
      }
      for (let k = j; k < j + 4; k++) {
        const thirdPart: string = ipString.slice(j, k);
        if (!isValidIP(thirdPart)) {
          continue;
        }
        for (let m = k; m < k + 4; m++) {
          const last: string = ipString.slice(k, m);
          if (!isValidIP(last)) {
            continue;
          }
          if (firstPart && secondPart && thirdPart && last) {
            answer.push(`${firstPart}.${secondPart}.${thirdPart}.${last}`);
          }
        }
      }
    }
  }
  return answer;
}

function isValidIP(ipNum: string): boolean {
  return !(
    +ipNum > 255 ||
    ipNum.length > 4 ||
    (ipNum[0] === "0" && ipNum.length >= 2)
  );
}

const a = "19216801";
const result = getIPAddress(a);
console.log(result);
