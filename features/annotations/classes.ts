class Vehicle {

    drive() {
        console.log('driving...');
    }

    honk() {
        console.log('honk');
    }
}

class Automobile extends Vehicle {
    drive() {
        console.log('driving a car');
    }
}


const vehicle = new Automobile();
vehicle.drive();
vehicle.honk();
