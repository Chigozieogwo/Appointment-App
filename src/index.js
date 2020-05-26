import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./component/counter"


ReactDOM.render(<App />, document.getElementById("root"));

function fer(event) {
    console.log(event.target);
}

fer("e");

