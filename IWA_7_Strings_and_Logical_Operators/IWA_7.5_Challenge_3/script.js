const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

//const owed = (Math.abs(leoBalance) + Math.abs(sarahBalance)).toFixed(2);
const owed = parseFloat(-leoBalance -sarahBalance).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")//negate a negative number
const leo = `\n${leoName} ${leoSurname.trim()} (Owed: R${-leoBalance})\n`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R${-sarahBalance})\n`
const total = `\n Total amount owed: R `
const result = leo + sarah + "\n" + divider + total + owed + "\n" + divider

//const total = `\n Total amount owed: R ${owed.slice(0.2) + '' + owed.slice(2)}`
console.log(result);