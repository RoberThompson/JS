function reverseString(str) {
  let revStr="";
  for(let i=str.length-1;i>=0;i--){
    revStr+=str[i];
  }
  console.log(revStr);
  return str;
}

reverseString("hello");

//return largest number in array
function largestOfFour(arr) {
  
  let newArr=[];
  for(let i=0;i<arr.length;i++){
    newArr[i]=arr[i][i];
    for(let j=0;j<arr[i].length;j++){
      if(arr[i][j]>newArr[i]){newArr[i]=arr[i][j];} 
    }
  }
  return newArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//
//confirm ending
function confirmEnding(str, target) {
 
 if(str.slice(str.length-target.length,str.length)===target){return true;}
 else{return false;}
   
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("He has to give me a new name", "name"));

//
//repeat a string given number of times
function repeatStringNumTimes(str, num) {
  let myStr='';
  if(num>0){for(let i=0;i<num;i++){myStr+=str;}str=myStr;}
  else{str='';}
  return str;
}
console.log(repeatStringNumTimes("abc", 3));
repeatStringNumTimes("abc", 3);

//truncating a string
//
function truncateString(str, num) {
  let myStr='';
  if(str.length>num){    
    for(let i=0;i<num;i++){
      myStr+=str[i];
    }
    myStr+='...';
    }
    else{return str;}
  return myStr;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
truncateString("A-tisket a-tasket A green and yellow basket", 8);

//finders kepers. sending parameters and functions to a function
function findElement(arr, func) {
  let num = 0;
  for(let i=0;i<arr.length;i++){
    num=arr[i];
    if(func(num)){return num;
    }   
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//array manipulation.
//slice and splice.
//You are given two arrays and an index.
//Copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let frknArr=[];
  frknArr=arr2.slice();
  for(let i=0;i<arr1.length;i++){
  frknArr.splice(n+i,0,arr1[i]);}
  console.log(frknArr);
  return frknArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


//Remove all falsy values from an array. Return a new array; do not mutate the //original array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let falsyArr=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]){falsyArr.push(arr[i]);}
  }
  console.log(falsyArr);
  return falsyArr; 
}

bouncer([7, "ate", "", false, 9]);

/*

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

function getIndexToIns(arr, num) {
  let index=0;
  //taken from w3 schools for using sort with numbers.
  arr.sort(function(a, b){return a - b});
  for(let i=0;i<arr.length;i++){
    if(arr[i]<num ){index+=1;}
  }
  console.log(arr);
  console.log(index);
  return index;
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([5, 3, 20, 3], 5);
 getIndexToIns([2, 20, 10], 19);


/*Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
function mutation(arr) {

  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}


mutation(["hello", "hey"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["hello", "hey"]));
