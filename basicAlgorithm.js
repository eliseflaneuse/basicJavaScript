/* 
Basic Algorithm Scripting

1. Convert Celsius to Fahrenheit
2. Reverse a String
3. Factorialize a Number
4. Find the Longest Word in a String
5. Return Largest Numbers in Arrays
6. Confirm the Ending
7. Repeat a String Repeat a String
8. Truncate a String
9. Finders Keepers
10. Boo who
11. Title Case a Sentence
12. Slice and Splice
13. Falsy Bouncer
14. Where do I Belong
15. Mutations
16. Chunky Monkey

*/

// 1. Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
  
convertCtoF(30);

// 2. Reverse a String

// 2.a With Built-In Functions

function reverseString(str) {
    const split = str.split('');
    const reverse = split.reverse('');
    str = reverse.join('');
    console.log(str);
    return str;
  }
  
reverseString("hello");

// 2.b With a Decrementing For Loop

function reverseString2(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
    return newString;
}
reverseString2('harry');

// 3. Factorialize a Number

function factorialize(num) {
    let arr = [];
    for (let i = num; i > 0; i--) {
        arr.push(i)
    };
    let factor = arr.reduce((a, b)=> a*b, 1);
    console.log(factor); 
    return factor;
  }
  
factorialize(5);

// 4. Find the Longest Word in a String

function findLongestWordLength(str) {
    let words = str.split(" ");
    let arr = [];
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        arr.push(words[i].length);
    }
    console.log(Math.max(...arr));
    const index = arr.indexOf(Math.max(...arr));
    console.log(index);
    console.log(words[index]);
    return words[index]; // If you just want the number of letters in the largest words in a string just stop at Math.max(...arr).
  }
  
findLongestWordLength("You are a wizard Harry");

// 5. Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let largest = [];
    for (let i = 0; i < arr.length; i++) {
        largest.push(Math.max(...arr[i]))
    };
    console.log(largest);
    return largest;
  }
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 6. Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
  }
  
console.log(confirmEnding("Bastian", "n"));

// 7. Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let repeatedStr = '';
  while (num >0) {
    repeatedStr += str;
    num--
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));

// 8. Truncate a String
function truncateString(str, num) {

  let newStr =  str.slice(0, num);
  if (str.length > num) {
    newStr += '...';
  } else {
    newStr
  }
  return newStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// 9. Finders Keepers

function findElement(arr, func) {
  let num = 0;
    for (let i = 0; i < arr.length; i++) { // for loop to iterate throught the array
    num = arr[i]; // add the arrays numbers as the num variable
    if (func(num)) { // Here it is implied that if returns === true
      return num;
    }
  }

  return undefined;
};


console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// 10. Boo who

function booWho(bool) {
  if (bool === true || bool === false){
    return true
  } else {
    return false
  }
}

console.log(booWho(null));

// 11. Title Case a Sentence - Split() for(let st in newTitle) .toUpperCase() .toLowerCase()

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
