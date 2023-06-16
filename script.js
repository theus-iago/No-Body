let scorePntt;
let scoreText = 0;
let gameoverAud = document.getElementById("gameover");
let scoreF = document.getElementById("scoreF");
const enemy = document.getElementById("enemy");
let hs = document.getElementById("heightS");
let ws = document.getElementById("widthS");
let score = document.getElementById("score");
let subG = document.getElementById("subG");
let textG = document.getElementById("textG");
let body = document.getElementById("body");
let gameO = document.getElementById("gameO");
let gameScreen = document.getElementById("gameScreen");
const charMain = document.getElementById("charMain");
const jumpButton = document.getElementById("jump");
const shootButton1 = document.getElementById("shootButton");
jumpButton.addEventListener("touchstart", function () {
  const jumpAud = document.getElementById("jumpAud");
  jumpAud.play();
  charMain.classList.add("jumpChar");
  shootButton1.src = "images/abc.png";
  jumpButton.src = "images/abc.png";
  setTimeout(() => {
    charMain.classList.remove("jumpChar");
    shootButton1.src = "images/shootButton.png";
    jumpButton.src = "images/jumpButton.png";
  }, 500);
});
let audio = document.getElementById("audio");
score.style.width = `${+window
  .getComputedStyle(hs)
  .height.replace("px", "")}px`;
score.style.height = `${+window
  .getComputedStyle(ws)
  .width.replace("px", "")}px`;

function pontuation() {
  audio.play();
  scorePntt = setInterval(() => {
    scoreText++;
    score.innerText = `${scoreText}`;
  }, 250);
  const enemyRandom = setInterval(() => {
    const num = Math.floor(Math.random() * 3);
    if (num == 0) {
      let enemy = document.getElementById("enemy");
      enemy.src = "images/jumpButton.png";
    } else if (num == 1) {
      enemy.src = "images/enemy.gif";
    } else if (num == 2) {
      enemy.src = "images/shootButton.png";
    }

    const randomNum = Math.floor(Math.random() * 4);
    if (randomNum == 0) {
      enemy.style.animation = "enemyMove 1s infinite linear";
    } else if (randomNum == 1) {
      enemy.style.animation = "enemyMove2 1s infinite linear";
    } else if (randomNum == 2) {
      enemy.style.animation = "enemyMove3 1s infinite linear";
    } else if (randomNum == 3) {
      enemy.style.animation = "enemyMove4 1s infinite linear";
    }
  }, 1000);
}
let floor = document.getElementById("floor");

let floorAlt = +window.getComputedStyle(floor).width.replace("px", "");
charMain.style.left = `${floorAlt}px`;
  const loop = setInterval(() => {
    const restart = document.getElementById("restart");
    let charH = +window.getComputedStyle(charMain).height.replace("px", "");
    let charColision = charH + 15;

    let enemyW = +window.getComputedStyle(enemy).width.replace("px", "");
    let charPositionl = +window
      .getComputedStyle(charMain)
      .left.replace("px", "");
    enemyW = enemyW + floorAlt;

    const charPositionr = +window
      .getComputedStyle(charMain)
      .right.replace("px", "");
    const enemyPosition = enemy.offsetTop;
    let amn = 180;
    if (
      charPositionl <= enemyW &&
      enemyPosition <= charColision &&
      enemyPosition >= 1
    ) {
      audio.pause();
      gameoverAud.play();
      clearInterval(scorePntt);
      scoreF.innerText = scoreText;
      gameScreen.style.filter = `blur(5px)`;
      let height = +window
        .getComputedStyle(gameScreen)
        .height.replace("px", "");
      let width = +window.getComputedStyle(gameScreen).width.replace("px", "");
      height = height / 2;
      width = width / 4;
      enemy.style.animation = "none";
      enemy.style.top = `${enemyPosition}px`;
      charMain.style.left = `${charPositionl}px`;
      jumpButton.src = "images/abc.png";
      shootButton1.src = "images/abc.png";
      gameO.style.height = `${width}px`;
      gameO.style.width = `${height}px`;
      gameO.style.left = `25%`;
      gameO.style.top = `42%`;
      textG.innerText = "GAME OVER";
      subG.innerText = "CLIQUE EM QUALQUER LUGAR PARA RECOMEÇAR";
      body.addEventListener("touchstart", () => {
        document.location.reload();
      });
    }
  }, 1);

const shootButton = document.getElementById("shootButton");
shootButton.addEventListener("touchstart", function () {
  const bullet = document.createElement("div");
  const attr1 = document.createAttribute("class");
  const attr2 = document.createAttribute("src");
  const attr3 = document.createAttribute("style");
  const attr4 = document.createAttribute("id");
  attr1.value = "bullet";
  attr3.velue = "bulletid";
  bullet.setAttributeNode(attr1);
  bullet.setAttributeNode(attr2);
  bullet.setAttributeNode(attr3);
  document.body.appendChild(bullet);
  const bulletm = document.getElementsByClassName("bullet");

  setTimeout(() => {
    document.body.removeChild(bullet);
    const bossLife = document.getElementById("bossLife");
    let height = +window.getComputedStyle(bossLife).height.replace("px", "");
    let h = height - 4;
    let life = bossLife.style.height;
    bossLife.style.height = h + "px";
    if (life <= 1) {
      let boss = document.getElementsByClassName("bossSprite").src;
      boss = "images/boss.gif";
    }
  }, 600);
});
