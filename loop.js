//* READ: http://learn.ironhack.com/#/learning_unit/8206

//***************** EXAMPLE ************ //
// for(initiation; condition to keep loop; incrementer) {
//   statement
// }


// ************* PRATICE ************** //
//* Print numbers 0 to 100

const printNumbers0To100 = () => {
  for (let i = 0; i <= 100; i += 1) {
    console.log(i);
  }
}

// printNumbers0To100();

// ######################################### //

//* Print only even numbers from 0 to 100

const printEvenNumbers0To100 = () => {
  for (let i = 0; i <= 100; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

// printEvenNumbers0To100();

// ######################################### //

//* Print only odd numbers from 0 to 100

const printOddNumbers0To100 = () => {
  for (let i = 0; i <= 100; i += 1) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// printOddNumbers0To100();

// ######################################### //

//* Print numbers 80 to 20

const print80To20 = () => {
  for (let i = 80; i >= 20; i -= 1) {
    console.log(i);
  }
}

// print80To20();

// ######################################### //


//* Write an array called arrEx2 with length 3.

let arrEx2 = [];

const arrayNumbers = () => {
  for (let i = 0; i < 3; i += 1) {
    arrEx2.push(i);
  }
  return arrEx2;
}

// console.log(arrayNumbers());

// ######################################### //

//* Write a loop using for structure that prints all positive numbers until 48 (including 48).

const printNumbersTill48 = () => {
  for (let i = 0; i <= 48; i += 1) {
    console.log(i);
  }
}

// printNumbersTill48();

// ######################################### //

//* Write a loop using for structure that prints all negative numbers until -30 (excluding).

const printNumbersTillNegative30 = () => {
  for (let i = -1; i > -30; i -= 1) {
    console.log(i);
  }
}

// printNumbersTillNegative30();

// ######################################### //

//* Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.

const printNumbersFrom102To32 = () => {
  for (let i = 102; i >= 32; i -= 2) {
    console.log(i);
  }
}

// printNumbersFrom102To32();
// ######################################### //


const pets = ['dog', 'cat', 'bird', 'salamander', 'human', 'ape', 'alien', 'dinossaur'];
// Use FOR Loop to print the content of array "pets"


//! Use FOR EACH to print the content of array "pets"


const array = [1, 'x', 3, 8, 'x', 5, 7, 3, 'x', 2, 6, 'x', 10];
// Use FOR to count and print how many times the letter x appears in the array


//! Use FOR EACH to count and print how many times the letter x appears in the array


const numbers = [1, 5, 6, 8, 12, 25, 65, 78];
//* Use FOR to calculate and print the sum of all numbers in the array

const sumAndPrintArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}

// sumAndPrintArray(numbers);

//! Use FOR EACH to calculate and print the sum of all numbers in the array


const sentence = 'Hack your life';
//* Use FOR to print each letter of the sentence on a different line.

const printLetterNewLine = () => {
  for (let i = 0; i < sentence.length; i += 1) {
    console.log(sentence[i]);
  }
}

// printLetterNewLine();

//! Use FOR EACH to print each letter of the sentence on a different line.
