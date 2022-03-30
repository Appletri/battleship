const player = require('../functions/Player');
const shipFactory = require("../functions/Ship");
const gameboardFactory = require('../functions/Gameboard');

function init() {
  let player1 = player('Player 1', false);
  let player2 = player('Robot', true);
  player1.oppGameboard.createBoard();
  player2.oppGameboard.createBoard();

}

init();