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

    data.lists.forEach(([ , numbers], index) => {
        const lastValue = numbers[numbers.length - 1] ?? -Infinity;
        if (lastValue > maxValue) {
            maxValue = lastValue;
            maxIndex = index;
        }
    });

    if (maxIndex !== -1) {
        const [ , numbers] = data.lists[maxIndex];
        return numbers.pop();
    }
}

for (let i = 0; i < 15; i++) {
    const biggest = extractBiggest();
    if (biggest !== undefined) {
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