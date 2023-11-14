const data = {
    lists: [
        ["first", [15, 11, 13, 7, 5]],
        ["second", [2, 6, 8, 4, 14, 12, 10]],
        ["third", [9, 3, 1]],
    ],
};

// Only edit below

const [, first] = data.lists[0];
const second = data.lists[1][1];
const third = data.lists[2][1];

const result = [];

// 1. The method you would have come up with, given what you know thus far.
const extractBiggest1 = () => {
    const n1 = first[first.length - 1] || 0;
    const n2 = second[second.length - 1] || 0;
    const n3 = third[third.length - 1] || 0;
    if (n1 > n2 && n1 > n3) {
        return first.pop();
    }
    if (n2 > n1 && n2 > n3) {
        return second.pop();
    }
    if (n3 > n2 && n3 > n1) {
        return third.pop();
    }
};

// 2. This is method using for loop
const extractBiggest2 = () => {
    const newList = [first, second, third]; // We create this list of all the lists to be able to loop over them.
    let biggest1 = [0];
    for (i = 0; i <= newList.length - 1; i++) {
        if (newList[i][newList[i].length - 1] > biggest[biggest.length - 1]) {
            biggest = newList[i];
        }
    }
    return biggest1.pop();
};

// 3. This is method using Reduce (Higher order function - Array function)
const extractBiggest3 = () => {
    const newList = [first, second, third]; // We create this list of all the lists to be able to loop over them.
    const biggest2 = newList.reduce(
        (acc, current) => {
            if (current[current.length - 1] > acc[acc.length - 1]) return current;
            return acc;
        },
        [0]
    );
    return biggest2.pop();
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
/*
 * 3. This is a method using Reduce and Map - This is the most reusable method as it can be used on any size list
 *     (Higher order function - Array function)
 */
const extractBiggest4 = () => {
    const newList = data.lists.map((currentItem) => currentItem[currentItem.length - 1]); // We create this list of all the lists to be able to loop over them.
    const biggest2 = newList.reduce(
        (acc, current) => {
            if (current[current.length - 1] > acc[acc.length - 1]) return current;
            return acc;
        },
        [0]
    );
    return biggest4.pop();
};