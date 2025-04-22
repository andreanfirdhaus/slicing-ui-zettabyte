// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
    // Your Code Here
    const odds = number.filter((number) => number % 2 === 1);
    const even = number.filter((number) => number % 2 === 0);

    return [odds, even];
}

console.log(result(number));
