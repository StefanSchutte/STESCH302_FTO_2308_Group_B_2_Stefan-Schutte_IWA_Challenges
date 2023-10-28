const hello = 1;
//window.hello = //window is root context

//parseInt is on window.parseInt

//window.document or document.
//    localStorage.

    const example = document.querySelector('button')
example.disabled = true;

    //2 types of thing that can be in a object
const exampleObj ={
    go: 100,
    user: 'Stefan',
    //method is a function that is a propety in a object
    doTHing: () => console.log('doTHing')
}

window.exampleObj

if(exampleObj.go === 100){
    exampleObj.doTHing()
}

//same way
const fn = () => console.log('aa');
const yo = 1;
const obj ={
    fn,
    yo,
}
obj.fn();


const go = ()=> console.log('asdf');
window.go()
//everything gets assign to root window that i create

const object = {
    name: "Stefan"
}
console.log(obj);

console.log(window);
console.log(window.parseInt);
console.log(localStorage)

//objects inside objects
const first = {
    name: "Stefan",
    family:{
        lindie: 'A',
        inge: "B",
    }
}
console.log(first);
console.log(typeof first);
//everything thats not a primitive is a typeof object

console.log(typeof []);//object



//document.querySelector()

//anagtated objects
/**
 * This is a tooltip
 */
let value = 1;
console.log(value);

/**
 * user thats logged in
 * @type {{name: string, legal: string, active: boolean, id: string}}
 */
const user = {
    /**
     * Prefered name of user
     */
   name: 'John',

    /**
     * legal name official doc of user
     */
    legal: 'John Francis Kennedy',

    /**
     * the id
     */
    id: '123456789',

    /**
     * indicates if user logged in at least once
     */
    active: true,
}
if (user.active){

}

//delete variable in obj
const objj = {
    name: 'Skalk',
    age: '10',
    id: '123123456',
}
console.log(delete objj.id);

//reassign obj to null
objj.id = null;

//if (objj.id);


//