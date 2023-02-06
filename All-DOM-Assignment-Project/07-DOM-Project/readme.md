
# Assignment - 07

> ## Task-01:Remove the languages that have 2.0 in their name(Every alternative language)

![dom project 07 task 01](https://user-images.githubusercontent.com/112545072/216859580-d6ac1070-d0fe-4d32-824d-2ef5c638a5fb.png)

```
let targetAnchorTag = document.querySelectorAll(".main__languages a");
console.log(targetAnchorTag);

for (let i = 0; i < targetAnchorTag.length; i++) {
  if (i % 2 !== 0) {
    targetAnchorTag[i].style.display = "none";
  }
}

```

> ## Task-02: Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

![task 02 dom project 07](https://user-images.githubusercontent.com/112545072/216859897-eecfd6f5-b76c-4c96-9c2e-0bd7ee98f339.png)


```
let targetPlaceholder = document.querySelector("input.main__form-input");
console.log(targetPlaceholder);
targetPlaceholder.placeholder = "iNeuron";
//////////////////////////////////////////////

//first target form tag
let form = document.querySelector("form");
// enable input take the value
let input = document.querySelector("input");
input.removeAttribute("disabled");
// enable button for submitting the form
let submitButton = document
  .querySelector("button.main__form-btn")
  .removeAttribute("disabled");
// add event listener for submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // add value into input tag
  let inputValue = input.value;
  console.log(inputValue);
  // for pushing input value we target the left language section
  let languageSection = document.querySelector(".main__languages");
  //create anchor tag inside language div
  let createAnchorTag = document.createElement("a");
  // create href attribute for anchor tag
  let createAttribute = document.createAttribute("href");
  // pass the value inside href attribute
  createAttribute.value = "https://www.ineuron.ai";
  // set the href attribute inside the anchor tag
  createAnchorTag.setAttributeNode(createAttribute);
  // we put value inside anchor tag which get from form input tag
  createAnchorTag.innerText = inputValue;
  // for showing the form value inside left section language we append the and anchor tag inside language div.
  languageSection.appendChild(createAnchorTag);
});
```
