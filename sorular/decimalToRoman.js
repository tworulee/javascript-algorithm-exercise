export const decimalToRoman =(num)=>{
    const romanSymbols={
        M:1000,
        CM:900,
        D:500,
        CD:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    let inRoman = ""

    for(let key in romanSymbols){
        while(num>=romanSymbols[key]){
            inRoman+=key
            num-=romanSymbols[key]
        }
    }
    return inRoman
}