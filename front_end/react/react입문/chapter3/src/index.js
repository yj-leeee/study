
//추가 버튼 클릭시 실행하는 함수
const onClickAdd = () => {
    //텍스트 박스의 엘리먼트를 읽는다
    const textE1 = document.getElementById("add-text");

    //텍스트 박스의 값을 읽는다
    const text = textE1.value;

    //텍스트 박스를 초기화한다(공백)
    textE1.value=""

    //li태그 생성
    const liEl = document.createElement("li");

    //div 태그 생성
    const div = document.createElement("div");

    //p태그 생성(텍스트 박스의 문자 설정)
    const p = document.createElement("p");
    p.textContent = text;

    //삭제 버튼 생성
    const button = document.createElement("button");
    button.textContent = "삭제";

    //버튼 클릭시 행을 삭제하는 처리
    button.addEventListener("click", () => {
        //삭제 대상(liEl)을 얻는다
        //closest는 부모 요소와 일치하는 문자열을 찾는 메서드
        const deleteTarget = button.closest("li");
        
        //ul 태그 아래에서 앞서 특정한 행을 삭제
        document.getElementById("list").removeChild(deleteTarget);
    
    });
    //div 태그 아래에 p 태그와 button 태그 설정
    div.appendChild(p);
    div.appendChild(button);

    //li 태그 아래에 div 태그 설정
    liEl.appendChild(div);

    //메모 목록 리스트에 li태그 설정
    document.getElementById("list").appendChild(liEl);
}
    //[추가] 버튼 클릭시 onClickAdd 함수를 실행하도록 등록
    document.getElementById("add").addEventListener("click", () => onClickAdd());