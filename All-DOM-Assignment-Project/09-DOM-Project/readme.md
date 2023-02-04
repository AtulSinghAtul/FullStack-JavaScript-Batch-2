# Assignment -09


** When we hover on button then change tha button background color and change the h1 color back black.**

 **When we hover on button then change tha button background color and change the h1 color back black.**


## Task-01: change h1 color

![task-01](./ass9.1-after.png)

**Solution:**

```
let targetH1 = document.querySelector("h1.title");
targetH1.style.color = "red";
```

## Task-01: when hover on button background color will be change and change the h1 color

![task-01](./ass9.2-after.png)
**Solution:**

```

//h1 color change
document.querySelector("h1.title").style.color = "black";

// button background color change when hover on
let buttonBackgroundcolor = document.querySelector(".add-to-cart");

buttonBackgroundcolor.addEventListener("mouseenter", () => {
  buttonBackgroundcolor.style.backgroundColor = "red";
});

buttonBackgroundcolor.addEventListener("mouseleave", () => {
  buttonBackgroundcolor.style.backgroundColor = "green";
});

```
