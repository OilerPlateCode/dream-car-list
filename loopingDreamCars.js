const dreamCars = [
    { make: "BMW", model: "7 Series", year: 2019, image: "bmw" },
    { make: "Ford", model: "Ranger Raptor", year: 2024, image: "ford" },
    { make: "Toyota", model: "Corolla Cross", year: 2023, image: "toyota" },
    { make: "VW", model: "Golf 8 GTI", year: 2025, image: "vw" },
    { make: "Mercedes Benz", model: "V-Class", year: 2021, image: "mercedesbenz" },
    { make: "Land Rover", model: "Discovery 4", year: 2012, image: "landrover" },
];


for (const car of dreamCars) {
    console.log(`I would love to drive a ${car.year} ${car.make} ${car.model}`);
}

