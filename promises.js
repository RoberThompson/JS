//promise. used for . Used asyncronously. Takes a function as its argument.
//often for server request... asyncronous.
//takes an amount of time. After complete, want to do something with response.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
    makeServerRequest.catch(error => {
      console.log(error);
    });
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
