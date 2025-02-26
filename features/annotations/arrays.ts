const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

const carMaker = carMakers[0];

const myCar = carMakers.pop();

carMakers.push('BMW');

carMakers.map((car: string): string => {
    return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());


