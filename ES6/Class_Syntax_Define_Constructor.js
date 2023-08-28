// Only change code below this line

class Vegetable{
  constructor(vegetable){ 
   vegetable = {name:vegetable};
   return vegetable;
   
  } 
   
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
