//enter a min and max and you can generate a random number between
//these values.
function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*((myMax)-(myMin-1)))+myMin;
}

//puts code in an array in decending order.
// Only change code below this line
function countdown(n){
  if(n<1){
    return [];}
  else{
    const countArr=countdown(n-1);
    countArr.unshift(n);
    return countArr;
  }
    
}
// Only change code above this line
console.log(countdown(5));
