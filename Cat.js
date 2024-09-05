var util = require('util');
var prt = require('./Participant');

function Cat(){
    this.setType('cat');
    this.setMaxRunDistance(5000);
    this.setMaxJumpHeight(5);
}
util.inherits(Cat, prt);

Cat.prototype.jump = function(){
  this.setAction('jumping');
    console.log("The cat is jumping!");
}

Cat.prototype.run = function(){
    this.setAction('running');
    console.log("The cat is running");
}

module.exports = Cat;