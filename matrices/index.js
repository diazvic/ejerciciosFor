//Mostrar en consola Dado un array bidimensional, compuesto de dos arrays con 5 nombres cada uno, mostrar cada uno de los nombres en consola.

// const nombres = [
// 	["java", "capu", "fran", "euge", "guadi"],
// 	["gus", "moni", "santi", "moro", "india"],
// 	["poli", "lili", "moka", "goku", "trini"],
// ];

// mostrarNombres = (nombres) => {
// 	for (let i = 0; i < nombres.length; i++) {
// 		const arrayActual = nombres[i];
// 		console.log(arrayActual);
// 		for (let j = 0; j < arrayActual.length; j++) {
// 			console.log(arrayActual[j]);
// 		}
// 	}
// };
// mostrarNombres(nombres);

//Mostrar en consola 2 Dado un array bidimensional, compuesto de dos arrays con 5 numeros cada uno, mostrar en consola solo los numeros mayores a 10.

// const numeros = [
// 	["1", "6", "17", "21", "3"],
// 	["4", "1", "90", "8", "78"],
// ];
// mostrarNumeros = (numeros) => {
// 	for (let i = 0; i < numeros.length; i++) {
// 		const numeroActual = numeros[i];
// 		console.log(numeroActual);
// 		for (let j = 0; j < numeroActual.length; j++) {
// 			console.log(numeroActual[j]);
// 			if (numeroActual > 10) {
// 				console.log(numeroActual);
// 			}
// 		}
// 	}
// };
// mostrarNumeros(numeros);
const numeros = [
	["1", "6", "17", "21", "3"],
	["4", "1", "90", "8", "78"],
];
mostrarNumeros = (numeros) => {
	for (let i = 0; i < numeros.length; i++) {
		const numeroActual = numeros[i];
		for (let j = 0; j < numeroActual.length; j++) {
			if (numeroActual[j] > 10) {
				console.log(numeroActual[j]);
			}
		}
	}
};
mostrarNumeros(numeros);
