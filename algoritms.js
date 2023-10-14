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
//
