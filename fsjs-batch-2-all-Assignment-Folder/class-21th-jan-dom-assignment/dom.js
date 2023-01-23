let bodyMain = document.querySelector("body");
let clearButton = document.createElement("button");
clearButton.innerHTML = "Clear Circle";
clearButton.classList.add("clear-button");
bodyMain.appendChild(clearButton);

bodyMain.addEventListener("click", function (e) {
  let element = document.createElement("div");
  element.classList.add("circle");

  // console.log(element);
  element.style.left = e.clientX + "px";
  element.style.top = e.clientY + "px";

  element.style.borderRadius = "50%";
  console.log(bodyMain);
  bodyMain.appendChild(element);
});

clearButton.addEventListener("click", function () {
  document.location.reload();
});
