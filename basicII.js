// Factory Functions 

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName;
    },
  };
};

let person1 = createPerson('Elise', 'Marie');
let person2 = createPerson('Fernando', 'Gherini');


// .splice method 

let pAequor1 = {
  specimenNum: 1,
  dna: [
    'G', 'T', 'T', 'C',
    'C', 'A', 'C', 'T',
    'T', 'G', 'G', 'C',
    'G', 'A', 'T'
  ]
};
console.log(pAequor1);
pAequor1.dna.splice(0, 1, 'T');
console.log(pAequor1.dna[2]);

let number = Math.floor(Math.random() * 15);
console.log(number);

// Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => new Date();

// Write Arrow Functions with Parameters

const doubler = (item) => item * 2; // If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted. const doubler = item => item * 2;
console.log(doubler(4));

const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// Set Default Parameters for Your Functions

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting()); // The default parameter kicks in when the argument is not specified (it is undefined). 

// Use the Rest Parameter with Function Parameters

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

// Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]; 
console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects

//Example 1:
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;
console.log(name);
console.log(age);

// Example 2:
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES
console.log(today);
console.log(tomorrow);


// Use Destructuring Assignment to ASSIGN Variables from Objects

const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES

console.log(highToday);
console.log(highTomorrow);
console.log(HIGH_TEMPERATURES);

// Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { yesterday: { low: lowYesterday, high: highYesterday } } = LOCAL_FORECAST;

// Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
console.log(a);
console.log(b);
[a, b] = [b, a]
console.log(a);
console.log(b);

// Destructuring via rest elements

function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list; 
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 

// Create Strings using Template Literals - Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

const person = {
  name2: "Zodiac Hasbro",
  age2: 56
};

const greeting2 = `Hello, my name is ${person.name2}! I am ${person.age2} years old.`;

console.log(greeting2);

// Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

// Write Concise Object Literal Declarations Using Object Property Shorthand

const createPerson2 = (name, age, gender) => { 
  return { name, age, gender};
};


// Write Concise Declarative Functions with ES6

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// Use class Syntax to Define a Constructor Function

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
};

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();

class Vegetable {
  constructor(a) {
    this.name = a;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot);

// Use getters and setters to Control Access to an Object

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('Elise Flaneuse');
console.log(novel.writer);
novel.writer = 'Fernando Gherini';
console.log(novel.writer);

//
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit =  fahrenheit;
  };
  get temperature() {
    return (5/9) * (this._fahrenheit - 32);
  };
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos);

class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1);

// Use export to Share a Code Block
export const add = (x, y) => {
  return x + y;
}

||

const add = (x, y) => {
  return x + y;
}

export { add };

// Reuse JavaScript Code Using import
import { add, subtract } from './math_functions.js';

// Use * to Import Everything from a File




