const url = "https://restcountries.com/v2/all";
console.log(fetch(url));
fetch(url).then((response) => console.log(response));
