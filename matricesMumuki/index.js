// Definí una función obtenerFilaMasLarga que reciba como argumento un array 2d matriz y devuelva el array (fila) que tenga mayor longitud. Si hay varios de igual longitud, debe devolver el primero de ellos.

// const numeros = [
// 	[1, 2, 3, 4, 5, 6, 7, 8, 9],
// 	[1, 2, 3, 4],
// 	[1, 2, 3, 4, 5, 6, 7, 8],
// 	[1, 2, 3, 3, 3, 4, 4, 4, 44, 4, 44, 4, 4, 4, 4, 44, 4],
// ];

// const obtenerFilaMasLarga = (numeros) => {
// 	let arrayMasLargo = numeros[0];

// 	for (let i = 1; i < numeros.length; i++) {
// 		if (numeros[i].length > arrayMasLargo.length) {
// 			arrayMasLargo = numeros[i];
// 		}
// 	}

// 	return arrayMasLargo;
// };

// console.log(obtenerFilaMasLarga(numeros));

// Definí una función obtenerNumeroMayor que tome por parámetro un array 2d de números matriz y devuelva el mayor número de dicha matriz.

// const numeros = [
// 	[1, 2, 3, 4, 5, 6, 7, 8, 9],
// 	[1, 2, 3, 4, 786],
// 	[1, 2, 3, 4, 5, 6, 7, 8],
// ];
// const obtenerNumeroMayor = (numeros) => {
// 	let numeroMayor = 0;

// 	for (let i = 0; i < numeros.length; i++) {
// 		for (let j = 0; j < numeros[i].length; j++) {
// 			if (numeros[i][j] > numeroMayor) {
// 				numeroMayor = numeros[i][j];
// 			}
// 		}
// 	}

// 	return numeroMayor;
// };

// console.log(obtenerNumeroMayor(numeros));

// Definí una función removerDuplicados que tome por parámetros un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

const array = [1, 2, 3, 4, 5, 6, 7, 1];

// const removerDuplicados = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//   }
// };
