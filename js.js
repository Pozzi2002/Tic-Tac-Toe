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
// COMPLETED(console version)
const cells = document.querySelectorAll(".cell")
const rest = document.querySelector(".restart")
const output = document.querySelector(".output")
const startPlay = document.querySelector(".submit")
const dialog = document.querySelector(".question")
const result = document.querySelector(".result")
const rest2 = document.querySelector(".restart2")
const finish = document.querySelector(".finish")
let game;

//Dialog for restart
dialog.showModal()
rest2.addEventListener("click", () => {
    dialog.showModal()
    result.close()
})
//Button for start Play
rest.addEventListener("click", (e) => {
    dialog.close()
    let playerOne = document.querySelector("#playerOne").value 
    let playerTwo = document.querySelector("#playerTwo").value
    e.preventDefault()
    if (playerOne == '' || playerOne.length > 15) playerOne = "Player one"
    if (playerTwo == ''  || playerTwo.length > 15) playerTwo = "Player two"
    game = GameController(playerOne, playerTwo)
    cells.forEach((cell) => {
     cell.disabled = false
     game.restart()
    })
    return {game}
})

//Disabled cell Default
cells.forEach((cell) => {
  cell.disabled = true
})
//Button interaction
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        let player = game.getActivePlayer()
        game.round(cell.textContent)
        cell.textContent = player.character
        cell.disabled = true
        cell.style.color = "black";
      }) 
})

//GameController
function GameController(playerOne = "Player one", playerTwo = "Player two") {
//Board and Players
   let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const player = [
        {name: playerOne,
         character: "X"
        },
        {name: playerTwo,
         character: "O"
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
        output.textContent = `${activePlayer.name} turn`
        console.log(activePlayer.name)
        console.log([board.slice(0,3), board.slice(3,6), board.slice(6,9)])
    } else {
        //console.log(board)
    }
  }
//CheckRound
function checkRound() {
    if ((board[0] == getActivePlayer().character && board[1] == getActivePlayer().character && board[2] == getActivePlayer().character) ||
    (board[3] == getActivePlayer().character && board[4] == getActivePlayer().character && board[5] == getActivePlayer().character) ||
    (board[6] == getActivePlayer().character && board[7] == getActivePlayer().character && board[8] == getActivePlayer().character) ||
    (board[0] == getActivePlayer().character && board[3] == getActivePlayer().character && board[6] == getActivePlayer().character) ||
    (board[1] == getActivePlayer().character && board[4] == getActivePlayer().character && board[7] == getActivePlayer().character) ||
    (board[2] == getActivePlayer().character && board[5] == getActivePlayer().character && board[8] == getActivePlayer().character) ||
    (board[0] == getActivePlayer().character && board[4] == getActivePlayer().character && board[8] == getActivePlayer().character) ||
    (board[2] == getActivePlayer().character && board[4] == getActivePlayer().character && board[6] == getActivePlayer().character)) {
        
        rest.disabled = false
        //alert(`${getActivePlayer().name} Win!!!`)
        finish.textContent = `Player ${getActivePlayer().name} Win!!!`
        result.showModal()
        activePlayer = player[1]
        board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        cells.forEach((cell) => {
            cell.disabled = true;
        })
    } else if (board[0] !== 1 && board[1] !== 2 && board[2] !== 3 &&
               board[3] !== 4 && board[4] !== 5 && board[5] !== 6 &&
               board[6] !== 7 && board[7] !== 8 && board[8] !== 9)  {
         
         cells.forEach((cell) => {
         cell.disabled = true;
        })
        rest.disabled = false
        alert("Draw! game.restart()")
       // rest2.showModal()
        
    }
}
//Restart for restart Game
function restart() {
    board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output.textContent = `${getActivePlayer().name} turn`    
        cells.forEach(() => {
            for (let i=0; i < 9; i++) {
           cells[i].textContent = i+1;
        }})

        cells.forEach((cell) => {
            cell.disabled = false;
            cell.style.color = "rgba(0, 0, 0, 0)"
        })

    console.log([board.slice(0,3), board.slice(3,6), board.slice(6,9)])
    activePlayer = player[0]
    rest.disabled = true;
}

    return { round, restart, getActivePlayer, switchPlayer}
}
