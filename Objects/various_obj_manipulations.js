//adding a method sayLegs
//to the objex
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){return "This dog has " + dog.numLegs +" legs.";}

};

dog.sayLegs();

//using this keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  //pitfall here. If varaible name cahnges, any code referencing original name
  //would need to be updated.
  //A way to avoid this would be to use 'this' keyword.
  //Makes code reuseable.
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
