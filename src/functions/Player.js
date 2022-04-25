const gameboard = require('./Gameboard');

const Player = (name) => {
  const player = {
    name : name,
    oppGameboard : gameboard(),
    cpuAmmo: [...Array(100)].map((u, i) => i + 1),

    attack : function(location, fleet) { 
      this.oppGameboard.receiveAttack(location, fleet);
      return `fired at ${location}`;
    },

    attackRandom : function(fleet) {
      let locationArray = this.cpuAmmo.filter(x => typeof x !== 'string');
      function randomNum(max) {
        return (Math.floor(Math.random() * max))
      }
      const location = locationArray[randomNum(locationArray.length)];
      this.oppGameboard.receiveAttack(location, fleet);
      return this.cpuAmmo[location - 1] = 'shot';
    }
  }
  return player;
}

module.exports = Player;