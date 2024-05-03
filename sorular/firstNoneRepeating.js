export const firstNoneRepeating = (str)=>{

    const newStr = str.toLowerCase()
    let returnValue = ""

    for (let i = 0; i < str.length; i++) {
        let itemInLoop = newStr[i]
        let lastStr = newStr.slice(0,i) + newStr.slice(i+1)

        if(returnValue === "" && lastStr.indexOf(itemInLoop) === -1){
            returnValue = itemInLoop
        }
        
    }
 

    return returnValue
}