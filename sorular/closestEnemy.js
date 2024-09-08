export const closestEnemy = (arr) => {
  console.log(arr);

  const indexOf1 = arr.indexOf(1);
  const indexOf2 = [];
  const difference = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      indexOf2.push(i);
    }
  }
  if (indexOf2.length === 0) return 0;
  
  indexOf2.forEach((element)=>{
    difference.push(Math.abs(element - indexOf1))
  })
    
    return Math.min(...difference);
};
