const area = document.querySelector(".main");
const boxes = document.querySelectorAll(".box");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const modal = document.querySelector(".wrapper-winner");
const results = document.querySelector(".result");
const btn = document.querySelector(".btn");
const friend = document.querySelector(".friend");
const score = document.querySelector(".score");
const reset = document.querySelector(".btn-reset");
const record = document.querySelector(".btn-records");
const modalRecords = document.querySelector(".wrapper-records");
const btnClose = document.querySelector(".btn-close");
const finishResult = document.querySelector(".finish-result");
const btnVolume = document.querySelector(".btn-volume");
let move = 0;
let totalScore = 0;
let isWinner = false;
let result = "";
const arrWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


// sound
const areaSound = new Audio("./sound/click.mp3");
const winSound = new Audio("./sound/win.mp3");
const resetSound = new Audio("./sound/reset.mp3");
const scoreSound = new Audio("./sound/score.mp3");
const closeSound = new Audio("./sound/close.mp3");

// fill area; X or O
area.addEventListener("click", (event) => {
  if (event.target.classList.contains("box")) {
    if (event.target.innerHTML === "") {
      if (move % 2 === 0) {
        event.target.innerHTML = '<span class="cross"></span>';
        areaSound.play();
        move++;
        checkWinner();
        movesDone();
      } else {
        event.target.innerHTML = '<span class="circle"></span>';
        move++;
        areaSound.play();
        checkWinner();
        movesDone();
      };
    };
  };
  if (move === 9 && !isWinner) {
    results.innerHTML = "";
    friend.textContent = "friendship";
    winSound.play();
    winF();
    overlay.style.display = "block";
    modal.style.display = "block";
  };
  checkTotalScore();
  localStorage.setItem("score", JSON.stringify(finishResult.innerHTML));
  localStorage.setItem("countScore", JSON.stringify(totalScore));
});

function checkWinner() {
  arrWin.forEach((el) => {
    if (
      boxes[el[0]].innerHTML === '<span class="cross"></span>' &&
      boxes[el[1]].innerHTML === '<span class="cross"></span>' &&
      boxes[el[2]].innerHTML === '<span class="cross"></span>'
    ) {
      result = "crosses";
      isWinner = true;
      winSound.play();
      win();
      winX();
    } else if (
      boxes[el[0]].innerHTML === '<span class="circle"></span>' &&
      boxes[el[1]].innerHTML === '<span class="circle"></span>' &&
      boxes[el[2]].innerHTML === '<span class="circle"></span>'
    ) {
      result = "circles";
      isWinner = true;
      winSound.play();
      win();
      winO();
    } else {
      result = "friendship";
    };
  });
};

function win() {
  results.innerHTML = "";
  friend.textContent = "";
  overlay.style.display = "block";
  modal.style.display = "block";
  if (result === "crosses") {
    results.innerHTML = '<span class="cross1"></span>';
  } else if (result === "circles") {
    results.innerHTML = '<span class="circle1"></span>';
  };
};

function movesDone() {
  score.textContent = `game over on move ${move}`;
};

function closeModal() {
  boxes.forEach((el) => {
    el.innerHTML = "";
  });
  overlay.style.display = "none";
  modal.style.display = "none";
  move = 0;
  isWinner = false;
  closeSound.play();
};

btn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// btn-reset
function resetArea() {
  boxes.forEach((el) => {
    el.innerHTML = "";
  });
  move = 0;
  finishResult.innerHTML = "";
  totalScore = 0;
  localStorage.setItem("score", JSON.stringify(finishResult.innerHTML));
  localStorage.setItem("countScore", JSON.stringify(totalScore));
  resetSound.play();
};

reset.addEventListener("click", resetArea);

// score
function showRecords() {
  modalRecords.classList.add("showModal");
  overlay2.classList.add("showModal");
  scoreSound.play();
};

function closeRecords() {
  modalRecords.classList.remove("showModal");
  overlay2.classList.remove("showModal");
  closeSound.play();
};

function winX() {
  const x = document.createElement("div");
  x.classList.add("resultX");
  x.innerHTML =
    'Х: <span class="win">winner</span> &nbsp; O: <span class="lose">loser</span>';
  finishResult.append(x);
  getTotalScore();
};

function winO() {
  const o = document.createElement("div");
  o.classList.add("resultO");
  o.innerHTML =
    'X: <span class="lose">loser</span> &nbsp; O: <span class="win">winner</span>';
  finishResult.append(o);
  getTotalScore();
};

function winF() {
  const f = document.createElement("div");
  f.classList.add("resultF");
  f.innerHTML = '<span class="frendly">friendship</span>';
  finishResult.append(f);
  getTotalScore();
};

record.addEventListener("click", showRecords);
btnClose.addEventListener("click", closeRecords);
overlay2.addEventListener("click", closeRecords);



// btn-volume
function onSound() {
  areaSound.volume = 1;
  winSound.volume = 1;
  resetSound.volume = 1;
  scoreSound.volume = 1;
  closeSound.volume = 1;
};

function offSound() {
  areaSound.volume = 0;
  winSound.volume = 0;
  resetSound.volume = 0;
  scoreSound.volume = 0;
  closeSound.volume = 0;
};

function checkVolume(event) {
  if (event.target.classList.contains("change")) {
    offSound();
  } else if (!event.target.classList.contains("change")) {
    onSound();
    areaSound.play();
  };
};

function addVolume() {
  btnVolume.classList.toggle("change");
  checkVolume(event);
};

btnVolume.addEventListener("click", addVolume);


// local storage
function getTotalScore() {
  totalScore++;
};

function checkTotalScore() {
  if (totalScore > 10) {
    finishResult.innerHTML = "";
    checkWinner();
    localStorage.setItem("score", JSON.stringify(finishResult.innerHTML));
    totalScore = 1;
    localStorage.setItem("countScore", JSON.stringify(totalScore));
  };
};

window.onload = () => {
  finishResult.innerHTML = JSON.parse(localStorage.getItem("score"));
  totalScore = JSON.parse(localStorage.getItem("countScore"));
};

// my score
function myMark() {
  const result = `score (70/70): \n
    1. Вёрстка (10) \n
    - реализован интерфейс игры +5 \n
    - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5 \n
    2. При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик (10) \n
    3. Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали (10) \n
    4. По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения (10) \n
    5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр (10) \n
    6. Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов (10) \n
    7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения (10) \n
  `;
  return console.log(result);
};
myMark();
