var util = require('util');
var prt = require('./Participant');

function Human(){
    this.setType('human');
    this.setMaxRunDistance(1000);
    this.setMaxJumpHeight(0.5);
}
util.inherits(Human, prt);

Human.prototype.run = function(){
    this.setAction('running');
    console.log("The human is running!")
}


Human.prototype.jump = function(){
    this.setAction('jumping');
    console.log("The human is jumping!")
}

module.exports = Human;
