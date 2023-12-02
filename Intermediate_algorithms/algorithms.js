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
