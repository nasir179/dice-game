var r1 = Math.floor(Math.random() * 6 + 1);
var r2 = Math.floor(Math.random() * 6 + 1);

document.body
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + r1 + ".png");
document.body
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + r2 + ".png");

if (r1 > r2) {
  document.body.querySelector("h1").textContent = "Player 1 wins!";
} else if (r2 > r1) {
  document.body.querySelector("h1").textContent = "Player 2 wins!";
} else document.body.querySelector("h1").textContent = "Game tie";
