export const offlineMin = (strArr) => {
  const [index, freqE] = E_Info(strArr);

  const numberArray = strArr
    .splice(0, index + 1)
    .filter((char) => char != "E")
    .sort((a, b) => a - b)
    .splice(0, freqE);

  return numberArray;
};

const E_Info = (strArr) => {
  let index = "";
  let freq_E = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "E") (index = i), (freq_E += 1);
  }
  return [index, freq_E];
};
