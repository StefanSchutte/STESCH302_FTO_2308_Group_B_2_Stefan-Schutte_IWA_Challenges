const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

function internal() {
    const added = add(this.internal.a, this.internal.b);
    console.log(added * this.internal.c);

    //console.log(added);
    //console.log(this.internal.c)

    //const multiplied = this.multiply(this.internal.a, this.internal.b);
    //console.log(multiplied );

    return this;
}

/*
function internal() {
    const added = add(this.internal.a, this.internal.b);
    const multiplied = multiply(this.internal.a, this.internal.b);
    console.log(added * multiplied );
    return this;
}
*/

// Not allowed to change below this

const example1 = {
    internal: {
        a: 2,
        b: 4,
        c: 8,
    },
    add,
    multiply,
    calculate: internal
}

const example2 = {
    internal: {
        a: 2,
        b: 2,
        c: 3,
    },
    add,
    multiply,
    calculate: internal
}

example1.calculate()
example2.calculate()