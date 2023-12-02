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
