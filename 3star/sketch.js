let cols = 3; let rows = 3;
let size;
let board = [];
let players = ["X", "O"]
let currentPlayer;
let winner = false
let winnerLoc = [];
let winnerText;

function setup(){

    createCanvas(400, 400)
    size = width/cols;
    currentPlayer = players[floor(random(2))];
    for(let i = 0; i < cols; i++){

        board[i] = [];
        for(let j = 0; j < rows; j++){

            board[i][j] = 0;
        }
    }
}

function draw(){

    background(220);
    drawBoard()
    drawWinner()
}

function drawBoard(){

    stroke(0)
    strokeWeight(1)
    for(let i = 0; i < cols; i++){

        for(let j = 0; j < rows; j++){

            rect(i * size, j * size, size, size)

            if(board[i][j] != 0){

                textAlign(CENTER)
                textSize(30)
                text(board[i][j], size/2 + i * size, size/2 + j * size + 10)
            }
        }
    }
}

function mousePressed(){

    let index = [floor(mouseX / size), floor(mouseY / size)];
    placePieces(index[0], index[1]);
    checkWinner()
}

function placePieces(x, y){

    if(board[x][y] == 0){

        board[x][y] = currentPlayer;
        winnerText = currentPlayer;
        if(currentPlayer == "X"){

            currentPlayer = "O"
        } else {

            currentPlayer = "X"
        }
    } 
}

function checkWinner(){

    for(let i = 0; i < cols; i++){

        if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != 0){

            winner = true;
            winnerLoc = [1, i]
        }
    }

    for(let i = 0; i < rows; i++){

        if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != 0){

            winner = true;
            winnerLoc = [2, i]
        }
    }

    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != 0){

        winner = true
        winnerLoc = [3, 0]
    }

    if(board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != 0){

        winner = true
        winnerLoc = [4, 0]
    }
    print(winner);
}

function drawWinner(){

    stroke(255, 0, 0)
    strokeWeight(5)
    if(winner){

        textAlign(CENTER)
        textSize(100)
        text(winnerText + " wins", width/2, height/2 + 0)
        if(winnerLoc[0] == 1){

            line(size/2 + winnerLoc[1] * size, size /2 + 0 * size, size/2 + winnerLoc[1] * size, size/2 + 2*size)
        } else if (winnerLoc[0] == 2){

            line(size/2 + 0 * size, size/2 + winnerLoc[1] * size, size/2 + 2 * size, size/2 + winnerLoc[1] * size)
        } else if (winnerLoc[0] == 3){

            line(size/2, size/2, size/2 + 2 * size, size/2 + 2 * size)
        } else if (winnerLoc[0] == 4){

            line(size/2 + 2 * size, size/2, size/2, size/2 + 2 * size)
        }
    }
}