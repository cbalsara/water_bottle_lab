var person = require('../athlete');
var assert = require('assert');

describe("athlete", function(){
  it("should be fully hydrated", function(){
    assert.equal(100, person.hydration);
  });
});

describe("athlete", function(){
  it("distance covered starts at 0", function(){
    assert.equal(0, person.distanceCovered);
  });
});

describe("athlete", function(){
  it("athlete can run/gets tired", function(){
    person.run();
    assert.equal(90, person.hydration);
    assert.equal(10, person.distanceCovered);
  });
});

  describe("athlete", function(){
    it("athlete has water bottle", function(){
      assert.equal(0, person.waterBottle.volume);
    });
  });

  describe("athlete", function(){
    it("athlete takes drink", function(){
      person.run();
      person.athleteTakesDrink();
      assert.equal(90, person.hydration);
      assert.equal(0, person.waterBottle.volume);
    })
  })

