function CountWord(str, alphabet) {
  let splStr = str.split("");
  let splitAlph = alphabet.split("");

  let splCount = {};
  splStr.forEach((element) => {
    let sdd = splStr.filter((ar) => {
      return element === ar;
    });
    if (!splCount.hasOwnProperty(element)) {
      splCount[element] = sdd.length;
    }
  });

  let charAnum = {};
  splStr.forEach((element) => {
    let charArr = splitAlph.filter((arr) => {
      return element === arr;
    });
    if (!charAnum.hasOwnProperty(element)) {
      charAnum[element] = charArr.length;
    }
  });

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
