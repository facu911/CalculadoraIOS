/* Numeros */
const cero = document.querySelector(".cero")
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const cuatro = document.querySelector(".cuatro");
const cinco = document.querySelector(".cinco");
const seis = document.querySelector(".seis");
const siete = document.querySelector(".siete");
const ocho = document.querySelector(".ocho");
const nueve = document.querySelector(".nueve");
const coma = document.querySelector(".coma");
/* Operadores */
const multiplicar=document.querySelector(".multiplicar");
const dividir=document.querySelector(".dividir");
const restar=document.querySelector(".restar");
const sumar=document.querySelector(".sumar");
const igual=document.querySelector(".igual");
const reiniciar=document.querySelector(".AC");
/* Pantalla */
const pantalla=document.querySelector(".resultado")
/* operacion por pantalla */
let operacion=""

/* Introducimos los numeros por panatalla */
cero.addEventListener("click",()=>{
    operacion+="0";
    pantalla.innerHTML=operacion;
})

uno.addEventListener("click",()=>{
    operacion+="1";
    pantalla.innerHTML=operacion;
})
dos.addEventListener("click",()=>{
    operacion+="2";
    pantalla.innerHTML=operacion;
})
tres.addEventListener("click",()=>{
    operacion+="3";
    pantalla.innerHTML=operacion;
})
cuatro.addEventListener("click",()=>{
    operacion+="4";
    pantalla.innerHTML=operacion;
})
cinco.addEventListener("click",()=>{
    operacion+="5";
    pantalla.innerHTML=operacion;
})
seis.addEventListener("click",()=>{
    operacion+="6";
    pantalla.innerHTML=operacion;
})
siete.addEventListener("click",()=>{
    operacion+="7";
    pantalla.innerHTML=operacion;
})
ocho.addEventListener("click",()=>{
    operacion+="8";
    pantalla.innerHTML=operacion;
})
nueve.addEventListener("click",()=>{
    operacion+="9";
    pantalla.innerHTML=operacion;
})
coma.addEventListener("click",()=>{
    operacion+=",";
    pantalla.innerHTML=operacion;
})

/* Introducimos el operador por pantalla */
multiplicar.addEventListener("click",()=>{
    operacion+="*";
    pantalla.innerHTML=operacion;
})
dividir.addEventListener("click",()=>{
    operacion+="/";
    pantalla.innerHTML=operacion;
})
restar.addEventListener("click",()=>{
    operacion+="-";
    pantalla.innerHTML=operacion;
})
sumar.addEventListener("click",()=>{
    operacion+="+";
    pantalla.innerHTML=operacion;
})
/* Al apretar igual damos el resutado de la operacion */
igual.addEventListener("click",()=>{
    pantalla.innerHTML=Number(eval(operacion))
})
/* Boton para reiniciar */
reiniciar.addEventListener("click",()=>{
    operacion="";
    pantalla.innerHTML=operacion;
    
})