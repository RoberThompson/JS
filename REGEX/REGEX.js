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

//wildcard character . will match any one character.
//For example, if you wanted to match 
//hug, huh, hut, and hum, //you can use the
//regex /hu./ to match all four words.
let exampleStr = "Let's have fun with regular expressions!";

//match single characters with multiple possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//match letters of alphabet.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//letters and numbers
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result =quoteSample.match(myRegex); // Change this line

