const game = () => {
  let pScore = 0; 
  let cScore = 0; 
  const sound = new Audio('./assets/game.mp3');

 
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
 
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
   
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
       
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
           
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 4000);
        
        playerHand.src = './assets/rock.png';
        computerHand.src = './assets/rock.png';
        sound.play();
        
        playerHand.style.animation = "shakePlayer 4s ease";
        computerHand.style.animation = "shakeComputer 4s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    
    const winner = document.querySelector(".winner");
   
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a TIE";
      return;
    }
   
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "You Won!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
   
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Won!";
        pScore++;
        updateScore();
        return;
      }
    }
    
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
  };


  startGame();
  playMatch();
};

game();
