export const letterCapitalize = (str)=>{

    let newStr=[]
    str.split(" ").forEach(element => {
        newStr.push(element.charAt(0).toUpperCase() + element.slice(1,element.length))
    });
    return newStr
}