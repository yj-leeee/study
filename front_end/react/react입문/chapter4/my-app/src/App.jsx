export const App = () => {
	//버튼 클릭 시 실행되는 함수 정의
    const onClickButton = () => {
        alert();
    };
    const contentStyle = {
        color : "blue",
        fontSize: "20px"
    }
    return(
        <>
        <h1 style={{color : "red" }}>안녕하세요!</h1>
        <p style={contentStyle}>잘 지내시죠?</p>
        <button onClick={onClickButton}>버튼</button>
        </>
    )

};