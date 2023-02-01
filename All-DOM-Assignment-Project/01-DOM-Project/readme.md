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
```
