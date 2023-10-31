//import { hello as helloA } from './code-a.js';
//import { hello as helloB } from './code-b.js';

//global consts
const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;


//object style
const elements = {
    number : document.querySelector('[data-key="number"]'),
    subtract : document.querySelector('[data-key="subtract"]'),
    add : document.querySelector('[data-key="add"]'),
}


//Style Object

//document.querySelector('button').disabled
//document.querySelector('input').readOnly = true
//document.querySelector('input').focus()
const updateColor = () => {
    //console.log(window.document.body.style)
    //cssom
    //constructable Stylesheets
//document.querySelector('[data-key="subtract"]').dataset
//document.querySelector('[data-key="subtract"]').style

    const value = parseInt(elements.number.value)
    //const isEdge = value >= MAX_NUMBER || value <= MIN_NUMBER
/*
    if (isEdge){
        elements.number.style.color = 'red';
    } else {
        elements.number.style.color = ''//set to empty string to go back way it was
    }
*/
    //elements.subtract.style.background = 'red'
    //elements.add.style.background = 'red'

    //second ex

    const colorStepsAmount =250 / ( MAX_NUMBER - MIN_NUMBER )
    //console.log(colorStepsAmount);

    const distMax = MAX_NUMBER - value
    const distMin = value - MIN_NUMBER

    const red = distMax * colorStepsAmount
    const green = distMin * colorStepsAmount

    elements.number.style.color = `rgb(${red}, ${green} , 0)`

}



//console.log(number, subtract, add)

const subtractHandler = () => {
    //console.log('subtract was clicked', subtract);
    const newValue = parseInt(elements.number.value ) - STEP_AMOUNT;
    elements.number.value = newValue;

    if (elements.add.disabled ){
        elements.add.disabled = false;
    }

    if (newValue <= MIN_NUMBER){
        elements.subtract.disabled = true;
    }
    //else{
    //    subtract.disabled = false;
    //}

    updateColor()
}
const addHandler = () => {

    //number.value == 10;

    console.log('add was clicked');
    const newValue = parseInt(elements.number.value) + STEP_AMOUNT;
    elements.number.value = newValue;

    //conditional logic

    if (elements.subtract.disabled){
        elements.subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER){
        elements.add.disabled = true;
    }
    //else{
    //    add.disabled = false;
    //}
    updateColor()
}

// parseInt('123')
//(123).toString()

elements.subtract.addEventListener('click', subtractHandler);
elements.add.addEventListener('click', addHandler);

updateColor()