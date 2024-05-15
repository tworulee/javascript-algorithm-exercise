export const threeSum =(arr,target)=>{
    arr.sort((a,b)=>a-b)
    let subSets=[]

    for (let i = 0; i < arr.length-2; i++) {
        if (arr[i]!==arr[i-1]) {
            let left = 0;
            let right= arr.length -1

            while (left < right) {
                let currentSum = arr[i]+ arr[left] + arr[right]

                if(currentSum<target){
                    left++
                }else if(currentSum>target){
                    right--
                }else if(currentSum===target){
                    subSets.push(arr[i], arr[left], arr[right])
                    while(arr[left]===arr[left+1]) left++
                    while(arr[right]===arr[right-1]) right++
                    right++
                    left--
                }
            }
        }
        
    }

    return arr
}