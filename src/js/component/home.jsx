import React from "react";

//create your first component

const Home = (props) => {
	return (
		<div className="pagina">
			<div className="contadorGrande d-flex align-items-center">
				<div className="numero ms-5 me-aut0">
					<i className="far fa-clock fa-x4"></i>
				</div>
				<div className="numero m-3 ms-auto">{props.cinco}</div>
				<div className="numero m-3">{props.cuatro}</div>
				<div className="numero m-3">{props.tres}</div>
				<div className="numero m-3">{props.dos}</div>
				<div className="numero m-3">{props.uno}</div>
			</div>
			<div className="boton d-flex justify-content-center">
				<button
					onClick={props.restart}
					type="button"
					className="btn btn-secondary"
					id="boton">
					Reiniciar
				</button>
				<button
					onClick={props.parar}
					type="button"
					className="btn btn-danger"
					id="boton">
					Parar
				</button>
				<button
					onClick={props.iniciar}
					type="button"
					className="btn btn-primary"
					id="boton">
					Resumen
				</button>
			</div>
		</div>
	);
};

export default Home;
