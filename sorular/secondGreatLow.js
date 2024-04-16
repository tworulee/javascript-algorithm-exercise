export const secondGreatLow = (arr)=>{

    let newArr = []
    arr.forEach(num => {
        !newArr.includes(num) && newArr.push(num)
    });

    let sorted = newArr.sort((a,b)=>a-b)
    let result =[];
    if (sorted[1]>sorted[0]) {
        result.push(sorted[1])
    }

    if (sorted[sorted.length -2]<sorted[sorted.length -1]) {
        result.push(sorted[sorted.length -2])
    }

    return result

}