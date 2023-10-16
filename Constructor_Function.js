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


//name and numLegs are called own properties, because they are defined directly on the instance object. 
//That means that duck and canary each has its own separate copy of these properties.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for(let property in canary){
  if(canary.hasOwnProperty(property))
  {ownProps.push(property);}
}



/*Use Prototype Properties to Reduce Duplicate Code

Since numLegs will probably have the same value for all instances of Bird, 
you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances,
but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. 
Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

Bird.prototype.numLegs = 2;

Since all instances automatically have the properties on the prototype,
think of a prototype as a "recipe" for creating objects. Note that the prototype 
for duck and canary is part of the Bird constructor as Bird.prototype. 
*/

function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;


/*Iterate Over All Properties

You have now seen two kinds of properties: 
own properties and prototype properties. 
Own properties are defined directly on the object instance itself. 
And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");


Add all of the own properties of beagle to the array ownProps. 
Add all of the prototype properties of Dog to the array prototypeProps.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for(let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }
  else{prototypeProps.push(property);}
}
