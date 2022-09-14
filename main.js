addEventListener("DOMContentLoaded", ()=>{
    //datos de entrada 
    let nom=prompt("coloque aqui el nombre del empleado:")
    let hrt=Number(prompt("coloque aqui las horas de trabajo"))
    // operacion basica
    let vlp=15300
    let suel=vlp*hrt
    console.log("el sueldo es:",suel)
})