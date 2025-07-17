//영역 1입니다 문자 아래 버튼 생성하기

const btnEl = document.createElement("button");
//버튼 라벨 설정
btnEl.textContent="버튼";
const div1 = document.querySelector(".container");

div1.appendChild(btnEl);