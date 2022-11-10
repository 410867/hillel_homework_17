const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let array1 = [];

array1 = sumAndNumberOfPositiveElements(array);
console.log(`Сума елементів масиву: ${array1[0]}\nКількість позитивних елементів в масиві: ${array1[1]}`);

array1 = minimumAndMaximumArrayElement(array);
console.log(`Мінімальний елемент масиву: ${array1[0][0]}, та його індекс: ${array1[0][1]}`);
console.log(`Максимальний елемент масиву: ${array1[1][0]}, та його індекс: ${array1[1][1]}`);

array1 = numberOfNegativeElements(array);
console.log(`Кількість негативних елементів в масиві: ${array1[0]}.`);

array1 = numberOfOddAndEvenPositiveElements(array);
console.log(`Кількість непарних позитивних елементів в масиві: ${array1[0]}.`);
console.log(`Кількість парних позитивних елементів в масиві: ${array1[1]}.`);

array1 = sumOfEvenAndOddPositiveElements(array);
console.log(`Сумма парних позитивних елементів в масиві: ${array1[0]}.`);
console.log(`Сумма непарних позитивних елементів в масиві: ${array1[1]}.`);

array1 = productOfPositiveElements(array);
console.log(`Добуток позитивних елементів в масиві: ${array1[0]}.`);

array1 = largestArrayElement(array);
console.log(`Найбільший елемент в масиві: ${array1[0]}.\nТа обнулений масив: ${array}`);



function sumAndNumberOfPositiveElements(array) { //Знаходження суми та кількості позитивних елементів масиву
    let sum = 0;
    let numberOfPositiveElements = 0;
    array.forEach((item, index, array) => {
        sum += item;
        if (item >= 0) {
            numberOfPositiveElements++;
        }
    })
    return [sum, numberOfPositiveElements];
}

function minimumAndMaximumArrayElement(array) { //Знаходження мінімального та максимального елементів масиву
    let min = 0;
    let max = 0;
    let indexMin = 0;
    let indexMax = 0;
    array.forEach((item, index, array) => {
        if (item < min) {
            min = item;
            indexMin = index;
        }
        if(item > max) {
            max = item;
            indexMax = index;
        }
    })
    return [[min, indexMin], [max, indexMax]];
}

function numberOfNegativeElements(array) { //Знаходження кількості негативних елементів масиву
    let numberOfNegativeElements = 0;
    array.forEach((item, index, array) => {
        if (item < 0) {
            numberOfNegativeElements++;
        }
    })
    return [numberOfNegativeElements];
}

function numberOfOddAndEvenPositiveElements(array) { //Знаходження кількості непарних та парних елементів масиву
    let numberOfOddPositiveElements = 0;
    let numberOfEvenPositiveElements = 0;
    array.forEach((item, index, array) => {
        if ((item >= 0) && (item % 2 !== 0)) {
            numberOfOddPositiveElements++;
        }
        if ((item >= 0) && (item % 2 === 0)) {
            numberOfEvenPositiveElements++;
        }
    })
    return [numberOfOddPositiveElements, numberOfEvenPositiveElements];
}

function sumOfEvenAndOddPositiveElements(array) { //Знаходження сум парних та непарних елементів масиву
    let sumOfEvenPositiveElements = 0;
    let sumOfOddPositiveElements = 0;
    array.forEach((item, index, array) => {
        if ((item >= 0) && (item % 2 === 0)) {
            sumOfEvenPositiveElements += item;
        }
        if ((item >= 0) && (item % 2 !== 0)) {
            sumOfOddPositiveElements += item;
        }
    })
    return [sumOfEvenPositiveElements, sumOfOddPositiveElements];
}

function productOfPositiveElements(array) { //Знаходження добутку позитивних елементів масиву
    let productOfPositiveElements = 1;
    array.forEach((item, index, array) => {
        if ((item > 0)) {
            productOfPositiveElements *= item;
        }
    })
    return [productOfPositiveElements];
}

function largestArrayElement(array) { //Знаходження найбільшого числа масиву, та обнулення інших
    let max = 0;
    let indexMax = 0;
    array.forEach((item, index, array) => {
        if(item > max) {
            array[indexMax] = 0;
            max = item;
            indexMax = index;
        } else if (item <= max) {
            array[index] = 0;
        }
    })
    return [max];
}