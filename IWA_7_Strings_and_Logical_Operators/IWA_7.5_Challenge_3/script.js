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
const leo = `${leoName} ${leoSurname} (Owed: R${-sarahBalance})`
const sarah = `${sarahName} ${sarahSurname} (Owed: R${-sarahBalance})`
const total = `  Total amount owed: R`
const result =
    `
    ${leo}  
    ${sarah} 
    
    ${divider}   
    ${total} ${owed} 
    ${divider}`;

console.log(result);