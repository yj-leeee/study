import ReactDom from "react-dom";

const App = () => {
	return (
        <div>
        <h1>안녕하세요</h1>
        <p>잘 지내시죠?</p>
        </div>
    );
};

ReactDom.render(<App />, document.getElementById("root"));