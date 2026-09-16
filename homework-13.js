class Drink {
  #temperature;
  constructor (name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  showInfo(property1, property2) {
    console.log(this.name, this.size, this.price, this.#temperature, property1, property2);
  }

  getTemperature(celsius) {
    return this.#temperature = celsius;
  }

  setTemperature() {
    console.log(`Температура ${this.name} теперь ${this.#temperature}`)
  }

  #makeDrink() {
    return this.name;
  }


  serveDrink() {
    this.#makeDrink()
    console.log(`${this.name} подан`);
  }

 }

class Coffee extends Drink {
  constructor(name, size, price, temperature, milk, beans) {
    super(name, size, price, temperature);
    this.milk = milk;
    this.beans = beans;
  }

  showInfo() {
    super.showInfo(this.milk, this.beans);
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, herbs, strength) {
    super(name, size, price, temperature);
    this.herbs = herbs;
    this.strength = strength;
  }

  showInfo() {
    super.showInfo(this.herbs, this.strength);
  }
}

class Cacao extends Drink {
  constructor(name, size, price, temperature, milk, beans) {
    super(name, size, price, temperature);
    this.milk = milk;
    this.beans = beans;
  }

  showInfo() {
    super.showInfo(this.milk, this.beans);
  }
}

class Milkshake extends Drink {
  constructor(name, size, price, temperature, milk, fruit) {
    super(name, size, price, temperature);
    this.milk = milk;
    this.fruit = fruit;
  }

  showInfo() {
    super.showInfo(this.milk, this.fruit);
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  showInfo() {
    console.log(this.name, this.location);
  }

  orderDrink(drink) {
    console.log(`${drink.name} заказан`);
  }
}

const latte = new Coffee('Latte', 300, 250, 90, 'natural milk', 'arabica');

const cherryTea = new Tea('Cherry Tea', 300, 150, 95, 'cherries', 'light');

const cacao = new Cacao('Nesquik', 250, 200, 80, 'almond milk', 'Criollo beans');

const bananaMilkshake = new Milkshake('Banana Milkshake', 350, 320, 10, 'natural milk', 'banana')

const cafe = new Cafe('Arabica', 'Pushkina street');



latte.showInfo();

latte.serveDrink();

cafe.showInfo();

cafe.orderDrink(cherryTea);

cherryTea.getTemperature(50);  

cherryTea.setTemperature();  

cherryTea.showInfo();

cacao.showInfo();

bananaMilkshake.showInfo();

