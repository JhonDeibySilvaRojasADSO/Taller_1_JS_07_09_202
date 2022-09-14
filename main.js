addEventListener("DOMContentLoaded", ()=>{
//datos de entrada 
//sueldo
let sueldo=Number(prompt("ingrese el sueldo:"))
let a=Number(prompt("ingrese la venta 1:"))
let b=Number(prompt("ingrese la venta 2:"))
let c=Number(prompt("ingrese la venta 3:"))
let comision=(a+b+c)*.10
console.log("el suledo del trabajador es $",sueldo)
console.log("la comision del el mes es $",comision)
console.log("el sueldo total con comision $",sueldo+comision)
})