export const productDigits=(num)=>{
    let multiply =[]

    for (let i = 1; i <= num; i++) {
        num % i === 0 && multiply.push(i)
    }

    let medium = multiply.length/2

    if(multiply[medium-1]*multiply[medium]===num){
        return multiply[medium-1].toString().length +multiply[medium].toString().length
    }


}