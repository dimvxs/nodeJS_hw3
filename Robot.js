var util = require('util');
var prt = require('./Participant');

function Robot(type){
this.setType('robot');
this.setMaxRunDistance(10000);
this.setMaxJumpHeight(10);
}

util.inherits(Robot, prt);

Robot.prototype.run = function(){
    this.setAction('running');
    console.log('The robot is running');
}


Robot.prototype.jump = function(){
    this.setAction('jumping');
    console.log('The robot is jumping');
}

module.exports = Robot;