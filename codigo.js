/* Numeros */
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const cuatro = document.querySelector(".cuatro");
const cinco = document.querySelector(".cinco");
const seis = document.querySelector(".seis");
const siete = document.querySelector(".siete");
const ocho = document.querySelector(".ocho");
const nueve = document.querySelector(".nueve");
/* Operadores */
const multiplicar=document.querySelector(".multiplicar");
const dividir=document.querySelector(".dividir");
const restar=document.querySelector(".restar");
const sumar=document.querySelector(".sumar");
/* Procesos */
let parametro1="";
let parametro2="";
let operador ="";
/* Validacion si escribimos el parametro 1 o 2 */
if (operador===""){
    uno.addEventListener("click",()=>{
        parametro1+="1";
        console.log(parametro1)
    })
    dos.addEventListener("click",()=>{
        parametro1+="2";
        console.log(parametro1)
    })
    tres.addEventListener("click",()=>{
        parametro1+="3";
        console.log(parametro1)
    })
    cuatro.addEventListener("click",()=>{
        parametro1+="4";
        console.log(parametro1)
    })
    cinco.addEventListener("click",()=>{
        parametro1+="5";
        console.log(parametro1)
    })
    seis.addEventListener("click",()=>{
        parametro1+="6";
        console.log(parametro1)
    })
    siete.addEventListener("click",()=>{
        parametro1+="7";
        console.log(parametro1)
    })
    ocho.addEventListener("click",()=>{
        parametro1+="8";
        console.log(parametro1)
    })
    nueve.addEventListener("click",()=>{
        parametro1+="9";
        console.log(parametro1)
    })
}else{
    uno.addEventListener("click",()=>{
        parametro2+="1";
        console.log(parametro2)
    })
    dos.addEventListener("click",()=>{
        parametro2+="2";
        console.log(parametro2)
    })
    tres.addEventListener("click",()=>{
        parametro2+="3";
        console.log(parametro2)
    })
    cuatro.addEventListener("click",()=>{
        parametro2+="4";
        console.log(parametro2)
    })
    cinco.addEventListener("click",()=>{
        parametro2+="5";
        console.log(parametro2)
    })
    seis.addEventListener("click",()=>{
        parametro2+="6";
        console.log(parametro2)
    })
    siete.addEventListener("click",()=>{
        parametro2+="7";
        console.log(parametro2)
    })
    ocho.addEventListener("click",()=>{
        parametro2+="8";
        console.log(parametro2)
    })
    nueve.addEventListener("click",()=>{
        parametro2+="9";
        console.log(parametro2)
    })
}

multiplicar.addEventListener("click",()=>{
    operador="multiplicar"
    console.log(operador)
})

/* Funcion que transforma el parametro 1 en numero */
const transformar1 =()=>{
    parametro1=Number(parametro1);
    return parametro1;
}
/* Funcion que transforma el parametro 2 en numero */
const transformar2 =()=>{
    parametro2=Number(parametro2);
    return parametro2;
}

