# Assignment - 08

> ## Task-01: set overflow auto to get scrollbar

<img width="770" alt="ass8 1-after" src="https://user-images.githubusercontent.com/112545072/216860294-e8b31124-1af6-4586-b0b1-3040d263fa49.png">


**Solution:**

```
// Task-01: set overflow auto to get scrollbar
let scroll = document.querySelector(".new");
scroll.style.overflow = "auto";
scroll.style.border = "2px solid red";
```

> ## Task-02: hide scrollbar and hide background lined point

![ass8 2-after](https://user-images.githubusercontent.com/112545072/216860340-44790e33-bb05-4249-a4f4-65e77bc718fa.png)


**Solution:**

```
let scrollAgain = document.querySelector(".new");
scrollAgain.style.overflow = "hidden";
scrollAgain.style.border = "none";

// hide body background image

let bodyBackgroundImage = document.querySelector("body");
bodyBackgroundImage.style.backgroundImage.visibility = "hidden";
```

> ## Task-03: Toggle the button and get back nav value and body background image make visible


![ass8 3-after](https://user-images.githubusercontent.com/112545072/216860375-1055de93-065d-482f-9557-41cfb1fe0ec5.png)

**Solution:**

```
//body backgroundImage make visible
let I = document.querySelector("body");
bodyBackgroundImage.style.backgroundImage.visibility = "visible";

/////////////////////////////////////////////////
// target the button
let a = document.querySelector("button");

let count = 0;

a.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.pointerId);
  // console.log(e);
  count += 1;
  //console.log(`count ${count}`);

  if (count % 2 == 0) {
    //console.log("even");
    document
      .querySelector("#navbarTogglerDemo01")
      .setAttribute("class", "collapse navbar-collapse");
  } else if (count % 2 !== 0) {
    //console.log("odd");
    document
      .querySelector(".collapse")
      .setAttribute("class", "collapse.show navbar-collapse");
  }
});

```
