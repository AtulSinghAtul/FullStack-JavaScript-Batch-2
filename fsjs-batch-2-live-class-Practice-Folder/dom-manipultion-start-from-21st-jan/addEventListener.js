function makeHashCode() {
  let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    let hashNumber = hexCode[Math.floor(Math.random() * 16)];
    hash = hash + hashNumber;
  }
  return hash;
}

// console.log(makeHashCode());
// console.log(hash);

function randomColor() {
  document.body.style.backgroundColor = makeHashCode();
}

document.getElementById("button").addEventListener("click", randomColor);
