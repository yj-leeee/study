//h1 태그 삭제 
const h1El = document.getElementById("title");

//body태그 얻기

const bodyEl = document.querySelector("body");

//body 태그 아래부터 삭제
bodyEl.removeChild(h1El);