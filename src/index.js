import './style.css';
const shipFactory = require('./functions/Ship');
const player = require('./functions/Player');

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
  function createFleet(gameboard, fleetArr) {
    let carrier = shipFactory('carrier', 5, []);
    let battleship = shipFactory('battleship', 4, []);
    let cruiser = shipFactory('cruiser', 3, []);
    let submarine = shipFactory('submarine', 3, []);
    let destroyer = shipFactory('destroyer', 2, []);

    gameboard.placeShip(carrier);
    gameboard.placeShip(battleship);
    gameboard.placeShip(cruiser);
    gameboard.placeShip(submarine);
    gameboard.placeShip(destroyer);
    
    fleetArr.push(carrier);
    fleetArr.push(battleship);
    fleetArr.push(cruiser);
    fleetArr.push(submarine);
    fleetArr.push(destroyer);
  }
  //Initialize gameboard and fleets
  createFleet(player1.oppGameboard, fleet);
  // createFleet(player2.oppGameboard, fleet);
  
  //Initialize UI
  function domInit() {
    const head = document.createElement('h1');
    const main = document.createElement('div');
    const gameBoardPlayer = document.createElement('div');
    const gameBoardEnemy = document.createElement('div');
    // const swapAtt = document.createElement('button');
    main.className = 'main';
    gameBoardPlayer.className = 'gameboard attack';
    gameBoardEnemy.className = 'gameboard defense hidden';
    head.textContent = 'Battleship';


    //function to determine ship location
    function determineShipLocation() {
      const locatorHelper = document.createElement('div');
      const shipLength = 5
      const coor = [];
      locatorHelper.className = 'locator-helper'

      function initUIlocater(parent) {
        for (let i = 0; i < 100; i++) {
          const square = document.createElement('div');
          square.className = `locator`;
          square.id = i;
          square.addEventListener('mouseover', displayShip);
          square.addEventListener('mouseout', removeDisplayShip);
          square.addEventListener('click', findOrigin);
          parent.appendChild(square);
        }
        
        function displayShip(e) {
          const targetID = parseInt(e.target.id);
          let shipClassNames = 'locator ship';

          for (let i = 0; i < shipLength; i++){
            // logic rounds targetID up to the nearest 10th to 
            // stop the indicator from going to the next line
            if (targetID + i > (Math.ceil((targetID + 1) / 10) * 10) -1) {
              return
            } else {
              const target = document.getElementById(`${targetID + i}`);
              target.className = shipClassNames;
            }
          }
        }

        function removeDisplayShip(e) {
          const targetID = parseInt(e.target.id);
          for (let i = 0; i < shipLength; i++){
            const target = document.getElementById(`${targetID + i}`);
            target.className = 'locator';
          }
        }
      
        function findOrigin(e) {
          const origin = parseInt(e.target.id)
          const squares = document.querySelectorAll('.locator');
          squares.forEach(square => {
            square.removeEventListener('mouseover', displayShip);
            square.removeEventListener('mouseout', removeDisplayShip);
            square.removeEventListener('click', findOrigin);
            //logic activates squares on the same row and column as the first coordinate
            if ((square.id >= Math.floor(origin / 10)*10 && 
                 square.id < Math.ceil(origin / 10)*10) ||   
                 square.id % 10 === origin % 10) {
              square.addEventListener('mouseover', showOrientation);
              square.addEventListener('mouseout', removeOrientation);
            }             
          })

          function showOrientation(e) {
            const targetID = parseInt(e.target.id);
            let shipClassNames = 'locator ship';

            
            //north orientation
            if (targetID % 10 === origin % 10 && targetID < origin) {
              //error handling for orientation
              if (origin < ((shipLength - 1) * 10)) {
                shipClassNames = 'locator error';
              } else {
                shipClassNames = 'locator ship';
                e.target.addEventListener('click', findOrientation);
              }
              for (let i = 0; i < shipLength; i++){
                if (origin - (10 * i) < 0) {
                  return
                } else {
                const target = document.getElementById(`${origin - (10 * i)}`);
                target.className = shipClassNames;
                }
              }
            }
            //south orientation
            else if (targetID % 10 === origin % 10 && targetID > origin) {
              //error handling for orientation
              if (origin >= 100 - ((shipLength - 1) * 10)) {
                shipClassNames = 'locator error';
              } else {
                shipClassNames = 'locator ship';
                e.target.addEventListener('click', findOrientation);
              }

              for (let i = 0; i < shipLength; i++){
                if (origin + (10 * i) > 99) {
                  return
                } else {
                  const target = document.getElementById(`${origin + (10 * i)}`);
                  target.className = shipClassNames;
                }
              }
            }
            //east orientation
            else if (targetID <= Math.ceil((origin + 1) / 10)*10 && targetID >= origin) {
              //error handling for orientation
              if (origin > (Math.ceil((origin + 1) / 10) * 10) - shipLength) {
                shipClassNames = 'locator error';
              } else {
                shipClassNames = 'locator ship';
                e.target.addEventListener('click', findOrientation);
              }
              for (let i = 0; i < shipLength; i++){
                if (origin + i > (Math.ceil((origin + 1) / 10) * 10) -1) {
                  return
                } else {
                  const target = document.getElementById(`${origin + i}`);
                  target.className = shipClassNames;
                }
              }
            }
            //west orientation
            else if (targetID >= Math.floor(origin / 10)*10 && targetID < origin) {
              //error handling for orientation
              if (origin < (Math.floor(origin / 10) * 10) + shipLength - 1) {
                shipClassNames = 'locator error';
              } else {
                shipClassNames = 'locator ship';
                e.target.addEventListener('click', findOrientation);
              }

              for (let i = 0; i < shipLength; i++){
                if (origin - i < Math.floor(origin / 10) * 10) {
                  return;
                } else {
                  const target = document.getElementById(`${origin - i}`);
                  target.className = shipClassNames;
                }
              }
            }
          }

          function removeOrientation(e) {
            const squares = document.querySelectorAll('.locator');
            squares.forEach((square) => square.className = 'locator');
          }

          function findOrientation(e) {
            const squares = document.querySelectorAll('.locator');
            const shipLocation = document.querySelectorAll('.ship');
            squares.forEach(square => {
              square.removeEventListener('mouseover', showOrientation);
              square.removeEventListener('mouseout', removeOrientation);
              square.removeEventListener('click', findOrientation);
            })

            shipLocation.forEach(spot => coor.push(parseInt(spot.id)));
          }
        }
      }
      initUIlocater(locatorHelper);
      main.appendChild(locatorHelper);
      return coor;
    }

    determineShipLocation();

    //generates 100 squares for gameboard
    function createTable(parent, attDef) {
      for (let i = 0; i < 100; i++) {
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
          if (typeof player1.oppGameboard.gameboardArray[target] === 'string') {
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
    document.body.appendChild(head);
    main.appendChild(gameBoardPlayer);
    main.appendChild(gameBoardEnemy);
    document.body.appendChild(main);
  }

  domInit();
}

game();