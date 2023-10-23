const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

//made () to see if string contains numbers. Number converts input and isNan is used to check if its numerical string.
function isNumberString (number) {
    return !isNaN(Number(number));
}

const primaryValid =  isNumberString(primaryPhone)
const secondaryValid = isNumberString(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )