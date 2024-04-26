export const bittWise =(arr)=>{
    
    const p1 = arr[0]
    const p2 = arr[1]
    let newBit = ""

    for (let i = 0; i < p1.length; i++) {
        if (p1[i]=="1" || p2[i]=="1") {
            newBit += "1"
        }else{
            newBit+="0"
        }
        
    }

    return newBit

}