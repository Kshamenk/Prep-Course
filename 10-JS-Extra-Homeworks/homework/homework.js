// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  console.log(objeto)
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArr = []
for (const key in objeto) {
  console.log(key)
  console.log(objeto[key])
  nuevoArr.push([key,objeto[key]])
}
  return nuevoArr
}
console.log(deObjetoAmatriz({ x: 1, y: 2 }))//([["x" , 1],["y" , 2]]);


function numberOfCharacters(string) {
  console.log(string)
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {}
  for (let i = 0; i < string.length; i++) {
    console.log(string[i])
    if (Object.keys(obj).includes(string[i])) {
      obj[string[i]] = obj[string[i]] +1
      continue 
    }
    obj[string[i]] = 1
  }
  return obj

}
console.log(numberOfCharacters("sktpwrroqstkrpwwsqtqopwktsd"))//({s:4, k:3, t:4, p:3, w:4, r:3, o:2, q:3, d:1 });


function capToFront(s) {
  console.log(s)
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = ""
  var mayusculas = ""
  for (let i = 0; i < s.length; i++) {
    console.log(s[i])
    if (s[i] === s[i].toUpperCase()) {
      mayusculas = mayusculas + s[i]
    } else {
      minusculas = minusculas + s[i]
    }
  } 
  console.log(mayusculas + minusculas)
  return mayusculas + minusculas
}
console.log(capToFront("soyHENRY"))//("HENRYsoy");


function asAmirror(str) {
  console.log(str)
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = str.split(" ").map((e) => e.split("").reverse().join("")).join(" ")

  console.log(espejo)
 return espejo
} 
console.log(asAmirror("I love you so much!"))//("I evol uoy os !hcum");


function capicua(numero){
  console.log(numero)
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str = numero.toString()
  console.log(str)
  var strInv = str.split("").reverse().join("")
  console.log(strInv)
  if (str === strInv) {
    return "Es capicua"
    
  } else {
    return "No es capicua"
    
  }

}
//console.log(capicua(105217))//("No es capicua");
console.log(capicua(12321))//("Es capicua");


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

