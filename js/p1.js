let contador = 0;
let con = 0;

function logica(id){
 
    if(id === "idOpcion4"){
        con = contador++;
        document.getElementById("mensaje").textContent = "Felicidades, has seleccionado la opcion correcta";
        document.getElementById('idi').src = "/image/pcolor.jpg";
     
        if(contador === 1) {
            document.getElementById("idPuntaje").textContent = "Puntaje: 5 " ;
        }
        if(contador === 2) {
            document.getElementById("idPuntaje").textContent = "puntaje: 3 " ;
        }
        if(contador === 3) {
            document.getElementById("idPuntaje").textContent = "puntaje: 1 " ;
        }

    }else{
        con = contador++;
    }

    
    document.getElementById("idIntentos").textContent = "Intentos:" + contador;

  
    
}