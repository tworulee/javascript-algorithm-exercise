export const multiplicativePersistence = (num) => {
     let result = multiply(num)
     let multiplicativePersistence = 1

     if(result<10) return 0

     while(result > 9){
        multiplicativePersistence++
        result = multiply(result)
     }

  return multiplicativePersistence;
};

const multiply = (num) => {
  const numArr = num.toString().split("");
  let multiply = 1;

  for (let i = 0; i < numArr.length; i++) {
    multiply *= numArr[i];
  }
  return multiply;
};
