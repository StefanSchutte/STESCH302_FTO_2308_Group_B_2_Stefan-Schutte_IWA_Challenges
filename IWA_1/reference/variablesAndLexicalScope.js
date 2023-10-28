/*
//------------------------Variables and Lexical Scope---------------------------------
const valueA = 123;
const valueB = 10;
const valueC = valueA + valueB;
const valueD = valueB;

console.log(typeof valueA);
console.log(valueA, valueA.toString());

let example = 20;

const test1 = () => {
const value = 1
    console.log(value)
}
const test2 = () => {
const value = 2;
    console.log(value)
}

//closures - declare var in parent scope - access available
{
const value = 5
const test3 = () => {

    console.log(value)
}
const test4 = () => {

    console.log(value)
}
test3();
test4();
}


const valueZ = 10;

if (true){
    console.log(valueZ);

    if (true){
        console.log(valueZ)

        if (false){
            console.log(valueZ);
        }
    }
}

const exampleA = 10;

//constant cant be reassigned. let can

let exampleB = 20;
console.log(exampleB);
exampleB = 2;
console.log(exampleB);

var exampleC = 30;//dont use

if (true) {
    //const exampleB = 8;
    //console.log(exampleB);
    if (true){
        const exampleB = 3;
        console.log(exampleB)
    }
}

*/

