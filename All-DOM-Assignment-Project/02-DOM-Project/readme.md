# Assignment -02

## Task-01

 - **Add background color on every h3 element.**
![task1Output](https://user-images.githubusercontent.com/112545072/216857329-374a90b6-e5fb-43b6-9919-57b42fcf4165.png)


**Solution:**

```
/* Change background color h3 of about faq section */
let changeBackgroundColor = document.querySelectorAll("h3").forEach((value) => {
  value.style.backgroundColor = "skyblue";
});
```

# Task-02

 - **Add new faq section Skill.**

![task2Output](https://user-images.githubusercontent.com/112545072/216857401-b289993e-2ff9-4346-afc1-7292d79b5501.png)

**Solution:**

```
/* Create new about faq section */
let createSkillFaqDiv = document.createElement("div");

createSkillFaqDiv.classList.add("accordian");
console.log(createSkillFaqDiv);

let h3 = document.createElement("h3");
createSkillFaqDiv.appendChild(h3).innerHTML = "Skill";

let p = document.createElement("p");
createSkillFaqDiv.appendChild(p);
let textNode = document.createTextNode(
  "Some of my popular hobbies are travelling and exploring the new technologies from all over the world."
);
p.appendChild(textNode);

document.querySelector(".accordian-wrapper").appendChild(createSkillFaqDiv);
```
