Object.defineProperty(exports, "__esModule", { value: true });
const transport_js_1 = require("./transport.js");
const owner = new transport_js_1.Transport.Owner('Панакшин', 'Андрей', 'Валерьевич', '16.12.2005', transport_js_1.Transport.DocType.passport, 1337, 567890);
const subaru = new transport_js_1.Transport.Car('Subaru', 'Impreza', 2022, 'WDD22212345678901', 987654, owner, transport_js_1.Transport.BodyType.Sedan, transport_js_1.Transport.CarClass.Luxury);
subaru.hello = "hello";
console.log(subaru.hello);
/*(Transport.Car as any).prototype.testFunc = function() {
    console.log("test");
}*/
console.log(subaru.brand);
