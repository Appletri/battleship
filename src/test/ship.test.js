const shipFactory = require("../functions/Ship")

describe('ship functions', () => {
  let battleship;
  beforeEach(() => {
    battleship = shipFactory('battleship', 5, ['a1','a2','a3','a4','a5']);
  })

  test('ship is created with 5 spaces', () => {
    expect(battleship.size).toBe(5)
  })

  test('ship is hit', () => {
    expect(battleship.hit('a1')).toMatch('hit');
  })
  
  test('ship is hit 2 times, but has not sank', () => {
    battleship.hit('a1');
    battleship.hit('a2');
    expect(battleship.isSunk()).toBe(false);
  })
  test('ship is sunk', () => {
    battleship.hit('a1');
    battleship.hit('a2');
    battleship.hit('a3');
    battleship.hit('a4');
    battleship.hit('a5');
    expect(battleship.isSunk()).toBe(true);
  })

});
