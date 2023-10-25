const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
    tax: {
        734: '3%',
        234: '20%',
        913: '12%',
        415: '38%',
        502: '42%',
    },
    rent : {
        none: 0,
        'small-room': 200,
        'large-room': 300,
        'small-apartment': 400,
        'large-apartment': 800,
        'small-house': 1200,
        'large-house': 2400,
    }
}


// You can change below however you want

const taxAsDecimal = parseInt(expenses.tax[913]) / 100;
//console.log(taxAsDecimal);
const startingAfterTax = salary - salary * taxAsDecimal;
//console.log(startingAfterTax);
const type = `${size}-${lodging}`//interpolating
//console.log(type);
const balance = startingAfterTax - expenses.transport - expenses.food - expenses.rent[type]
console.log(balance.toFixed(2))