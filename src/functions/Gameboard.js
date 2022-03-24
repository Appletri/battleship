const gameboardFactory = () => {
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
        this.gameboardArray[location-1] += ' hit';
      } else {
        this.gameboardArray[location-1] = 'miss';
      }
    },

  }
  return gameboard
}

module.exports = gameboardFactory;