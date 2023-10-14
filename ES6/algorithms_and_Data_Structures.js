//useful tricks

//fitler an array of values.
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i=0;i<arr.length;i++){
    if(arr[i].indexOf(elem)===-1){newArr.push(arr[i]);}
      
    else{}
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//objex
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online=45;
// Only change code above this line

console.log(userActivity);
