# Battleship
![](https://github.com/Appletri/Appletri/blob/main/assets/battleship.gif)
## Links
- [Try Battleship here!](https://Appletri.github.io/battleship/dist)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-battleship)

## About
### Test Driven Development
<hr>
Test-driven development (TDD), is a new age evolutionary approach to development which emphasizes test-first development. Here you write a test before you write just enough production code to fulfill that test and then go on to refactor the code. The primary goal of TDD is specification and not validation (Martin, Newkirk, and Kess 2003).  In other words, TDD is one way to think through your requirements or design before your write your functional code (implying that TDD is both an important agile requirements and agile design technique). Another view is that TDD is a programming technique. As Ron Jeffries likes to say, the goal of TDD is to write clean code that works.

### Factory Functions
This is my first project following the TDD using Jest. I created the player, gameboard, and ship factory functions prior to production code. Testing these functions prior to creating the game ensures that my functions acting as my foundation will work, making the production smoother. 

### User Interface
<hr>
#### The Board
Creating the user interface was next. Looking at the original game Battleship, the game requires two grids, one for your board and one for your opponent. I wanted to make the UI simple and efficient. The goal was to create one visul board and having the ability to swap between boards at will. 

For the squares, I created a fake 3d effect by giving the squares a box shadow and a hover effect that translates the square on the y-axis. This effectively gives the player a visual at what square is being targeted. For the 'hit' and 'miss' markers, I added a transition style to the squares. When there is a 'hit', the cube changes to a red circle while a 'miss' grants a sunken grey box. The radial gradient on the squares help define each cube so they are visible from one another.

![](https://github.com/Appletri/Appletri/blob/main/assets/squares.JPG)

I felt like instead of having text saying miss and hit, this was a great way to convey that message.

#### placeShip.js
After initializing the game, the player will need to place their ships. I wanted to make this simple and intuitive. I create a function where it displays the ship on hover and the first click will solidify the ship and its origin. The player can now pivot the ship based on the origin, the second click will lock in the ship to its location and updated the gameboard array with the ships name.

### Gameplay
<hr>
The player will fire at a square, earning a 'hit' or a 'miss'. After the player's turn, the board will swap to the cpu board where the cpu will make it's move.

### placeFleetRandomly
The CPU places their ships randomly. It uses the findRandomLocation from the ship constructor. The ship will find a random origin and an orientation and then generate the ship location. The placeFleetRandomly will move through all ships, checking if the current ship is overlapping with any of the previous ship. If it is, it will find a new random location, else it will place the ship on the gameboard array.

#### CPU AI
The CPU will start by making a random shot on the board. After making a shot, the cpuAmmo, gameboardArray, and DOM gameboard will be updated. The cpuAmmo is an array that will keep track of possible squares to fire at. The CPU will make random shots until it finds a 'hit'. After finding a 'hit' the CPU will shoot around the hit to find the orientation of the ship and then attempting to sink the ship.

#### isFleetSunk
after every shot, the game will determine if a ship has been sunk by seeing if all the ship.location are included in an array called 'hits'. If it is all included, then the ship has been sunk. Once a ship has been sunk, the DOM will update with a text to let the player know which specific ship has been sunk and the CPU will then start to shoot randomly for the next firstHit. The game ends when all ships have been sunk.










