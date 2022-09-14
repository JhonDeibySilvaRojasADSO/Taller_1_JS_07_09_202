addEventListener("DOMContentLoaded", ()=>{
    // definir variables numericas 
    // un programa 
    // operaciones basicas ,*/
    let dr=prompt("duracion de la llamada: ");
    let min=355
    let iva=0.20
    //operacion
    let res=((dr*min)*iva);
    let sum=res+(dr*min);
    console.log("llamda telefonica : ",sum);
})