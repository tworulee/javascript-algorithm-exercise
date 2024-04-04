export  const userValidation = (str)=>{

    if( str.length >= 4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(splice(0,1)) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1))
        ){
        return true
    }else{
        return false
    }

}