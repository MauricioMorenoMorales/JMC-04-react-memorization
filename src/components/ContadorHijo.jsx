import React, { memo } from 'react';

const ContadorHijo = () => {
	console.log('Hijo Contador se Renderiza');
	return (
		<div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
			<h2>hijo de el contador</h2>
		</div>
	);
};

export default memo(ContadorHijo);
