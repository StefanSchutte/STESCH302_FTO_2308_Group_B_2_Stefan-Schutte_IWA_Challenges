//-----------------------------Strings and Logical OPerators-------------------------------------------------

const first = 'Stefan'
const second = "Stefan"

const thrid = "stefan's JS says \"hello\"";

const fourth = `Stefan's
Java
Script`;

const fifth = '1'
const sixth = 2;
console.log(fifth + sixth);//concatonation 12

//interpolation
const fifth = '1'
const sixth = 2;
console.log(`${fifth} ${sixth}`);

const name = 'stefan'
//concat
console.log('Hello there ' + name);
//template literal
console.log(`Hello there ${name}`);

console.log(`Hello there ${10 + 5 * 7}`);
console.log(`Hello there ${true}`);// true.toString();

const firstName = 'Stefan'
const lastname = 'Schutte';

console.log(`hello ${`Mr. ${firstName}, ${lastname}` }`);

const title = `Mr. ${firstName}, ${lastname}`;
console.log(`hello ${title}`);

if (value > 10){

}else{

}

const active = false
let user = 'Stefan'

if (!active !== true ){
    user = null
}

//else if
const month = 'April'
if (month === 'December' || month === "April" || month === "May"){
    console.log ('Autumn')

}else if (month === "June" || month === "July" || month === 'August' ){
    console.log('winter')
}else if (month === "September" || month === "October" || month === 'November' ){
    console.log('Spring')
}else if (month === "December" || month === "January" || month === 'February' ){
    console.log('Summer')
} else {
    throw new Error('Invalid month');
}

//Skalk does this
if (month === 'December' || month === "April" || month === "May") console.log ('Autumn')

if (month === "June" || month === "July" || month === 'August' ) console.log('winter')

if (month === "September" || month === "October" || month === 'November' ) console.log('Spring')

if (month === "December" || month === "January" || month === 'February' ) console.log('Summer')

//switch statement
switch (month) {
    case 'dec':
    case 'jan':
    case 'feb': console.log('Summer'); break;
    case 'mar':
    case 'apr':
    case 'may': console.log('Autumn'); break;
    case 'jun':
    case 'jul':
    case 'aug':console.log('Winter'); break;
    case 'sep':
    case 'okt':
    case 'nov':console.log('Spring');
    default: throw new Error('Invalid month')
}


const firstName = 'Scalk';
const age = 10
const isValid = firstName && age

console.log(isValid);//10

// && if value before && is truthy then it proceeds to next value

// || if value before || is falsy then it proceeds to the next value

const andand = 10 && 5 && 'hello' && false && 6 && 9//false
const andand = 10 && 5 && 'hello' && 6 && 9//9

const andand = 10 || 5 || 'hello' || false || 6 || 9//10
const andand = null || false || 10 || 5 || 'hello' || 6 || 9//10
const oror = null || false || 0 //0

if (isValid){
    console.log('valid');
}

//fallback values
const firstName = null
const legalName = 'Venter'
const user = firstName || legalName || 'person'

console.log(`hello ${user}`)



const firstName = 'Schalk';
const surname = 'Venter';
const user = firstName || (surname && `Mr ${surname}`) || 'person';

console.log(`Hello mr. ${user}`)


const score = ''
const scoreMessage = score || score === 0 ? `, your score is ${score}`: 'no score'
const user = 'stef'

//null coalescing
//null || undifined
//0 '' false
//??
console.log(0 || 'No score')//no score
console.log(0 ?? 'no score' )//0



if (score) {
    console.log(`helo ${user}`)
}else{
    console.log(`helo ${user} ${scoreMessage}`)


}
