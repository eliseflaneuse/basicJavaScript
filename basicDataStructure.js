/* 
Basic Data Structures

1. Remove Items from an Array with pop() and shift()
2. Remove Items Using splice()
3. Add Items Using splice()
4. Copy Array Items Using slice()
5. Copy an Array with the Spread Operator
6. Combine Arrays with the Spread Operator
7. Check For The Presence of an Element With indexOf()
8. Iterate Through All an Array's Items Using For Loops
9. Create complex multi-dimensional arrays
10. Add Key-Value Pairs to JavaScript Objects
11. Modify an Object Nested Within an Object
12. Access Property Names with Bracket Notation
13. Use the delete Keyword to Remove Object Properties
14. Check if an Object has a Property
15. Iterate Through the Keys of an Object with a for...in Statement
16. Generate an Array of All Object Keys with Object.keys()
17. Modify an Array Stored in an Object
*/

// 1. Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

// 2. Remove Items Using splice() - allows us to do just that: remove any number of consecutive elements from anywhere in an array.

let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
console.log(array);

// 3. Add Items Using splice(startIndex, amoutToDelete, argumentsToAdd)

const numbers = [10, 11, 12, 12, 15];
numbers.splice(3, 1, 13, 14);
console.log(numbers);

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
};
  
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// 4. Copy Array Items Using slice()
/* Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, 
leaving the array it is called upon untouched.*/

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3); // .slice(startIndex, stopIndex(notIncluded))
console.log(todaysWeather);

function forecast(arr) {
      return arr.slice(2,4);
  }
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// 5. Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
  };
  
console.log(copyMachine([true, false, true], 2));

// 6. Combine Arrays with the Spread Operator

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

console.log(thatArray);

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; 
    return sentence;
  }
  
console.log(spreadOut());

// 7. Check For The Presence of an Element With indexOf()

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('dates')); // returns -1 when it does not find the element
console.log(fruits.indexOf('oranges'));
console.log(fruits.indexOf('pears'));

function quickCheck(arr, elem) {
    let newArray = arr;
    if (newArray.indexOf(elem) >= 0) {
        return true
    } else {
        return false
    }
  }
  
console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));

// 8. Iterate Through All an Array's Items Using For Loops

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

function filteredArray(arr, elem) {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        //Checks every parameter for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
      }
    }
  
    return newArr;
  }
  // change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 2], [4, 13, 26], [19, 3, 9]], 3));

// 9. Create complex multi-dimensional arrays

let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];

console.log(nestedArray[2][1][0][0][0]);

let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
        ['loop', 'shift', 6, 7, 1000, 'method', 'deep'] 
    ],
    [
      [
        ['concat', false, true, 'spread', 'array', 'deeper'],
      ],
      [
        [
            ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest'],
        ]
      ]
    ]
];
  
// 10. Add Key-Value Pairs to JavaScript Objects

const harryPotterCharacter = {
    name: 'Hermione Granger',
    origin: 'muggleborn',
    human: true
  };

harryPotterCharacter.birth = 'England';
harryPotterCharacter['hair color'] = 'brown';
console.log(harryPotterCharacter);
  
// 11. Modify an Object Nested Within an Object

// 12.  Access Property Names with Bracket Notation
// 13. Use the delete Keyword to Remove Object Properties
// 14. Check if an Object has a Property
// 15. Iterate Through the Keys of an Object with a for...in Statement
// 16. Generate an Array of All Object Keys with Object.keys()
// 17. Modify an Array Stored in an Object
