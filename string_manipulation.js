//title case to a sentence
function titleCase(str) {
let arr=[],arr2=[];
str=str.toLowerCase();
arr=str.split(' ');
for(let i=0;i<arr.length;i++){
  arr2[i]=arr[i][0].toUpperCase();
  arr[i]=arr2[i]+arr[i].slice(1); 
}

str=arr.join(' ');
console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
console.log(titleCase("sHoRt AnD sToUt"));
