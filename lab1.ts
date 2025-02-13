//Вариант 3


//2

const sumNumbers = (num1:number, num2:number, num3:number): number => {
    return num1+num2+num3;
}


//3

let isStudent: boolean = true;

const age: number = 19;

const surname: string = "Preobrazhenskiy";

let info: any = {
    isStudent: true,
    age: 20,
    surname: "Soprano",
    arr: [1,2,3,4,5]
};

const binarySet: boolean[] = [true, false, true, true];

let point: [number, number] = [5, 8];


//4

interface Entity {
    id: number;
    }
    interface ToJsonStringify extends
    Entity {
    e1?: number;
    e2: string;
    }
    const data: ToJsonStringify = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
    }

const jsonData: string = JSON.stringify(data);
console.log(jsonData);