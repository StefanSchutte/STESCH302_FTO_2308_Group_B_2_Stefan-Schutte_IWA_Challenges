// . is syntax used to query things inside object

const objName = {

}

const func = () => {

}

//if (){

//}

const user1 = {
    names: 'Stefan',
    surname: 'Schutte',
    age: 30,
}

const user2 = {
    names: 'Skalk',
    surname: 'Venter',
    age: undefined,
}

console.log(user1.names, user2.names)//Stefan Skalk

const user3 = {
    names: 'Skalky',
    surname: 'Venter',
    age: 1,
}

// const userName = 'stef'
// const userAge
// const userRelatives
// const relativeName

const objName = {
    firstKey: 1,
    secondKey: true,
    thirdKey: 'Hello',
}
console.log(objName.firstKey)//1

if (user1.name === 'Stefan' && user2.name === 'Skalk'){
    console.log('CodeSpace')
}

const families = {
    Smith:{
        Stefan:{
            names: 'Stefan',
            surname: 'Schutte',
            age: 30,
        },
        Scalk:{
            names: 'Skalk',
            surname: 'Venter',
            age: undefined,
        },
    }
}
console.log(families.Smith.Stefan.age > families.Smith.Scalk.age);

//nested assigning
const stefan = {
    names: 'Stefan',
    surname: 'Schutte',
    age: 30,
}

const schalk = {
    names: 'Schalk',
    surname: 'Venter',
    age: undefined,
}


const skalky = {
    'a-b': 'Skalky',
    surname: 'Venter',
    age: 1,
}
skalky[a-b] = ''

const families = {
    venter: {
        stefan,
        schalk,
        skalky,
    }
}

//const ThisIsAVariable = ''//pascalCase - strictly for classes
//const this_is_a_variable = ''//snakeCase
//const this-is-a-variable = ''//kebabcase

//nesting same values in differnet objects
const example = 15
const kids = {
    skalky,
}


const families = {
    newValue: example,
    venter: {
        stefan,
        schalk,
        skalky,
    }
}

const data = {
    languages:{
af: 'Afrikaans',
        en: 'English',
    },
    kids,
    venter,
}

const kids = {
    skalky,
    10: 'yo'
}
const result = kids[5+5]

const member = 'Stefan'
const result = venter[member]

