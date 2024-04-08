export const simpleSymbols = (str) => {
  const arr = str.split("");
  let controlArr = [];

  arr.forEach((element) => {
    if (/[a-zA-Z]/.test(element)) {
      if (
        arr[arr.indexOf(element) - 1] === "+" &&
        arr[arr.indexOf(element) + 1] === "+"
      ) {
        controlArr.push(1);
      } else {
        controlArr.push(0);
      }
    }
  });
  if(controlArr.includes(0)){
    return false
  }else{
    return true
  }
};
