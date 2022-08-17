let calculadoraVacaciones = document.getElementById("calculadoraVacaciones") //formulario
    calculadoraVcaciones.addEventListener("submit", calcGastos) // capturar addEventListener con submit
//se ejecuta la funcion calcGastos

function getValues() { 
    let destino = document.getElementById("destino").value, //valores de las variables variables
    presupuesto = document.getElementById("presupuesto").value,
    acomodacion = document.getElementById("acomodacion").value;
    transporte = document.getElementById("transporte").value,
    comida = document.getElementById("comida").value;  // valores de las variables

    return { destino, presupuesto, acomodacion, transporte,comida}
}


function calcGastos(e) { 
    e.preventDefault();
      
    const { destino, presupuesto, acomodacion, transporte,comida} = getValues();

    let gastos = parseInt(acomodacion) + parseInt(transporte) + parseInt(comida) //calculo de gastos
    let balance = presupuesto - gastos   // calculo del balance
   
    UI(destino, presupuesto, balance)   
}

function UI (destino, presupuesto, balance) {
    let resul2tado = document.getElementById("resultado") 
    let dataPrint =  document.createElement(`div`)

    dataPrint.innerHTML = `
    <div class="container-data row">
        <div class="col s4">
            <h6>${destino} </h6>
        </div>
        <div class="col s4">
            <h6>${presupuesto} </h6>
        </div>
        <div class="col s4">
            <h6>${balance} </h6>
        </div>
    </div>    
    `
    resultado.appendChild(dataPrint)
    
   // reset();   // reset del formulario
}
// 
//function reset() {
 //   resultado.getElementById("calculadoraVacaciones").reset()

    
  //}  