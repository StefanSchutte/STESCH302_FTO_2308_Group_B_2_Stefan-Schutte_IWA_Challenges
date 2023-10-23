const nickname= "Timmy";
const firstname = "Timothy";

const greet = "Good Morning"
const user = nickname || firstname

if (user){
    console.log(`${greet}, ${user}!`)
}else{
    console.log("Good Morning!")
}

