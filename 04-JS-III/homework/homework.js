// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1 ]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  console.log(array.length)
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = []
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    console.log(i)
    nuevoArray.push(array[i] + 1 )
    
  }
  return nuevoArray
}


function agregarItemAlFinalDelArray(array, elemento) {
  console.log(array.length)
  console.log(elemento)
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // var res = array.push(elemento)
  // console.log(res)
  // return array
 
  array[array.length] = elemento
  return array
 
}
//agregarItemAlFinalDelArray([10, 10, 16, 12], 10)


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
   return palabras.join(" ")
  
}
//console.log(dePalabrasAFrase(['Henry', 'JavaScript', 'Class']))


function arrayContiene(array, elemento) {
  console.log(array)
  console.log(elemento)
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // for (let i = 0; i < array.length; i++) {
  //   console.log(array[i])
  //   if (elemento === array[i]) {
  //     return true
      
      
  //   }
  // }  return false
  return array.includes(elemento)
  }
  //console.log(arrayContiene([10, 10, 16, 12], ))


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // var acc = 0 //  10 // 15 // 31
  // for (let i = 0; i < numeros.length; i++) {
  //   console.log(numeros[i])
  //   acc = acc + numeros[i]
  // //      ||

  // } 
  // return acc  
  return numeros.reduce((acc,curr)=> acc + curr, 0 )
}
console.log(agregarNumeros([10, 10, 16]))


function promedioResultadosTest(resultadosTest) {
  console.log(resultadosTest.length)
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  return resultadosTest.reduce((acc,curr)=> acc + curr, 0 ) / resultadosTest.length
}
console.log(promedioResultadosTest([10, 10, 16, 12]))

function numeroMasGrande(numeros) {
  console.log(numeros)
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
//   var mayor = -Infinity
//  for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i])
//   if (numeros[i] > mayor) {
//     mayor = numeros[i]
    
//   }
  
//  }
//  return mayor 
return Math.max(...numeros)   //nice
}
console.log(numeroMasGrande([97, 100, 80, 55, 72, 94]))
var array = [5,5]
console.log(array[0])


function multiplicarArgumentos() {
  console.log(arguments)
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
   if (!arguments.length) return 0 
  var total = 1
  for (let i = 0; i < arguments.length; i++) {
    total = total * arguments[i]
    
  } 
  return total
  

}
console.log(multiplicarArgumentos(5,5))


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // var result = arreglo.filter((e)=> e > 18).length
  // console.log(result)
  // return result
  var contador = 0
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador ++
      
    }
    
  }
  return contador

}
console.log(cuentoElementos([97, 100, 190, 5, 7, 9]))


function diaDeLaSemana(numeroDeDia) {  
  console.log(diaDeLaSemana)
  console.log(numeroDeDia)
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
    // if (numeroDeDia < 2 && numeroDeDia > 6) {
    //   return "Es fin de semana"
      
    // } 
    // return "Es dia laboral"
      
    
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero = n.toString()
  if(numero[0] == 9){
    return true
  }
  return false
  // var numero = n.toString()
  // numero = parseInt(numero)
  
  // console.log(numero, typeof numero)

}
empiezaConNueve(932)

function todosIguales(arreglo) {
  console.log(arreglo)
  //                               i   j
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i =0 ; i < arreglo.length - 1; i++) {
   for (let j = i + 1; j < arreglo.length; j++) {
    if (arreglo[i] !== arreglo[j]) {
      return false
    }
   }
  }
  return true
} 
console.log(todosIguales([20, 20, 20, 20 ]))
  



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = []
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i])
    }
  }
   if (nuevoArray.length === 3) {
    return nuevoArray 
   } else {
    return "No se encontraron los meses pedidos"
   }

}
var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"]
console.log(mesesDelAño(ok))


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100 ) {
      nuevoArray.push(array[i])
      
    } 
  }
  return nuevoArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma = suma + 2;
    if (suma === i) break;
    else {
      array.push(suma);
    }
  }
  if (i < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    if (i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}
console.log(continueStatement(20))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};


function corte(num) {
  var lista = []
  for (let i = 0; i < num.length; i++) {
      if(num[i] === 5) break 
      lista.push(num[i])   
  }
  return lista
}
console.log(corte([1, 2, 3, 4, 5, 6, 7, 8, 9]))