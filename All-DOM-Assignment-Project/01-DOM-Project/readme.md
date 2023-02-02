# Task-01

> Add Projects and Hire Me li element and hide the footer icon.

![task-01-img](./firstAssignmentImage/task1Output.png)

 <!-- -->

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

![task-02-img](./firstAssignmentImage/task2Output.png)

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

> Get back placeholder value(search) and footer icon and hide the li value(hire me)

![task-03-img](./firstAssignmentImage/task3Output.png)

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
