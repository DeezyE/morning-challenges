let calc = (input) => {
    // return input
    let total = 0
    for (let i = 2; i < input.length; i++) {
        total += Number(input[i]);
    }
    
    return total
}


console.log(calc(process.argv))
// console.log(calc(process.argv))

