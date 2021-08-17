//Números positivos

//Dado un array de 10 números, retornar un numero que represente cuantos de ellos son positivos.

const numeros = [1, 25, -5, 6, 7, 8, 4, -3, 78, -15];

cantidadPositivos = (numero) => {
	let contar = 0;
	for (let i = 0; i < numero.length; i++) {
		if (numero[i] >= 0) {
			contar++;
		}
	}
	return contar;
};
console.log(cantidadPositivos(numeros));
