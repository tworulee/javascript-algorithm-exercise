export const waveSorting = (arr)=>{
    const sortedArr = arr.sort((a,b)=>a-b)

    let wave = []

    for (let i = 1; i < sortedArr.length; i+=2) {
        
        wave.push(sortedArr[i])
        wave.push(sortedArr[i-1])
        
    }
    if(sortedArr.length % 2 != 0 ) wave.push(sortedArr[sortedArr.length-1])

    return wave
}