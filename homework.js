// En estas primeras preguntas sustituye `null` por la respuesta (constantes iniciales + hoisting):

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola Mundo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 4;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// Pensá este orden como si siguiera ejecutándose línea por línea (hoisting de `var`):
// console.log(typeof y);
// var y = 10;
// ¿Qué string devuelve `typeof y` antes de llegar al `=` ? Reemplazá null por ese string entre comillas.
const resultadoHoisting = 'undefined';

// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}

function resta(x, y) {
  // Devuelve "x" menos "y"
  // Tu código:
  return x - y;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  return x == y;
}

function sonEstrictamenteIguales(x, y) {
  // Igualdad estricta: usá sólo === (no uses ==).
  // Devolvé false si tipos o valores difieren (ej. 5 y '5' -> false).
  // Tu código:
  return x === y;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 === 0;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 !== 0;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!';
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Pablo" -> "Soy Pablo"
  // Tu código:
  return nombre + ' ' + apellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return 'Hola ' + nombre + '!';
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return x > y ? x : y;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === 'aleman') {
    return 'Guten Tag!';
  } else if (idioma === 'mandarin') {
    return 'Ni Hao!';
  } else if (idioma === 'ingles') {
    return 'Hello!';
  } else {
    return 'Hola!';
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return Math.floor(numero) === numero;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) {
    return 'fizzbuzz';
  }
  if (numero % 3 === 0) {
    return 'fizz';
  }
  if (numero % 5 === 0) {
    return 'buzz';
  }
  return numero;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// --- Temario ampliado (alcance let/const, tipos, operadores, Math, strings, condicionales, bucles avanzados) ---

function valoresDelIndiceConLetEnBucle() {
  // Debés usar `let` en el declarador del `for` (no uses `var` en ese lugar).
  // Creá tres funciones en un bucle for (let i = 0; i < 3; i++) que cada una devuelva su i al invocarse.
  // Devolvé el array resultado de ejecutar cada función: debe ser [0, 1, 2].
  // Tu código:
  const funciones = [];
  for (let i = 0; i < 3; i++) {
    funciones.push(function () {
      return i;
    });
  }
  return [funciones[0](), funciones[1](), funciones[2]()];
}

function construirListaConConstMutando() {
  // Usá una constante para el arreglo (const lista = [];). No reasignes `lista`; usá `.push`.
  // Llenalo con los números 1, 2 y 3 en un bucle for y devolvé ese arreglo.
  // Tu código:
  const lista = [];
  for (let i = 1; i <= 3; i++) {
    lista.push(i);
  }
  return lista;
}

function esRealmenteNulo(valor) {
  // Devuelve true sólo cuando `valor` es exactamente null (=== null).
  // Tu código:
  return valor === null;
}

function esValorUndefined(valor) {
  // Devuelve true sólo cuando `valor` es undefined (idealmente usando === sin coerciones raras).
  // Tu código:
  return valor === undefined;
}

function esNumeroValido(n) {
  // Devuelve true si `n` es de tipo número y NO es NaN (p.ej. Number.isNaN o comparación conocida).
  // Tu código:
  return typeof n === 'number' && !Number.isNaN(n);
}

function acumularPorPasos(inicial, pasos) {
  // Sumá/restá al total usando += y -= dentro de un bucle. `pasos` es un array de números (ej. [10, -3, 2]).
  // Empezás en `inicial`; devolvé el total final.
  // Tu código:
  let total = inicial;
  for (let i = 0; i < pasos.length; i++) {
    total += pasos[i];
  }
  return total;
}

function aplicarIncrementoDesdeCero(intentos) {
  // Variable contador inicializada en 0; repetí intentos veces usando un bucle for y ++ en cada vuelta.
  // Devolvé el valor final del contador.
  // Tu código:
  let contador = 0;
  for (let i = 0; i < intentos; i++) {
    contador++;
  }
  return contador;
}

function enteroDesdeBinario(binarioStr) {
  // Usá parseInt con radix 2. Ejemplo: '1010' -> 10
  // Tu código:
  return parseInt(binarioStr, 2);
}

function floatDesdeTexto(texto) {
  // Usá parseFloat sobre la cadena. Ejemplo: '3.14' -> 3.14 ; '99px' típicamente trunca número inicial.
  // Tu código:
  return parseFloat(texto);
}

function precioFormateadoDosDecimales(precio) {
  // Devolvé una string con el número con dos decimales usando .toFixed(2).
  // Tu código:
  return precio.toFixed(2);
}

function esNumeroFinitoValor(n) {
  // Devuelve true sólo cuando el número es finito (usá Number.isFinite).
  // Tu código:
  return Number.isFinite(n);
}

function redondearHaciaAbajo(num) {
  // Usá Math.floor.
  // Tu código:
  return Math.floor(num);
}

function aleatorioEnteroInclusive(min, max) {
  // Devolvé un entero entre min y max inclusives usando Math.floor y Math.random.
  // Fórmula estándar: Math.floor(Math.random() * (max - min + 1)) + min
  // Tu código:
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buscarIndiceCadena(texto, subcadena) {
  // Usá indexOf. Si no aparece devolvé -1 (comportamiento estándar de indexOf).
  // Tu código:
  return texto.indexOf(subcadena);
}

function extraerPorSlice(texto, inicio, fin) {
  // Usá slice exclusivo final `fin` igual que JS (no incluye el índice fin).
  // Tu código:
  return texto.slice(inicio, fin);
}

function limpiarEspaciosExtremos(texto) {
  // Usá trim.
  // Tu código:
  return texto.trim();
}

function partirEnEspacios(texto) {
  // Dividí palabras separadas por un único caracter espacio usando split con ' '.
  // Ejemplo 'hola mundo' -> ['hola','mundo']
  // Tu código:
  return texto.split(' ');
}

function reemplazarGuionesPorEspacio(texto) {
  // Reemplazá todos los caracteres '-' por un espacio ' ' con replace/replaceAll según soporte esperado ES6+
  // Tu código:
  return texto.replaceAll('-', ' ');
}

function minusculasYRecortado(texto) {
  // Aplicá trim() y después toLowerCase() al resultado.
  // Tu código:
  return texto.trim().toLowerCase();
}

function mayusculasTrasTrim(texto) {
  // Aplicá trim() y después toUpperCase().
  // Tu código:
  return texto.trim().toUpperCase();
}

function puedePasarAlEvento(edad, tieneEntrada, esVIP) {
  // puede pasar si edad >= 18 Y (tieneEntrada ES true OR esVIP ES true). Usá && y || explícitos.
  // Tu código:
  return (edad >= 18 && tieneEntrada === true) || esVIP === true;
}

function noEsValorFalso(valor) {
  // Devolvé true siempre que `valor` no sea EXACTAMENTE el boolean false (=== false debe fallar sólo ante false literal).
  // Ejemplos: 0, '', null, undefined, true deben devolver true; false devuelve false.
  // Usá negación explícita (!).
  // Tu código:
  return !(valor === false);
}

function clasificarSigno(num) {
  // Usá sólo expresiones ternarias (sin if/switch): devolvé la string 'positivo', 'negativo' o 'cero'.
  // Tu código:
  return num > 0 ? 'positivo' : num < 0 ? 'negativo' : 'cero';
}

function clasificarTipoDia(codigo) {
  // Usá switch. Códigos: 'lun'|'mar'|'mie'|'jue'|'vie' laborable -> 'habil'.
  // 'sab' o 'dom' -> fin de semana -> 'descanso'
  // Cualquier otro valor debe caer en default y devolver 'desconocido'
  // Tu código:
  switch (codigo) {
    case 'lun':
    case 'mar':
    case 'mie':
    case 'jue':
    case 'vie':
      return 'habil';
    case 'sab':
    case 'dom':
      return 'descanso';
    default:
      return 'desconocido';
  }
}

function sumaDesdeUnoConWhile(numeroFinal) {
  // Sumá 1+2+...+numeroFinal usando sólo while. Si numeroFinal < 1 devolvé 0.
  // Tu código:
  if (numeroFinal < 1) {
    return 0;
  }
  let suma = 0;
  let i = 1;
  while (i <= numeroFinal) {
    suma += i;
    i++;
  }
  return suma;
}

function primerMultiploEnIntervaloDoWhile(inicio, divisor, limiteSuperior) {
  // Encontrá el primer múltiplo natural de divisor que sea >= inicio usando do...while.
  // Si divisor es 0 o no existe un múltiplo menor o igual a limiteSuperior, devolvé null.
  // Evitá bucles infinitos: cortá antes de sobrepasar limiteSuperior.
  // Tu código:
  if (divisor === 0) {
    return null;
  }
  let multiplo = inicio;
  do {
    if (multiplo % divisor === 0) {
      return multiplo;
    }
    multiplo++;
  } while (multiplo <= limiteSuperior);
  return null;
}

function tablaMultiplicacionForBase(base) {
  // Devolvé un array de 10 posiciones donde la posición k (0-index) es base * (k+1).
  // Usá sólo bucle for. Ejemplo base 5 -> [5,10,...,50]
  // Tu código:
  const tabla = [];
  for (let k = 0; k < 10; k++) {
    tabla.push(base * (k + 1));
  }
  return tabla;
}

function saludarConTitulo(nombre, titulo = 'Sr.') {
  // Valor por defecto ya está en la firma: devolvé `"Hola, titulo nombre!"` (con espacio y signos ej. Hola, Sr. Ana!)
  // Tu código:
  return `Hola, ${titulo} ${nombre}!`;
}

function elevarConExponentePorDefecto(base, exponente = 2) {
  // exponente por defecto 2: devolvé base elevado exponente usando Math.pow o **.
  // Tu código:
  return Math.pow(base, exponente);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  resultadoHoisting,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  sonEstrictamenteIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo,
  valoresDelIndiceConLetEnBucle,
  construirListaConConstMutando,
  esRealmenteNulo,
  esValorUndefined,
  esNumeroValido,
  acumularPorPasos,
  aplicarIncrementoDesdeCero,
  enteroDesdeBinario,
  floatDesdeTexto,
  precioFormateadoDosDecimales,
  esNumeroFinitoValor,
  redondearHaciaAbajo,
  aleatorioEnteroInclusive,
  buscarIndiceCadena,
  extraerPorSlice,
  limpiarEspaciosExtremos,
  partirEnEspacios,
  reemplazarGuionesPorEspacio,
  minusculasYRecortado,
  mayusculasTrasTrim,
  puedePasarAlEvento,
  noEsValorFalso,
  clasificarSigno,
  clasificarTipoDia,
  sumaDesdeUnoConWhile,
  primerMultiploEnIntervaloDoWhile,
  tablaMultiplicacionForBase,
  saludarConTitulo,
  elevarConExponentePorDefecto,
};
