var bottle = require('../water_bottle');
var assert = require('assert');

describe( "water bottle", function() {
  it("should be empty at start", function() {
    assert.equal(0, bottle.volume);
     })
});

describe("water bottle", function(){
  it("bottle should be full", function(){
    bottle.fillBottle();
    assert.equal(100, bottle.volume);
  })
});




