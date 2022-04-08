const gameboard = require('./Gameboard');

const Player = (name, cpu) => {
  const player = {
    name : name,
    cpu : cpu,
    oppGameboard : gameboard(),

    attack : function(location, fleet) { 
      this.oppGameboard.receiveAttack(location, fleet);
      return `fired at ${location}`;
    },

    attackRandom : function() {
      let locationArray = this.oppGameboard.gameboardArray.filter(x => typeof x !== 'string');
      function randomLocation(max) {
        return (Math.floor(Math.random() * max))
      }
      let location = locationArray[randomLocation(locationArray.length)];

      this.oppGameboard.receiveAttack(location);

    }
  }
  return player;
}

module.exports = Player;