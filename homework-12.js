class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} started`);
  }
}

class PetrolCar extends Car {
  constructor(brand, model, fuel) {
    super(brand, model);
    this.fuel = fuel;
  }

  fillUp() {
    console.log(`${this.brand} ${this.model} is filling up with petrol, the current volume in liters is ${this.fuel} `);
  }

}

class ElectricCar extends Car {
  constructor(brand, model, battery) {
    super(brand, model);
    this.battery = battery;
  }

  charge() {
    console.log(`${this.brand} ${this.model} is charging, the battery charge ${this.battery}`);
  }
}



const mersedes = new PetrolCar('MERSEDES', 'BENZ', 6);
const granta = new PetrolCar('LADA', 'Granta', 5);
mersedes.start();
granta.fillUp();

const tesla = new ElectricCar('Tesla', 'Cybertrack', 90);
tesla.start();
tesla.charge();