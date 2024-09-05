var utils = require('util');


function Participant(){
    this.action = '';
    this.type = '';
    this.maxRunDistance = 0;
    this.maxJumpHeight = 0;
    this.isParticipant = true;

}

Participant.prototype.setMaxRunDistance = function(m){
    this.maxRunDistance = m;
}

Participant.prototype.setMaxJumpHeight = function(m){
    this.maxJumpHeight = m;
}

Participant.prototype.setType = function(t){
    this.type = t;
}

Participant.prototype.setAction = function(a){
this.action = a;
}

Participant.prototype.getAction = function(){
    return this.action;
}

Participant.prototype.getType = function(){
    return this.type;
}


Participant.prototype.canRun = function(distance){
    return distance <= this.maxRunDistance;
}

Participant.prototype.canJump = function(height){
    return height <= this.maxJumpHeight;
}


module.exports = Participant;