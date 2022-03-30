const player = require('../functions/Player');

describe('player functions', () => {
  let player1 = player('Joe', false);
  let player2 = player('Robot', true);
  player1.oppGameboard.createBoard();
  player2.oppGameboard.createBoard();

  test('Player 1 fired at the enemy board', () => {
    player1.attack(3);
    expect(player1.oppGameboard.gameboardArray[2]).toMatch('miss');
  })
  
  test('Player 2 fired at the board randomly 100 times', async () => {
    for (let i = 0; i < 100; i++) {
      player2.attackRandom()
    }
    expect(await player2.oppGameboard.gameboardArray[3]).toMatch('miss'),
    expect(await player2.oppGameboard.gameboardArray[40]).toMatch('miss'),
    expect(await player2.oppGameboard.gameboardArray[23]).toMatch('miss'),
    expect(await player2.oppGameboard.gameboardArray[13]).toMatch('miss'),
    expect(await player2.oppGameboard.gameboardArray[80]).toMatch('miss'),
    expect(await player2.oppGameboard.gameboardArray[72]).toMatch('miss')
  })
})