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




