export const powerSet = (nums, target)=>{
    
    if(nums.includes(target)) return nums.indexOf(target)
  
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=target){
            return nums.indexOf(nums[i])
        }
    } 

     if(target> nums[nums.length-1]) return nums.length
     if (target<nums[0]) return 0
      

       
}