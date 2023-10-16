//constructors are finctions that create new objects.
//They define properties and behaviors that will belong
//to the new object. Like a blueprint for the creation of
//new objects.

/*This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

    Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
    Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
    Constructors define properties and behaviors instead of returning a value as other functions might. */
function Dog(){
  this.name = 'Fido';
  this.color = 'Gold';
  this.numLegs =4;

}

// Only change code below this line
//creating a new instance of Dog using new keyword.
let hound = new Dog();


//Extend Constructors to Receive Arguments
//notice that all Birds that are created with the Bird constructor are automatically named Albert, 
//are blue in color, and have two legs. What if you want birds with different values for name and color?
//To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

function Dog(name,color) {  
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('Sparky','White');


/*Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to
verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, 
returning true or false based on whether or not that object was created with the constructor. */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;

}

// Only change code below this line
let myHouse = new House(3);
myHouse instanceof House;
