// Exercise: Level 1
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let variable = "30 Days Of JavaScript";

// Print the string on the browser console using console.log()

console.log(variable);


// Print the length of the string on the browser console using console.log()

console.log(variable.length);


// Change all the string characters to capital letters using toUpperCase() method

console.log(variable.toUpperCase());


// Change all the string characters to lowercase letters using toLowerCase() method

console.log(variable.toLowerCase());


// Cut (slice) out the first word of the string using substr() or substring() method

console.log(variable.substr(0,2));
console.log(variable.substring(0,4));


// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(variable.substr(11));
console.log(variable.substring(11,13));


// Check if the string contains a word Script using includes() method

console.log(variable.includes(30));
console.log(variable);
console.log(variable.includes('JavaScript'));
console.log(variable.includes("javascripta"));


// Split the string into an array using split() method

console.log(variable.split());
console.log(variable.split(' '));


// Split the string 30 Days Of JavaScript at the space using split() method

console.log(variable.split(" "));


// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let fangs = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(fangs.split(','));


// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(variable.replace('JavaScript','python'));
console.log(variable);
console.log(variable.replace("python", "javascript"));
console.log(variable);


// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(variable.charAt(15));


// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(variable.charCodeAt(11));


// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(variable.indexOf('a'));


// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(variable.lastIndexOf('a'));


// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let conj =
  "You cannot end a sentence with because because because is a conjunction";
console.log(conj.indexOf('because'));


// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(conj.lastIndexOf('because'));


// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(conj.match('because'));


// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let newvar = " 30 Days Of JavaScript ";
console.log(newvar);
console.log(newvar.trim());


// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(variable.startsWith('30'));
console.log(variable.startsWith('300'));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(variable.endsWith('JavaScript'));
console.log(variable.endsWith('javascriptss'));

// Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(variable.match('a'));
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let var1 = "30 Days of";
console.log(var1.concat(' javascript'));

// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(variable.repeat(2));











// Exercise: Level 2
// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);


// Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof '10' === typeof 10);
console.log(typeof Number("10") === typeof 10);


// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseFloat('9.8'));
console.log(Math.ceil(parseFloat('9.8')));

// Check if 'on' is found in both python and jargon

console.log("jargon".indexOf('on')!==-1);
console.log("python".indexOf('on')!==-1);

// I hope this course is not full of jargon. Check if jargon is in the sentence.

if('I hope this course is not full of jargon'.indexOf('jargon')!=-1){
    console.log("present");
}
else{
    console.log("not present");
}


// Generate a random number between 0 and 100 inclusively.

console.log(Math.random()*100);

// Generate a random number between 50 and 100 inclusively.

console.log(Math.floor(Math.random()*51) + 50);

// Generate a random number between 0 and 255 inclusively.

console.log(Math.random()*255);

// Access the 'JavaScript' string characters using a random number.
let str = "JavaScript";
let ran = Math.floor(Math.random()*10);
console.log(str[ran]);

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(
  "You cannot end a sentence with because because because is a conjunction".substr("You cannot end a sentence with because because because is a conjunction".indexOf('because'),24)
);






// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
console.log(
  "Love is the best thing in this world. Some found their love and some are still looking for their love.".match(
    /love/g
  ).length
);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/g).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//TODO
//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &a
//s& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any
// ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt
// of &love& of tea&ching'
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let txt =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let arr = txt.match(/\d+/g);
let income = 0;
for(let i=0;i<arr.length;i++){
income += Number(arr[i]);
}
console.log(income);