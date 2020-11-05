export const sortData = ({ data, LONGITUD_PEDAZOS = 25 }) => {
	var pedazo = [];
	const arregloDeArreglos = [];
	for (let i = 0; i < data.length; i += LONGITUD_PEDAZOS) {
		pedazo = data.slice(i, i + LONGITUD_PEDAZOS);
		arregloDeArreglos.push(pedazo);
	}
	return {
		arregloDeArreglos,
	};
};
