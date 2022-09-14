addEventListener("DOMContentLoaded", ()=>{
// definir variables numericas 
// un programa 
//17 VALOR DEL COSTO DEL PRODUCTO
//Datos de entrada
console.log("ingrese el nombre del primer producto:")
let p1=console.log()
let p1v=Number(prompt("valor del producto:"))

console.log("ingrese el nombre del segundo  producto:")
let p2=console.log()
let p2v=Number(prompt("valor del producto:"))


//procesos
let Subttl = p1v+p2v
let iva= Number(Subttl*0.19)
let total= Number(Subttl + iva)
//salidas o entrega de resultados
console.log("el subtotal fue",Subttl)
console.log("El iva fue",iva)
console.log("El total a pagar con iva fue",total)
})