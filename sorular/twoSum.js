export const twoSum = (nums,target)=>{

    // let returnValue = ""

    // if(nums.length === 2 && nums[0] + nums[1]=== target){
    //     returnValue =  [0,1]
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     let temp1= nums[i];
    //     const nums_ = nums.filter(item => item !== temp1)
        
    //     for (let j = 0; j < nums_.length; j++) {
    //         if(temp1 + nums_[j]=== target) return "[" + i + "," + (j+1) + "]"
            
    //     }
    // }

    // return returnValue === "" ? false : returnValue


    //secondSolution
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }


    //thirdSolution
    // for (let i = 0; i < nums.length; i++) {
    //     let current = nums[i]
    //     let difference = target - current
    //     let findIndexOfDif= nums.indexOf(difference)

    //     if(findIndexOfDif >-1 && nums[i]!==nums[findIndexOfDif]){
    //         return [i,findIndexOfDif]
    //     }
        
    // }


    //fourth solution 
    let left = 0;
    let right = nums.length - 1

    while(left<right){
        let sum = nums[left]+ nums[right]

        if(sum>target){
            right--
        }else if(sum<target){
            left++
        }else{
            return [left,right]
        }
    }




}