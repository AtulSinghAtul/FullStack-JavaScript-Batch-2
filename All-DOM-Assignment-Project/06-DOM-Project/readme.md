# Assignment - 06

> ## Task-01: add ineuron image and hide first image

![dom project 06](https://user-images.githubusercontent.com/112545072/216859346-253cd72e-d908-47d0-ae89-e590e12a8f94.png)


```
// Task-01: add ineuron image and hide first image

// hide first image
document.querySelector(".logo").style.display = "none";
// target header to injecting ineuron image
let targetHeader = document.querySelector("header");
// create img tag and add image path
let createImg = document.createElement("img");
createImg.src = "./assets/ineuron-logo.png";
// append image into header
targetHeader.appendChild(createImg);
```

> ## Task-02: change prize premium section card

![task-02](./Output/DOM%20P3%20SS-2.png)

```
document.querySelector(".app_price span").innerHTML = "$10";
```
