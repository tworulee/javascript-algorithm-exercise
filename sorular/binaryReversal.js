export const binaryReversal =(str)=>{

    const binary = Number(str).toString(2)

    const binaryZeros = ("0".repeat(8-binary.length)) + binary

    const reversedBinary = binaryZeros.split("").reverse().join("")


    return parseInt(reversedBinary,2)
}