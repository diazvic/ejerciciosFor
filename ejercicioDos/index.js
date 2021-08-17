//Mostrar solo mayores a 5

//Dado un array de 10 números, mostrar solo los que son mayores a 5 en consola.

const numeros = [5, 4, 7, 6, 1, 2, 75, 45, 85, 10];

for (let i = 0; i < numeros.length; i++) {
	const numeroActual = numeros[i];
	if (numeroActual > 5) {
		console.log(numeroActual);
	}
}
