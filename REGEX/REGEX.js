// testing if Hello is in string myString.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

//checking for multiple words using | operator.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//ignore case(letter Case ig upper/lower) using i flag.
// example /ignorecase/i would match ignorecase , 
// igNoreCase , IgnoreCase.
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

// extract actual matches in the string with match()
//
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//to seach a pattern more than once
//use global search flag g
//this also uses i to disregard letter case.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
