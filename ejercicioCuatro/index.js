//Promedio de un curso

//Dado un array de 3 numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso.

const notas = [9, 2, 5];

promedioCurso = (array) => {
	const sumarNotas = (array[0] + array[1] + array[2]) / 3;
	return sumarNotas;
};
console.log(promedioCurso(notas));
