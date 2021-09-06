//Promedio de un curso 2

//Dado un array de cualquier cantidad de numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso. (Nota: recordá que podes saber la longitud de un array con array.length)

const numeros = [5, 5, 5];

promedioNotas = (nota) => {
	sumarNotas = 0;
	for (let i = 0; i < nota.length; i++) {
		sumarNotas++;
	}
};

console.log(promedioNotas(numeros));
//Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el promedio tomando solo aquellas que tienen una nota mayor a 7.

const numeros = [2, 4, 6, 7, 8, 10, 9, 5, 3, 1];

notaAlumnas = (numeros) => {
	sumaNotas = 0;
	cantidadNotas = 0;
	for (let i = 0; i < numeros.length; i++) {
		const element = numeros[i];
		if (element > 7) {
			sumaNotas += element;
			cantidadNotas++;
		}
	}
	return sumaNotas / cantidadNotas;
};

console.log(notaAlumnas(numeros));
