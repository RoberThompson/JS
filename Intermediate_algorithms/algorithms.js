//sum all numbers in a range
function sumAll(arr) {
 
  let sum=0;//for sumation
  let i=Math.max(...arr); //for max value

  while( i >= Math.min(...arr)){
    sum+=i;
    i--;
  }
  return sum;
}
 console.log(sumAll([5, 10]));
sumAll([1, 4]);

//same thing but cleaner
function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}
sumAll([1, 4]);

//***************
//***************

//difference of two arrays
function diffArray(arr1, arr2) {
  return arr1
   .concat(arr2)  
   .filter(diff => !arr1.includes(diff) || !arr2.includes(diff));
  
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//***************
//***************
//seek and destroy
function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

//Using spread operator to retrieve the arguments.
// Return the filtered array, using includes().

function destroyer(arr,...valsToRemove) { 
  return arr.filter(elem => !valsToRemove.includes(elem));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//***************
//***************
/*Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the 
collection if it is to be included in the returned array.*/

function whatIsInAName(collection, source) {

  const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
      .every(key => obj[key] === source[key]));
}

//or we could do
function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
//for testing output
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//***************
//***************
//Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  
  return str
  .replace(/([a-z])([A-Z])/g, "$1 $2")//replace lower to upper
  .replace(/\s+|_+/g,'-')
  .toLowerCase()  
  
}
console.log(spinalCase('This Is Spinal Tap'));
spinalCase('This Is Spinal Tap');

//***********
//***********
//Translate the provided string to Pig Latin. 
//Input strings are guaranteed to be 
//English words in all lowercase.
function translatePigLatin(str) {
  
  const testRegex1=/^[aeiou]/;
  
  if(testRegex1.test(str)){
   return str+'way';
   }
  else{
    let i=0;
    let substr1="";
    while(!testRegex1.test(str[i])){
     substr1+=str[i];
     i++;    
    }
    return str.slice(i) + substr1 + 'ay';  
  }
}

console.log(translatePigLatin("glove"));

//or
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

//or
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";
  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

//or
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

//************
//************
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/
function myReplace(str, before, after) {
  //check if capitolized
 if(/^[A-Z]/.test(before)){
  after = after.charAt(0).toUpperCase() 
  + after.slice(1);
  }
 else{
   after = after.charAt(0).toLowerCase() 
   + after.slice(1);
   }

 return str.replace(before,after);
   
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

//*********
//*********
//DNA Pairing
//Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG,
//which form building blocks of the DNA double helix.
//The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the 
//provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
//For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let arr=[];
  for(let i=0;i<str.length;i++){
    if (str.charAt(i)==='T'){
     arr.push(['T','A']);}
    else if (str.charAt(i)==='A'){
     arr.push(['A','T']);}
    else if (str.charAt(i)==='G'){
      arr.push(['G','C']); }
    else if (str.charAt(i)==='C'){
      arr.push(['C','G']); }
    
  } 
  return arr;
}

console.log(pairElement("GCG"));

//or

function pairElement(str) {
  // Function to match each character with the base pair
  const matchWithBasePair = function(char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

   // Find pair for every character in the string
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

 //or

 function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("")//spilt returns an array
    .map(x => [x, pairs[x]]);
}

//*************
//*************

//Find the missing letter in the passed letter range and return it
 
function fearNotLetter(str) {
  
  const arr=
    ['a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z'];
  
  let arr2 = 
    str.split('');

  let index=arr.findIndex(element => element==arr2[0]); 
  //console.log(index);
  for(let i=index;i<=arr2.length+index;i++){
    console.log(arr2[i-index]);
    if(arr[i]!==arr2[i-index]){return arr[i];}
    if(i==arr2.length+index){return undefined;}
  }
 
}

console.log(fearNotLetter("bcdf"));
 



