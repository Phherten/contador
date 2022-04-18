//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let numero = 0;
window.onload = setInterval(function contador() {
	let numeroString = numero.toString();
	let numeroArray = numeroString.split("");

	numero++;
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
					: 0
			}
		/>,
		document.querySelector("#app")
	);
}, 1000);
