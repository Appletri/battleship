import './style.css';

function init() {
  function domInit() {
    const head = document.createElement('h1');
    const main = document.createElement('div');
    const gameBoardUI = document.createElement('div');
    main.className = 'main';
    gameBoardUI.className = 'gameboard-ui';
    head.textContent = 'Battleship';

    function createTable(parent) {
      for (let i = 1; i <= 100; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.id = i;
        parent.appendChild(square);
      }
    }

    createTable(gameBoardUI);
    document.body.appendChild(head);
    main.appendChild(gameBoardUI);
    document.body.appendChild(main);
  }
  function gameInit() {
    let player1 = player('Player 1', false);
    let player2 = player('Robot', true);
    player1.oppGameboard.createBoard();
    player2.oppGameboard.createBoard();
  }
  domInit();
  gameInit();
}

init();