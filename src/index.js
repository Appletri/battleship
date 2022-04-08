import './style.css';
const shipFactory = require('./functions/Ship');
const player = require('./functions/Player');
const determineShipLocation = require('./functions/placeShip');

//Initialize game
function game() {

  //create players
  let player1 = player('Player 1', false);
  let player2 = player('Robot', true);

  //create players' fleets
  let fleet = [];
  let oppFleet = [];

  //create player's gameboards
  player1.oppGameboard.createBoard();
  player2.oppGameboard.createBoard();
  
  //function to create fleets for players gameboards
  function createFleet(fleetArr) {
    let carrier = shipFactory('carrier', 5, []);
    let battleship = shipFactory('battleship', 4, []);
    let cruiser = shipFactory('cruiser', 3, []);
    let submarine = shipFactory('submarine', 3, []);
    let destroyer = shipFactory('destroyer', 2, []);
    
    fleetArr.push(carrier);
    fleetArr.push(battleship);
    fleetArr.push(cruiser);
    fleetArr.push(submarine);
    fleetArr.push(destroyer);
  }
  //Initialize gameboard and fleets
  createFleet(fleet);
  // createFleet(player2.oppGameboard, fleet);
  
  //Initialize UI
  function domInit() {
    const head = document.createElement('h1');
    const main = document.createElement('div');
    // const swapAtt = document.createElement('button');
    main.className = 'main';
    head.textContent = 'Battleship';
    
    
    document.body.appendChild(head);
    document.body.appendChild(main);
  }

  function gameboardInit(parent) {
    const gameBoardPlayer = document.createElement('div');
    const gameBoardEnemy = document.createElement('div');
    gameBoardPlayer.className = 'gameboard attack';
    gameBoardEnemy.className = 'gameboard defense hidden';
    //generates 100 squares for gameboard
    function createTable(parent, attDef) {
      for (let i = 1; i <= 100; i++) {
        const square = document.createElement('div');
        square.className = `square ${attDef}`;
        square.id = i;
        square.addEventListener('click', hitConfirm);
        parent.appendChild(square);
      }
      //adds hit confirm function for all squares
      function hitConfirm(e) {
        const target = parseInt(e.target.id);
        e.target.removeEventListener('click', hitConfirm);
        
        if (gameBoardPlayer.className === 'gameboard attack'){
          if (typeof player1.oppGameboard.gameboardArray[target - 1] === 'string') {
            e.target.className = 'square hit';
          } else {
            e.target.className = 'square miss'; 
          }
          player1.attack(target, fleet);
          player1.oppGameboard.isFleetSunk(fleet);
          
          // return swapToAtt();
          
        } else {
          if (typeof player2.oppGameboard.gameboardArray[target] === 'string') {
            e.target.className = 'square hit'; 
          } else {
            e.target.className = 'square miss'; 
          }
          player2.attack(target, fleet);
          player2.oppGameboard.isFleetSunk(fleet);
          
          return swapToAtt();
          
        }
      }  
    }
    //swap gameboard after every hitconfirm
    function swapToAtt() {
      setTimeout(() => {
        gameBoardPlayer.classList.toggle('hidden');
        gameBoardEnemy.classList.toggle('hidden');
      }, 300)
    }
    
    createTable(gameBoardPlayer, 'unknown-attack');
    createTable(gameBoardEnemy, 'unknown-defense');
    parent.appendChild(gameBoardPlayer);
    parent.appendChild(gameBoardEnemy); 
  }
  
  
  
  //startup
  domInit();
  const main = document.querySelector('.main');
  determineShipLocation(main, fleet, player1.oppGameboard);
  gameboardInit(main);
}

game();