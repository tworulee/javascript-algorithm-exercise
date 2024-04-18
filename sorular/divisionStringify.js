export const divisionStringify = (num1, num2) => {
  let realNumber = Math.floor(num1 / num2).toString();
  if (realNumber.length < 4) {
    return realNumber;
  }
  let division = realNumber.split("").reverse();

  let arr = [];
  let j = 0;

  for(let i=0;i<division.length; i++){
    if(j !=0 && j % 3 ===0){
        arr.push(division[i]+ ",")
    }else{
        arr.push(division[i])
    }
    j++
  }

  return arr.reverse().join("")
};
