const keys = document.querySelector('.RPS-keys');

 var userChoice;
 var compChoice;
 const screen = document.getElementById('screengif');

 // ------------------------------
 // ------------------------------  

 

const game = () => {

switch (true) {
    case (userChoice === "Rock" && compChoice === 'Rock'):
    return "Draw!";
    break;
    case (userChoice === "Paper" && compChoice === 'Paper'):
    return "Draw!";
    break;
    case (userChoice === "Scissors" && compChoice === 'Scissors'):
    return "Draw!";
    break;
    case (userChoice === "Rock" && compChoice === 'Scissors'):
    return "User Wins!";
    break;
    case (userChoice === "Paper" && compChoice === 'Rock'):
    return "User Wins!";
    break;
    case (userChoice === "Scissors" && compChoice === 'Paper'):
    return "User Wins!";
    break;

    case (userChoice === "Rock" && compChoice === 'Paper'):
    return "Computer Wins!";
    break;
    case (userChoice === "Paper" && compChoice === "Scissors"):
    return "Computer Wins!";
    break;
    case (userChoice === "Scissors" && compChoice === 'Rock'):
    return "Computer Wins!";
    break;
}
};

// ------------------------------
// ------------------------------
  

keys.addEventListener('click', event => {
    const {target} = event;
    const choices = ['Rock', 'Paper', 'Scissors'];
    compChoice = choices[Math.floor(Math.random() * choices.length)];
    userChoice = target.value
    console.log(userChoice)
    console.log(compChoice)
    //if (!target.matches('input')) {
    //    return;
    //};
      
    if (target.classList.contains('RPS')){
        console.log('RPS', target.value);

    
    document.getElementById("userPick").innerHTML = "User picks " + userChoice + "!";
    console.log(game());
    document.getElementById("compPick").innerHTML = "Comp picks " + compChoice + "!";
    document.getElementById("Result").innerHTML = game();
    
    if (game() === "Draw!") {
        screengif.src = "images/draw.gif";
    } else if (game() === "User Wins!") {
        screengif.src = "images/user.gif";
     } else if (game() === "Computer Wins!") {
        screengif.src = "images/comp.gif";
    }
    }
    
    })


// ------------------------------
// ------------------------------
// ------------------------------
// Buttons - status: working
// ------------------------------
// ------------------------------
// ------------------------------


const redbtn = document.getElementById('red-btn');
const bluebtn = document.getElementById('blue-btn');
const yellbtn = document.getElementById('yel-btn');

function red() {
    if (redbtn.src.match("red-btn")) {
        redbtn.src = "images/red-pressed.png";
        bluebtn.src = "images/blue-btn.png";
        yellbtn.src = "images/yel-btn.png";
    }

}

function blue() {
    if (bluebtn.src.match("blue-btn")) {
        redbtn.src = "images/red-btn.png";
        bluebtn.src = "images/blue-pressed.png";
        yellbtn.src = "images/yel-btn.png";
    }
}

function yell() {

    if (yellbtn.src.match("yel-btn")) {
        redbtn.src = "images/red-btn.png";
        bluebtn.src = "images/blue-btn.png";
        yellbtn.src = "images/yel-pressed.png";
    }

};

function returnyell() {
    if (yellbtn.src.match("yel-pressed")) {
        yellbtn.src = "images/yel-btn.png";
    }
};

function returnblue() {
    
    if (bluebtn.src.match("blue-pressed")) {
        bluebtn.src = "images/blue-btn.png";
    }
};

function returnred() {
    if (redbtn.src.match("red-pressed")) {
        redbtn.src = "images/red-btn.png";
    }
};

setInterval(returnblue, 150);
setInterval(returnyell, 150);
setInterval(returnred, 150);


// ------------------------------
// ------------------------------
// ------------------------------
// Rounds
// ------------------------------
// ------------------------------
// ------------------------------