let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const btn = document.getElementById("msg");
const userscore = document.querySelector("#userscore");
const computerscore = document.querySelector("#compscore");
const reset = document.querySelector("#reset")

const genCompchoice = () => {
  let opt = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return opt[randIdx];
};
const drawgame = () => {
  btn.innerText = "Game is draaw";
  btn.style.background = "linear-gradient(135deg, #feb47b, #ff7e5f)";
};
const showwinner = (userwin, userchoice, computerchoice) => {
  if (userwin) {
    userScore++;
    userscore.innerText=userScore;
    btn.innerText = `You win! ${userchoice} beats ${computerchoice}`;
    btn.style.background = "green";
    
   
  } else {
    compScore++;
    computerscore.innerText=compScore;
    btn.innerText = `You lose-- ${computerchoice} beats ${userchoice}`;
    btn.style.background = "gray";
   
 
  }
};

const playgame = (userchoice) => {
  console.log("userchoice =", userchoice);
  const computerchoice = genCompchoice(); // Generate computer choice
  console.log("comp choice =", computerchoice);

  if (computerchoice === userchoice) {
    drawgame();
  } else {
    let userwin = false; // Default to false, then set to true if the user wins
    if (userchoice === "rock") {
      userwin = computerchoice === "scissors";
    } else if (userchoice === "paper") {
      userwin = computerchoice === "rock";
    } else if (userchoice === "scissors") {
      userwin = computerchoice === "paper";
    }
    showwinner(userwin, userchoice, computerchoice); // Pass variables to showwinner
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    console.log("choice was clicked", userchoice);
    playgame(userchoice);
  });
});
reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userscore.innerText = userScore;
    computerscore.innerText = compScore;
    btn.innerText = "Score has been reset";
    btn.style.background = "lightgray";
  });
