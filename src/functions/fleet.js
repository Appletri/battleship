const shipFactory = require("../functions/Ship")

const fleet = [
    carrier = shipFactory('carrier', 5, []),
    battleship = shipFactory('battleship', 4, []),
    cruiser = shipFactory('battleship', 3, []),
    submarine = shipFactory('battleship', 3, []),
    destroyer = shipFactory('destroyer', 2, [])
]

module.exports = fleet;