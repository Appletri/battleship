const gameboardFactory = (fleet) => {
  const gameboard = {
    gameboardArray : [],
    recentAttack: 0,
    
    createBoard : function() {
      for (let i = 1; i <= 100; i++) {
        this.gameboardArray.push(i)
      }
    },

    placeFleetRandomly : function(fleet) {
      fleet.forEach(ship => {
        let noOverlap = false;
        ship.findRandomLocation();
        while (noOverlap === false) {
          for (let i = 0; i < ship.size; i++) {
            if (typeof this.gameboardArray[ship.location[i]] === 'string') {
              // console.log(`reroll ${ship.name} location`);
              ship.findRandomLocation();
            } else {
              this.placeShip(ship);
              return noOverlap = true;
            }
          }
        }
      });
      // cheatsheet
      console.log(this.gameboardArray);
    },
    
    placeShip : function(ship) {
      const location = ship.getLocation();
      location.forEach(element => {
        this.gameboardArray[element-1] = ship.name;
      });
    },

    receiveAttack : function(location, fleet) {
      if (typeof this.gameboardArray[location-1] === 'string') {
        fleet.forEach(ship => ship.hit(location));
        this.gameboardArray[location-1] += ' hit';
      } else {
        this.gameboardArray[location-1] = 'miss';
      }
      this.recentAttack = location;
    },

    isFleetSunk : function(fleet) {
      let answer = true
      for (let i = 0; i < fleet.length; i++){
        if(fleet[i].isSunk() === false) {
          answer = false;
        } else {
          console.log(`${fleet[i].name} sunk`);
        }
      }
      return answer;
    }
  }
  return gameboard
}

module.exports = gameboardFactory;