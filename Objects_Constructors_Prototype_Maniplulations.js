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



/*Change the Prototype to a New Object

Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;

This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

A more efficient way is to set the prototype to a 
new object that already contains the properties. 
This way, the properties are added all at once:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Add the property numLegs and the two methods eat() 
and describe() to the prototype of Dog by setting the prototype to a new object.
 */


function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
numLegs: 4,
eat: function(){console.log("nom nom nom");},
describe: function(){console.log("My name is "+this.name+"!");}
};



/**Remember to Set the Constructor Property when Changing the Prototype

There is one crucial side effect of manually setting the 
prototype to a new object. It erases the constructor property! 
This property can be used to check which constructor 
function created the instance, but since the property has been overwritten, 
it now gives false results:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

In order, these expressions would evaluate to false, true, and true.

To fix this, whenever a prototype is manually set to a new object, 
remember to define the constructor property:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

 */

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor:Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/**Understand Where an Object’s Prototype Comes From

Just like people inherit genes from their parents, 
an object inherits its prototype directly from the 
constructor function that created it. For example, 
here the Bird constructor creates the duck object:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

duck inherits its prototype from the Bird constructor function. 
You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);

This would return true.

Use isPrototypeOf to check the prototype of beagle.
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);


/**

All objects in JavaScript (with a few exceptions) 
have a prototype. Also, an object’s prototype itself is an object.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

Because a prototype is an object, a prototype 
can have its own prototype! In this case, 
the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);

How is this useful? You may recall the hasOwnProperty 
method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

The hasOwnProperty method is defined in Object.prototype, 
which can be accessed by Bird.prototype, 
which can then be accessed by duck. 
This is an example of the prototype chain. 
In this prototype chain, Bird is the supertype for duck, 
while duck is the subtype. Object is a supertype for both Bird and duck.
 Object is a supertype for all objects in JavaScript. 
 Therefore, any object can use the hasOwnProperty method.

Modify the code to show the correct prototype chain.
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


/**Use Inheritance So You Don't Repeat Yourself

There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

The describe method is repeated in two places. 
The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

The eat method is repeated in both Cat and Bear. 
Edit the code in the spirit of DRY by moving 
the eat method to the Animal supertype.
 */

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
  }

};
