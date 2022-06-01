let parcialUno = Number (prompt("Nota del 1 parcial"));
let parcialDos = Number (prompt("Nota del 2 parcial"));
let parcialTres = Number (prompt("Nota del 3 parcial"));

let primerPorcentaje = ((parcialUno + parcialDos + parcialTres)/3);

let examenFinal = Number(prompt("Nota Examen final"));
let trabajoFinal = Number(prompt("Nota trabajo final"));

let notaFinal = (primerPorcentaje + examenFinal + trabajoFinal/3);
alert ("Tu nota final es: " + notaFinal);
