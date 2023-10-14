function findLongestWordLength(str) {
  let numChars=0;
  let lastNumChars=0;
  for(let i=0;i<str.length;i++){
    if(str[i]==' ' && i!==str.length -1){
      if(numChars>lastNumChars){      
        lastNumChars=numChars;
        numChars = 0;
      }
      else{
        numChars=0;
        }
    }
    else if(str[i]!==' ' && i==str.length-1 && numChars>lastNumChars){
      numChars+=1;
      lastNumChars=numChars;
      numChars=0;
    }
    else{
      numChars+=1;
      }

  }
  return lastNumChars;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
findLongestWordLength("The quick brown fox jumped over the lazy dog");
