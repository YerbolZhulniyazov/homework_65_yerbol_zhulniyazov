let numbers1 = [1, 5, 12, 4, 3];
let numbers2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers3 = [3, 10, 17];

function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };
    avg = sum / numbers.length;
    return avg;
};
console.log(average(numbers1));
console.log(average(numbers2));
console.log(average(numbers3));
document.getElementById('task_2').innerHTML += average(numbers1) + '<br>';
document.getElementById('task_2').innerHTML += average(numbers2) + '<br>';
document.getElementById('task_2').innerHTML += average(numbers3) + '<br>';

