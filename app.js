const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   console.log(document.body);
  //   get random number between 0 and 3
  const randomNumber = getRandomNumber(colors);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}
