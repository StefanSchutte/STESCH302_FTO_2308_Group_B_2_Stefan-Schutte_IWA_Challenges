//auto-boxing
const example = 123
//example.

//Primitive types / work as value/ basic pieces of info = strings, numbers, boolean, null, undefined
//symbol(), BigInt()

// 'hello world' === 'yo'
// 'hello world' === 'hello world'
// true === true
// false === null

//composite type
const first = 1
const second = 1
first === second;

const firstt = {name: "skalk"}
const secondd = {name: "skalk"}
console.log(firstt === secondd);//false
console.log(firstt.name === secondd.name);//true


let firsttt = {name: "skalk"}
const seconddd = firsttt
console.log(firstt === secondd);//true


//symbol is identifier for piece of memory/reference, connection
const symbol = Symbol()
const obj = {
    [symbol]: 'Hello'
}
obj[symbol]

let third = {name: "Stefan"}

third.name = null//overrides the prev memory

const fourth = third;
const fifth = third;//ref - point to same object

//ways to prevent reassigning values inside objects
Object.freeze();
//Record | Tuple

console.log(third.name);
third.name = "John"
console.log(thrid.name);//john

console.log(third, fourth);//john john

const string = 'hello'
const number = 123;
let other = string

//classes for static methods
//Date
//Math
//document

//Math. entirely static- runs directly on class
console.log(window.Math);
console.log(Math);

console.log(10 + Math.PI);
console.log(Math.floor(1234.1232));//rounds down
console.log(Math.ceil(1234.1234));//rounds up
console.log(Math.round(1234.1234));//rounds to closest

const original = 120
const discount = 14
const percentage = (original/100)*discount;
console.log(`Sale! ${Math.round(percentage)}off!`);//Sale! 17! off!

Math.max(100 , 90, 50 , 10 , -5, 200 ,40 )//200
Math.min(100 , 90, 50 , 10 , -5, 200 ,40 )//-5

Math.random()//everytime run gives random nr.

Math.round(Math.random() * 100)//gives random nr between 0 and 100

//Date. - have to create instance

//date libraries = date-fns
//temporal polyfill

console.log(Date);

const instance = new Date()
console.log(instance);

const specificDate = new Date('10 January 2025 15:15')
console.log(specificDate);

console.log(instance.getTime());//epoch/unix time - amount of milli sec passed since 1/1/1970

const future = new Date('10 January 2025 15:15').getTime();
const current = new Date().getTime()
console.log(`There are ${Math.ceil((future - current) / 1000 / 60 / 60 / 24)} days left.`);//there are 775 days left.
console.log(future > current);

const fullYear = new Date().getFullYear() -10
console.log(fullYear)//2013

console.log(new Date().getDate());
console.log(new Date().getMonth() +1);

const obj = {
    test: {
        hello: {
            skalk: 'greet',
            lindie: 'yo',
        }
    }
}
console.log(obj.test.hello.skalk)//greet