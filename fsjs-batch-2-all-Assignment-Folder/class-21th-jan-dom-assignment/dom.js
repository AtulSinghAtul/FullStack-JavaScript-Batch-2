let bodyMain = document.querySelector("body");

let clearButton = document.createElement("button");
clearButton.innerHTML = "Clear Circle";
clearButton.classList.add("clear-button");
bodyMain.appendChild(clearButton);

let color = [
  "red",
  "yellow",
  "green",
  "cyan",
  "aqua",
  "orange",
  "blue",
  "gray",
  "skyblue",
  "lemon",
];

bodyMain.addEventListener("click", function (e) {
  let element = document.createElement("div");
  element.classList.add("circle");
  //choosing random color
  let randomColor = Math.floor(Math.random() * color.length);
  element.style.backgroundColor = color[randomColor];

  // console.log(element);
  element.style.left = e.clientX + "px";
  element.style.top = e.clientY + "px";
  element.style.borderRadius = "50%";

  //set time out
  setTimeout(() => {
    element.style.transform = "scale(1)";
  });
  setTimeout(() => {
    element.style.transform = "scale(0)";
  }, 2000);

  console.log(bodyMain);
  bodyMain.appendChild(element);
});

clearButton.addEventListener("click", function () {
  document.location.reload();
});
