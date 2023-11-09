//because arrays are objects you can assign keys to it

const example = [
    'John',
    'Schalk',
    'Alice',
    'Sipho'
]
console.log(example);

example.someOtherThing = 'hello'
example.hello = false

console.log(example);

console.log(example.length)//4 //dont treat new things as actual values in arr

example[4] = 'Leo'
console.log(example.length)//5

example[100] = 'Rose'
console.log(example.length)//99 empty slots but still 6 indexes


const example2 = [
    'John',
    'Schalk',
    'Alice',
    'Sipho'
]

example2.length = 50
console.log(example2);
console.log(example2.length);

//decrease length
const example3 = [
    'John',
    'Schalk',
    'Alice',
    'Sipho'
]

example3.length = 2
console.log(example3);
console.log(example3.length);

//how to find things - methods
const class2022 = [
    'John',
    'Mary',
]
const class2023 = [
    'John',
    'Schalk',
    'Alice',
    'Sipho',
    'Schalk'
]
const class2024 = []
console.log(class2023);
/*
const checkIfPresent = (student) =>{
    const results = {
        2022: class2022.includes(student),
        2023: class2023.includes(student),
        2024: class2024.includes(student),
    }
    return results
}
 */

const checkIfPresent = (student) =>{
    const results = {
        2022: class2022.indexOf(student),
        2023: class2023.indexOf(student),
        2024: class2024.indexOf(student),
    }
    return results
}
console.log('Schalk', checkIfPresent('Schalk'));//only finds first index
//lastIndexOf - starts from back

console.log(checkIfPresent('Alice'));
console.log(checkIfPresent('John'));
console.log(checkIfPresent('Tracy'));

//.at(2) - looks for something at the position- same as [2]

//.push() .pop() .shift() .unshift()

//.flat()
const example4 = [
    'Hello',
    'world',
    [
        10,20, [
            'a','b','c'
    ],30
    ],
    true,
    ['lorem', 'ipsum'],
    false,
]
console.log(example4)
console.log(example4.flat())
console.log(example4.flat().flat())//flatten everything both arr levels

//.slice() -extracts a section of calling arr and returns new array

const exampleSlice = ['hello', 'world', 'lorem', 'ipsum', true];
const middleIndex = Math.floor(exampleSlice.length / 2)
console.log(exampleSlice.slice(1, 3))
console.log(exampleSlice.slice(0, middleIndex))
console.log(exampleSlice.slice(middleIndex,exampleSlice.length))

//.concat() - returns a new array that is calling arr joined w other arr and/or value/s
const exampleConcat = ['hello', 'world', 'lorem', 'ipsum', true];
const middleIndex2 = Math.floor(exampleConcat.length / 2)

const slice1 = exampleConcat.slice(0, middleIndex2 + 1)
const slice2 = exampleConcat.slice(middleIndex2, exampleConcat.length)

const slice3 = [1,2];
const slice4 = [true, false]

const result = slice1.concat(slice2, slice3, slice4);
//switching order
const resultss = slice4.concat(slice2, slice3, slice1);

console.log(result)
console.log(resultss);

//.copyWithin() - copies a sequence of array elements within an array

//.reverse() - reverses order of elements of an array.

//.splice() - adds and/remove elements from arrays
const exampleSplice = ['hello', 'world', 'lorem', 'ipsum', true];
exampleSplice.splice(1, 0, 'A', 'b', 'c')
console.log(exampleSplice);

const exampleSplice2 = ['hello', 'world', 'lorem', 'ipsum', true];
const slice8 = exampleSplice2.slice(0,1)
const slice9 = exampleSplice2.slice(1)
const slice7 = ['a', 'b', 'c', 'd']
const resultSlice = slice8.concat(slice7, slice9)
console.log(exampleSplice2);
console.log(resultSlice)


//get the top 3 winners of both arrays
const contenders2022 = [
    'Schalk',
    'John',
    'Mary',
    'Nwabisa',
    'Tracy'
]

const contenders2023 = [
    'John',
    'Mary',
    'Nwabisa',
    'Schalk',
    'Tracy'
]
const calcWinners = (array1, array2) =>{
    array1.splice(3, 2, array2[0], array2[1], array2[2])

    const sliceNew1 = array1.slice(0, 2);
    const sliceNew2 = array2.slice(0, 3)

    return sliceNew1.concat(sliceNew2);
}
const top3From2Years = calcWinners(contenders2022, contenders2023);
console.log(top3From2Years);

//see who ended last
const calcLast = (array1, array2)=>{

    console.log(array1, array2)

    return [ array1[array1.length - 1], array2[array2.length - 1] ]
}

const lastPosition2Years = calcLast(contenders2022, contenders2023)
console.log(lastPosition2Years);
//remove duplicates from array
