let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){

    let valueInYen = valueInDollar * 127.9;

    return valueInYen;
}

const fromYentoPound = function(valueInYen){

    let valueInPound = valueInYen * 0.8;

    return valueInPound;
}

console.log(fromYentoPound(100))
console.log(fromDollarToYen(100))
console.log(fromEuroToDollar(100))


module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYentoPound };