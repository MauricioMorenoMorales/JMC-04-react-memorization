import React, { memo } from 'react';

//Cuando este elemento no recibe nada siempre se renderizara cuándo cambie el estado de el padre <input type="text"/>
//Cuando este elemento reciba un dato de el padre ya no se renderizara cuándo haya cambio en <input:text/>
//Pero cuando ejecute funciones provenientes de el padre se volvera a renderizar cada vez que cambie el input y el <input:txt/>
const ContadorHijo = ({ contador, sumar, restar }) => {
	console.log('Hijo Contador se Renderiza');
	return (
		<div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
			<h2>hijo de el contador</h2>
			<h3>{contador}</h3>
			<nav>
				<button onClick={sumar}>+</button>
				<button onClick={restar}>-</button>
			</nav>
		</div>
	);
};

export default memo(ContadorHijo);
