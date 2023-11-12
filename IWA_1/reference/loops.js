//DATA

/**
 * @type {HTMLDivElement}
 */
const app = document.querySelector('[data-app]');
if (!app) throw new Error('No app data attribute found')

console.log('app')
app.innerHTML = 'Loading'

/**
 *
 * list of contenders from year 2022. Values in array are organised in order that they are placed in terms of ranking.
 * It starts from first place and the moves down in rank until the contender that comes in last place.
 */
const contenders2022 = [
    'Schalk',
    'John',
    'Mary',
    'Nwabisa',
    'Tracy'
]

/**
 *
 * Similar to {@link contenders2022}. With expection that this is for year 2023
 */
const contenders2023 = [
    'John',
    'Mary',
    'Nwabisa',
    'Schalk',
    'Tracy'
]

//FUNCTIONS

/**
 * Takes two arrays and extracts the first three elements from each array, and then combines them into a single array.
 * If there are duplicates in the combined array, the duplicate value will be removed.
 * This means that the tota amount returned might be less than 6(but will never be less than 3 ).
 * Results will be in the order that the arrays were passed in (starting with {@link array1} and with array2 added afterwards
 *
 * @param {string[]}array1
 * @param {string[]}array2
 * @returns {*[]}
 */
const calcWinners = (array1, array2) => {


    const sliceNew1 = array1.slice(0, 3);
    const sliceNew2 = array2.slice(0, 3)

    const result = sliceNew1.concat(sliceNew2);
    const noDuplicatesResult = []

    //loop

    for (const item of result) {
        if (!noDuplicatesResult.includes(item)){
        noDuplicatesResult.push(item)}

        return noDuplicatesResult
    }
}

/**
 *
 * Exact behaviour as {@link calcWinners} except that it returns the second last position from each array (instead of the
 * first three positions.) It also does not remove duplicates, so the output will always be 2 strings.
 *
 * @param {string[]} array1
 * @param {string[]} array2
 * @returns {string[]}
 */
const calcSecondLast = (array1, array2)=>{
    return [ array1[array1.length - 2], array2[array2.length - 2] ]
}

/**
 *
 * @param {string[]}top3
 * @param {string[]}secondLastPosition
 */
const renderHtml = (top3, secondLastPosition) =>{


    const copyOfTop3 = [].concat(top3)
    const copyOfSecondLastPosition = [].concat(secondLastPosition)


    let innerTop3 = ''
    for (const contender of copyOfTop3.reverse()){
        innerTop3 = `${innerTop3}
                <li>${contender}</li>`
    }

    let innerSecondLast = ''
    for (const contender of copyOfSecondLastPosition.reverse()){
        innerSecondLast = `${innerSecondLast}
                <li>${contender}</li>`
    }


}

app.innerHTML = `
<div>
        <h1>Ranking</h1> 
        <h2>Top3</h2>
        <ul>${innerTop3}</ul>

        <h2>Second Last</h2>
        <ul>${innerSecondLast}</ul>

</div>`


//LOGIC

const top3From2Years = calcWinners(contenders2022, contenders2023);
const lastPosition2Years = calcSecondLast(contenders2022, contenders2023)
renderHtml(top3From2Years, secondLastPosition)

console.log(top3From2Years, secondLastPosition);


//Type Of Loops
//for of
//for (const example of exampleArray){}

const deelneemers = [
    'Piet',
    'Jan',
    'Saartjie',
    'Marie'
]
for (const [index, singleDeelneemer] of deelneemers.entries()) {
    console.log(index, singleDeelneemer);
}
//for (const singleDeelneemer in deelneemers) {
//    console.log(singleDeelneemer);//in gives actual index
//}

//for statement
//for (let i = 0; //starting condition
// i < 10;//condition
// i++; //what happens after loop
// ){
// console.log(i);}

const exampleArray = ['a', 'b', 'c', 'd'];
for (let i = 0; i < exampleArray.length; i++) {
    console.log(exampleArray[i]);
}

const rows = 6
const columns = 8

const matrix = []
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        if (!matrix[i]) matrix[i] =[]
        matrix[i][j] = `${j} x ${i + 1}`
    }
}
console.log(matrix);


/**
 * param {number} amount
 * param {(index: number)=> void}callback
 */
const loopByAmount = (amount, callback)=>{
    for (let i = 0; i < rows; i++) {
    callback(i)
    }
}

//window.body.addEventListener('click', (event)=> {})
const callbackFn = (index) => { console.log(index)}
loopByAmount(6, callbackFn)


loopByAmount (rows, (rowIndex)=> {
    loopByAmount(columns, (columnIndex)=> {
        const value = `${rowIndex + 1} x ${columnIndex + 1}`
        if (!matrix[rowIndex]) matrix[rowIndex] = []
        matrix[rowIndex][columnIndex] = value
    })
})

//while and do while loops
//do
let age = 0;
while (age < 18){
    console.log(age)
    age = age + 1
}
//while
do{
    console.log(age)
    age = age + 1
} while (age < 18)

//for of supports break and continue statements

const contenders = [
    'Piet',
    'Jan',
    'Saartjie',
    'Marie'
]
for (const [index, contender] of contenders.entries()) {

    if (contender === 'Jan') break;//continue;

}
    console.log(index, contender);