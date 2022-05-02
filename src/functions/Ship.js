const shipFactory = (name, size, location) => {
  const ship = {
    name : name,
    size : size,
    location : location,
    hits : [],

    findRandomLocation() {
      let coor = []
      let orientation = Math.floor(Math.random() * 2); //outputs 1 or 0
      let origin = (Math.floor(Math.random() * 100))+1;
      // horizontal orientation
      if (orientation === 0) {
        if (origin > ((Math.ceil(origin/10)*10) - this.size + 1)) {
          origin = origin - this.size;
        }
        for (let i = 0; i < this.size; i++) {
          coor.push(origin + i);
        }
      } else { //vertical orientation
        if (origin > 100 - (this.size * 10)) {
          origin = origin - (this.size * 10);
        }
        for (let i = 0; i < this.size; i++) {
          coor.push(origin + (10 * i));
        }
      }
      this.location = coor;
      console.log(coor);
    },

    getLocation : function() {
      return this.location;
    },

    hit : function(id) {
      this.hits.push(id);
      return 'hit';
    },
    isSunk : function() {
      if (this.location.every(id => this.hits.includes(id))) {
        return true;
      } else {
        return false;
      }
    }
  }
  return ship;
}

module.exports = shipFactory;