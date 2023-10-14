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
