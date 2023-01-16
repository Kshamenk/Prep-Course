// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var nuevoGato = {
    nombre : nombre,
    edad : edad,
    meow : () => "Meow!"
  }
  return nuevoGato
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
   objeto[property] = null 
   return objeto 
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
 objeto[metodo]()
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var nuevoNum = objetoMisterioso.numeroMisterioso * 5
  return nuevoNum

}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad]
  return objeto
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var nuevoObj = {
    nombre , 
    email , 
    password ,
  }
  return nuevoObj 
}

function tieneEmail (usuario) {
  console.log(usuario)
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contrario, devuelve "false"
  // Tu código:
  // if (usuario["email"]) {
  //   return true
  // } else { 
  //   return false
  // }
  return !!usuario.email
}
console.log(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' }))

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  // if (objeto[propiedad]) {
  //    return true
  // } else {
  //   return false
  // }
  return objeto.hasOwnProperty(propiedad)
}

function verificarPassword (usuario, password) {
  console.log(usuario.password)
  console.log(password)
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  // if (usuario.password === password) {
  //   return true
  // } else {
  //   return false
    
  // }
//  return usuario.password === password
 console.log(Object.values(usuario))
 return Object.values(usuario) == password
}
 const user = {
  password: 'Me encanta JS!',
};
const password = 'Me encanta JS!';
console.log(verificarPassword(user, password))//(true);

function actualizarPassword (usuario, nuevaPassword) {
  console.log(usuario)
  console.log(nuevaPassword)
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  console.log(usuario.password)
  usuario.password = nuevaPassword
  return usuario
  

}
// const user = {
//   password: 'Me encanta JS!',
// };
// const password = 'Me encanta JS mucho más!';
// console.log(actualizarPassword(user, password).password)//(password);

function agregarAmigo (usuario, nuevoAmigo) {
  console.log(usuario.amigos)
  console.log(nuevoAmigo)
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo)
  return usuario
  

}
// const user = {
//   amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
// };
// const newFriend = 'Shay';
// console.log(agregarAmigo(user, 'Shay').amigos.pop())//('Shay');

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].esPremium)
    usuarios[i].esPremium = true  
  }
  console.log(usuarios)
  return usuarios
}
// const users = [
//   { esPremium: false },
//   { esPremium: false },
//   { esPremium: false },
//   { esPremium: false },
//   { esPremium: false },
// ];
// const updatedUsers = [
//   { esPremium: true },
//   { esPremium: true },
//   { esPremium: true },
//   { esPremium: true },
//   { esPremium: true },
// ];
// console.log(pasarUsuarioAPremium(users))//(updatedUsers);

function sumarLikesDeUsuario (usuario) {
  console.log(usuario.posts)
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma = 0
  for (let i = 0; i < usuario.posts.length; i++) {
    console.log(usuario.posts[i].likes)
    suma = suma + usuario.posts[i].likes
  }
  console.log(suma)
  return suma

}
// const user = {
//   usernombre: 'Jhon Doe',
//   password: 'JavaScript es genial!',
//   posts: [
//     {
//       id: '1',
//       title: 'Aventuras en JS!',
//       likes: 10
//     },
//     {
//       id: '2',
//       title: 'Soy Henry!',
//       likes: 100
//     },
//     {
//       id: '3',
//       title: 'Qué es un JavaScript?',
//       likes: 35
//     },
//     {
//       id: '4',
//       title: 'JS Objects for Dummies',
//       likes: 42
//     },
//     {
//       id: '5',
//       title: 'Educación online',
//       likes: 99
//     },
//   ],
// };
// console.log(sumarLikesDeUsuario(user))//(286);

function agregarMetodoCalculoDescuento (producto) {
  console.log(producto)
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function () {
    return this.precio - (this.precio * this.porcentajeDeDescuento)
    
  }
  console.log(producto)
  return producto

}
const storeItem2 = {
  precio: 5,
  porcentajeDeDescuento: 0.5,
};
console.log(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento())

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
