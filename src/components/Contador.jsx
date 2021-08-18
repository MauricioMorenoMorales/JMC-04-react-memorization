import React, { useState } from 'react';
import ContadorHijo from './ContadorHijo';

const Contador = () => {
	const [contador, setContador] = useState(0);
	const sumar = () => setContador(contador + 1);
	const restar = () => setContador(contador - 1);
	return (
		<div style={{ textAlign: 'center' }}>
			<h3>Contador</h3>
			<nav>
				<button onClick={sumar}>+</button>
				<button onClick={restar}>-</button>
			</nav>
			<h3>{contador}</h3>
			<ContadorHijo />
		</div>
	);
};

export default Contador;
