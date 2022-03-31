import './style.css';
const shipFactory = require('./functions/Ship');
const player = require('./functions/Player');

function game() {
  let player1 = player('Player 1', false);
  let player2 = player('Robot', true);
  let fleet = [];
  player1.oppGameboard.createBoard(fleet);
  player2.oppGameboard.createBoard();
  
  function createFleet(gameboard, fleet) {
    let carrier = shipFactory('carrier', 5, [1,2,3,4,5]);
    let battleship = shipFactory('battleship', 4, [23,24,25,26]);
    let cruiser = shipFactory('cruiser', 3, [49,59,69]);
    let submarine = shipFactory('submarine', 3, [83,84,85]);
    let destroyer = shipFactory('destroyer', 2, [81,91]);
    
    gameboard.placeShip(carrier);
    gameboard.placeShip(battleship);
    gameboard.placeShip(cruiser);
    gameboard.placeShip(submarine);
    gameboard.placeShip(destroyer);
    
    fleet.push(carrier);
    fleet.push(battleship);
    fleet.push(cruiser);
    fleet.push(submarine);
    fleet.push(destroyer);
  }
  createFleet(player2.oppGameboard, fleet);
  

  function domInit() {
    const head = document.createElement('h1');
    const main = document.createElement('div');
    const gameBoardUI = document.createElement('div');
    const swapAtt = document.createElement('button');
    main.className = 'main';
    gameBoardUI.className = 'gameboard attack';
    head.textContent = 'Battleship';
    
    function createTable(parent) {
      for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.className = 'square unknown-attack';
        square.id = i;
        square.addEventListener('click', hitConfirm)
        parent.appendChild(square);
      }

      function hitConfirm(e) {
        const target = parseInt(e.target.id);

        if (gameBoardUI.className === 'gameboard attack'){
          console.log(player2.oppGameboard.gameboardArray[target])
          if (typeof player2.oppGameboard.gameboardArray[target] === 'string') {
            e.target.className = 'square hit';
          } else {
            e.target.className = 'square miss'; 
          }
          player2.attack(target);
          console.log(player2.oppGameboard.gameboardArray);
          // player2.oppGameboard.isFleetSunk();
          // return swapToDef();
        } else {
          if (typeof player1.oppGameboard.gameboardArray[target] === 'string') {
            e.target.className = 'square hit'; 
          } else {
            e.target.className = 'square miss'; 
          }
          return swapToAtt();
        }

      }  
    }

    function swapToAtt() {
      gameBoardUI.className = 'gameboard attack';
      const squares = document.querySelectorAll('.unknown-defense');
      squares.forEach(square => square.className = 'square unknown-attack');
    }

    function swapToDef() {
      gameBoardUI.className = 'gameboard defense';
      const squares = document.querySelectorAll('.unknown-attack');
      squares.forEach(square => square.className = 'square unknown-defense');
    }

    createTable(gameBoardUI);
    document.body.appendChild(head);
    main.appendChild(gameBoardUI);
    document.body.appendChild(main);
  }

  domInit();
}

game();