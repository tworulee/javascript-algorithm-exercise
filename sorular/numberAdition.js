export const numberAdition = (str)=>{
    let rakamlar = str.match(/\d+/g); 
    if (!rakamlar) return 0; 
    let toplam = rakamlar.reduce((acc, cur) => acc + parseInt(cur), 0); 
    return toplam;
}