let title = document.querySelector('.title');
let currentPlayer = 'x';
let squares = [];

let player1 = document.querySelector('.player-1 p');
let player2 = document.querySelector('.player-2 p');
let score = { X: 0, O: 0 };

function winner(num1, num2, num3){
    title.innerHTML = `${squares[num1]} Is the winner`;
    document.getElementById('box' + num1).style.background = '#6B728E';
    document.getElementById('box' + num2).style.background = '#6B728E';
    document.getElementById('box' + num3).style.background = '#6B728E';

    if(`${squares[num1]}` === 'x'){
        score.X += 1;
        player1.innerHTML = score.X;
    }
    else if(`${squares[num1]}` === 'o'){
        score.O += 1;
        player2.innerHTML = score.O;
    }

    disable();
    
    setTimeout(function(){resetGame(num1, num2, num3)}, 1500);
}

function check(){
    for(let i = 1; i < 10; i++){
        squares[i] = document.getElementById('box' + i).innerHTML;
    }

    // Rows
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        winner(1, 2, 3)
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
        winner(4, 5, 6)
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){
        winner(7, 8, 9)
    }

    // columns
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        winner(1, 4, 7)
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        winner(2, 5, 8)
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        winner(3, 6, 9)
    }

    // center
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        winner(1, 5, 9)
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        winner(3, 5, 7)
    }   
}

function game(id){
    let element = document.getElementById(id);

    if(currentPlayer === 'x' && element.innerHTML === ''){
        element.innerHTML = 'x';
        currentPlayer = 'o'
        title.innerHTML = 'O: Turn'
    }
    else if(currentPlayer === 'o' && element.innerHTML === ''){
        element.innerHTML = 'o';
        currentPlayer = 'x';
        title.innerHTML = 'X: Turn'
    }

    check();
    }

function resetGame(num1, num2, num3) {
    currentPlayer = 'x';
    for(let i = 1; i < 10; i++){
        squares[i] = document.getElementById('box' + i).innerHTML = '';
        document.getElementById('box' + i).classList.remove("disable");
    }

    document.getElementById('box' +num1).style.background = '#fff';
    document.getElementById('box' +num2).style.background = '#fff';
    document.getElementById('box' +num3).style.background = '#fff';
    title.innerHTML = 'X: Turn'
}

function disable(){
    for(let i = 1; i < 10; i++){
        document.getElementById('box' + i).classList.add("disable");
    }
}
