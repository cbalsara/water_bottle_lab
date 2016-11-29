var waterBottle = require('./water_bottle');


var athlete = {
  hydration: 100,
  distanceCovered: 0,
  waterBottle: waterBottle,
  run: function(){
    if (this.hydration >= 10 && this.hydration <= 100){
      this.hydration -= 10;
      this.distanceCovered += 10;
    }
  },
  athleteTakesDrink: function(){
    if (this.hydration <= 90){
    this.waterBottle.takeDrink();
    this.hydration += 10;
    }
  }
};

module.exports = athlete;