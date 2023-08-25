let userChoice = prompt("لطفا بین سنگ، کاغذ و قیچی یکی را انتخاب کنید!");
console.log(`انتخاب شما: ${userChoice}`);
const choices = ["سنگ", "کاغذ", "قیچی"];
const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNumber];
console.log(`انتخاب کامپیوتر: ${computerChoice}`);
if (computerChoice === userChoice) {
   console.log("شما مساوی شدید");
} else if (userChoice === "سنگ") {
   computerChoice === "قیچی"
      ? console.log("شما برنده شدید")
      : console.log("متاسفانه شما باختید");
} else if (userChoice === "کاغذ") {
   computerChoice === "سنگ"
      ? console.log("شما برنده شدید")
      : console.log("متاسفانه شما باختید");
} else if (userChoice === "قیچی") {
   computerChoice === "کاغذ"
      ? console.log("شما برنده شدید")
      : console.log("متاسفانه شما باختید");
} else if (userChoice === "") {
   console.log('لطفا یکی از کلمات "سنگ"، "کاغذ" یا "قیچی" را انتخاب کنید');
} else {
   console.log("لطفا کلمه صحیح را وارد کنید");
}
