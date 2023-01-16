


var saludo = function(){
    console.log('hola, ' + this.nombre);
    }
  
var usuarios = [

    {
    nombre: "Andres",
    apellido: 'Alvarez',
    usuario: 'AndAlv',
    contraseña: "hola123",
    edad: 26,
    direccion: {
        calle: 'Colon 100',
        ciudad: 'Cordoba'
    },
    online: true,
    hobbies: ['correr', 'bailar', 'fotografia'],
    saludo
   },
   {
    nombre: "Claudia",
    apellido: 'Zini',
    usuario: 'ClaZin',
    contraseña: "chu987",
    edad: 42,
    direccion: {
        calle: 'San Martin 200',
        ciudad: 'Buenos Aires'
    },
    online: true,
    hobbies: ['entrenar', 'pintar', 'viajar'],
    saludo
   },
   {
    nombre: "Macos",
    apellido: 'Ramirez',
    usuario: 'MarRam',
    contraseña: "mus654",
    edad: 35,
    direccion: {
        calle: 'Belgrano 800',
        ciudad: 'Mendoza'
    },
    online: false,
    hobbies: ['boxeo', 'entrenar', 'Djs'],
    saludo
   }  
]



console.log(usuarios[2].saludo())
//console.log(saludo())


