/*events are things that happen.
systemproduces / fires a signal
action can be automatically taken when event occurs
inside browser window
attached to a specific item that resides in it
There are many types
//how to
attache event handler
block of code that runs when event fires
register event handler/listener
listerner listens
handler is code that runs in response
ex:
1. selects, clicks or hovers over el
2. chooses a key on keyboard
3. resize or close browser window
4. web page finish loading
5. form is submitted
6. video is paused, played, ends
7. error ocurs
 */

//bubbling/propegation
//capturing

//example
const example = document.querySelector('#example');
const exampleHandler = ()=> console.log('btn clicked')
example.addEventListener('click', exampleHandler)
//example = {
//    ...,
//    addEventListener(eventName, handler) {
//        ...
//    }
//}
const example2 = document.querySelector('#example')
example2.addEventListener('click', ()=>{
    example2.innerText = 'clicked'
    example2.disabled = true
})

//example3

const BACKGROUDS = [
    'red',
    'blue',
    'green',
    'purple',
    'brown',
    'black',
]
const buttonList = document.querySelectorAll('button')

const buttonsArray = Array.from(buttonList)

const calcRandomColor = () =>{

}

console.log(buttonsArray)
const handler = ()=> { console.log('clicked')}
for (const button of buttonsArray) {
    button.addEventListener('click', handler)
}

example.onclick = ()=>{
    example.innerText = 'Click';
    example.disabled = true;
}//can only have one of this type else override
//event listener allows for more than one event

/*
common server configs will disallow inline js
never use html attribute
 */

//recomend
document
    .querySelector('#example')
    .addEventListener('click', ()=> console.log('hi'))

window
    .addEventListener('scroll', ()=> console.log('scroll'))

const example4 = document.querySelector('#example');
example4.addEventListener('click', function()
{ console.log(this , 'Hi')
});

//programmaticaly selecting
example4.click()
example4.click()

//event object
const example5 = document.querySelector('#example');
const handler5 = (event) => {
    console.log(event);
}
handler({
    type: 'event'
})

example5.addEventListener('click', handler5(event));
example5.click();

//isTrusted, bubbles, defaultPrevented, offset, clientX/Y, srcElement(where event sits, timeStamp, type,
//Prototype: target(where event come from-dom)

const element = document.querySelector('div')


/**
 * Returns a random color value based on a random index used on {@link BACKGROUNDS}
 *@returns {string}
 */
const calcRandom = () => {
const maxIndex = BACKGROUNDS.length - 1;
const randomIndex = Math.round(MaxIndex * Math.random());

return BACKGROUDS[randomIndex]
}

const newHandler = (event) => {
    event.stopPropagation();//stop bubbling

    const { target, srcElement } = event;

    console.dir(target);
    if (target.tagName !== 'BUTTON') return

    const { colorOverride } = target.dataset || { color: null}
    target.style.color = 'white';
    target.style.background = colorOverride || calcRandom()

    element.removeEventListener('click', handler5)

}

element.addEventListener('click', handler5)


//memory leaking

//bubbling

//form
const element1 = document.querySelector('form');
const handler3 = (event) => {
    event.preventDefault()
    console.log(event);

    const formData = new FormData(event.target)
    const data = Object.formEntries(formData)
    console.log(data);

    event.target.reset()

}
window.document.body.addEventListener('submit', handler3)

