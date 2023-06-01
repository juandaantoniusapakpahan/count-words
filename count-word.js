function CharCount(param1, param2) {
  let splCount = {};
  param1.forEach((element) => {
    let sdd = param2.filter((ar) => {
      return element === ar;
    });
    if (!splCount.hasOwnProperty(element)) {
      splCount[element] = sdd.length;
    }
  });
  return splCount;
}

function CountWord(str, alphabet) {
  let splStr = str.split("");
  let splitAlph = alphabet.split("");

  let splCount = CharCount(splStr, splStr);

  let charAnum = CharCount(splStr, splitAlph);

  let minWord = 0;

  for (const chr of Object.keys(splCount)) {
    let rs = charAnum[chr] / splCount[chr];
    if (minWord === 0) {
      minWord = rs;
    }
    if (minWord > rs) {
      minWord = rs;
    }
  }
  return minWord;
}

console.log(CountWord("makan", "makankanmanakamsdgasgaweasf"));
