let productos = [200, 150, 300, 120, 500]
productos.splice(3, 1)
console.log(productos)
productos.unshift(140)
console.log(productos)
let nuevoArray = productos.map(producto => {
    console.log(producto + 3.5)
})
productos.forEach(produc => console.log(produc))
nuevoArray.forEach(array => console.log(array))
