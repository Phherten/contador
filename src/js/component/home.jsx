import React from "react";

//create your first component

const Home = (props) => {
	return (
		<div className="container">
			<div className="contadorGrande d-flex align-items-center">
				<div className="numero ms-4 me-auto pe-2 ps-2" id="fondoIcono">
					<i className="far fa-clock fa-x3"></i>
				</div>
				<div className="numero m-2">{props.seis}</div>
				<div className="numero m-2">{props.cinco}</div>
				<div className="numero m-2">{props.cuatro}</div>
				<div className="numero m-2">{props.tres}</div>
				<div className="numero m-2">{props.dos}</div>
				<div className="numero m-2 me-3">{props.uno}</div>
			</div>
			<div className="boton d-flex justify-content-center">
				<button
					onClick={props.restart}
					type="button"
					className="btn btn-secondary me-3"
					id="boton">
					Reiniciar
				</button>
				<button
					onClick={props.parar}
					type="button"
					className="btn btn-danger me-3"
					id="boton">
					Parar
				</button>
				<button
					onClick={props.iniciar}
					type="button"
					className="btn btn-success"
					id="boton">
					Resumen
				</button>
			</div>
		</div>
	);
};

export default Home;
