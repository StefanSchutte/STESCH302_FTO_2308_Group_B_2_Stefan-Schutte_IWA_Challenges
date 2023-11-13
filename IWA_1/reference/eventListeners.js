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

//--------LMS----------
/*
One characteristic of imperative languages like JavaScript is that our code only get parsed by the browser once.



For example the following snippet runs once the DOM has been created. The only way to run it again is to reload the entire HTML document (and therefore trigger the creation of the DOM again):



<!-- index.html -->

<html>
	<head>
		<script src="./scripts.js" defer></script>
  </head>

	<body>
		<p>Loading...</p>
		<!-- Once JavaScript runs will change to for example: "JavaScript ran at 07:30:12" -->
	</body>
</html>


// scripts.js

/ Gets and formats the current hour and minute values /

const hour = new Date().getHours().toString().padStart(2, '0')
const minutes = new Date().getMinutes().toString().padStart(2, '0')
const seconds = new Date().getSeconds().toString().padStart(2, '0')

 Gets the paragraph HTML node and changes the text inside to show the above values

const node = document.querySelector('p')
node.innerText = `JavaScript ${action} at ${hour}:${minutes}:${seconds}`


This means that we have a very limited window of time (while the code is executing) that we can react to actions performed by the user. As you can imagine this is a big problem.



    The Event Loop


Luckily, this is solved by means of something called an “event loop”. An event loop is a common pattern used in in several programming languages (including JavaScript), and is described by Wikipedia as follows:

    In computer science, the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. The event loop works by making a request to some internal or external "event provider" (that generally blocks the request until an event has arrived), then calls the relevant event handler ("dispatches the event"). The event loop is also sometimes referred to as the message dispatcher, message loop, message pump, or run loop.

— Wikipedia, Event loop


The above is littered with jargon and fancy computer science terms. However, it can essentially be summed with the following five points:

    The “event loop” is something that is used by several programming languages.
    It is a system that includes both the functionality to send (”dispatch”) and listen (”provider”) for new events.
It checks for new events at repeating intervals (the loop), for example, every 10 milliseconds.
    Once an event has been detected it is passed to a function (handler) to do something with it.


    Within the context of the web, this might play out as follows:

    A button is created in HTML via the <button> tag.
    JavaScript is loaded with a <script> tag.
    Within JavaScript the button DOM node is loaded into memory (const button =).
An event listener is attached to the button by means of .addEventListener method for the click event type.
    A callback function is provided to the event listener (the handler) to fire upon click events.


    This listener attached to the <button> element will check for new events in something called the “call stack” several times each passing second (the frequency depends on available memory and currently blocking tasks). It will keep on checking the call stack until the JavaScript context is closed. This happens when you navigate to a new HTML page or when closing the current browser tab. Alternatively, events can also be manually removed with the removeEventListener method.



    Let us modify our example above to the above process:



    <!-- index.html -->

    <html>
    <head>
        <script src="./scripts.js" defer></script>
    </head>

    <body>
    <p>Loading...</p>
    <!-- Once JavaScript runs will change to for example: "JavaScript ran at 07:30:12" -->

    <button>Update paragraph</button>
    <!--
        If button is pressed will change paragraph to for example:
        "JavaScript updatedat 07:30:37"
    -->
    </body>
    </html>




// scripts.js

const node = document.querySelector('p')
const button = document.querySelector('button')

 A function takes an action name and returns a string with the action and time /
const generateMessage = (action) => {
    const hour = new Date().getHours().toString().padStart(2, '0')
    const minutes = new Date().getMinutes().toString().padStart(2, '0')
    const seconds = new Date().getSeconds().toString().padStart(2, '0')
    return `JavaScript ${action} at ${hour}:${minutes}:${seconds}`
}

 A function that generates an update message and adds it to the paragraph
const updateText = () => {
    const updateMessage = generateMessage('updated')
    node.innerText = updateMessage
}

 Creates initial message automatically without waiting for an event

const initialMessage = generateMessage('ran')
node.innerText = initialMessage

 Creates event listener that fires `updateText` (handler) when button is clicked

button.addEventListener('click', updateText)


We briefly mentioned the call stack before the above example.



    The Call Stack


The call stack is of critical importance to the JavaScript event loop. Essentially, you can think of the call stack as a box where all events are placed when they fire - and whenever JavaScript has finished all current processes it checks whether any event listener conditions are met yet. You can think of this as a to-do list, which specific conditions. For example:

    If 'woken up' is true then make breakfast
If at the office and it is 9:00 AM then start work
If eyes are closed and it is night-time then sleep


Luckily our brains are a bit more sophisticated than the call stack. However, if we were to approach this with the same model as the event loop and call stack we



Furthermore, all event listeners also automatically pass the event object itself to the handler. A typical event object looks something as follows:



{
    bubbles: true,
        detail: 1,
    path: [button, body, html, document, Window],
    target: button,
    timestamp: 49284.800000000745,
    type: 'click',
    x: 127,
    y: 68,

    // As well as various outher properties
}


We will discuss what all the above means at a later point, however for now it is important to note that an event always has a “type” value. In the above case, the type value is “click”. There are several native events that are automatically logged by the browser (regardless of whether you are listening to them or not). Even if we were to just add the button without button.addEventListener('click', updateText) listener, the event would still get dispatched - would just never get passed to a handler that does something with it.



    Some common events that get dispatched automatically are as follows:

    scroll when a user scrolls the browser window
keypress when a user presses a key on their keyboard
copy when a user copies content to their operating system clipboard
mouseover when a user moves the mouse over a specific HTML element
input when a user changes a value inside an <input> element
submit when a user submits an HTML <form>
volumechange when a user changes the volume of an audio track being played
resize when a user resizes their browser window
push when a push notification is sent to the device
offline if a user loses connection to the internet


These are merely a sample of the hundreds of events that automatically get dispatched within your page (even if they don’t have corresponding listeners).
*/