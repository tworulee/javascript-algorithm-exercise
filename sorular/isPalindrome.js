export const isPalidrome =(str)=>{
    const newStr= str.replace(/ /g,"").toLowerCase()

    return newStr.split("").reverse().join("") === newStr ? true :false
}