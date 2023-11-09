const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}
const result = [];

function extractBiggest() {
    let maxValue = -Infinity;
    let maxIndex = -1;

    // Destructure each sublist and its array, checking the last value
    data.lists.forEach(([ , numbers], index) => {
        const lastValue = numbers[numbers.length - 1] ?? -Infinity;
        if (lastValue > maxValue) {
            maxValue = lastValue;
            maxIndex = index;
        }
    });

    // Destructure the sublist to get the array and pop the last value
    if (maxIndex !== -1) {
        const [ , numbers] = data.lists[maxIndex];
        return numbers.pop();
    }
}

// Use the result array to push values into it.
for (let i = 0; i < 15; i++) {
    const biggest = extractBiggest();
    if (biggest !== undefined) { // Ensure that undefined isn't pushed into result
        result.push(biggest);
    }
}


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)