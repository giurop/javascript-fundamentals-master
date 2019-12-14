//* Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arrEx6 = [2, 4, 6, 7, 9, 12];

const add2 = (array) => array.map((number) => number + 2);

// ######################################### //

//* Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx7 = [1, 2, 3];

const checkSum = (arr) => arr.reduce((a, b) => a + b) % 2 === 0 ? 'even' : 'odd';

// ######################################### //

//* Given an array of numbers, write a function evenNumbers that returns a new array only with the even numbers of the original array.

const arrEx8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// ######################################### //

//* Given an array of letters, write a function sortLetters that returns a new array of letters in alphabetical order.

const arrEx9 = ['a', 'c', 'g', 'r', 'w', 'e', 's', 'l', 'z', 'q', 'b', 'd'];

const sortLetters = (arr) => arr.sort();

// ######################################### //

//* Make a function that takes a number and returns that number multiplied by 2.

const multiplyBy2 = (num) => num * 2;

// ######################################### //

//* Using any array method and the function built in the previous question, make a loop that print the elements of an array multiplied by 2.

const arrayBy2 = (arr) => console.log(arr.map((num) => multiplyBy2(num)));

// ######################################### //

//* Create a function that takes a number and returns true if the number is odd and false if the number is even

const isOdd = (num) => num % 2 !== 0;

// ######################################### //

//* Using any array method and the function built in the previous question, make a loop that return only the odd numbers.

const arrOdd = (array) => array.filter((num) => isOdd(num));

// ######################################### //
