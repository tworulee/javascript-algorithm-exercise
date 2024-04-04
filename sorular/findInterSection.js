export const findInterSection = (arr)=>{
    
    let intersection = []

    const kume1 = arr[0].replace(/\s/g,"").split(",")
    const kume2 = arr[1].replace(/\s/g,"").split(",")

    kume2.forEach(element => {
        if(kume1.includes(element)){
            intersection.push(element)
        }
    });

    if(intersection.length != 0){
        return intersection.toString()
    }else{
        return false
    }

}