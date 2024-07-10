// function red(){
//     alert("page is loaded");
// }

function roll(){

    // random dice roll and assigning values to players 
    // for player 1 dice 
    var dice1 = Math.floor(Math.random()*6+1);
    console.log(dice1);

    var image1 = document.querySelectorAll("img")[0];
    var diceNumber = "dice" + dice1 + ".png";
    var imageSource = "images/" +  diceNumber;

    image1.setAttribute("src", imageSource);

    // for player2 dice 

    var dice2 = Math.floor(Math.random()*6+1);
    console.log(dice2);

    var diceNumber = "dice" + dice2 + ".png";
    var imageSource = "images/" +  diceNumber;

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", imageSource);
    
        
    // checks for who wins by comparing
    if(dice1 > dice2){
        document.querySelector("h1").innerHTML = "🤩Player 1 wins!!";
    }else if(dice1 ===  dice2){
        document.querySelector("h1").innerHTML = "😒It's a Draw!!";
    }else{
        document.querySelector("h1").innerHTML = "😎Player 2 wins!!";
    }
  
}
    // assigns images according to the value of dice1 and dice2
    // diceRoll1();
    // diceRoll2();


    //diceroll functions for both players based on score and assigning images
    // function diceRoll1(){
    //     if(dice1 === 1){
    //       image1.setAttribute("src", imageSource); // document.querySelector(" img").src = "images/dice1.png"; 
    //     }else if(dice1 === 2){
    //       image1.setAttribute("src", imageSource); // document.querySelector(" img").src = "images/dice2.png";
    //     }else if(dice1 === 3){
    //       image1.setAttribute("src", imageSource);  // document.querySelector(" img").src = "images/dice3.png";
    //     }else if(dice1 === 4){
    //       image1.setAttribute("src", imageSource); // document.querySelector(" img").src = "images/dice4.png";
    //     }else if(dice1 === 5){
    //       image1.setAttribute("src", imageSource); // document.querySelector(" img").src = "images/dice5.png";
    //     }else if(dice1 === 6){
    //       image1.setAttribute("src", imageSource);// document.querySelector(" img").src = "images/dice6.png";
    //     }else{
    //         alert("some shit wrong!!!");
    //     }
    // }

    //diceroll functions for both players based on score and assigning images
//     function diceRoll2(){
//         if(dice2 === 1){
//             image2.setAttribute("src", imageSource); // document.querySelector("img").src = "images/dice1.png";
//         }else if(dice2 === 2){
//             image2.setAttribute("src", imageSource);// document.querySelector("img").src = "images/dice2.png";
//         }else if(dice2 === 3){
//             image2.setAttribute("src", imageSource); // document.querySelector("img").src = "images/dice3.png";
//         }else if(dice2 === 4){
//             image2.setAttribute("src", imageSource);// document.querySelector("img").src = "images/dice4.png";
//         }else if(dice2 === 5){
//             image2.setAttribute("src", imageSource); // document.querySelector("img").src = "images/dice5.png";
//         }else if(dice2 === 6){
//             image2.setAttribute("src", imageSource); // document.querySelector("img").src = "images/dice6.png";
//         }else{
//             alert("some shit wrong!!!");
//         }
//     }


