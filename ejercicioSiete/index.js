//Temperatura más alta

// Dado un array de cualquier longitud, compuesto por numeros que representan temperaturas de una región, se requiere retornar cuál fue la mayor temperatura.

const temperaturas = [8, 78, 9, 45, 2, 36];

sacarMayorTemperatura = (numeros) => {
	let identificarTemperatura = 0;
	for (let i = 0; i < numeros.length; i++) {
		console.log(
			`El valor de temperatura mas alto hasta el momento es ${identificarTemperatura}`
		);
		if (temperaturas[i] > identificarTemperatura) {
			identificarTemperatura = temperaturas[i];
			console.log(
				`La temperatura actual ${temperaturas[i]} es mas grande que la mas alta registrada, sobreescribo la mas alta`
			);
		} else {
			console.log(`La temperatura no ha sido superada`);
		}
	}
	return identificarTemperatura;
};
console.log(sacarMayorTemperatura(temperaturas));
