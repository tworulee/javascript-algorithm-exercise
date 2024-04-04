export const firstReverse =(str)=>{

    const arr = str.split("");
    const reverseArr = arr.reverse();
    const newArr = reverseArr.join("")

    return newArr
}