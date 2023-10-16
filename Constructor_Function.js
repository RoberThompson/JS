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
