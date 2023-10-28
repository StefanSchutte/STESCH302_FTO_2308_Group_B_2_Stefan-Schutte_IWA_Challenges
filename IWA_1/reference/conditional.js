//in console

if (1 === 1){console.log('test')}; //test

if (1 === 2){console.log('test')}; //undefined

if (1 === 2){console.log('test')
}else{
    console.log('not true')
};

//turnery operator = shorthand of else if

1 === 1 ? console.log('test') : console.log('not true');

1 === 2 ? console.log('test') : console.log('not true');

console.log( 1 === 1 ? 'test' : 'not true');

let value = (1 === 1 ? 'a' : 'b');

if (1 === 2 ) {
    value = 'a';
}  else {
    value = 'b';
}
console.log(value);

//logical and &&

//logical or ||

console.log( 1 === 1 && 5 === 5 ? 'test' : 'not true');

console.log( 1 === 1 && 5 === 4 ? 'test' : 'not true');

const result = (1 === 1 && 5 === 4)

console.log(result === true ? 'a' : 'b');

const result = (1 === 1 || 5 === 4)

console.log(result === true ? 'a' : 'b');

if (1===1 || 4 ===5) {
    console.log('a')
}else{
    console.log('b')
};

const first = 1 !== 1;
const second = 4 !== 5;
const isValid = first && second;
console.log(first, second);
if (first || second) {
    console.log('a')
}else{
    console.log('b')
};
if (isValid == true) {
    console.log('a')
}else{
    console.log('b')
};
console.log(first, second, isValid);

const user = 'John';
const status = 'hacked';
const isAdimin = user === 'Stefan' && status !== 'hacked';
const permissions = isAdimin ? 'admin' : 'none';
console.log(permissions);

//  - / * % ** <(smaller) > <= >= === !==

//stric inequlity !==
//normal equality ==
//strict equality ===
//normal inequality !=

const test = 1;
test == 1;
//not gonna work
2 == 1;
//2 = 1;


