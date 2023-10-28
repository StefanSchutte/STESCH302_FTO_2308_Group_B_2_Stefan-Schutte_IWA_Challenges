//-----------------------Type Coercion-----------------------


console.log(typeof 123);
console.log(typeof 'hello');
console.log(typeof 123 === 'number');
console.log(typeof true)//boolean

//strings / numbers / booleans/ null /undefined

//primitive types

const value = 123 ;
console.log(value);
const newValue = value.toString();
console.log(typeof newValue);

console.log("false" ? 'a' : 'b')

    //coerce into sting
    (123).toString()//'123'

//coerce into number
parseInt('123');//123

//bolean
true.toString()//'true'

Number.isNaN(12)//false

Boolean('hello')//true
Boolean(0)//false

//truthy/falsey

//falsey
Boolean(0) //false
Boolean('') //false
Boolean(-0) //false

10 == "10"//true
10 === "10"//false

0 == false//true
0 === false//false

const isLoggedIn = true;
if (isLoggedIn == true){
    console.log('Logged in')
}

const isLoggedIn = false;
if (isLoggedIn == true){
    console.log('Logged in')
}//

const user = 'Stefan'
const isLoggedIn = Boolean(user)
if(user){
    console.log('logged in')
}

//null undefined 0
typeof 0 //'number'

//shoes price: 10 // 10
//shoes price: null // none value
//shoes price: undifined // i dont know none answer

const userr = undefined // none answer

if (typeof userr === 'string') {
    userr = true
}else{
    userr = null
}

const user = 'ste'
const age = 7
if (user && age){
    console.log('valid')
}

const user = 'null'
const age = null
if (user && age){
    console.log('valid')
}

//modulus operator
10 % 3 // 1

const value = 9
const isEven = value % 2 === 0

const columns = isEven ? 2 : 3
console.log('columns')//3

2 * 2 //4
2 ** 2 //4
3 * 3 //9
3 ** 3 //27

const isValid = true;
const firstName = 'John'
if (isValid){
    const surname = "Valid"
    console.log(firstName, surname)//John Valid
}else{
    const surname = "Invalid"
    console.log(firstName, surname)//John Invalid
}

