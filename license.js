"use strict";
const me = new Transport.Owner("Preobrazhenskiy", "Andrey", "Aleksandrovich", "11.01.2006", Transport.DocType.passport, 1337, 228666);
const myCar = new Transport.Car("Mitsubishi", "Lancer 9", 2024, "1HGCM82633A228666", 228666, me, Transport.BodyType.Sedan, Transport.CarClass.Standard);
myCar.print();
