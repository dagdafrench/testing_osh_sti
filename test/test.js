var assert = require('assert');

function sleep(seconds){
  var waitUntil = new Date().getTime() + seconds*1000;
  while(new Date().getTime() < waitUntil) true;
}

describe('Random test.', function() {

  it('should return -1 when the value is not present', function() {
    sleep(30);
    assert.equal([1,2,3].indexOf(4), -1);
  });

});
