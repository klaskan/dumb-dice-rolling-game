
function diceRoll(){
    var roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

player1 = diceRoll();
player2 = diceRoll();

function game(player1, player2){
    //returns 1 if draw.
    if(player1 == player2){
        return document.write("<h1 class='draw'>🚩It's a draw🚩</h1>"), getDice(player1), getDice(player2);
    //return 2 if player 1 wins.
    }else if(player1 > player2){
        return document.write("<h1 class='player1w'>🚩Player 1 wins!</h1>"), getDice(player1), getDice(player2);
    //returns 3 if player 2 wins.
    }else{
        return document.write("<h1 class='player2w'>🚩Player 2 wins!</h1>"), getDice(player1), getDice(player2);
    }
}

function getDice(roll){
    if (roll == 1){
        document.write("<img class='one' src='img/one.png' alt=''>")
    }else if(roll == 2) {
        document.write("<img class='two' src='img/two.png' alt=''>")
    }else if(roll == 3){
        document.write("<img class='three' src='img/three.png' alt=''>")
    }else if(roll == 4){
        document.write("<img class='four' src='img/four.png' alt=''>")
    }else if(roll == 5){
        document.write("<img class='five' src='img/five.png' alt=''>")
    }else if(roll == 6){
        document.write("<img class='six' src='img/six.png' alt=''>")
    }else{
        console.log("Error.")
    }
}


game(player1, player2);

