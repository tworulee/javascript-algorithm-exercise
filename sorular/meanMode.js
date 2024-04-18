export const meanMode =(arr)=>{
    let ortalama = 0
    ortalama += arr.reduce((acc, curr) => acc + curr, 0);

    let mod = {};

    for(let j = 0 ; j<arr.length; j++){
        if(arr[j] in mod){
            mod[arr[j]] = mod[arr[j]] + 1
        }else{
            mod[arr[j]] = 1
        }
    }

    const max = Math.max(...Object.values(mod))


    
    
    return (ortalama/arr.length)=== max ? true : false 
}