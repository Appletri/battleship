const gameboardFactory = require('../functions/Gameboard');
const shipFactory = require("../functions/Ship");

describe ('gameboard functions', () => {
  let fleet = [];
  let battleship;
  let cruiser;
  let gameboard;
  beforeEach(() => {
    gameboard = gameboardFactory();
    gameboard.createBoard();
    battleship = shipFactory('battleship', 4, [1, 2, 3, 4]);
    cruiser = shipFactory('cruiser', 3, [24, 34, 44]);
    gameboard.placeShip(battleship);
    gameboard.placeShip(cruiser);
    fleet.push(battleship);
    fleet.push(cruiser);
  })
  
  test ('100 spaces were created', () => {
    expect(gameboard.gameboardArray.length).toBe(100);
  })
  
  test ('placed ship at specific coordinates', () => {
    expect(gameboard.gameboardArray[3]).toMatch('battleship'),
    expect(gameboard.gameboardArray[23]).toMatch('cruiser')
  })
  
  test ('testing gameboard receiving hit', () => {
    gameboard.receiveAttack(22, fleet);
    gameboard.receiveAttack(3, fleet);
    expect(gameboard.gameboardArray[21]).toMatch('miss'),
    expect(gameboard.gameboardArray[2]).toMatch('battleship hit')
  })
  
  test ('receiving hit sends hit function to ship', () => {
    gameboard.receiveAttack(24, fleet);
    expect(cruiser.hits.length).toBe(1)
  })
  
  test ('sunk the battleship and cruiser', () => {
    gameboard.receiveAttack(1, fleet);
    gameboard.receiveAttack(2, fleet);
    gameboard.receiveAttack(3, fleet);
    gameboard.receiveAttack(4, fleet);
    gameboard.receiveAttack(24, fleet);
    gameboard.receiveAttack(34, fleet);
    gameboard.receiveAttack(44, fleet);
    expect(gameboard.isFleetSunk(fleet)).toBe(true);
  })
})