addEventListener("DOMContentLoaded", ()=>{
    // definir variables numericas 
    // un programa 
    let a=Number(prompt("nota 1 parcial:"))
    let b=Number(prompt("nota 2 parcial:"))
    let c=Number(prompt("nota 3 parcial:"))
    let ex=Number(prompt("calificacion de examen final:"))
    let fl=Number(prompt("trabajo final:"))
    // operaciones basicas ,*
    let pr=(a+c+b)/3
    let fm=(pr*0.55)+(ex*0.30)+(fl*0.15)
    console.log("promedio final :",fm)
})