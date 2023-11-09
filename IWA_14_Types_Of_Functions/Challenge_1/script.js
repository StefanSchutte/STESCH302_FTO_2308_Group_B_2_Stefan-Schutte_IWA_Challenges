const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
    console.log(parameter)
    console.log(parameter)
}

function hobby1() {
    logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hobby1()
//hobby1()
