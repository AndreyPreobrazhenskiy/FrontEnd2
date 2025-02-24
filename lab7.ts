import { Transport } from "./Transport.js";

import Car = Transport.Car;
import Owner = Transport.Owner;
import Motorbike = Transport.Motorbike;

const owner1: Owner = new Owner(
    "Preobrazhenskiy",
    "Andrey",
    "Aleksandrovich",
    "11.01.2006",
    Transport.DocType.passport,
    1234,
    344444
);

const owner2: Owner = new Owner(
    "Kondurin",
    "Anton",
    "Nikolaevich",
    "01.01.2006",
    Transport.DocType.passport,
    1234,
    335462
)

const car1: Car = new Car(
    "Toyota",
    "Land Cruiser",
    2024,
    "1HGCM82633A123456",
    123456,
    owner1,
    Transport.BodyType.Sedan,
    Transport.CarClass.Luxury
)

const car2: Car = new Car(
    "Toyota",
    "GT-86",
    2022,
    "5UXCR6C53M9F20939",
    67890,
    owner1,
    Transport.BodyType.Coupe,
    Transport.CarClass.Luxury
)

const car3: Car = new Car(
    "Audi",
    "TT",
    2021,
    "WAUZB4FF4FN012345",
    11223,
    owner2,
    Transport.BodyType.Coupe,
    Transport.CarClass.Luxury
)

const bike1: Motorbike = new Motorbike(
    "Yamaha",
    "R1",
    2021,
    "XTAGFL110KY313115",
    44321,
    owner1,
    "Спортивная",
    true
)

const bike2: Motorbike = new Motorbike(
    "Honda",
    "CDR600",
    2021,
    "JA4AD31G2MZ012345",
    543210,
    owner2,
    "Алюминиевая",
    false
)

const storage = new Transport.VehicleStorage<Transport.Vehicle>([car1, car2, car3, bike1, bike2]);

console.log("=== Исходный список транспорта ===");
storage.getAllVehicle().forEach(vehicle => vehicle.print());

console.log("\n=== Сортировка по бренду ===");
storage.sortByBrand().forEach(vehicle => vehicle.print());

console.log("\n=== Сортировка по фамилии владельца ===");
storage.sortByOwnerSurname().forEach(vehicle => vehicle.print());

console.log("\n=== Поиск по фамилии владельца ===");
storage.getVehicleBySurname("preobrazhenskiy").forEach(vehicle => vehicle.print());

console.log("\n=== Поиск по началу фамилии владельца ===");
storage.getVehiclesByOwnerSurnamePrefix("andrey").forEach(vehicle => vehicle.print());

console.log("\n=== Информация о раме мотоцикла Yamaha R1 ===");
console.log(bike1.getFrameInfo());

console.log("\n=== Информация о раме мотоцикла Honda CBR600 ===");
console.log(bike2.getFrameInfo());