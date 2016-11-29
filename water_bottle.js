var waterBottle = {
  volume: 0,
  fillBottle: function(){
    this.volume = 100;
  },
  takeDrink: function(){
    if (this.volume >= 10){
      this.volume -= 10;
    }
  },
  emptyBottle: function(){
    this.volume = 0;
  }


};

module.exports = waterBottle;