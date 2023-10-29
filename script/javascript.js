const choices = ["سنگ", "کاغذ", "قیچی"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
   if (computer === player) {
      return "مساوی";
   } else if (player === "سنگ") {
      return computer === "قیچی" ? "کاربر" : "کامپیوتر";
   } else if (player === "کاغذ") {
      return computer === "سنگ" ? "کاربر" : "کامپیوتر";
   } else {
      return computer === "کاغذ" ? "کاربر" : "کامپیوتر";
   }
};

const showResult = (result) => {
   if (result === "کاربر") {
      console.log("شما بردید");
      playerScore++;
   } else if (result === "کامپیوتر") {
      console.log("شما باختید");
      computerScore++;
   } else {
      console.log("مساوی شدید");
   }

   console.log(`امتیاز شما: ${playerScore}`);
   console.log(`امتیاز کامپیوتر: ${computerScore}`);
   console.log("--------------------------");
};

const play = () => {
   const playerChoice = prompt("لطفا بین سنگ، کاغذ و قیچی یکی را انتخاب کنید!");

   if (choices.indexOf(playerChoice) !== -1) {
      console.log(`انتخاب شما: ${playerChoice}`);
   } else {
      console.log('لطفا یکی از کلمات "سنگ"، "کاغذ" یا "قیچی" را انتخاب کنید');
      return;
   }

   const randomNumber = Math.floor(Math.random() * choices.length);
   const computerChoice = choices[randomNumber];
   console.log(`انتخاب کامپیوتر: ${computerChoice}`);

   const gameResult = checkWinner(playerChoice, computerChoice);
   showResult(gameResult);

   if (playerScore === 3) console.log("هورا! شما بردید");
   else if (computerScore === 3) console.log("متاسفم شما باختید");

   if (playerScore < 3 && computerScore < 3) play();
};
play();
