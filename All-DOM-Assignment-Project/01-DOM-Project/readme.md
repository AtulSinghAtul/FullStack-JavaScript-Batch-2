# Assignment -01
## Task-01

 **Add Projects and Hire Me li element and hide the footer icon.**

![task1Output](https://user-images.githubusercontent.com/112545072/216857141-44a9722a-54be-4455-84f1-2fe9dd8288fc.png)

**Solution:**

 <!--Add Projects and Hire Me li element and hide the footer icon. -->

```
 /*change li value Contacts to Projects  */

let targetNavUlLi = document
  .querySelector("nav")
  .querySelectorAll("ul")[0].children;

for (let i = 0; i < targetNavUlLi.length; i++) {
  var element = targetNavUlLi[i].innerText;
  if (element === "Contact") {
    targetNavUlLi[i].innerText = "Projects";
  }
}


/*  create li element iside nav > ul and give the value of Hire me to li */

// create li element

let li = document.createElement("li");

//Create a text node:

let text = document.createTextNode("Hired");

// Append the text node to the "li" node:

li.appendChild(text);

// Append the "li" node to the list:

console.log(document.querySelector("nav > ul").appendChild(li));

//hide footer icon

document.querySelector("footer > ul").style.visibility = "hidden";

```

# Task-02

 **Hide hire me li and change the button placeholder value**

![project-01-task-02-dom](https://user-images.githubusercontent.com/112545072/216216359-0c0b766a-afb6-421c-af76-e04002f99486.jpg)
**Solution:**

```
/* Hide hire me li and change the button placeholder value */

let hideHireMe = (document.querySelector(
  "nav > ul > li:last-child"
).style.visibility = "hidden");

// change the placeholder value
let changePlaceHolderValue = document.querySelector("nav > div >input");

changePlaceHolderValue.placeholder = "Search My Project";

```

# Task-03

 **Get back placeholder value(search) and footer icon and hide the li value(hire me)**


![task3Output](https://user-images.githubusercontent.com/112545072/216857081-32f02ecb-e661-4bd6-9b5a-ae28d9ccd7f7.png)

**Solution:**

```
/* Get back placeholder value(search) and footer icon and hide the li value(hire me) */

//hide the li value(hire me)
let hideHireMeLi = (document.querySelector(
  "nav >ul >li:last-child"
).style.visibility = "hidden");

//Get back placeholder value(search)
let getBackPlaceholderValue = document.querySelector("nav div input");
getBackPlaceholderValue.placeholder = "Search";

//Get back footer icon
let getBackFooterIcon = (document.querySelector("footer ul").style.visibility =
  "visible");

```

# Task-04

 **add another image**

![task-04-img](./firstAssignmentImage/task4Output.png)

![task-04](https://user-images.githubusercontent.com/112545072/216225770-12006add-1317-4a6a-9a43-524f5a166ed9.jpg)
**Solution:**

```
/* add another image */
let targetImageDiv = document.querySelector("section div img");
targetImageDiv.src = "./ATUL-SINGH-DP-PIC.jpeg";
targetImageDiv.style.objectFit = "contain";
targetImageDiv.style.backgroundColor = "rgb(0, 135, 135, 0.4)";

```

# Task-05

**Create support me button in header right section and get back image**

![task5Output](https://user-images.githubusercontent.com/112545072/216857055-a439f0c4-1a7d-4d52-a43c-1e56d29f0c93.png)

**Solution:**

```
/* Create support me button in header right section and get back image */

//get back image
let getBackImage = document.querySelector(".hero-right-section img");
targetImageDiv.src = "./avtar.png";

// create support me button
let createButton = document.createElement("button");
//create text node
let buttonText = document.createTextNode("Support Me");
// append eachother
let appendEachother = createButton.appendChild(buttonText);
console.log(appendEachother);

let appendInBodyDiv = document.querySelector(".hero-right-section-btns");
appendInBodyDiv.appendChild(createButton);

```
