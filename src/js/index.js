//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let numero = 0;
let isPaused = false;
function restart() {
	numero = 0;
}
function parar() {
	isPaused = true;
}
function resume() {
	isPaused = false;
}
window.onload = cuenta;
let cuenta = setInterval(function contador() {
	let numeroArray = numero.toString();
	ReactDOM.render(
		<Home
			uno={numeroArray[numeroArray.length - 1]}
			dos={
				numeroArray[numeroArray.length - 2]
					? numeroArray[numeroArray.length - 2]
					: "0"
			}
			tres={
				numeroArray[numeroArray.length - 3]
					? numeroArray[numeroArray.length - 3]
					: "0"
			}
			cuatro={
				numeroArray[numeroArray.length - 4]
					? numeroArray[numeroArray.length - 4]
					: "0"
			}
			cinco={
				numeroArray[numeroArray.length - 5]
					? numeroArray[numeroArray.length - 5]
					: "0"
			}
			seis={
				numeroArray[numeroArray.length - 6]
					? numeroArray[numeroArray.length - 6]
					: "0"
			}
			restart={restart}
			parar={parar}
			iniciar={resume}
		/>,
		document.querySelector("#app")
	);
	if (isPaused == false) {
		numero++;
	}
}, 1000);
