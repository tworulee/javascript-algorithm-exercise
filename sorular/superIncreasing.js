export const superIncreasing = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        let sum = sumOffIndex(arr,i)
        if(sum>arr[i]) return false
    }
    return true
}

const sumOffIndex = (arr,index)=>{
    let sum = 0;
    for (let j = 0; j < index; j++) {
        sum += arr[j]
        
    }
    return sum
}