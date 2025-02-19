"use strict";
//Вариант 3
const data = [];
const record = (param) => {
    data.push(param);
    console.log('Record: ' + param + ' added!');
    setTimeout(() => {
        const index = data.indexOf(param);
        if (index !== -1) {
            data.splice(index, 1);
            console.log('Record: ' + param + ' removed!');
        }
    }, 10000);
};
// Функция, возвращающая функцию
const createLogger = (message) => {
    return () => console.log(message);
};
// Вызов метода record
record("example1");
record("example2");
// Использование замыкания
const logHello = createLogger("Hello, closures!");
logHello();
