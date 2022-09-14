addEventListener("DOMContentLoaded", ()=>{
    //datos de entrada
    let nota1=Number(prompt("coloque aqui la primera nota"))
    let nota2=Number(prompt("coloque aqui la segunda nota"))
    let nota3=Number(prompt("coloque aqui la tercera nota"))
    let nota4=Number(prompt("coloque aqui la cuarta nota"))
    let suma=(nota1+nota2+nota3+nota4)/4
    if (suma>3)
      console.log("aprobado")
    if (suma<3)
      console.log("reprobado")
    console.log("nota final;",suma)
})