//arrays are objects that has numbers as keys.

const example = {
    a: 'hello',
    'b c': 'world',
}
const example2 = {
    1: 'Hello',//arrange in order of numbers regardless of order declared in
    2: 'World'
    //length: 4,
    //[Symbol.iterator]: () => {}
}
console.log(example);
console.log(example2);

const example3 = {
    0: 'Hello',
    1: 'World',
    2: 'Lorem',
    3: 'Ipsum',
}
console.log(example3[2]);

//index/indices = key of index/ numbers in array
const example4 = ['hello', 'world', 'lorem', 'ipus'];
console.log(example4[2]);//lorem
console.log(example4);
console.dir(example4);
console.log(example4.length);
//get last item
console.log(example4[example4.length - 1]);

//can put anything in arr
console.log([1, 2, 3].length);

//add things to arr
const array = [1, 2, 3];
console.log(array.length);//3
//here
array.push(4)
array.push(5)
console.log(array)//[1,2,3,4,5]
//length updates so now its 5

//remove things from arr
array.pop()//remove last one

//shift
array.shift()//remove first item

array.unshift('t')//like push, but first item
console.log(array)//[ 't', 2, 3, 4 ]

//arrays can also contain objects, similar to nested objects
const array2 = [{id: '103', name: 'John', surname: 'Smit'},
    {id: '104', name: 'Johnn', surname: 'Smitt'},
    {id: '105', name: 'Skalk', surname: 'Venter'}]
console.log(array2.length);//3

//any primitive value can be pushed to array.

//arr inside arr
const board = [
    [null, 'x', null],
    ['x', null, 'o'],
    ['x', null, 'o'],
]

const array3 = [5, 'hello', {id: '103', name: 'John', surname: 'Smit', game: {
    status: 'not-finished', board: [[null, 'x', null],['x', null, 'o'], ['x', null, 'o']]
    }}]

//create objects from nested arrays
Object.fromEntries(
    [
        ['a', true],
        ['b', 1000],
        ['e', 'hello'],
    ]
)

//create arrays from objects
const starting = [
    ['a', true],
    ['b', 1000],
    ['e', 'hello', [1,2,3]],
]

console.log(starting[2][2][1]);

const example6 = Object.fromEntries(starting)

//get keys as an array
const example7 = Object.keys(example6);//['a', 'b', 'c']


const example8 = Object.values(example6)//returns values as an array
//[true, 1000, 'hello']

console.log(example7, example8);
//entries-turns it back?
console.log(Object.entries(starting));

//indexes/indices to reference them
console.log(example7[2]);
console.log(example8[1]);
/*
//destructuring
const hello = array3[1]
const name = array3[3]name
const topLeft = array3[3]game.board[0][0]
const move = array3[3]game.board[2][1].move
const player = array3[3]game.board[2][1].player

*/