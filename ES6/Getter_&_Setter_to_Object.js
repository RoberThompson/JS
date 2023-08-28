// Only change code below this line
class Thermostat{
  constructor(fahrenheit){
   this._fahrenheit=fahrenheit;//private var convention _var
  }

  get temperature(){
    return (this._fahrenheit-32)*(5/9);
    } 

  set temperature(C){
     return this._fahrenheit = (C * 9.0) / 5 + 32 ;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
