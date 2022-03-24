const gameboardFactory = require('../functions/Gameboard');
const shipFactory = require("../functions/Ship");

describe ('gameboard functions', () => {
  let gameboard = gameboardFactory();
  gameboard.createBoard();
  let battleship;
  let cruiser;
  beforeEach(() => {
    battleship = shipFactory('battleship', 5, [1, 2, 3, 4, 5]);
    cruiser = shipFactory('cruiser', 3, [24,34,44]);
    gameboard.placeShip(battleship, [1, 2, 3, 4, 5]);
    gameboard.placeShip(cruiser, [24, 34, 44]);
  })
  
  test ('100 spaces were created', () => {
    expect(gameboard.gameboardArray.length).toBe(100);
  })
  
  test ('placed ship at specific coordinates', () => {
    expect(gameboard.gameboardArray[3]).toMatch('battleship'),
    expect(gameboard.gameboardArray[23]).toMatch('cruiser')
  })
  
  test ('testing gameboard receiving hit', () => {
    gameboard.receiveAttack(22);
    gameboard.receiveAttack(3);
    console.log(gameboard.gameboardArray);
    expect(gameboard.gameboardArray[21]).toMatch('miss'),
    expect(gameboard.gameboardArray[2]).toMatch('battleship hit')
  })

  // test ('reveiving hit sends hit function to ship', () => {
  //   gameboard.receiveAttack(24);
  //   expect(cruiser.hit(24)).toMatch('hit')
  // })
})