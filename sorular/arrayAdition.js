export const arrayAdition = (arr)=>{

    let sorted = arr.sort((a,b)=>a-b)
    let lastIndex = sorted.pop()
    let addition = sorted.reduce((acc,val)=>acc + val)

    if(lastIndex === addition){
        return true
    }else{
        return false
    }

    
}