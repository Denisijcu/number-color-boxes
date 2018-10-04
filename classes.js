class Automobile {
  constructor(wheels) {
    this.wheels = wheels;
    this.color = null;
  }


  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

class Motorcycle extends Automobile {
  constructor(make, model, year) {
    super(2);
    this.make = make;
    this.model = model;
    this.year = year;
    // this.doors = 0;
  }
}

let motorcycle = new Motorcycle('Toyota', 'Camry', 1992);
//console.log(motorcycle);


class Sedan extends Automobile {
  constructor(make, model, year) {
    super(4);
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Maybach extends Sedan {
  constructor(make, model, year, color, speed) {
    super(4);
    this.make = make;
    this.model = model;
    this.year = year;
    this.doors = 4;
    this.color = color;
    this.speed = speed;
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  getSpeed() {
    return this.speed;
  }

}

let maybach = new Maybach("Mercedez", "Maybach", 2012, "Silver", 250);
console.log(maybach);
//console.log('Make:', maybach.make, 'Color: ', maybach.getColor(), 'Speed:', maybach.getSpeed());

/*
function Automobile(wheels) {
  this.wheels = wheels;
  this.setColor = (color) => {
    this.color = color;
  }
  this.getColor = () => {
    return this.color;
  }
}

function Motorcycle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Motorcycle.prototype = new Automobile(2);

function Sedan(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.doors = 4;
}

let sedan = new Sedan(4);
console.log(sedan);

Sedan.prototype = new Automobile(4);

function Camry() {}

Camry.prototype = new Sedan('Toyota', 'Camry', '1992');
const camry = new Camry();
camry.year = 2010;


console.log(camry.wheels, camry.doors, camry.year);
*/