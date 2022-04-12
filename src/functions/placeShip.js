    //function to determine ships location
    function determineShipLocation(parent, fleet, gameboard) {
      const locatorHelper = document.createElement('div');
      locatorHelper.className = 'locator-helper';
      let ship = 0;
      let coor = [];
      
      function findShipLocation() {
        if (ship === fleet.length) {
          //cleanUP
          for (let i = 0; i < fleet.length; i++) {
            gameboard.placeShip(fleet[i]);
          }
          locatorHelper.style.opacity = 0;
          setTimeout(function() {
            parent.removeChild(locatorHelper);
          }, 1500);
          return;
        }
        let shipLength = fleet[ship].size;
        const squares = document.querySelectorAll('.locator');
        squares.forEach(square => {
          square.addEventListener('mouseover', displayShip);
          square.addEventListener('click', findOrigin);
        })
        function displayShip(e) {
          const targetID = parseInt(e.target.id);
          for (let i = 0; i < shipLength; i++){
            // logic rounds targetID up to the nearest 10th to 
            // stop the indicator from going to the next line
            const target = document.getElementById(`${targetID + i}`);
            if (targetID + i > (Math.ceil((targetID) / 10) * 10)) {
              break;
            }
            else if (target.className === 'locator') {
              target.className = 'locator ship';
            }
          }
          e.target.addEventListener('mouseout', removeDisplayShip);
        }
  
        function removeDisplayShip(e) {
          const targetIDs = document.querySelectorAll('.ship');
          targetIDs.forEach(target => {
            target.className = 'locator';
          });
          e.target.removeEventListener('mouseout', removeDisplayShip)
        }
      
        function findOrigin(e) {
          const origin = parseInt(e.target.id)
          const squares = document.querySelectorAll('.locator');
          squares.forEach(square => {
            square.removeEventListener('mouseover', displayShip);
            square.removeEventListener('click', findOrigin);
            //logic activates squares on the same row and column as the first coordinate
            if ((square.id >= Math.floor((origin-1) / 10)*10 && 
            square.id < Math.ceil(origin / 10)*10) ||   
            square.id % 10 === origin % 10) {
              square.addEventListener('mouseover', showOrientation);
            }             
          })
        
          function showOrientation(e) {
            const targetID = parseInt(e.target.id);
            let shipClassNames = 'locator ship';
            e.target.addEventListener('mouseout', removeDisplayShip);
            
            // determines if ship will be overlapping another ship
            function sameSpot() {
              const targetIDs = document.querySelectorAll('.ship');
              if (targetIDs.length < shipLength) {
                targetIDs.forEach(target => target.className = 'locator ship error');
              } else {
                e.target.addEventListener('click', findOrientation);
              }
            }
            //north orientation
            if (targetID % 10 === origin % 10 && targetID < origin) {
              //error handling for orientation
              if (origin < ((shipLength - 1) * 10)) {
                shipClassNames = 'locator ship error';
              } else {
                shipClassNames = 'locator ship';
              }
              for (let i = 0; i < shipLength; i++){
                const target = document.getElementById(`${origin - (10 * i)}`);
                if (origin - (10 * i) < 0) {
                  return
                } 
                else if (target.className === 'locator'){
                  target.className = shipClassNames;
                }
              }
              sameSpot();
            }
            //south orientation
            else if (targetID % 10 === origin % 10 && targetID > origin) {
              //error handling for orientation
              if (origin > 100 - ((shipLength - 1) * 10)) {
                shipClassNames = 'locator ship error';
              } else {
                shipClassNames = 'locator ship';
              }
              
              for (let i = 0; i < shipLength; i++){
                const target = document.getElementById(`${origin + (10 * i)}`);
                if (origin + (10 * i) > 100) {
                  return
                } 
                else if (target.className === 'locator'){
                  target.className = shipClassNames;
                }
              }
              sameSpot();
            }
            //east orientation
            else if (targetID <= Math.ceil((origin) / 10)*10 && targetID >= origin) {
              //error handling for orientation
              if (origin > (Math.ceil((origin) / 10) * 10) - shipLength + 1) {
                shipClassNames = 'locator ship error';
              } else {
                shipClassNames = 'locator ship';
              }

              for (let i = 0; i < shipLength; i++){
                const target = document.getElementById(`${origin + i}`);
                if (origin + i > (Math.ceil((origin) / 10) * 10)) {
                  return
                } 
                else if (target.className === 'locator'){
                  target.className = shipClassNames;
                }
              }
              sameSpot();
            }
            //west orientation
            else if (targetID >= Math.floor((origin - 1) / 10)*10 && targetID < origin) {
              console.log((Math.floor((origin -1) / 10) * 10));
              //error handling for orientation
              if (origin < (Math.floor((origin - 1) / 10) * 10) + shipLength) {
                shipClassNames = 'locator ship error';
              } else {
                shipClassNames = 'locator ship';                                                           
              }
              
              for (let i = 0; i < shipLength; i++){
                const target = document.getElementById(`${origin - i}`);
                if (origin - i < (Math.floor((origin - 1) / 10) * 10) + 1) {
                  return;
                } 
                else if (target.className === 'locator'){
                  target.className = shipClassNames;
                }
              }
              sameSpot();
            }
          }
          
          function findOrientation(e) {
            const squares = document.querySelectorAll('.locator');
            const shipLocation = document.querySelectorAll('.ship');
            squares.forEach(square => {
              square.removeEventListener('mouseover', showOrientation);
              square.removeEventListener('click', findOrientation);
            })
  
            shipLocation.forEach(spot => {
              coor.push(parseInt(spot.id))
              spot.className = `${fleet[ship].name}`
            });
            // console.log(coor);
            fleet[ship].location = coor;
            coor = [];
            ship++;
            findShipLocation();
          }
        }
      }
      
      function initUIlocater(parent) {
        for (let i = 1; i <= 100; i++) {
          const square = document.createElement('div');
          square.className = `locator`;
          square.id = i;
          parent.appendChild(square);
        }
      }
      
      initUIlocater(locatorHelper);
      parent.appendChild(locatorHelper);
      findShipLocation();
    }

    module.exports = determineShipLocation;