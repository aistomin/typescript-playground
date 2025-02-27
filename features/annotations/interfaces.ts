

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date('2000-01-01'),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const pepsiDrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printVehicle = (vehicle: Reportable): void => {
    console.log(`Name: ${vehicle.summary()}`);;
};

printVehicle(oldCivic);
printVehicle(pepsiDrink);