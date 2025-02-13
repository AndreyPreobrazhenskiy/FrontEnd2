//Вариант 3


//1.1

function calculateAverage(numbers: number[]): number {
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

function countValuesInRange(matrix: number[][], min: number, max: number): number {
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


//2

type MyTuple = [string, string, number];

function formatTuple(tuple: MyTuple): string {
    const [firstString, secondString, numberValue] = tuple;
    return `${firstString} – ${numberValue} – ${secondString}`;
}

const myTuple: MyTuple = ["Первый", "Второй", 42];
const formattedString = formatTuple(myTuple);
console.log(formattedString);


//3

enum OilType {
    Canola = "Рапсовое",
    Sunflower = "Подсолнечное",
    Olive = "Оливковое",
    Coconut = "Кокосовое",
    Soybean = "Соевое"
}

const selectedOil: OilType = OilType.Olive;
console.log(`Выбранный тип масла: ${selectedOil}`);


//4

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T) {
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


//5

type Oil = {
    type: OilType;
    manufactorer: string;
    allergic: boolean;
    price: number;
}

const myOil: Oil = {
    type: OilType.Olive,
    manufactorer: "Deoleo",
    allergic: false,
    price: 1200
}

console.log(JSON.stringify(myOil,  null, 2));