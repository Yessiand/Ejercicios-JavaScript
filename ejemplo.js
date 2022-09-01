
let respuesta = "BOGOTA";
let acierto = false;
let turnos = 4;
let mensaje = "";


while (turnos > 0  && acierto == false) {
    let respUsuario = prompt ("Capital de Colombia")
    if (respUsuario.toUpperCase() == respuesta) {
        acierto=true; 
        turnos--;
        alert ("Felicitaciones, has acertado");
    } else {
        turnos--;
        alert("Vuelve a intentarlo, te quedan " + turnos + " intentos")
    }
    
}

if (acierto == true) {
    mensaje = "Usted gano.";
} else {
    mensaje = "Usted perdio.";
}
alert("El juego termino, " + mensaje);


