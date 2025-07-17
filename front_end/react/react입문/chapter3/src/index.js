console.log("test");
const title1= document.getElementById("title");
console.log(title1);

const title2 = document.querySelector("#title");
console.log(title2);

//DOM 작성
const divEl = document.createElement("div");

const pEl = document.createElement("p");
const h1El = document.createElement("h1");

divEl.appendChild(pEl);
divEl.prepend(h1El);
console.log(divEl);