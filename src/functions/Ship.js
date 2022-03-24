const shipFactory = (name, size, location) => {
  const ship = {
    name : name,
    size : size,
    location : location,
    hits : [],
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