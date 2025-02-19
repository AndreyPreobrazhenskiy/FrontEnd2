import { Transport } from "./transport.js";

const owner = new Transport.Owner(
    'Панакшин',
    'Андрей',
    'Валерьевич',
    '16.12.2005',
    Transport.DocType.passport,
    1337,
    567890 
);

const subaru = new Transport.Car(
    'Subaru',
    'Impreza',
    2022,
    'WDD22212345678901',
    987654,
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Luxury
);

(subaru as any).hello = "hello";
console.log((subaru as any).hello);

/*(Transport.Car as any).prototype.testFunc = function() {
    console.log("test");
}*/

console.log(subaru.brand)