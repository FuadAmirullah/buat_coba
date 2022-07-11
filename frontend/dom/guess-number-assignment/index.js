/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here
let newGameBtn = document.getElementsByClassName("new-game")[0];
let randomNumber = Math.floor(Math.random() * 10) + 1;
let message = document.getElementsByClassName("message")[0];
let displayScore = document.getElementsByClassName("score")[0];
let input = document.getElementsByClassName("input")[0];
let checkBtn = document.getElementsByClassName("check")[0];
let score = 10;

checkBtn.addEventListener("click", checkNumber);
newGameBtn.addEventListener("click", resetGame);

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}

function resetGame() {
  // TODO: answer here
  score = 10;
  displayScore.innerHTML = 10;
  input.value = "";
  displayMessage("Lets start guessing...");
  document.getElementsByClassName("number")[0].innerHTML = randomNumber;
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);

  //dilarang menghapus code dibawah ini!
  document.getElementById("hidden-number").innerHTML = randomNumber;
}

function checkNumber() {
  // TODO: answer here
  //beginanswer
  if (input.value < 1 || input.value > 10) {
    displayMessage("Guess any number between 1 and 10");
  } else if (input.value == randomNumber) {
    displayMessage("You are correct!");
    document.getElementsByClassName("number")[0].innerHTML = randomNumber;
  } else if (input.value != randomNumber) {
    if (score > 1) {
      score--;
      displayScore.innerHTML = score;
      if (input.value < randomNumber) {
        displayMessage("Too small, buddy!");
      } else if (input.value > randomNumber) {
        displayMessage("Oww... that's too big!");
      }
    } else {
      displayMessage("You lose!");
      document.getElementsByClassName("number")[0].innerHTML = randomNumber;
    }
  } else if (input.value == "") {
    displayMessage("Input cannot be empty");
  }

  //endanswer
}

//dilarang menghapus code dibawah ini!
document.getElementById("hidden-number").innerHTML = randomNumber;
