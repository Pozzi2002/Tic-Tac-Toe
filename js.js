    /*My goal*/
//My code(Tic-Tac-Toe)
//Player and Player2(X and O)
//Gameboard. Start Player
//if 3X(3O) on row/column/diagonally, user win

   /*Steps*/
//1) I want choose a Players name and it's side(Factory Function)
//2.) Where store result?(More likely in an Array)
//3.) Very little global variables or not it at all
//4.) Step Player, after Enemy, Player, Enemy, etc...
//5.) Maybe Numbers? 1-9.   1/2/3, etc...


function GameController(playerOne = "Player one", playerTwo = "Player Two") {
//Board and Players
   let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const player = [
        {name: playerOne,
         character: "X"
        },
        {name: playerTwo,
         character: "0"
        }
    ];
//Switch Player
    let activePlayer = player[0];

    const switchPlayer = () => {
       activePlayer = activePlayer === player[0] ? player[1] : player[0]
    }

    const getActivePlayer = () => activePlayer
//Round
    function round(cell) {
        if (board[cell-1] !== "X" && board[cell-1] !== "0") {
        board[cell-1] = getActivePlayer().character
        checkRound()
        switchPlayer()
        console.log(activePlayer.name)
        console.log([board.slice(0,3), board.slice(3,6), board.slice(6,9)])
    } else {
        //console.log(board)
    }
  }
//CheckRound
function checkRound() {
    if((board[0] == getActivePlayer().character && board[1] == getActivePlayer().character && board[2] == getActivePlayer().character) ||
    (board[3] == getActivePlayer().character && board[4] == getActivePlayer().character && board[5] == getActivePlayer().character) ||
    (board[6] == getActivePlayer().character && board[7] == getActivePlayer().character && board[8] == getActivePlayer().character) ||
    (board[0] == getActivePlayer().character && board[3] == getActivePlayer().character && board[6] == getActivePlayer().character) ||
    (board[1] == getActivePlayer().character && board[4] == getActivePlayer().character && board[7] == getActivePlayer().character) ||
    (board[2] == getActivePlayer().character && board[5] == getActivePlayer().character && board[8] == getActivePlayer().character) ||
    (board[0] == getActivePlayer().character && board[4] == getActivePlayer().character && board[8] == getActivePlayer().character) ||
    (board[2] == getActivePlayer().character && board[4] == getActivePlayer().character && board[6] == getActivePlayer().character)){
        console.log(`${getActivePlayer().name} Win!!!`)
        activePlayer = player[1]
        board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    } else if (board[0] !== 1 && board[1] !== 2 && board[2] !== 3 &&
               board[3] !== 4 && board[4] !== 5 && board[5] !== 6 &&
               board[6] !== 7 && board[7] !== 8 && board[8] !== 9)  {
        console.log("Draw! game.restart()")
    }
}
//Restart for restart Game
function restart() {
    board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log([board.slice(0,3), board.slice(3,6), board.slice(6,9)])
    activePlayer = player[0]
}
    return { round, restart }
}

const game = GameController()

