var dice_list = ["/images/dice1.png",
    "/images/dice2.png",
    "/images/dice3.png",
    "/images/dice4.png", 
    "/images/dice5.png",
    "/images/dice6.png"];

function randomDice() {
    var number_1 = Math.floor(Math.random() * 6);
    var number_2 = Math.floor(Math.random() * 6);
    
    var dice1 = document.querySelector("#dice1").setAttribute("src", dice_list[number_1]);
    var dice2 = document.querySelector("#dice2").setAttribute("src", dice_list[number_2]);
    
    
    if (number_1 === number_2){
        document.querySelector(".h1").innerHTML = "Draw";
    }
    else if (number_1 > number_2){
        document.querySelector(".h1").innerHTML = "Player 1 Wins";
    }
    else {
        document.querySelector(".h1").innerHTML =  "Player 2 wins";
    }
}    

