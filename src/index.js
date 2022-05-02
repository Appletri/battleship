import './style.css';
const shipFactory = require('./functions/Ship');
const player = require('./functions/Player');
const determineShipLocation = require('./functions/placeShip');

//Initialize game
function game() {

  //create players
  let player1 = player('Player 1');
  let player2 = player('Robot');

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
  createFleet(oppFleet);
  // createFleet(player2.oppGameboard, fleet);
  
  //Initialize UI
  function domInit() {
    const head = document.createElement('h1');
    const main = document.createElement('div');
    
    main.className = 'main';
    head.textContent = 'Battleship';
    
    
    document.body.appendChild(head);
    document.body.appendChild(main);
  }

  function gameboardInit(parent) {
    const swapBoardButton = document.createElement('button');
    const gameBoardPlayer = document.createElement('div');
    const gameBoardEnemy = document.createElement('div');
    gameBoardPlayer.className = 'gameboard attack';
    gameBoardEnemy.className = 'gameboard defense hidden';
    gameBoardPlayer.id = 'attack';
    gameBoardEnemy.id = 'defense';
    swapBoardButton.className = 'sbb';
    swapBoardButton.textContent = 'Swap Board';
    swapBoardButton.addEventListener('click', swapBoardNoDelay);
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
        let text = '';
        e.target.removeEventListener('click', hitConfirm);
        
        if (gameBoardPlayer.className === 'gameboard attack'){
          if (typeof player1.oppGameboard.gameboardArray[target - 1] === 'string') {
            e.target.className = 'square hit';
            text = 'HIT';
          } else {
            e.target.className = 'square miss';
            text = 'MISS'
          }
          player1.attack(target, oppFleet);
          
          determineSunkShip(player1, oppFleet);
          checkForWin(player1, oppFleet);
          return swapTurn(text);
        } 
      }  
    }


    function checkForWin(player, fleet) {
      if (player.oppGameboard.isFleetSunk(fleet)) {
        const win = document.createElement('div');
        win.className = 'win';
        win.textContent = `${player.name} wins`;
        document.body.appendChild(win);
      } 
    }


    function swapTurn(str) {
      swapBoard(str);
      setTimeout(() => {
        compTurn()
      }, 1000)
    }

    //Computer variables
    let last = 'miss';
    let firstHitSwitch = true;

    
    function compTurn() {
      let text = '';
      //cpu logic
      if (last === 'miss') {
        player2.attackRandom(fleet);
        // player2.attack(47, fleet);
        updateGameboard();
      } else {
        player2.cpuAttack(fleet);
        updateGameboard();
        determineSunkShip(player2, fleet);
      }      
      checkForWin(player2, fleet);
      setTimeout(() => {
        swapBoard(text);
      }, 200)

      //update cpu gameboard
      function updateGameboard() {
        const board = document.getElementById('defense');
        if (player2.oppGameboard.gameboardArray[player2.oppGameboard.recentAttack - 1] === 'miss') {
          board.children[player2.oppGameboard.recentAttack - 1].className = 'square miss';
          text = 'MISS';
        } else {
          board.children[player2.oppGameboard.recentAttack - 1].className = 'square hit';
          text = 'HIT';
          // locking in cpu first hit to play around
          last = 'hit';
          if (firstHitSwitch === true) {
            player2.firstHit = player2.oppGameboard.recentAttack;
            firstHitSwitch = false;
          }
        }
      }
    }
    
    function determineSunkShip(player, fleet){
      player.oppGameboard.isFleetSunk(fleet);
      if (typeof player.oppGameboard.sunkShip === 'string') {
        displayText(player.oppGameboard.sunkShip)
        player.oppGameboard.sunkShip = null
        if (player.name === 'Robot') {
          last = 'miss';
          player2.cpuDirection = 'n';
          player2.adjustment = false;
          firstHitSwitch = true;
        }
      }
    }
    
    function swapBoardNoDelay() {
      gameBoardPlayer.classList.toggle('hidden');
      gameBoardEnemy.classList.toggle('hidden');
    }

    //swap gameboard after every hitconfirm
    function swapBoard(str) {
      const hitDiv = document.createElement('div');
      hitDiv.className = 'hit-confirm';
      main.appendChild(hitDiv);
      // textAnim(str, hitDiv);
      setTimeout(() => {
        gameBoardPlayer.classList.toggle('hidden');
        gameBoardEnemy.classList.toggle('hidden');
        main.removeChild(hitDiv);
      }, 700)      
    }

    function displayText(str) {
      const previous = document.querySelector('.text-display');
      if (previous) {
        main.removeChild(previous);
      }
      const div = document.createElement('div');
      const header = document.querySelector('h1');
      header.classList.add('opaque');
      div.className = 'text-display';
      main.appendChild(div);
      textAnim(str, div);
      setTimeout(() => {
        main.removeChild(div);
        header.classList.remove('opaque');
      }, 4000)    
    }

    function textAnim(string, parent) {
      const div = document.createElement('div');
      div.className = 'waviy';
        for (let i = 0; i < string.length; i++){
          const span = document.createElement('span');
          span.style = `--i:${i+1}`;
          span.textContent = string[i];
          div.appendChild(span);
        }
      parent.appendChild(div);
    }
    
    createTable(gameBoardPlayer, 'unknown-attack');
    createTable(gameBoardEnemy, 'unknown-defense');
    parent.appendChild(gameBoardPlayer);
    parent.appendChild(gameBoardEnemy); 
    document.body.appendChild(swapBoardButton);
  }
  
  
  
  //startup
  domInit();
  const main = document.querySelector('.main');
  determineShipLocation(main, fleet, player2.oppGameboard);
  gameboardInit(main);
  player1.oppGameboard.placeFleetRandomly(oppFleet);
}

game();