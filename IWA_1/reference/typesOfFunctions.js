
//ARROW FUNCTION EXPRESSION

//only () that supports implicit return
const example1 = ()=> {
    return 123
}
const example2 = ()=> 123
//one line returns value dont need to call it

console.log(example1());

//REGULAR/TRADITIONAL FUNCTION EXPRESSION

const example3 = function(parameter, parameter2){
return 567
}
console.log(example3());

//FUNCTION DECLARATION

//hoisting - in memory moves function declerations to top. access wherever called.
//function overloading - last declared is being used, and easily override

function example4 (){
    return 890
}
console.log(example4());

//opverwritten function
//console.alert('123')
function alert(){
    console.log('this is alerting');
}

//this.

//this is example5
const example5 = {

    value: 120,



    //binding
   add: this.actions.add.bind(this),
    minus: this.actions.minus.bind(this),
//arrow functions do not rebind - do not rebind this

        actions: {
            add: function (that) {
                console.log(this)
                //this.value = this.value + 1
                example5.value = example5.value +1//same behavior without this
            },

            minus: function (that) {
                //this.value = -this.value - 1
                example5.value = example5.value -1
            }
        }
}

const button = document.querySelector('button');
button.addEventListener(function (){
    console.log(this)//rebound to html dom
})

example5.add()
example5.add()
example5.add()
example5.minus()

//stay same - actions is now this
example5.actions.add(example5)
example5.actions.add(example5)
example5.actions.add.call(example5)
example5.actions.minus.call(example5)

//console.log(example5.test())
console.log(example5.value);//122

//

const example6 = {

    value: 130,
    //not rebinding example
    toAdd: [10,5,15,3],


    //add(){... /same
    add: function(){
        //const handler = function(item){ this.value = this.value + item}//because this is no longer example6

        const handler = (item)=>{ this.value = this.value + item}//using arrow ()


        this.toAdd.forEach(handler)
    }
}
console.log(example6.value)//130
example6.add() //didnt work
console.log(example6.value)//158 now worked because of arrow()


//functions are able to call themselves =
//Recursion

const example7 = (value) =>{
    const innervalue = value +10

    if (value < 20) {
        return example7(innervalue)
    }else{
       return innervalue
    }
}
console.log(example7(1));//undifined
const example7Result = example7(1);
console.log(example7Result);//31