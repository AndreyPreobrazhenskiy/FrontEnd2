"use strict";
//Вариант 3
//1.1
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Массив не должен быть пустым");
    }
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    const average = sum / numbers.length;
    return average;
}
const numbersArray = [10, 20, 30, 40, 50];
const average = calculateAverage(numbersArray);
console.log(`Среднее арифметическое: ${average}`);
//1.2
function countValuesInRange(matrix, min, max) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const value = matrix[i][j];
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
}
const matrix = [
    [1, 5, 10],
    [15, 20, 25],
    [30, 35, 40]
];
const minValue = 10;
const maxValue = 30;
const count = countValuesInRange(matrix, minValue, maxValue);
console.log(`Количество значений в интервале [${minValue}, ${maxValue}]: ${count}`);
function formatTuple(tuple) {
    const [firstString, secondString, numberValue] = tuple;
    return `${firstString} – ${numberValue} – ${secondString}`;
}
const myTuple = ["Первый", "Второй", 42];
const formattedString = formatTuple(myTuple);
console.log(formattedString);
//3
var OilType;
(function (OilType) {
    OilType["Canola"] = "\u0420\u0430\u043F\u0441\u043E\u0432\u043E\u0435";
    OilType["Sunflower"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435";
    OilType["Olive"] = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435";
    OilType["Coconut"] = "\u041A\u043E\u043A\u043E\u0441\u043E\u0432\u043E\u0435";
    OilType["Soybean"] = "\u0421\u043E\u0435\u0432\u043E\u0435";
})(OilType || (OilType = {}));
const selectedOil = OilType.Olive;
console.log(`Выбранный тип масла: ${selectedOil}`);
//4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Type: ${pet.constructor.name}`);
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
}
const myDog = new Dog();
const myCat = new Cat();
console.log("==Dog==");
printPetInfo(myDog);
console.log("==Cat==");
printPetInfo(myCat);
const myOil = {
    type: OilType.Olive,
    manufactorer: "Deoleo",
    allergic: false,
    price: 1200
};
console.log(JSON.stringify(myOil, null, 2));
