var Participant = require('./Participant');
var utils = require('util');

function Obstacles(type, value){
    this.type = type;  // 'treadmill' или 'wall'
    this.value = value; //длина дорожки или высота
}

utils.inherits(Obstacles, Participant);


Obstacles.prototype.overcome = function(participant){
    if(this.type === 'wall'){
        if(participant.canJump(this.value)){
            console.log(`participant[${participant.getType()}] passed the obstacle[${this.type}] at a distance of [${this.value}] m`);
        }
        else {
            console.log(`participant[${participant.getType()}] passed the obstacle[${this.type}] at a height of [${this.value}] m`);
        }
    }

    else if(this.type === 'treadmill'){
        if(participant.canRun(this.value)){
            console.log(`participant ${participant.getType()} passed the obstacle ${this.type} at a distance of ${this.value} m`);
            return 
        }
        else {
            console.log(`Participant ${participant.getType()} passed the obstacle ${this.type} at a height of ${this.value} m`);
        }
    }
};


module.exports = Obstacles;





module.exports = Obstacles;