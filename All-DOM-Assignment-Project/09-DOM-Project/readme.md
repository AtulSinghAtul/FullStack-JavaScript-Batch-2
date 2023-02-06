# Assignment -09


** When we hover on button then change tha button background color and change the h1 color back black.**

**When we hover on button then change tha button background color and change the h1 color back black.**


** When we hover on button then change tha button background color and change the h1 color back black.**

 **When we hover on button then change tha button background color and change the h1 color back black.**



## Task-01: change h1 color

![ass9 1-after](https://user-images.githubusercontent.com/112545072/216860533-edbc1417-1d86-47c2-9335-20171ccde211.png)


**Solution:**

```
let targetH1 = document.querySelector("h1.title");
targetH1.style.color = "red";
```

## Task-02: when hover on button background color will be change and change the h1 color

![ass9 2-after](https://user-images.githubusercontent.com/112545072/216860568-1ce1eca5-6f97-4b35-bd62-b1e75002b82e.png)

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
