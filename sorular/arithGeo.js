export const arithGeo = (arr) => {
  let arith = arr[1] - arr[0];
  let geo = arr[1] / arr[0];
  let general = false;

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === arith) {
      general = true;
    } else if (arr[i] / arr[i - 1] === geo) {
      general = true;
    }
  }
  return general;
};
