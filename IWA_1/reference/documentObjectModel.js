console.log(window)
console.log(window.document);//get it as html

//how to get it as object
console.dir(window.document);

console.log(window.localStorage);

console.dir(window.document.body)
window.document.body.className = 'hello'
console.dir(window.document.body.className);


const schalk = document.querySelector('[schalk]')
console.log(schalk);

console.dir(schalk)

console.log(typeof schalk)
console.dir(typeof schalk)

console.log(schalk.getAttribute('schalk'));//can look for any attribute
console.dir(schalk.getAttribute('schalk'));

const stefan = document.querySelector('[data-key="subtract"]')
console.log(schalk.dataset)





const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

//console.log(number, subtract, add)

const subtractHandler = () => {
    console.log('subtract was clicked', subtract);
    const newValue = parseInt(number.value ) - STEP_AMOUNT;
    number.value = newValue;

    if (add.disabled ){
        add.disabled = false;
    }

    if (newValue <= MIN_NUMBER){
        subtract.disabled = true;
    }
    //else{
    //    subtract.disabled = false;
    //}
}
const addHandler = () => {

    //number.value == 10;

    console.log('add was clicked');
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    //conditional logic

    if (subtract.disabled){
        subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER){
        add.disabled = true;
    }
    //else{
    //    add.disabled = false;
    //}
}

// parseInt('123')
//(123).toString()

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);