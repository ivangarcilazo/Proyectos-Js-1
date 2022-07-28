// Algoritmo utilizando un for

alert("¡Bienvenido a la pequeña calculoca!")

let datoFactor= parseInt(prompt("¿Qué número quieres operar?"))

let datoSigno= prompt("¿Y que operación quieres hacer? (*, +, - o /)")

let datoFactor2= parseInt(prompt("¿Por qué numero lo quieres operar?"))

let nombreUser=prompt("Perfecto! Estamos calculando... Mientras, dinos, ¿Cúal es tu nombre?")


switch (datoSigno){

    case("*"):

        let verTabla=prompt("¿Desea ver la tabla completa desde el 1 hasta el número que puso de factor?")

        let resultOperacion=datoFactor*datoFactor2

        if(verTabla=="Si" ||  verTabla=="si" ||  verTabla=="yes"){

            for (let tablaFactor=0; tablaFactor<=datoFactor2; tablaFactor++){
                resultTabla=datoFactor*tablaFactor

                document.write(datoFactor + " X " + tablaFactor + "= "+ resultTabla + "<br>")

            }

        }else{
            document.write("El resultado de tu multiplicación es " + resultOperacion)
        }

        break;      
    case("/"):
        let resultOperacionDivision=datoFactor/datoFactor2

        alert("El resultado de " + datoFactor + "/" + datoFactor2 + " es " + resultOperacionDivision)
        break;
    case("+"):
        let resultOperacionSuma=datoFactor+datoFactor2
        alert("El resultado de " + datoFactor + "+" + datoFactor2 + " es " + resultOperacionSuma)
        break;
    case("-"):
        let resultOperacionResta=datoFactor-datoFactor2
        alert("El resultado de " + datoFactor + "-" + datoFactor2 + " es " + resultOperacionResta)
        break;
    default:
        alert("Intente nuevamente, los datos ingresados no son correctos :(")
        break;

}



while(nombreUser!=""){
    alert("Gracias " + nombreUser + " por usar la calculadora!")
    break;
}

document.write(":D")