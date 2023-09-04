// testing if Hello is in string myString.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

//checking for multiple words using | operator.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
