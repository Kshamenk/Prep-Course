var Auto = function (marca, modelo, color) {
    this.marca = marca,
        this.modelo = modelo,
        this.color = color
}

Auto.prototype.detalle = function () {
    console.log(`El ${this.marca} ${this.modelo} es de color ${this.color}`)
}
var auto1 = new Auto("Ford","Focus","Plateado")  
console.log(auto1)
var auto2 = new Auto("Fiat","500","Rojo")
console.log(auto2.color)
var auto3 = new Auto("Citroen","C4","Azul")
console.log(auto3.detalle())