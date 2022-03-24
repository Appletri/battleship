const gameboardFactory = (fleet) => {
  const gameboard = {
    gameboardArray : [],
    
    createBoard : function() {
      for (let i = 1; i <= 100; i++) {
        this.gameboardArray.push(i)
      }
    },

    placeShip : function(ship) {
      const location = ship.getLocation();
      location.forEach(element => {
        this.gameboardArray[element-1] = ship.name;
      });
    },

    receiveAttack : function(location) {
      if (typeof this.gameboardArray[location-1] === 'string') {
        fleet.forEach(ship => ship.hit(location));
        this.gameboardArray[location-1] += ' hit';
      } else {
        this.gameboardArray[location-1] = 'miss';
      }
    },

    isFleetSunk : function() {
      let answer = true
      for (let i = 0; i < fleet.length; i++){
        if(fleet[i].isSunk() === false) {
          answer = false;
        } 
      }
      return answer;
    }
  }
  return gameboard
}

module.exports = gameboardFactory;