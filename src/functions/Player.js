const gameboard = require('./Gameboard');

const Player = (name) => {
  const player = {
    name : name,
    oppGameboard : gameboard(),
    cpuAmmo: [...Array(100)].map((u, i) => i + 1 ),
    cpuDirection: 'n',
    adjustment: true,
    firstHit: null,

    attack : function(location, fleet) { 
      this.oppGameboard.receiveAttack(location, fleet);
      this.cpuAmmo[location - 1] = 'shot';
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
    },

    cpuAttack : function(fleet) {
      let playerGB = this.oppGameboard.gameboardArray;
      let lastShot = this.oppGameboard.recentAttack;
      if (this.cpuDirection === 'n') {
        if (lastShot - 10 > 0) {
          if (this.cpuAmmo.includes(lastShot - 10)) {
            this.attack(lastShot - 10, fleet);
            this.changeDirectionOnMiss();
          } else {
            this.changeDirectionOnExisting(fleet);
          }
        } else {
          this.rotateOnBorderShips(fleet);
        }
      } 
      else if (this.cpuDirection === 's') {
        if (lastShot + 10 < 100) {
          if (this.cpuAmmo.includes(lastShot + 10) || this.cpuAmmo.includes(this.firstHit + 10)) {
            if (this.adjustment === true) {
              this.adjustment = false;
              this.attack(this.firstHit + 10, fleet); 
            } else {
              this.attack(lastShot + 10, fleet);
            };
            this.changeDirectionOnMiss();
          } else {
            this.changeDirectionOnExisting(fleet);
          }
        } else {
          this.rotateOnBorderShips(fleet);
        }    
      }
      else if (this.cpuDirection === 'e') {
        if (lastShot + 1 < Math.ceil(lastShot / 10) * 10) {
          if (this.cpuAmmo.includes(lastShot + 1) || this.cpuAmmo.includes(this.firstHit + 1)) {
            if (this.adjustment === true) {
              this.adjustment = false;
              this.attack(this.firstHit + 1, fleet); 
            } else {
              this.attack(lastShot + 1, fleet);
            }
            this.changeDirectionOnMiss();
          } else {
            this.changeDirectionOnExisting(fleet);
          }
        } else {
          this.rotateOnBorderShips(fleet);
        }
      }
      else if (this.cpuDirection === 'w') {
        if (lastShot >= Math.floor(lastShot / 10) * 10) {
          if (this.adjustment === true) {
            this.adjustment = false;
            this.attack(this.firstHit - 1, fleet); 
          } else {
            this.attack(lastShot - 1, fleet);
          }
        }
      }  
    },
    //border pieces 
    rotateOnBorderShips : function(fleet) {
      // console.log('rotating orientation');
      if (this.cpuDirection === 'n') {
        if (this.oppGameboard.recentAttack - 10 <= 0) {
          // console.log('swapped to south');
          this.cpuDirection = 's'
        }
      }
      if (this.cpuDirection === 's') {
        if (this.oppGameboard.recentAttack + 10 >= 100) {
          // console.log('swapped to east');
          this.cpuDirection = 'e'
        }
      }
      if (this.cpuDirection === 'e'){
        if (this.oppGameboard.recentAttack % 10 === 0) {
          // console.log('swapped to west');
          this.cpuDirection = 'w';
        }
      }
      this.cpuAttack(fleet);
    },
    
    changeDirectionOnMiss : function() {
      if (this.oppGameboard.gameboardArray[this.oppGameboard.recentAttack - 1] === 'miss') {
        if (this.cpuDirection === 'n') {
          // console.log('swapped to south');
          this.cpuDirection = 's';
        }
        else if (this.cpuDirection === 's') {
          this.cpuDirection = 'e';
          // console.log('swapped to east');
        }
        else if (this.cpuDirection === 'e'){
          this.cpuDirection = 'w';
          // console.log('swapped to west');
        }
        this.adjustment = true;
      } 
      this.changeDirectionOnCorner();
    },
    
    changeDirectionOnCorner: function() {
      if (this.firstHit === 10 || this.firstHit === 100) {
        // console.log('swapped to west due to corner');
        this.cpuDirection = 'w'
        this.adjustment = true;
      } 
    },

    changeDirectionOnExisting: function(fleet) {
      if (this.cpuDirection === 'n') {
        // console.log('swapped to south');
        this.cpuDirection = 's';
      }
      else if (this.cpuDirection === 's') {
        this.cpuDirection = 'e';
        // console.log('swapped to east');
      }
      else if (this.cpuDirection === 'e'){
        this.cpuDirection = 'w';
        // console.log('swapped to west');
      }
      this.adjustment = true;
      this.cpuAttack(fleet);
    }
  }
  return player;
}

module.exports = Player;