const add = (a, b) => a + b;
const multiply = (a, b) => a - b;

function internal() {
    const added = this.add(this.internal.a, this.internal.b);
    this.multiply(added, this.internal.b);
}

// Not allowed to change below this

const example1 = {
    internal: {
        a: 2,
        b: 4,
        c: 8,
    },
    add: add,
    multiply: multiply,
    calculate: internal,
};

const example2 = {
    internal: {
        a: 2,
        b: 2,
        c: 3,
    },
    add: add,
    multiply: multiply,
    calculate: internal,
};

example1.calculate();
example2.calculate();

/*
 * This was some extra stuff from the second session.
 */
function incrementBirthday() {
    return (this.age += 3);
}

const createPerson = (name, age) => {
    return {
        name: name,
        age: age,
        ageUp: incrementBirthday,
    };
};

const person = createPerson("Stephan", 25);

console.log(person.ageUp());