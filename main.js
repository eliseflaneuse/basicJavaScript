// this is a comment - Basic javaScript lessons 

// BASIC OPERATIONS += -= *= /= 

let a = 10;
a += 10;
console.log(a);

/* REMAINDER
5 % 2 = 1 because 
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4 
5 - 4 = 1 (Remainder)

In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
*/

const remainder = 11 % 2;
console.log(remainder);

// to escape DOUBLE QUOTES 
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr);

// using both double quotes and single quotes to put a link 

const myString = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myString);

/* 
Code	   Output
\'	    single quote
\"	    double quote
\\	    backslash
\n	    newline
\t	    tab
\r	    carriage return
\b	    word boundary
\f	    form feed
*/

const testString = "FirstLine\n\t\\SecondLine\nThirdLine"; 
console.log(testString);

// In JavaScript, when the + operator is used with a String value, it is called the concatenation operator.

const ourString = "This is the start. " + "This is the end."; 
console.log(ourString);

// We can also use the += operator to concatenate a string onto the end of an existing string variable.

let ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

const myName = "Elise Flaneuse";
const myString2 = "My name is " + myName + " and I am well!";
console.log(myString2);

const someAdjective = "fun!";
let myStr3 = "Learning to code is ";
console.log(myStr3);
myStr3 += someAdjective;
console.log(myStr3);

// You can find the length of a String value by writing .length after the string variable or string literal.

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

// Bracket notation is a way to get a character at a specific index within a string.

const firstName = "Ada";
const firstLetter = firstName[0];
console.log(firstLetter);

const secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

// Use Bracket Notation to Find the Last Character in a String
const lastLetter = firstName[firstName.length - 1];
console.log(lastLetter);

// Nth-to last letter
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);

// Store Multiple Values in one Variable using JavaScript Arrays

const sandwich = ["peanut butter", "jelly", "bread"];
console.log(sandwich);

// Nest one Array within Another Array - called multi-dimensional array
const teams = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes
const array = [50, 60, 70];
console.log(array[0]);

/* Modify Array Data With Indexes - 
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.*/
console.log(array);
array[0] = 15;
console.log(array);

// Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
const subarray = arr[3];
console.log(arr);
const nestedSubarray = arr[3][0];
console.log(nestedSubarray);
const element = arr[3][0][1];
console.log(element);

// FUNCTIONS

// Manipulate Arrays With push() - .push() takes one or more parameters and "pushes" them onto the end of the array.

const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);

// Manipulate Arrays With pop() - .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// Manipulate Arrays With shift() - it removes the first element instead of the last.

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(ourArray);
console.log(removedFromOurArray);

// Manipulate Arrays With unshift() - .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

ourArray.unshift("Happy");
console.log(ourArray);

// How to write a function

function functionName() {
    console.log("Hello World");
  }

// call the function like this:
functionName();

// Passing Values to Functions with Arguments
function testFun(param1, param2) {
    console.log(param1, param2);
  }
testFun("Hey", "babes!");

function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
functionWithArgs(2, 3);

// Return a Value from a Function with Return

function plusThree(num) {
    return num + 3;
  }
 const answer = plusThree(5);
 console.log(answer);

 function timesFive(num) {
    return num * 5;
}
const answer2 = timesFive(5);
console.log(answer2);

// Global Scope and Functions

const myGlobal = 10;

function fun1() {
  // Variables which are declared without the let or const keywords are automatically created in the global scope.
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

// Assignment with a Returned Value

let processed = 0;
console.log(processed);
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

/* In Computer Science a queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items are taken off from the front of the queue.*/

function nextInLine(arr, item) {
    arr.push(item); // push item to the end of the arr
    const removedFromOurArray = arr.shift(); // assign the first element of the arr that was removed to the const
    return removedFromOurArray; // return the value asked, otherwise would be undefined
  }
  
  let testArr = [1, 2, 3, 4, 5];

  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  // Booleans may only be one of two values: true or false. These two states are mutually exclusive. Boolean values are never written with quotes.

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue === true) {
      return "Yes, that was true!";
    }  else {
      return "No, that was false!";
    }
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

/* Operators:

    ==  Equality operator 
    === Strict equality operator 
    !=  inequality operator
    !== Strict Inequality operator
    >   Greater Than Operator
    >=  Greater Than Or Equal To Operator
    <   Less Than Operator
    <=  Less Than Or Equal To Operator
    &&  Logical And Operator
    ||  Logical Or Operator
*/

// else/if statements with operators 

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
   } else if (strokes === par + 2) {
    return names[5];
   } else if (strokes >= par + 3) {
    return names[6];
   }

  return "Change Me";
}
console.log(golfScore(5, 4));

// Switch Statements

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
      case 1:
      answer = "alpha";
      break; // if there is not break it will continue running
      case 2:
      answer = "beta";
      break;
      case 3:
      answer = "gamma";
      break;
      case 4:
      answer = "delta";
      break;
      default:
      answer = "stuff";
      break;
    }
    return answer;
  }
console.log(caseInSwitch(2));

// Returning Boolean Values from Functions (Comparison) 

function isEqual(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }

// Instead: But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
    return a === b;
  }

// JavaScript Objects

const cat = {
    name: "Momo",
    legs: 4,
    tails: 1,
    enemies: ["Grandma", "Cold Floors"]
  };



// Dot Notation - is what you use when you know the name of the property you're trying to access ahead of time.

const tailValue = cat.tails;  
const legsValue = cat.legs;   
console.log(tailValue);
console.log(legsValue);

// Bracket Notation -  If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

const starTrek = {
    "Cadet Lieutenant Commander Captain Admiral": "James Tiberius Kirk",
    "Science officer": "S'chn T'gai Spock",
    "Spaceship": "USS Enterprise"
  };
  
  const commander = starTrek["Cadet Lieutenant Commander Captain Admiral"];
  const viceCommander = starTrek["Science officer"];
  const spaceShip = starTrek["Spaceship"];

  console.log(commander);
  console.log(viceCommander);
  console.log(spaceShip);


// Accessing Object Properties with Variables

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
const myDog = "Hunter";
const myBreed = dogs[myDog];
/* Note that we do not use quotes around the variable name when using it to access the property 
because we are using the value of the variable, not the name.*/
console.log(myBreed);

// Updating Object Properties -  we can dot or bracket notation (see line 334)

cat.name = "Thor";
cat.enemies = ["sun rays", "rain"];

console.log(cat);

// Add New Properties to a JavaScript Object - You may use either dot or bracket notation.
cat.meow = "mih";
console.log(cat);

// Delete Properties from a JavaScript Object

delete cat.meow;
console.log(cat);

cat.name;

// Manipulating Complex Objects

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];

myMusic.push({artist: "BTS", title: "Proof", release_year: 2022, "formats": ["CD", "8T", "LP"]});
console.log(myMusic);

// Accessing Nested Objects

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// Accessing Nested Arrays

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
const secondTree = myPlants[1].list[1];
console.log(secondTree);

// Updating Nested Objects

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
console.log(recordCollection);
function updateRecords(records, id, prop, value) {
    if (prop != "tracks" && value != "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value != "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop]; // best to always use bracket notation on this cases
    }
    return records;
  }
  
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordCollection);
  
// Iterate with JavaScript While Loops

// count up
const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
};

console.log(myArray);

// count down
const myArray2 = [];
let j = 0;

while (j < 5) {
  myArray2.push(j);
  j++;
};
console.log(myArray2);

/* Iterate with JavaScript For Loops - 
The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
Syntax:
for (a; b; c)
where a is the initialization statement, b is the condition statement, and c is the final expression. */

const forArray = [];

for (let x = 0; x < 5; x++) { // always pay attention to the semicolon!
  forArray.push(x);
};

console.log(forArray);

// Iterate Odd Or Even Numbers With a For Loop

const evenArray = [];
for (let i = 0; i < 10; i += 2) {
  evenArray.push(i);
}
console.log(evenArray);

const oddArray = [];
for (let i = 1; i < 10; i += 2) {
  oddArray.push(i)
}
console.log(oddArray);

// Iterate Through an Array with a For Loop

const myArrFor = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArrFor.length; i++) {
  total = total + myArrFor[i];
}
console.log(total);

// Nesting For Loops

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  };
    console.log(product);
    return product;
  }
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  
/* Replace Loops using Recursion

Recursion is a programming pattern or concept embedded in many programming languages, 
and JavaScript is not left out. It is a feature used in creating a function that keeps 
calling itself but with a smaller input every consecutive time until the code’s desired 
result from the start is achieved. */

function sum(arr, n) {
    if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
  }
console.log(sum([2, 3, 4, 5], 3));

// Profile Lookup