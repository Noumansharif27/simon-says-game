let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game started");
    started = true;
  }

  levelUp();
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let ranIndx = Math.floor(Math.random() * 3);
  let ranColor = btns[ranIndx];
  let ranBtn = document.querySelector(`.${ranColor}`);

  btnFlash(ranBtn);
  gameSeq.push(ranColor);
  console.log(gameSeq);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

function btnPress() {
  let btn = this;
  console.log(btn);
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function checkAns(indx) {
  if (userSeq[indx] === gameSeq[indx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <strong> ${level} </strong> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    resetGame();
  }
}

function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
