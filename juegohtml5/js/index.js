var SaltodeAnimacion1 = 0;
logocarga1()
function logocarga1() {
    var logocarga2 = document.getElementById('logocarga');
    logocarga2.style.animationName = "logocargaanimacion";
    logocarga2.style.animationDuration="6s"; 
    var count2 = 3;
   var intervalo = setInterval(function()
{                   count2--;
                   if (SaltodeAnimacion1 == 1) {}
                   else if (count2 == 0) {
                     clearInterval(intervalo);
                     DibujarInicio();
                     }
                  }, 1000);}
   function SaltodeAnimacion() {
       SaltodeAnimacion1 += 1;
       DibujarInicio();


   }



//Aparecer Graficos
function DibujarInicio() {
    document.getElementById('inicio').style.display = "block";
    document.getElementById('formulario1').style.display = "none";
    document.getElementById('Loby').style.display = "none";
    document.getElementById('tienda1').style.display = "none";
    document.getElementById('elegirmapa1').style.display = "none";
    document.getElementById('mapatierra').style.display = "none";
    document.getElementById('logocarga').style.display = "none"
}
function dibujarformulario1() {
	document.getElementById('inicio').style.display = "none";
	document.getElementById('formulario1').style.display = "block";
	document.getElementById('Loby').style.display = "none";
	document.getElementById('tienda1').style.display = "none";
    document.getElementById('elegirmapa1').style.display = "none";
    document.getElementById('mapatierra').style.display = "none";
}
function cerrarformularios() {
	document.getElementById('inicio').style.display = "block";
    document.getElementById('formulario1').style.display = "none";
    document.getElementById('Loby').style.display = "none";
    document.getElementById('tienda1').style.display = "none";
    document.getElementById('elegirmapa1').style.display = "none";
    document.getElementById('mapatierra').style.display = "none";
}

function DibujarLoby() {
	document.getElementById('inicio').style.display = "none";
    document.getElementById('formulario1').style.display = "none";
    document.getElementById('Loby').style.display = "block";
    document.getElementById('tienda1').style.display = "none";
    document.getElementById('elegirmapa1').style.display = "none";
    document.getElementById('mapatierra').style.display = "none";
}

function dibujartienda() {
	document.getElementById('inicio').style.display = "none";
    document.getElementById('formulario1').style.display = "none";
    document.getElementById('Loby').style.display = "none";
    document.getElementById('tienda1').style.display = "block";
    document.getElementById('elegirmapa1').style.display = "none";
    document.getElementById('mapatierra').style.display = "none";
}
function dibujarelegirmapa() {
	document.getElementById('inicio').style.display = "none";
    document.getElementById('formulario1').style.display = "none";
    document.getElementById('Loby').style.display = "none";
    document.getElementById('tienda1').style.display = "none";
    document.getElementById('elegirmapa1').style.display = "block";
    document.getElementById('mapatierra').style.display = "none";
} 
function dibujarmapa1() {
    document.getElementById('inicio').style.display = "none";
    document.getElementById('formulario1').style.display = "none";
    document.getElementById('Loby').style.display = "none";
    document.getElementById('tienda1').style.display = "none";
    document.getElementById('elegirmapa1').style.display = "none";
    document.getElementById('mapatierra').style.display = "block";
    VerificarTiempo();
    CrearDestellos();
    QuitarAnimacionDestello(); 
}

//Tienda

    var articulo1 = document.getElementById('articulo1');
    var articulo2 = document.getElementById('articulo2');
    var articulo3 = document.getElementById('articulo3');

    var articulo4 = document.getElementById('articulo4');
    var articulo5 = document.getElementById('articulo5');
    var articulo6 = document.getElementById('articulo6');

    var articulo7 = document.getElementById('articulo7');
    var articulo8 = document.getElementById('articulo8');
    var articulo9 = document.getElementById('articulo9');
    
    var articulo10 = document.getElementById('articulo10');
    var articulo11 = document.getElementById('articulo11');
    var articulo12 = document.getElementById('articulo12');


    var ComprarArticulode1 = document.getElementById('ComprarArticulo1');
    var ComprarArticulode2 = document.getElementById('ComprarArticulo2');
    var ComprarArticulode3 = document.getElementById('ComprarArticulo3');

    var ComprarArticulode4 = document.getElementById('ComprarArticulo4');
    var ComprarArticulode5 = document.getElementById('ComprarArticulo5');
    var ComprarArticulode6 = document.getElementById('ComprarArticulo6');

    var ComprarArticulode7 = document.getElementById('ComprarArticulo7');
    var ComprarArticulode8 = document.getElementById('ComprarArticulo8');
    var ComprarArticulode9 = document.getElementById('ComprarArticulo9');
    
    var ComprarArticulode10 = document.getElementById('ComprarArticulo10');
    var ComprarArticulode11 = document.getElementById('ComprarArticulo11');
    var ComprarArticulode12 = document.getElementById('ComprarArticulo12');

    var personaje = document.getElementById('personaje');
    var Informacion = document.getElementById('informacion');

    var Articulo1Comprado = 0;
    var Articulo2Comprado = 0;
    var Articulo3Comprado = 0;
    var Articulo4Comprado = 0;
    var Articulo5Comprado = 0;
    var Articulo6Comprado = 0;
    var Articulo7Comprado = 0;
    var Articulo8Comprado = 0;
    var Articulo9Comprado = 0;
    var Articulo10Comprado = 0;
    var Articulo11Comprado = 0;
    var Articulo12Comprado = 0;

    //Estadisticas
    var Monedas = 100000;
    var Suerte = 0;
    var Velocidad = 0;
    var Tiempo = 2;
    var Dinamita = 0;
    var Poderes = 0;

    //Equipados
    PersonajeEquipado = 0;
    HerrramientaEquipada = 0;
    MartilloEquipado = 0;
    Poder1Equipado = 0;

   function DesaparecerInformacion() {
       Informacion.style.display = "none";
       Informacion.src = "imagenes/sinfondo.png";
   }

   function InformacionArticulo1() {
    Informacion.src = "imagenes/informacionpala1.png";
    Informacion.style.display = "block";
    Informacion.style.top = "15%";
   }

   function InformacionArticulo2() {
    Informacion.src = "imagenes/informacionpala2.png";
    Informacion.style.display = "block";
    Informacion.style.top = "15%";
   }

   function InformacionArticulo3() {
    Informacion.src = "imagenes/informacionpala3.png";
    Informacion.style.display = "block";
    Informacion.style.top = "15%";
   }


   function InformacionArticulo4() {
    Informacion.src = "imagenes/informacionpico1.png";
    Informacion.style.display = "block";
    Informacion.style.top = "30%";
   }

   function InformacionArticulo5() {
    Informacion.src = "imagenes/informacionpico2.png";
    Informacion.style.display = "block";
    Informacion.style.top = "30%";
   }

   function InformacionArticulo6() {
    Informacion.src = "imagenes/informacionpico3.png";
    Informacion.style.display = "block";
    Informacion.style.top = "30%";
   }


      function InformacionArticulo7() {
    Informacion.src = "imagenes/InformacionMartillo1.png";
    Informacion.style.display = "block";
    Informacion.style.top = "45%";
   }

   function InformacionArticulo8() {
    Informacion.src = "imagenes/InformacionDinamita.png";
    Informacion.style.display = "block";
    Informacion.style.top = "45%";
   }

   function InformacionArticulo9() {
    Informacion.src = "imagenes/InformacionPoder1.png";
    Informacion.style.display = "block";
    Informacion.style.top = "45%";
   }


    function InformacionArticulo10() {
    Informacion.src = "imagenes/InformacionPersonaje2.png";
    Informacion.style.display = "block";
    Informacion.style.top = "60%";
   }

   function InformacionArticulo11() {
    Informacion.src = "imagenes/InformacionPersonaje3.png";
    Informacion.style.display = "block";
    Informacion.style.top = "60%";
   }

   function InformacionArticulo12() {
    Informacion.src = "imagenes/InformacionPersonaje4.png";
    Informacion.style.display = "block";
    Informacion.style.top = "60%";
   }

function ComprarArticulo01() {
     document.getElementById('TestComprar1').style.display = "block";}

function si1() {
    if (Monedas >= 60) {
        Articulo1Comprado = 1;
        document.getElementById('EquiparArticulo1').style.display = "block";
        document.getElementById('TestComprar1').style.display = "none";
        document.getElementById('ComprarArticulo1').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 60;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 60 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no1() {
    document.getElementById('TestComprar1').style.display = "none";
    alert("Este Articulo Vale 60 Monedas");
}



function ComprarArticulo02() {
     document.getElementById('TestComprar2').style.display = "block";}

function si2() {
    if (Monedas >= 120) {
        Articulo2Comprado = 1;
        document.getElementById('EquiparArticulo2').style.display = "block";
        document.getElementById('TestComprar2').style.display = "none";
        document.getElementById('ComprarArticulo2').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 120;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 120 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no2() {
    document.getElementById('TestComprar2').style.display = "none";
    alert("Este Articulo Vale 120 Monedas");
}


function ComprarArticulo03() {
     document.getElementById('TestComprar3').style.display = "block";}

function si3() {
    if (Monedas >= 240) {
        Articulo3Comprado = 1;
        document.getElementById('EquiparArticulo3').style.display = "block";
        document.getElementById('TestComprar3').style.display = "none";
        document.getElementById('ComprarArticulo3').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 240;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 240 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no3() {
    document.getElementById('TestComprar3').style.display = "none";
    alert("Este Articulo Vale 240 Monedas");
}



function ComprarArticulo04() {
     document.getElementById('TestComprar4').style.display = "block";}

function si4() {
    if (Monedas >= 380) {
        Articulo4Comprado = 1;
        document.getElementById('EquiparArticulo4').style.display = "block";
        document.getElementById('TestComprar4').style.display = "none";
        document.getElementById('ComprarArticulo4').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 380;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 380 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no4() {
    document.getElementById('TestComprar4').style.display = "none";
    alert("Este Articulo Vale 380 Monedas");
}




function ComprarArticulo05() {
     document.getElementById('TestComprar5').style.display = "block";}

function si5() {
    if (Monedas >= 560) {
        Articulo5Comprado = 1;
        document.getElementById('EquiparArticulo5').style.display = "block";
        document.getElementById('TestComprar5').style.display = "none";
        document.getElementById('ComprarArticulo5').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 560;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 560 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no5() {
    document.getElementById('TestComprar5').style.display = "none";
    alert("Este Articulo Vale 560 Monedas");
}




function ComprarArticulo06() {
     document.getElementById('TestComprar6').style.display = "block";}

function si6() {
    if (Monedas >= 820) {
        Articulo6Comprado = 1;
        document.getElementById('EquiparArticulo6').style.display = "block";
        document.getElementById('TestComprar6').style.display = "none";
        document.getElementById('ComprarArticulo6').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 820;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 820 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no6() {
    document.getElementById('TestComprar6').style.display = "none";
    alert("Este Articulo Vale 820 Monedas");
}




function ComprarArticulo07() {
     document.getElementById('TestComprar7').style.display = "block";}

function si7() {
    if (Monedas >= 930) {
        Articulo7Comprado = 1;
        document.getElementById('EquiparArticulo7').style.display = "block";
        document.getElementById('TestComprar7').style.display = "none";
        document.getElementById('ComprarArticulo7').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 930;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 930 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no7() {
    document.getElementById('TestComprar7').style.display = "none";
    alert("Este Articulo Vale 930 Monedas");
}




function ComprarArticulo08() {
     document.getElementById('TestComprar8').style.display = "block";}

function si8() {
    if (Monedas >= 40) {
        Articulo8Comprado = 1;
        document.getElementById('Bombas').src = "imagenes/dinamita1.png";
        document.getElementById('Bombas1').src = "imagenes/dinamita1.png";
        Dinamita += 1;
        alert("Haz Comprado 1 Dinamita, Tienes: "+Dinamita+" Dinamita(s)");
        alert("Haz Comprado Este Articulo");
        Monedas -= 40;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();
        document.getElementById('TestComprar8').style.display = "none";
    }
    else{
        alert("Este Articulo Vale 40 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no8() {
    document.getElementById('TestComprar8').style.display = "none";
    alert("Este Articulo Vale 40 Monedas");
}




function ComprarArticulo09() {
     document.getElementById('TestComprar9').style.display = "block";}

function si9() {
    if (Monedas >= 40) {
        Articulo9Comprado = 1;
        document.getElementById('Poderes').src = "imagenes/poder1.jpg";
        document.getElementById('Poderes1').src = "imagenes/poder1.jpg";
        Poderes += 1;
        alert("Haz Comprado 1 Poder, Tienes: "+Poderes+" poder(es)");
        alert("Haz Comprado Este Articulo");
        Monedas -= 40;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();
        document.getElementById('TestComprar9').style.display = "none";}
    else{
        alert("Este Articulo Vale 40 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no9() {
    document.getElementById('TestComprar9').style.display = "none";
    alert("Este Articulo Vale 40 Monedas");
}




function ComprarArticulo010() {
     document.getElementById('TestComprar10').style.display = "block";}

function si10() {
    if (Monedas >= 350) {
        Articulo10Comprado = 1;
        document.getElementById('EquiparArticulo10').style.display = "block";
        document.getElementById('TestComprar10').style.display = "none";
        document.getElementById('ComprarArticulo10').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 350;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 350 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no10() {
    document.getElementById('TestComprar10').style.display = "none";
    alert("Este Articulo Vale 350 Monedas");
}




function ComprarArticulo011() {
     document.getElementById('TestComprar11').style.display = "block";}

function si11() {
    if (Monedas >= 650) {
        Articulo11Comprado = 1;
        document.getElementById('EquiparArticulo11').style.display = "block";
        document.getElementById('TestComprar11').style.display = "none";
        document.getElementById('ComprarArticulo11').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 650;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 650 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no11() {
    document.getElementById('TestComprar11').style.display = "none";
    alert("Este Articulo Vale 650 Monedas");
}




function ComprarArticulo012() {
     document.getElementById('TestComprar12').style.display = "block";}

function si12() {
    if (Monedas >= 950) {
        Articulo12Comprado = 1;
        document.getElementById('EquiparArticulo12').style.display = "block";
        document.getElementById('TestComprar12').style.display = "none";
        document.getElementById('ComprarArticulo12').style.display = "none";
        alert("Haz Comprado Este Articulo");
        Monedas -= 950;
        alert("Te quedan: "+Monedas+" Monedas");
        ActualizarMonedas();}
    else{
        alert("Este Articulo Vale 950 Monedas Y Usted Tiene En Este Momento: "+Monedas+" Monedas");
        alert("No Te Alcanza Para Este Articulo");
        }
    }
function no12() {
    document.getElementById('TestComprar12').style.display = "none";
    alert("Este Articulo Vale 950 Monedas");
}


function EquiparArticulo01() {
    document.getElementById('EquipadoArticulo1').style.display = "block";
    document.getElementById('EquipadoArticulo2').style.display = "none";
    document.getElementById('EquipadoArticulo3').style.display = "none";
    document.getElementById('EquipadoArticulo4').style.display = "none";
    document.getElementById('EquipadoArticulo5').style.display = "none";
    document.getElementById('EquipadoArticulo6').style.display = "none";
    if (Articulo1Comprado == 1) {
        document.getElementById('EquiparArticulo1').style.display = "none";}
    if (Articulo2Comprado == 1) {
        document.getElementById('EquiparArticulo2').style.display = "block";
    }
    if (Articulo3Comprado == 1) {
        document.getElementById('EquiparArticulo3').style.display = "block";
    }
    if (Articulo4Comprado == 1) {
        document.getElementById('EquiparArticulo4').style.display = "block";
    }
    if (Articulo5Comprado == 1) {
        document.getElementById('EquiparArticulo5').style.display = "block";
    }
    if (Articulo6Comprado == 1) {
        document.getElementById('EquiparArticulo6').style.display = "block";
    }
    if (PersonajeEquipado == 0) {
        personaje.src = "Personaje/personaje1pala1.png";
    }
    if (PersonajeEquipado == 1) {
        personaje.src = "Personaje/personaje2pala1.png";
    }
    if (PersonajeEquipado == 2) {
        personaje.src = "Personaje/personaje3pala1.png";
    }
    if (PersonajeEquipado == 3) {
        personaje.src = "Personaje/personaje4pala1.png";
    }
    HerrramientaEquipada = 1;
    Suerte = 1;
    Velocidad = 1;
    alert("Se A Equipado El Articulo En Herramienta");
   
}


function EquiparArticulo02() {
    document.getElementById('EquipadoArticulo1').style.display = "none";
    document.getElementById('EquipadoArticulo2').style.display = "block";
    document.getElementById('EquipadoArticulo3').style.display = "none";
    document.getElementById('EquipadoArticulo4').style.display = "none";
    document.getElementById('EquipadoArticulo5').style.display = "none";
    document.getElementById('EquipadoArticulo6').style.display = "none";
    if (Articulo1Comprado == 1) {
        document.getElementById('EquiparArticulo1').style.display = "block";
    }
    if (Articulo2Comprado == 1) {
        document.getElementById('EquiparArticulo2').style.display = "none";
    }
    if (Articulo3Comprado == 1) {
        document.getElementById('EquiparArticulo3').style.display = "block";
    }
    if (Articulo4Comprado == 1) {
        document.getElementById('EquiparArticulo4').style.display = "block";
    }
    if (Articulo5Comprado == 1) {
        document.getElementById('EquiparArticulo5').style.display = "block";
    }
    if (Articulo6Comprado == 1) {
        document.getElementById('EquiparArticulo6').style.display = "block";
    }

    if (PersonajeEquipado == 0) {
        personaje.src = "Personaje/personaje1pala2.png";
    }
    if (PersonajeEquipado == 1) {
        personaje.src = "Personaje/personaje2pala2.png";
    }
    if (PersonajeEquipado == 2) {
        personaje.src = "Personaje/personaje3pala2.png";
    }
    if (PersonajeEquipado == 3) {
        personaje.src = "Personaje/personaje4pala2.png";
    }
    HerrramientaEquipada = 2;
    Suerte = 2;
    Velocidad = 1;

    alert("Se A Equipado El Articulo En Herramienta");
}


function EquiparArticulo03() {
    document.getElementById('EquipadoArticulo1').style.display = "none";
    document.getElementById('EquipadoArticulo2').style.display = "none";
    document.getElementById('EquipadoArticulo3').style.display = "block";
    document.getElementById('EquipadoArticulo4').style.display = "none";
    document.getElementById('EquipadoArticulo5').style.display = "none";
    document.getElementById('EquipadoArticulo6').style.display = "none";
    if (Articulo1Comprado == 1) {
        document.getElementById('EquiparArticulo1').style.display = "block";
    }
    if (Articulo2Comprado == 1) {
        document.getElementById('EquiparArticulo2').style.display = "block";
    }
    if (Articulo3Comprado == 1) {
        document.getElementById('EquiparArticulo3').style.display = "none";
    }
    if (Articulo4Comprado == 1) {
        document.getElementById('EquiparArticulo4').style.display = "block";
    }
    if (Articulo5Comprado == 1) {
        document.getElementById('EquiparArticulo5').style.display = "block";
    }
    if (Articulo6Comprado == 1) {
        document.getElementById('EquiparArticulo6').style.display = "block";
    }

    if (PersonajeEquipado == 0) {
        personaje.src = "Personaje/personaje1pala3.png";
    }
    if (PersonajeEquipado == 1) {
        personaje.src = "Personaje/personaje2pala3.png";
    }
    if (PersonajeEquipado == 2) {
        personaje.src = "Personaje/personaje3pala3.png";
    }
    if (PersonajeEquipado == 3) {
        personaje.src = "Personaje/personaje4pala3.png";
    }
    HerrramientaEquipada = 3;
    Suerte = 2;
    Velocidad = 2;

    alert("Se A Equipado El Articulo En Herramienta");    
}

function EquiparArticulo04() {
    document.getElementById('EquipadoArticulo1').style.display = "none";
    document.getElementById('EquipadoArticulo2').style.display = "none";
    document.getElementById('EquipadoArticulo3').style.display = "none";
    document.getElementById('EquipadoArticulo4').style.display = "block";
    document.getElementById('EquipadoArticulo5').style.display = "none";
    document.getElementById('EquipadoArticulo6').style.display = "none";
    if (Articulo1Comprado == 1) {
        document.getElementById('EquiparArticulo1').style.display = "block";
    }
    if (Articulo2Comprado == 1) {
        document.getElementById('EquiparArticulo2').style.display = "block";
    }
    if (Articulo3Comprado == 1) {
        document.getElementById('EquiparArticulo3').style.display = "block";
    }
    if (Articulo4Comprado == 1) {
        document.getElementById('EquiparArticulo4').style.display = "none";
    }
    if (Articulo5Comprado == 1) {
        document.getElementById('EquiparArticulo5').style.display = "block";
    }
    if (Articulo6Comprado == 1) {
        document.getElementById('EquiparArticulo6').style.display = "block";
    }

    if (PersonajeEquipado == 0) {
        personaje.src = "Personaje/personaje1pico1.png";
    }
    if (PersonajeEquipado == 1) {
        personaje.src = "Personaje/personaje2pico1.png";
    }
    if (PersonajeEquipado == 2) {
        personaje.src = "Personaje/personaje3pico1.png";
    }
    if (PersonajeEquipado == 3) {
        personaje.src = "Personaje/personaje4pico1.png";
    }
    HerrramientaEquipada = 4;
    Suerte = 3;
    Velocidad = 2;

    alert("Se A Equipado El Articulo En Herramienta");    
}

function EquiparArticulo05() {
    document.getElementById('EquipadoArticulo1').style.display = "none";
    document.getElementById('EquipadoArticulo2').style.display = "none";
    document.getElementById('EquipadoArticulo3').style.display = "none";
    document.getElementById('EquipadoArticulo4').style.display = "none";
    document.getElementById('EquipadoArticulo5').style.display = "block";
    document.getElementById('EquipadoArticulo6').style.display = "none";
    if (Articulo1Comprado == 1) {
        document.getElementById('EquiparArticulo1').style.display = "block";
    }
    if (Articulo2Comprado == 1) {
        document.getElementById('EquiparArticulo2').style.display = "block";
    }
    if (Articulo3Comprado == 1) {
        document.getElementById('EquiparArticulo3').style.display = "block";
    }
    if (Articulo4Comprado == 1) {
        document.getElementById('EquiparArticulo4').style.display = "block";
    }
    if (Articulo5Comprado == 1) {
        document.getElementById('EquiparArticulo5').style.display = "none";
    }
    if (Articulo6Comprado == 1) {
        document.getElementById('EquiparArticulo6').style.display = "block";
    }

    if (PersonajeEquipado == 0) {
        personaje.src = "Personaje/personaje1pico2.png";
    }
    if (PersonajeEquipado == 1) {
        personaje.src = "Personaje/personaje2pico2.png";
    }
    if (PersonajeEquipado == 2) {
        personaje.src = "Personaje/personaje3pico2.png";
    }
    if (PersonajeEquipado == 3) {
        personaje.src = "Personaje/personaje4pico2.png";
    }
    HerrramientaEquipada = 5;
    Suerte = 3;
    Velocidad = 3;

    alert("Se A Equipado El Articulo En Herramienta");    
}

function EquiparArticulo06() {
    document.getElementById('EquipadoArticulo1').style.display = "none";
    document.getElementById('EquipadoArticulo2').style.display = "none";
    document.getElementById('EquipadoArticulo3').style.display = "none";
    document.getElementById('EquipadoArticulo4').style.display = "none";
    document.getElementById('EquipadoArticulo5').style.display = "none";
    document.getElementById('EquipadoArticulo6').style.display = "block";
    if (Articulo1Comprado == 1) {
        document.getElementById('EquiparArticulo1').style.display = "block";
    }
    if (Articulo2Comprado == 1) {
        document.getElementById('EquiparArticulo2').style.display = "block";
    }
    if (Articulo3Comprado == 1) {
        document.getElementById('EquiparArticulo3').style.display = "block";
    }
    if (Articulo4Comprado == 1) {
        document.getElementById('EquiparArticulo4').style.display = "block";
    }
    if (Articulo5Comprado == 1) {
        document.getElementById('EquiparArticulo5').style.display = "block";
    }
    if (Articulo6Comprado == 1) {
        document.getElementById('EquiparArticulo6').style.display = "none";
    }

    if (PersonajeEquipado == 0) {
        personaje.src = "Personaje/personaje1pico3.png";
    }
    if (PersonajeEquipado == 1) {
        personaje.src = "Personaje/personaje2pico3.png";
    }
    if (PersonajeEquipado == 2) {
        personaje.src = "Personaje/personaje3pico3.png";
    }
    if (PersonajeEquipado == 3) {
        personaje.src = "Personaje/personaje4pico3.png";
    }
    HerrramientaEquipada = 6;
    Suerte = 3;
    Velocidad = 3;

    alert("Se A Equipado El Articulo En Herramienta");    
}

function EquiparArticulo07() {

    document.getElementById('EquipadoArticulo7').style.display = "block";

    if (Articulo7Comprado == 1) {
        document.getElementById('EquiparArticulo7').style.display = "none";  
    }

    document.getElementById('Martillo').src = "imagenes/martillo1.png";
    document.getElementById('Martillo1').src = "imagenes/martillo1.png";
    MartilloEquipado = 1;
    alert("Se A Equipado El Articulo En Martillos");    
}
function EquiparArticulo010() {
    document.getElementById('EquipadoArticulo10').style.display = "block";
    document.getElementById('EquipadoArticulo11').style.display = "none";
    document.getElementById('EquipadoArticulo12').style.display = "none";

    if (Articulo10Comprado == 1) {
        document.getElementById('EquiparArticulo10').style.display = "none";
    }
    if (Articulo11Comprado == 1) {
        document.getElementById('EquiparArticulo11').style.display = "block";
    }
    if (Articulo12Comprado == 1) {
        document.getElementById('EquiparArticulo12').style.display = "block";
    }
    if (HerrramientaEquipada == 0) {
        personaje.src = "Personaje/personaje2.png";
    }
    if (HerrramientaEquipada == 1) {
        personaje.src = "Personaje/personaje2pala1.png";
    }
    if (HerrramientaEquipada == 2) {
        personaje.src = "Personaje/personaje2pala2.png";
    }
    if (HerrramientaEquipada == 3) {
        personaje.src = "Personaje/personaje2pala3.png";
    }
    if (HerrramientaEquipada == 4) {
        personaje.src = "Personaje/personaje2pico1.png";
    }
    if (HerrramientaEquipada == 5) {
        personaje.src = "Personaje/personaje2pico2.png";
    }
    if (HerrramientaEquipada == 6) {
        personaje.src = "Personaje/personaje2pico3.png";
    }
    PersonajeEquipado = 1;
    alert("Se A Equipado El Articulo En Personaje");    
}

function EquiparArticulo011() {
    document.getElementById('EquipadoArticulo10').style.display = "none";
    document.getElementById('EquipadoArticulo11').style.display = "block";
    document.getElementById('EquipadoArticulo12').style.display = "none";
    
    if (Articulo10Comprado == 1) {
        document.getElementById('EquiparArticulo10').style.display = "block";
    }
    if (Articulo11Comprado == 1) {
        document.getElementById('EquiparArticulo11').style.display = "none";
    }
    if (Articulo12Comprado == 1) {
        document.getElementById('EquiparArticulo12').style.display = "block";
    }

    if (HerrramientaEquipada == 0) {
        personaje.src = "Personaje/personaje3.png";
    }
    if (HerrramientaEquipada == 1) {
        personaje.src = "Personaje/personaje3pala1.png";
    }
    if (HerrramientaEquipada == 2) {
        personaje.src = "Personaje/personaje3pala2.png";
    }
    if (HerrramientaEquipada == 3) {
        personaje.src = "Personaje/personaje3pala3.png";
    }
    if (HerrramientaEquipada == 4) {
        personaje.src = "Personaje/personaje3pico1.png";
    }
    if (HerrramientaEquipada == 5) {
        personaje.src = "Personaje/personaje3pico2.png";
    }
    if (HerrramientaEquipada == 6) {
        personaje.src = "Personaje/personaje3pico3.png";
    }
    PersonajeEquipado = 2;
    alert("Se A Equipado El Articulo En Personaje");    
}

function EquiparArticulo012() {

    document.getElementById('EquipadoArticulo10').style.display = "none";
    document.getElementById('EquipadoArticulo11').style.display = "none";
    document.getElementById('EquipadoArticulo12').style.display = "block";
   
    if (Articulo10Comprado == 1) {
        document.getElementById('EquiparArticulo10').style.display = "block";
    }
    if (Articulo11Comprado == 1) {
        document.getElementById('EquiparArticulo11').style.display = "block";
    }
    if (Articulo12Comprado == 1) {
        document.getElementById('EquiparArticulo12').style.display = "none";
    }

    if (HerrramientaEquipada == 0) {
        personaje.src = "Personaje/personaje4.png";
    }
    if (HerrramientaEquipada == 1) {
        personaje.src = "Personaje/personaje4pala1.png";
    }
    if (HerrramientaEquipada == 2) {
        personaje.src = "Personaje/personaje4pala2.png";
    }
    if (HerrramientaEquipada == 3) {
        personaje.src = "Personaje/personaje4pala3.png";
    }
    if (HerrramientaEquipada == 4) {
        personaje.src = "Personaje/personaje4pico1.png";
    }
    if (HerrramientaEquipada == 5) {
        personaje.src = "Personaje/personaje4pico2.png";
    }
    if (HerrramientaEquipada == 6) {
        personaje.src = "Personaje/personaje4pico3.png";
    }
    PersonajeEquipado = 3;
    alert("Se A Equipado El Articulo En Personaje");    
}




function ActualizarMonedas() {
    document.getElementById('Monedas').innerHTML= Monedas;
}

//Formulario

var Pico1 = 0;
var Pico2 = 0;
var Pico3 = 0;
var Pico4 = 0;

var Traje1 = 0;
var Traje2 = 0;
var Traje3 = 0;
var Traje4 = 0;

var Poder1 = 0;
var Poder2 = 0;
var Poder3 = 0;
var Poder4 = 0;

function IniciarSesion() { 
     var name2 = document.getElementById('escribirname2').value;
     var pasword2 = document.getElementById('escribirpasword2').value;

     var TextoObj = 
     {"Name": name2, "Pasword": pasword2 , "Tienda" : { "Monedas" : Monedas , 
     "Pico1"  : Pico1  , "Pico2"  : Pico2  , "Pico3"  : Pico3  , "Pico4"  : Pico4  , 
     "Traje1" : Traje1 , "Traje2" : Traje2 , "Traje3" : Traje3 , "Traje4" : Traje4 ,
     "Poder1" : Poder1 , "Poder2" : Poder2 , "Poder3" : Poder3 , "Poder4" : Poder4 }};

     var MyJson = JSON.stringify(TextoObj);
     var TextoObj = JSON.parse(MyJson);

     if (name2 == "") { alert("Escribe Tu Name"); }
     if (pasword2 == "") { alert("Escribe Tu Pasword"); }

     if (localStorage =="Cuenta"+name2,MyJson) { 
     alert("Si Esta Cuenta No Esta Creada Todo Se Puede LLegar A Perder");
     DibujarLoby();
     }
     else{ alert("Esta Cuenta No Existe"); }

     if (document.getElementById('Loby').style.display == "block")
     { var Name = document.getElementById('escribirname2').value;
     document.getElementById('Name').innerHTML= Name;
     document.getElementById('Monedas').innerHTML= Monedas;} }               

//Verificar Tiempo
function VerificarTiempo() {
    if (PersonajeEquipado == 0) {
        Tiempo = 7;
    }
    if (PersonajeEquipado == 1) {
        Tiempo = 9;
    }
    if (PersonajeEquipado == 2) {
        Tiempo = 12;
    }
    if (PersonajeEquipado == 3) {
        Tiempo = 15;
    }
    if (HerrramientaEquipada == 0) {
        Tiempo += 2;
    }
    if (HerrramientaEquipada == 1) {
        Tiempo += 2;
    }
    if (HerrramientaEquipada == 2) {
        Tiempo += 2;
    }
    if (HerrramientaEquipada == 3) {
        Tiempo += 2;
    }
    if (HerrramientaEquipada == 4) {
        Tiempo += 3;
    }
    if (HerrramientaEquipada == 5) {
        Tiempo += 4;
    }
    if (HerrramientaEquipada == 6) {
        Tiempo += 5;
    }
    if (Suerte == 0) {
        Tiempo += 5;
    }
    if (Suerte == 1) {
        Tiempo += 4;
    }
    if (Suerte == 2) {
        Tiempo += 3;
    }
    document.getElementById('Personaje1').src = personaje.src;

    alert(" Tiempo : "+Tiempo+", Suerte : "+Suerte+", Velocidad : "+Velocidad
    +", Personaje : "+PersonajeEquipado+", Herramienta : "+HerrramientaEquipada );
}


var cuadroPoder = new Array 
    cuadroPoder[0]= document.getElementById('a1')
    cuadroPoder[1]= document.getElementById('a2')
    cuadroPoder[2]= document.getElementById('a3')
    cuadroPoder[3]= document.getElementById('a4')
    cuadroPoder[4]= document.getElementById('a5')
    cuadroPoder[5]= document.getElementById('a6')
    cuadroPoder[6]= document.getElementById('a7')
    cuadroPoder[7]= document.getElementById('a8')
    cuadroPoder[8]= document.getElementById('a9')
    cuadroPoder[9]= document.getElementById('a10')
    cuadroPoder[10]= document.getElementById('a11')
    cuadroPoder[11]= document.getElementById('a12')
    cuadroPoder[12]= document.getElementById('a13')
    cuadroPoder[13]= document.getElementById('a14')
    cuadroPoder[14]= document.getElementById('a15')
    cuadroPoder[15]= document.getElementById('a16')
    cuadroPoder[16]= document.getElementById('a17')
    cuadroPoder[17]= document.getElementById('a18')
    cuadroPoder[18]= document.getElementById('a19')
    cuadroPoder[19]= document.getElementById('a20')
    cuadroPoder[20]= document.getElementById('a21')
    cuadroPoder[21]= document.getElementById('a22')
    cuadroPoder[22]= document.getElementById('a23')
    cuadroPoder[23]= document.getElementById('a24')
    cuadroPoder[24]= document.getElementById('a25')
    cuadroPoder[25]= document.getElementById('a26')
    cuadroPoder[26]= document.getElementById('a27')
    cuadroPoder[27]= document.getElementById('a28')
    cuadroPoder[28]= document.getElementById('a29')
    cuadroPoder[29]= document.getElementById('a30')
    cuadroPoder[30]= document.getElementById('a31')
    cuadroPoder[31]= document.getElementById('a32')
    cuadroPoder[32]= document.getElementById('a33')
    cuadroPoder[33]= document.getElementById('a34')
    cuadroPoder[34]= document.getElementById('a35')
    cuadroPoder[35]= document.getElementById('a36')
    cuadroPoder[36]= document.getElementById('a37')
    cuadroPoder[37]= document.getElementById('a38')
    cuadroPoder[38]= document.getElementById('a39')
    cuadroPoder[39]= document.getElementById('a40')
    cuadroPoder[40]= document.getElementById('a41')
    cuadroPoder[41]= document.getElementById('a42')
    cuadroPoder[42]= document.getElementById('a43')
    cuadroPoder[43]= document.getElementById('a44')
    cuadroPoder[44]= document.getElementById('a45')
    cuadroPoder[45]= document.getElementById('a46')
    cuadroPoder[46]= document.getElementById('a47')
    cuadroPoder[47]= document.getElementById('a48')
    cuadroPoder[48]= document.getElementById('a49')
    cuadroPoder[49]= document.getElementById('a50')
    cuadroPoder[50]= document.getElementById('a51')
    cuadroPoder[51]= document.getElementById('a52')
    cuadroPoder[52]= document.getElementById('a53')
    cuadroPoder[53]= document.getElementById('a54')

var p1 = Math.random()*cuadroPoder.length;
    p1 = Math.floor(p1); 
var p2 = Math.random()*cuadroPoder.length;
    p2 = Math.floor(p2); 
var p3 = Math.random()*cuadroPoder.length;
    p3 = Math.floor(p3);
var p4 = Math.random()*cuadroPoder.length;
    p4 = Math.floor(p4);
var p5 = Math.random()*cuadroPoder.length;
    p5 = Math.floor(p5);
var p6 = Math.random()*cuadroPoder.length;
    p6 = Math.floor(p6);

function Poder0() {
    p1 += 3;
    p2 += 3;
    p3 += 3;
    p4 += 3;
    p5 += 3;
    p6 += 3;

   if (p1 >= 50  ) {
   p1 = 4;
   }

   if (p2 >= 50  ) {
   p2 = 8;
   }

   if (p3 >= 50  ) {
   p3 = 12;
   }

   if (p4 >= 50  ) {
   p4 = 16;
   }

   if (p5 >= 50  ) {
   p5 = 20;
   }

   if (p6 >= 50  ) {
   p6 = 4;
   }
   AnimacionPoder1();
   Poderes -= 1;
   if (Poderes == 0) {
   Poderes = 0;
   }
   if (Poderes == -1) {
       Poderes = 0;
   }
   if (Poderes == -2) {
       Poderes = 0;
   }
   if (Poderes <= 0){
       document.getElementById('Poderes').src = "imagenes/candado.png";
       document.getElementById('Poderes1').src = "imagenes/candado.png";
   }
}

function AnimacionPoder1() {
    if (Poderes >= 1) {
var count9 = 3;
  var intervalo = setInterval(function(){
                   count9--;
                   if (count9 == 1) {
                    cuadroPoder[p1].src = "https://i.ibb.co/BnrdGCh/poder1a1.png";
                    cuadroPoder[p2].src = "https://i.ibb.co/BnrdGCh/poder1a1.png";
                    cuadroPoder[p3].src = "https://i.ibb.co/BnrdGCh/poder1a1.png";
                    cuadroPoder[p4].src = "https://i.ibb.co/BnrdGCh/poder1a1.png";
                    cuadroPoder[p5].src = "https://i.ibb.co/BnrdGCh/poder1a1.png";
                    cuadroPoder[p6].src = "https://i.ibb.co/BnrdGCh/poder1a1.png";
                   }
                   if (count9 == 0) {
                    cuadroPoder[p1].src = "https://i.ibb.co/JCxQhWx/poder1a2.jpg";
                    cuadroPoder[p2].src = "https://i.ibb.co/JCxQhWx/poder1a2.jpg";
                    cuadroPoder[p3].src = "https://i.ibb.co/JCxQhWx/poder1a2.jpg";
                    cuadroPoder[p4].src = "https://i.ibb.co/JCxQhWx/poder1a2.jpg";
                    cuadroPoder[p5].src = "https://i.ibb.co/JCxQhWx/poder1a2.jpg";
                    cuadroPoder[p6].src = "https://i.ibb.co/JCxQhWx/poder1a2.jpg"; 
                    clearInterval(intervalo);            
                     
                     }
                  }, 200);}}



var Bomba0 = 0;


function Bomba() {
    if (Dinamita >= 1) {
    Dinamita -= 1;
    if (Dinamita == 0){
        document.getElementById('Bombas1').src = "imagenes/candado.png";
        document.getElementById('Bombas').src = "imagenes/candado.png";
    }
    Bomba0 += 2;
    console.log(Bomba0);

    if (Bomba0 == 8) {
        Bomba0 = 1
    }
    if (Bomba0 == 7) {
        Bomba0 = 0
    }
    cuadro1 = document.getElementById('a1')
    cuadro2 = document.getElementById('a2')
    cuadro3 = document.getElementById('a3')
    cuadro4 = document.getElementById('a4')
    cuadro5 = document.getElementById('a5')
    cuadro6 = document.getElementById('a6')
    cuadro7 = document.getElementById('a7')
    cuadro8 = document.getElementById('a8')
    cuadro9 = document.getElementById('a9')
    cuadro10 = document.getElementById('a10')
    cuadro11 = document.getElementById('a11')
    cuadro12 = document.getElementById('a12')
    cuadro13 = document.getElementById('a13')
    cuadro14 = document.getElementById('a14')
    cuadro15 = document.getElementById('a15')
    cuadro16 = document.getElementById('a16')
    cuadro17 = document.getElementById('a17')
    cuadro18 = document.getElementById('a18')
    cuadro19 = document.getElementById('a19')
    cuadro20 = document.getElementById('a20')
    cuadro21 = document.getElementById('a21')
    cuadro22 = document.getElementById('a22')
    cuadro23 = document.getElementById('a23')
    cuadro24 = document.getElementById('a24')
    cuadro25 = document.getElementById('a25')
    cuadro26 = document.getElementById('a26')
    cuadro27 = document.getElementById('a27')
    cuadro28 = document.getElementById('a28')
    cuadro29 = document.getElementById('a29')
    cuadro30 = document.getElementById('a30')
    cuadro31 = document.getElementById('a31')
    cuadro32 = document.getElementById('a32')
    cuadro33 = document.getElementById('a33')
    cuadro34 = document.getElementById('a34')
    cuadro35 = document.getElementById('a35')
    cuadro36 = document.getElementById('a36')
    cuadro37 = document.getElementById('a37')
    cuadro38 = document.getElementById('a38')
    cuadro39 = document.getElementById('a39')
    cuadro40 = document.getElementById('a40')
    cuadro41 = document.getElementById('a41')
    cuadro42 = document.getElementById('a42')
    cuadro43 = document.getElementById('a43')
    cuadro44 = document.getElementById('a44')
    cuadro45 = document.getElementById('a45')
    cuadro46 = document.getElementById('a46')
    cuadro47 = document.getElementById('a47')
    cuadro48 = document.getElementById('a48')
    cuadro49 = document.getElementById('a49')
    cuadro50 = document.getElementById('a50')
    cuadro51 = document.getElementById('a51')
    cuadro52 = document.getElementById('a52')
    cuadro53 = document.getElementById('a53')
    cuadro54 = document.getElementById('a54')

//PrimerCuadro
if (Bomba0 == 1) {
QuitarAnimacionDestello();
AnimacionBomba1();
}

//SegundoCuadro
if (Bomba0 == 2) {    
QuitarAnimacionDestello(); 
AnimacionBomba2(); 
}

//TercerCuadro
if (Bomba0 == 3) {
QuitarAnimacionDestello();
AnimacionBomba3();   
}

//CuartoCuadro
if (Bomba0 == 4) {  
QuitarAnimacionDestello(); 
AnimacionBomba4();
}

//QuintoCuadro
if (Bomba0 == 5) { 
QuitarAnimacionDestello();
AnimacionBomba5();  
}


//SextoCuadro
if (Bomba0 == 6) {
QuitarAnimacionDestello(); 
AnimacionBomba6();  
}
QuitarAnimacionDestello(); 
}}

QuitarAnimacionDestello(); 

//mapa1
function AnimacionBomba1() {
 var count3 = 3;
 if (count3 == 3) {
    document.getElementById('BombaAnimacion1').style.display = "block";
 }
  var intervalo = setInterval(function(){
                   count3--;
                   if (count3 == 2) {
                    document.getElementById('BombaAnimacion1').src = "imagenes/Bomba2.png";
                    document.getElementById('BombaAnimacion1').style.width = "30%";
                    document.getElementById('BombaAnimacion1').style.height = "30%";
                   }
                   if (count3 == 1) {
                    document.getElementById('BombaAnimacion1').src = "imagenes/Bomba3.png";
                    document.getElementById('BombaAnimacion1').style.width = "30%";
                    document.getElementById('BombaAnimacion1').style.height = "30%";
                    cuadro1.src = items3[numero1c]
                    cuadro2.src = items3[numero2c]
                    cuadro3.src = items3[numero3c]
                    cuadro10.src = items3[numero10c]
                    cuadro11.src = items3[numero11c] 
                    cuadro12.src = items3[numero12c]
                    cuadro19.src = items3[numero19c]
                    cuadro20.src = items3[numero20c]
                    cuadro21.src = items3[numero21c]
                    b1();
                    b2();
                    b3();
                    b10();
                    b11();
                    b12();
                    b19();
                    b20();
                    b21();
                   }
                   if (count3 == 0) {
                    document.getElementById('BombaAnimacion1').src = "imagenes/Bomba4.png";
                    document.getElementById('BombaAnimacion1').style.width = "30%";
                    document.getElementById('BombaAnimacion1').style.height = "30%";
                    document.getElementById('BombaAnimacion1').style.display = "none";
                     clearInterval(intervalo);
                     
                     
                     }
                  }, 200);}
function AnimacionBomba2() {
 var count4 = 3;
 if (count4 == 3) {
    document.getElementById('BombaAnimacion2').style.display = "block";
 }
 var intervalo = setInterval(function(){
                   count4--;
                   if (count4 == 2) {
                    document.getElementById('BombaAnimacion2').src = "imagenes/Bomba2.png";
                    document.getElementById('BombaAnimacion2').style.width = "30%";
                    document.getElementById('BombaAnimacion2').style.height = "30%";
                   }
                   if (count4 == 1) {
                    document.getElementById('BombaAnimacion2').src = "imagenes/Bomba3.png";
                    document.getElementById('BombaAnimacion2').style.width = "30%";
                    document.getElementById('BombaAnimacion2').style.height = "30%";
                    cuadro4.src = items3[numero4c]
                    cuadro5.src = items3[numero5c]
                    cuadro6.src = items3[numero6c]
                    cuadro13.src = items3[numero13c]
                    cuadro14.src = items3[numero14c] 
                    cuadro15.src = items3[numero15c]
                    cuadro22.src = items3[numero22c]
                    cuadro23.src = items3[numero23c]
                    cuadro24.src = items3[numero24c]
                    b4();
                    b5();
                    b6();
                    b13();
                    b14();
                    b15();
                    b22();
                    b23();
                    b24();
                   }
                   if (count4 == 0) {
                    document.getElementById('BombaAnimacion2').src = "imagenes/Bomba4.png";
                    document.getElementById('BombaAnimacion2').style.width = "30%";
                    document.getElementById('BombaAnimacion2').style.height = "30%";
                    document.getElementById('BombaAnimacion2').style.display = "none";
                     clearInterval(intervalo);
                     
                     
                     }
                  }, 200);}
function AnimacionBomba3() {
 var count5 = 3;
 if (count5 == 3) {
    document.getElementById('BombaAnimacion3').style.display = "block";
 }
 var intervalo = setInterval(function(){
                   count5--;
                   if (count5 == 2) {
                    document.getElementById('BombaAnimacion3').src = "imagenes/Bomba2.png";
                    document.getElementById('BombaAnimacion3').style.width = "30%";
                    document.getElementById('BombaAnimacion3').style.height = "30%";
                   }
                   if (count5 == 1) {
                    document.getElementById('BombaAnimacion3').src = "imagenes/Bomba3.png";
                    document.getElementById('BombaAnimacion3').style.width = "30%";
                    document.getElementById('BombaAnimacion3').style.height = "30%";
                    cuadro7.src = items3[numero7c]
                    cuadro8.src = items3[numero8c]
                    cuadro9.src = items3[numero9c]
                    cuadro16.src = items3[numero16c]
                    cuadro17.src = items3[numero17c] 
                    cuadro18.src = items3[numero18c]
                    cuadro25.src = items3[numero25c]
                    cuadro26.src = items3[numero26c]
                    cuadro27.src = items3[numero27c]
                    b7();
                    b8();
                    b9();
                    b16();
                    b17();
                    b18();
                    b25();
                    b26();
                    b27();
                   }
                   if (count5 == 0) {
                    document.getElementById('BombaAnimacion3').src = "imagenes/Bomba4.png";
                    document.getElementById('BombaAnimacion3').style.width = "30%";
                    document.getElementById('BombaAnimacion3').style.height = "30%";
                    document.getElementById('BombaAnimacion3').style.display = "none";
                     clearInterval(intervalo);
                     
                     
                     }
                  }, 200);}
function AnimacionBomba4() {
 var count6 = 3;
 if (count6 == 3) {
    document.getElementById('BombaAnimacion4').style.display = "block";
 }
 var intervalo = setInterval(function(){
                   count6--;
                   if (count6 == 2) {
                    document.getElementById('BombaAnimacion4').src = "imagenes/Bomba2.png";
                    document.getElementById('BombaAnimacion4').style.width = "30%";
                    document.getElementById('BombaAnimacion4').style.height = "30%";
                   }
                   if (count6 == 1) {
                    document.getElementById('BombaAnimacion4').src = "imagenes/Bomba3.png";
                    document.getElementById('BombaAnimacion4').style.width = "30%";
                    document.getElementById('BombaAnimacion4').style.height = "30%";
                    cuadro28.src = items3[numero28c]
                    cuadro29.src = items3[numero29c]
                    cuadro30.src = items3[numero30c]
                    cuadro37.src = items3[numero37c]
                    cuadro38.src = items3[numero38c] 
                    cuadro39.src = items3[numero39c]
                    cuadro46.src = items3[numero46c]
                    cuadro47.src = items3[numero47c]
                    cuadro48.src = items3[numero48c]
                    b28();
                    b29();
                    b30();
                    b37();
                    b38();
                    b39();
                    b46();
                    b47();
                    b48();
                   }
                   if (count6 == 0) {
                    document.getElementById('BombaAnimacion4').src = "imagenes/Bomba4.png";
                    document.getElementById('BombaAnimacion4').style.width = "30%";
                    document.getElementById('BombaAnimacion4').style.height = "30%";
                    document.getElementById('BombaAnimacion4').style.display = "none";
                     clearInterval(intervalo);
                     
                     
                     }
                  }, 200);}
function AnimacionBomba5() {
 var count7 = 3;
 if (count7 == 3) {
    document.getElementById('BombaAnimacion5').style.display = "block";
 }
 var intervalo = setInterval(function(){
                   count7--;
                   if (count7 == 2) {
                    document.getElementById('BombaAnimacion5').src = "imagenes/Bomba2.png";
                    document.getElementById('BombaAnimacion5').style.width = "30%";
                    document.getElementById('BombaAnimacion5').style.height = "30%";
                   }
                   if (count7 == 1) {
                    document.getElementById('BombaAnimacion5').src = "imagenes/Bomba3.png";
                    document.getElementById('BombaAnimacion5').style.width = "30%";
                    document.getElementById('BombaAnimacion5').style.height = "30%";
                    cuadro31.src = items3[numero31c]
                    cuadro32.src = items3[numero32c]
                    cuadro33.src = items3[numero33c]
                    cuadro40.src = items3[numero40c]
                    cuadro41.src = items3[numero41c] 
                    cuadro42.src = items3[numero42c]
                    cuadro49.src = items3[numero49c]
                    cuadro50.src = items3[numero50c]
                    cuadro51.src = items3[numero51c]
                    b31();
                    b32();
                    b33();
                    b40();
                    b41();
                    b42();
                    b49();
                    b50();
                    b51();
                   }
                   if (count7 == 0) {
                    document.getElementById('BombaAnimacion5').src = "imagenes/Bomba4.png";
                    document.getElementById('BombaAnimacion5').style.width = "30%";
                    document.getElementById('BombaAnimacion5').style.height = "30%";
                    document.getElementById('BombaAnimacion5').style.display = "none";
                     clearInterval(intervalo);
                     
                     
                     }
                  }, 200);}
function AnimacionBomba6() {
 var count8 = 3;
 if (count8 == 3) {
    document.getElementById('BombaAnimacion6').style.display = "block";
 }
 var intervalo = setInterval(function(){
                   count8--;
                   if (count8 == 2) {
                    document.getElementById('BombaAnimacion6').src = "imagenes/Bomba2.png";
                    document.getElementById('BombaAnimacion6').style.width = "30%";
                    document.getElementById('BombaAnimacion6').style.height = "30%";
                   }
                   if (count8 == 1) {
                    document.getElementById('BombaAnimacion6').src = "imagenes/Bomba3.png";
                    document.getElementById('BombaAnimacion6').style.width = "30%";
                    document.getElementById('BombaAnimacion6').style.height = "30%";
                    cuadro34.src = items3[numero34c]
                    cuadro35.src = items3[numero35c]
                    cuadro36.src = items3[numero36c]
                    cuadro43.src = items3[numero43c]
                    cuadro44.src = items3[numero44c] 
                    cuadro45.src = items3[numero45c]
                    cuadro52.src = items3[numero52c]
                    cuadro53.src = items3[numero53c]
                    cuadro54.src = items3[numero54c]
                    b34();
                    b35();
                    b36();
                    b43();
                    b44();
                    b45();
                    b52();
                    b53();
                    b54();
                   }
                   if (count8 == 0) {
                    document.getElementById('BombaAnimacion6').src = "imagenes/Bomba4.png";
                    document.getElementById('BombaAnimacion6').style.width = "30%";
                    document.getElementById('BombaAnimacion6').style.height = "30%";
                    document.getElementById('BombaAnimacion6').style.display = "none";
                     clearInterval(intervalo);
                     
                     
                     }
                  }, 200);}


function empezarmapa1() {
var count = Tiempo;
alert("tienes: "+count+" segundos para minar");
var number = document.getElementById('numero');
var intervalo = setInterval(function(){
                   count--;
                   number.innerHTML = count;
                   if (count == 0) {
                     clearInterval(intervalo);
                     Tiempo = 2;
                     dibujarscore1();
                     }
                  }, 1000);}
CrearDestellos();
function CrearDestellos() {
var cuadro = new Array 
    cuadro[0]= document.getElementById('a1')
    cuadro[1]= document.getElementById('a2')
    cuadro[2]= document.getElementById('a3')
    cuadro[3]= document.getElementById('a4')
    cuadro[4]= document.getElementById('a5')
    cuadro[5]= document.getElementById('a6')
    cuadro[6]= document.getElementById('a7')
    cuadro[7]= document.getElementById('a8')
    cuadro[8]= document.getElementById('a9')
    cuadro[9]= document.getElementById('a10')
    cuadro[10]= document.getElementById('a11')
    cuadro[11]= document.getElementById('a12')
    cuadro[12]= document.getElementById('a13')
    cuadro[13]= document.getElementById('a14')
    cuadro[14]= document.getElementById('a15')
    cuadro[15]= document.getElementById('a16')
    cuadro[16]= document.getElementById('a17')
    cuadro[17]= document.getElementById('a18')
    cuadro[18]= document.getElementById('a19')
    cuadro[19]= document.getElementById('a20')
    cuadro[20]= document.getElementById('a21')
    cuadro[21]= document.getElementById('a22')
    cuadro[22]= document.getElementById('a23')
    cuadro[23]= document.getElementById('a24')
    cuadro[24]= document.getElementById('a25')
    cuadro[25]= document.getElementById('a26')
    cuadro[26]= document.getElementById('a27')
    cuadro[27]= document.getElementById('a28')
    cuadro[28]= document.getElementById('a29')
    cuadro[29]= document.getElementById('a30')
    cuadro[30]= document.getElementById('a31')
    cuadro[31]= document.getElementById('a32')
    cuadro[32]= document.getElementById('a33')
    cuadro[33]= document.getElementById('a34')
    cuadro[34]= document.getElementById('a35')
    cuadro[35]= document.getElementById('a36')
    cuadro[36]= document.getElementById('a37')
    cuadro[37]= document.getElementById('a38')
    cuadro[38]= document.getElementById('a39')
    cuadro[39]= document.getElementById('a40')
    cuadro[40]= document.getElementById('a41')
    cuadro[41]= document.getElementById('a42')
    cuadro[42]= document.getElementById('a43')
    cuadro[43]= document.getElementById('a44')
    cuadro[44]= document.getElementById('a45')
    cuadro[45]= document.getElementById('a46')
    cuadro[46]= document.getElementById('a47')
    cuadro[47]= document.getElementById('a48')
    cuadro[48]= document.getElementById('a49')
    cuadro[49]= document.getElementById('a50')
    cuadro[50]= document.getElementById('a51')
    cuadro[51]= document.getElementById('a52')
    cuadro[52]= document.getElementById('a53')
    cuadro[53]= document.getElementById('a54')

if (Suerte == 0) {}
if (Suerte == 1) {
 var destello1 = Math.random()*cuadro.length;
    destello1 = Math.floor(destello1);

 cuadro[destello1].style.animationName= "animacion";
 cuadro[destello1].style.animationDuration= "0.25s";
 cuadro[destello1].style.animationIterationCount= "infinite";
 cuadro[destello1].src = "https://i.ibb.co/TLs8dN5/destello.png";
}
if (Suerte == 2) {

 var destello2 = Math.random()*cuadro.length;
    destello2 = Math.floor(destello2);

 var destello3 = Math.random()*cuadro.length;
    destello3 = Math.floor(destello3);

 cuadro[destello2].style.animationName= "animacion";
 cuadro[destello2].style.animationDuration= "0.25s";
 cuadro[destello2].style.animationIterationCount= "infinite";
 cuadro[destello2].src = "https://i.ibb.co/TLs8dN5/destello.png";

 cuadro[destello3].style.animationName= "animacion";
 cuadro[destello3].style.animationDuration= "0.25s";
 cuadro[destello3].style.animationIterationCount= "infinite";
 cuadro[destello3].src = "https://i.ibb.co/TLs8dN5/destello.png";

}
if (Suerte == 3) {
 var destello4 = Math.random()*cuadro.length;
    destello4 = Math.floor(destello4);

 var destello5 = Math.random()*cuadro.length;
    destello5 = Math.floor(destello5);

 var destello6 = Math.random()*cuadro.length;
    destello6 = Math.floor(destello6);

 var destello7 = Math.random()*cuadro.length;
    destello7 = Math.floor(destello7);

 cuadro[destello4].style.animationName= "animacion";
 cuadro[destello4].style.animationDuration= "0.25s";
 cuadro[destello4].style.animationIterationCount= "infinite";
 cuadro[destello4].src = "https://i.ibb.co/TLs8dN5/destello.png";

 cuadro[destello5].style.animationName= "animacion";
 cuadro[destello5].style.animationDuration= "0.25s";
 cuadro[destello5].style.animationIterationCount= "infinite";
 cuadro[destello5].src = "https://i.ibb.co/TLs8dN5/destello.png";

 cuadro[destello6].style.animationName= "animacion";
 cuadro[destello6].style.animationDuration= "0.25s";
 cuadro[destello6].style.animationIterationCount= "infinite";
 cuadro[destello6].src = "https://i.ibb.co/TLs8dN5/destello.png";

 cuadro[destello7].style.animationName= "animacion";
 cuadro[destello7].style.animationDuration= "0.25s";
 cuadro[destello7].style.animationIterationCount= "infinite";
 cuadro[destello7].src = "https://i.ibb.co/TLs8dN5/destello.png";
}
}
var items1 = new Array
    items1[0]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[1]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[2]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[3]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[4]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[5]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[6]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[7]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[8]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[9]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[10]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[11]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[12]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[13]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[14]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[15]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[16]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[17]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[18]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[19]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[20]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[21]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[22]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[23]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[24]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[25]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[26]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[27]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[28]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[29]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[30]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[31]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[32]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[33]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[34]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[35]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items1[36]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items1[37]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items1[38]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items1[39]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items1[40]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items1[41]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items1[42]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items1[43]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items1[44]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[45]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[46]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[47]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[48]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[49]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[50]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[51]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[52]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items1[53]= "https://i.ibb.co/0jqRTQJ/oro.jpg"

 var numero1a = Math.random()*items1.length;
    numero1a = Math.floor(numero1a);
 var numero2a = Math.random()*items1.length;
    numero2a = Math.floor(numero2a);
 var numero3a = Math.random()*items1.length;
    numero3a = Math.floor(numero3a);
 var numero4a = Math.random()*items1.length;
    numero4a = Math.floor(numero4a);
 var numero5a = Math.random()*items1.length;
    numero5a = Math.floor(numero5a);
 var numero6a = Math.random()*items1.length;
    numero6a = Math.floor(numero6a);
 var numero7a = Math.random()*items1.length;
    numero7a = Math.floor(numero7a);
 var numero8a = Math.random()*items1.length;
    numero8a = Math.floor(numero8a);
 var numero9a = Math.random()*items1.length;
    numero9a = Math.floor(numero9a);


 var numero10a = Math.random()*items1.length;
    numero10a = Math.floor(numero10a);  
 var numero11a = Math.random()*items1.length;
    numero11a = Math.floor(numero11a); 
 var numero12a = Math.random()*items1.length;
    numero12a = Math.floor(numero12a); 
 var numero13a = Math.random()*items1.length;
    numero13a = Math.floor(numero13a); 
 var numero14a = Math.random()*items1.length;
    numero14a = Math.floor(numero14a); 
 var numero15a = Math.random()*items1.length;
    numero15a = Math.floor(numero15a); 
 var numero16a = Math.random()*items1.length;
    numero16a = Math.floor(numero16a);  
 var numero17a = Math.random()*items1.length;
    numero17a = Math.floor(numero17a); 
 var numero18a = Math.random()*items1.length;
    numero18a = Math.floor(numero18a); 


 var numero19a = Math.random()*items1.length;
    numero19a = Math.floor(numero19a);    
 var numero20a = Math.random()*items1.length;
    numero20a = Math.floor(numero20a); 
 var numero21a = Math.random()*items1.length;
    numero21a = Math.floor(numero21a); 
 var numero22a = Math.random()*items1.length;
    numero22a = Math.floor(numero22a); 
 var numero23a = Math.random()*items1.length;
    numero23a = Math.floor(numero23a); 
 var numero24a = Math.random()*items1.length;
    numero24a = Math.floor(numero24a); 
 var numero25a = Math.random()*items1.length;
    numero25a = Math.floor(numero25a); 
 var numero26a = Math.random()*items1.length;
    numero26a = Math.floor(numero26a);
 var numero27a = Math.random()*items1.length;
    numero27a = Math.floor(numero27a);


 var numero28a = Math.random()*items1.length;
    numero28a = Math.floor(numero28a);    
 var numero29a = Math.random()*items1.length;
    numero29a = Math.floor(numero29a); 
 var numero30a = Math.random()*items1.length;
    numero30a = Math.floor(numero30a); 
 var numero31a = Math.random()*items1.length;
    numero31a = Math.floor(numero31a); 
 var numero32a = Math.random()*items1.length;
    numero32a = Math.floor(numero32a); 
 var numero33a = Math.random()*items1.length;
    numero33a = Math.floor(numero32a); 
 var numero34a = Math.random()*items1.length;
    numero34a = Math.floor(numero34a); 
 var numero35a = Math.random()*items1.length;
    numero35a = Math.floor(numero35a);
 var numero36a = Math.random()*items1.length;
    numero36a = Math.floor(numero36a);


 var numero37a = Math.random()*items1.length;
    numero37a = Math.floor(numero37a);    
 var numero38a = Math.random()*items1.length;
    numero38a = Math.floor(numero38a); 
 var numero39a = Math.random()*items1.length;
    numero39a = Math.floor(numero39a); 
 var numero40a = Math.random()*items1.length;
    numero40a = Math.floor(numero40a); 
 var numero41a = Math.random()*items1.length;
    numero41a = Math.floor(numero41a); 
 var numero42a = Math.random()*items1.length;
    numero42a = Math.floor(numero42a); 
 var numero43a = Math.random()*items1.length;
    numero43a = Math.floor(numero43a); 
 var numero44a = Math.random()*items1.length;
    numero44a = Math.floor(numero44a);
 var numero45a = Math.random()*items1.length;
    numero45a = Math.floor(numero45a); 


 var numero46a = Math.random()*items1.length;
    numero46a = Math.floor(numero46a);    
 var numero47a = Math.random()*items1.length;
    numero47a = Math.floor(numero47a); 
 var numero48a = Math.random()*items1.length;
    numero48a = Math.floor(numero48a); 
 var numero49a = Math.random()*items1.length;
    numero49a = Math.floor(numero49a); 
 var numero50a = Math.random()*items1.length;
    numero50a = Math.floor(numero50a); 
 var numero51a = Math.random()*items1.length;
    numero51a = Math.floor(numero51a); 
 var numero52a = Math.random()*items1.length;
    numero52a = Math.floor(numero52a); 
 var numero53a = Math.random()*items1.length;
    numero53a = Math.floor(numero53a);
 var numero54a = Math.random()*items1.length;
    numero54a = Math.floor(numero54a);


var items2 = new Array
    items2[0]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[1]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[2]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[3]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[4]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[5]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[6]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[7]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[8]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items2[9]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[10]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[11]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[12]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[13]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[14]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[15]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[16]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[17]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[18]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[19]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[20]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[21]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[22]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[23]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[24]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[25]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[26]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[27]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[28]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[29]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[30]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[31]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[32]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[33]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[34]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[35]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items2[36]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items2[37]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items2[38]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items2[39]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items2[40]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items2[41]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items2[42]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items2[43]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items2[44]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[45]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[46]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[47]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[48]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[49]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[50]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[51]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[52]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items2[53]= "https://i.ibb.co/0jqRTQJ/oro.jpg"

 var numero1b = Math.random()*items2.length;
    numero1b = Math.floor(numero1b);
 var numero2b = Math.random()*items2.length;
    numero2b = Math.floor(numero2b);
 var numero3b = Math.random()*items2.length;
    numero3b = Math.floor(numero3b);
 var numero4b = Math.random()*items2.length;
    numero4b = Math.floor(numero4b);
 var numero5b = Math.random()*items2.length;
    numero5b = Math.floor(numero5b);
 var numero6b = Math.random()*items2.length;
    numero6b = Math.floor(numero6b);
 var numero7b = Math.random()*items2.length;
    numero7b = Math.floor(numero7b);
 var numero8b = Math.random()*items2.length;
    numero8b = Math.floor(numero8b);
 var numero9b = Math.random()*items2.length;
    numero9b = Math.floor(numero9b);


 var numero10b = Math.random()*items2.length;
    numero10b = Math.floor(numero10b);  
 var numero11b = Math.random()*items2.length;
    numero11b = Math.floor(numero11b); 
 var numero12b = Math.random()*items2.length;
    numero12b = Math.floor(numero12b); 
 var numero13b = Math.random()*items2.length;
    numero13b = Math.floor(numero13b); 
 var numero14b = Math.random()*items2.length;
    numero14b = Math.floor(numero14b); 
 var numero15b = Math.random()*items2.length;
    numero15b = Math.floor(numero15b); 
 var numero16b = Math.random()*items2.length;
    numero16b = Math.floor(numero16b);  
 var numero17b = Math.random()*items2.length;
    numero17b = Math.floor(numero17b); 
 var numero18b = Math.random()*items2.length;
    numero18b = Math.floor(numero18b); 


 var numero19b = Math.random()*items2.length;
    numero19b = Math.floor(numero19b);    
 var numero20b = Math.random()*items2.length;
    numero20b = Math.floor(numero20b); 
 var numero21b = Math.random()*items2.length;
    numero21b = Math.floor(numero21b); 
 var numero22b = Math.random()*items2.length;
    numero22b = Math.floor(numero22b); 
 var numero23b = Math.random()*items2.length;
    numero23b = Math.floor(numero23b); 
 var numero24b = Math.random()*items2.length;
    numero24b = Math.floor(numero24b); 
 var numero25b = Math.random()*items2.length;
    numero25b = Math.floor(numero25b); 
 var numero26b = Math.random()*items2.length;
    numero26b = Math.floor(numero26b);
 var numero27b = Math.random()*items2.length;
    numero27b = Math.floor(numero27b);


 var numero28b = Math.random()*items2.length;
    numero28b = Math.floor(numero28b);    
 var numero29b = Math.random()*items2.length;
    numero29b = Math.floor(numero29b); 
 var numero30b = Math.random()*items2.length;
    numero30b = Math.floor(numero30b); 
 var numero31b = Math.random()*items2.length;
    numero31b = Math.floor(numero31b); 
 var numero32b = Math.random()*items2.length;
    numero32b = Math.floor(numero32b); 
 var numero33b = Math.random()*items2.length;
    numero33b = Math.floor(numero32b); 
 var numero34b = Math.random()*items2.length;
    numero34b = Math.floor(numero34b); 
 var numero35b = Math.random()*items2.length;
    numero35b = Math.floor(numero35b);
 var numero36b = Math.random()*items2.length;
    numero36b = Math.floor(numero36b);


 var numero37b = Math.random()*items2.length;
    numero37b = Math.floor(numero37b);    
 var numero38b = Math.random()*items2.length;
    numero38b = Math.floor(numero38b); 
 var numero39b = Math.random()*items2.length;
    numero39b = Math.floor(numero39b); 
 var numero40b = Math.random()*items2.length;
    numero40b = Math.floor(numero40b); 
 var numero41b = Math.random()*items2.length;
    numero41b = Math.floor(numero41b); 
 var numero42b = Math.random()*items2.length;
    numero42b = Math.floor(numero42b); 
 var numero43b = Math.random()*items2.length;
    numero43b = Math.floor(numero43b); 
 var numero44b = Math.random()*items2.length;
    numero44b = Math.floor(numero44b);
 var numero45b = Math.random()*items2.length;
    numero45ab = Math.floor(numero45b); 


 var numero46b = Math.random()*items2.length;
    numero46b = Math.floor(numero46b);    
 var numero47b = Math.random()*items2.length;
    numero47b = Math.floor(numero47b); 
 var numero48b = Math.random()*items2.length;
    numero48b = Math.floor(numero48b); 
 var numero49b = Math.random()*items2.length;
    numero49b = Math.floor(numero49b); 
 var numero50b = Math.random()*items2.length;
    numero50b = Math.floor(numero50b); 
 var numero51b = Math.random()*items2.length;
    numero51b = Math.floor(numero51b); 
 var numero52b = Math.random()*items2.length;
    numero52b = Math.floor(numero52b); 
 var numero53b = Math.random()*items2.length;
    numero53b = Math.floor(numero53b);
 var numero54b = Math.random()*items2.length;
    numero54b = Math.floor(numero54b);



var items3 = new Array
    items3[0]= "https://i.ibb.co/hRrsJ5P/bitcoin.jpg"
    items3[1]= "https://i.ibb.co/hRrsJ5P/bitcoin.jpg"
    items3[2]= "https://i.ibb.co/hRrsJ5P/bitcoin.jpg"
    items3[3]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items3[4]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items3[5]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items3[6]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items3[7]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items3[8]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[9]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[10]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[11]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[12]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[13]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[14]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[15]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[16]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[17]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[18]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[19]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[20]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[21]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[22]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[23]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[24]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[25]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[26]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[27]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[28]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[29]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[30]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[31]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[32]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[33]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[34]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[35]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items3[36]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items3[37]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items3[38]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items3[39]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items3[40]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items3[41]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items3[42]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items3[43]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items3[44]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[45]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[46]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[47]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[48]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[49]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[50]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[51]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[52]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items3[53]= "https://i.ibb.co/0jqRTQJ/oro.jpg"

 var numero1c = Math.random()*items3.length;
    numero1c = Math.floor(numero1c);
 var numero2c = Math.random()*items3.length;
    numero2c = Math.floor(numero2c);
 var numero3c = Math.random()*items3.length;
    numero3c = Math.floor(numero3c);
 var numero4c = Math.random()*items3.length;
    numero4c = Math.floor(numero4c);
 var numero5c = Math.random()*items3.length;
    numero5c = Math.floor(numero5c);
 var numero6c = Math.random()*items3.length;
    numero6c = Math.floor(numero6c);
 var numero7c = Math.random()*items3.length;
    numero7c = Math.floor(numero7c);
 var numero8c = Math.random()*items3.length;
    numero8c = Math.floor(numero8c);
 var numero9c = Math.random()*items3.length;
    numero9c = Math.floor(numero9c);


 var numero10c = Math.random()*items3.length;
    numero10c = Math.floor(numero10c);  
 var numero11c = Math.random()*items3.length;
    numero11c = Math.floor(numero11c); 
 var numero12c = Math.random()*items3.length;
    numero12c = Math.floor(numero12c); 
 var numero13c = Math.random()*items3.length;
    numero13c = Math.floor(numero13c); 
 var numero14c = Math.random()*items3.length;
    numero14c = Math.floor(numero14c); 
 var numero15c = Math.random()*items3.length;
    numero15c = Math.floor(numero15c); 
 var numero16c = Math.random()*items3.length;
    numero16c = Math.floor(numero16c);  
 var numero17c = Math.random()*items3.length;
    numero17c = Math.floor(numero17c); 
 var numero18c = Math.random()*items3.length;
    numero18c = Math.floor(numero18c); 


 var numero19c = Math.random()*items3.length;
    numero19c = Math.floor(numero19c);    
 var numero20c = Math.random()*items3.length;
    numero20c = Math.floor(numero20c); 
 var numero21c = Math.random()*items3.length;
    numero21c = Math.floor(numero21c); 
 var numero22c = Math.random()*items3.length;
    numero22c = Math.floor(numero22c); 
 var numero23c = Math.random()*items3.length;
    numero23c = Math.floor(numero23c); 
 var numero24c = Math.random()*items3.length;
    numero24c = Math.floor(numero24c); 
 var numero25c = Math.random()*items3.length;
    numero25c = Math.floor(numero25c); 
 var numero26c = Math.random()*items3.length;
    numero26c = Math.floor(numero26c);
 var numero27c = Math.random()*items3.length;
    numero27c = Math.floor(numero27c);


 var numero28c = Math.random()*items3.length;
    numero28c = Math.floor(numero28c);    
 var numero29c = Math.random()*items3.length;
    numero29c = Math.floor(numero29c); 
 var numero30c = Math.random()*items3.length;
    numero30c = Math.floor(numero30c); 
 var numero31c = Math.random()*items3.length;
    numero31c = Math.floor(numero31c); 
 var numero32c = Math.random()*items3.length;
    numero32c = Math.floor(numero32c); 
 var numero33c = Math.random()*items3.length;
    numero33c = Math.floor(numero32c); 
 var numero34c = Math.random()*items3.length;
    numero34c = Math.floor(numero34c); 
 var numero35c = Math.random()*items3.length;
    numero35c = Math.floor(numero35c);
 var numero36c = Math.random()*items3.length;
    numero36c = Math.floor(numero36c);


 var numero37c = Math.random()*items3.length;
    numero37c = Math.floor(numero37c);    
 var numero38c = Math.random()*items3.length;
    numero38c = Math.floor(numero38c); 
 var numero39c = Math.random()*items3.length;
    numero39c = Math.floor(numero39c); 
 var numero40c = Math.random()*items3.length;
    numero40c = Math.floor(numero40c); 
 var numero41c = Math.random()*items3.length;
    numero41c = Math.floor(numero41c); 
 var numero42c = Math.random()*items3.length;
    numero42c = Math.floor(numero42c); 
 var numero43c = Math.random()*items3.length;
    numero43c = Math.floor(numero43c); 
 var numero44c = Math.random()*items3.length;
    numero44c = Math.floor(numero44c);
 var numero45c = Math.random()*items3.length;
    numero45c = Math.floor(numero45c); 


 var numero46c = Math.random()*items3.length;
    numero46c = Math.floor(numero46c);    
 var numero47c = Math.random()*items3.length;
    numero47c = Math.floor(numero47c); 
 var numero48c = Math.random()*items3.length;
    numero48c = Math.floor(numero48c); 
 var numero49c = Math.random()*items3.length;
    numero49c = Math.floor(numero49c); 
 var numero50c = Math.random()*items3.length;
    numero50c = Math.floor(numero50c); 
 var numero51c = Math.random()*items3.length;
    numero51c = Math.floor(numero51c); 
 var numero52c = Math.random()*items3.length;
    numero52c = Math.floor(numero52c); 
 var numero53c = Math.random()*items3.length;
    numero53c = Math.floor(numero53c);
 var numero54c = Math.random()*items3.length;
    numero54c = Math.floor(numero54c);

var suerte= new Array
     suerte[0]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
     suerte[1]= "https://i.ibb.co/cvST1m8/diamante.jpg"
     suerte[2]= "https://i.ibb.co/hRrsJ5P/bitcoin.jpg"

 var numeros1 = Math.random()*suerte.length;
    numeros1 = Math.floor(numeros1); 

 var numeros2 = Math.random()*suerte.length;
    numeros2 = Math.floor(numeros2);

 var numeros3 = Math.random()*suerte.length;
    numeros3 = Math.floor(numeros3);



var puntos = 0;
var bitcoin = 0;
var diamante = 0;
var oro = 0;
var carbon = 0;



dibujarscore();

function dibujarscore() {

  document.getElementById('puntos2').innerHTML =puntos;}

 var click1b = 0;
 var click1d = 0;
 var click1o = 0;

 var click2b = 0;
 var click2d = 0;
 var click2o = 0;

 var click3b = 0;
 var click3d = 0;
 var click3o = 0;

 var click4b = 0;
 var click4d = 0;
 var click4o = 0;

 var click5b = 0;
 var click5d = 0;
 var click5o = 0;

 var click6b = 0;
 var click6d = 0;
 var click6o = 0;

 var click7b = 0;
 var click7d = 0;
 var click7o = 0;

 var click8b = 0;
 var click8d = 0;
 var click8o = 0;

 var click9b = 0;
 var click9d = 0;
 var click9o = 0;


 var click10b = 0;
 var click10d = 0;
 var click10o = 0;

 var click11b = 0;
 var click11d = 0;
 var click11o = 0;

 var click12b = 0;
 var click12d = 0;
 var click12o = 0;

 var click13b = 0;
 var click13d = 0;
 var click13o = 0;

 var click14b = 0;
 var click14d = 0;
 var click14o = 0;

 var click15b = 0;
 var click15d = 0;
 var click15o = 0;

 var click16b = 0;
 var click16d = 0;
 var click16o = 0;

 var click17b = 0;
 var click17d = 0;
 var click17o = 0;

 var click18b = 0;
 var click18d = 0;
 var click18o = 0;


 var click19b = 0;
 var click19d = 0;
 var click19o = 0;

 var click20b = 0;
 var click20d = 0;
 var click20o = 0;

 var click21b = 0;
 var click21d = 0;
 var click21o = 0;

 var click22b = 0;
 var click22d = 0;
 var click22o = 0;

 var click23b = 0;
 var click23d = 0;
 var click23o = 0;

 var click24b = 0;
 var click24d = 0;
 var click24o = 0;

 var click25b = 0;
 var click25d = 0;
 var click25o = 0;

 var click26b = 0;
 var click26d = 0;
 var click26o = 0;

 var click27b = 0;
 var click27d = 0;
 var click27o = 0;


 var click28b = 0;
 var click28d = 0;
 var click28o = 0;

 var click29b = 0;
 var click29d = 0;
 var click29o = 0;

 var click30b = 0;
 var click30d = 0;
 var click30o = 0;

 var click31b = 0;
 var click31d = 0;
 var click31o = 0;

 var click32b = 0;
 var click32d = 0;
 var click32o = 0;

 var click33b = 0;
 var click33d = 0;
 var click33o = 0;

 var click34b = 0;
 var click34d = 0;
 var click34o = 0;

 var click35b = 0;
 var click35d = 0;
 var click35o = 0;

 var click36b = 0;
 var click36d = 0;
 var click36o = 0;


var click37b = 0;
 var click37d = 0;
 var click37o = 0;

 var click38b = 0;
 var click38d = 0;
 var click38o = 0;

 var click39b = 0;
 var click39d = 0;
 var click39o = 0;

 var click40b = 0;
 var click40d = 0;
 var click40o = 0;

 var click41b = 0;
 var click41d = 0;
 var click41o = 0;

 var click42b = 0;
 var click42d = 0;
 var click42o = 0;

 var click43b = 0;
 var click43d = 0;
 var click43o = 0;

 var click44b = 0;
 var click44d = 0;
 var click44o = 0;

 var click45b = 0;
 var click45d = 0;
 var click45o = 0;


var click46b = 0;
 var click46d = 0;
 var click46o = 0;

 var click47b = 0;
 var click47d = 0;
 var click47o = 0;

 var click48b = 0;
 var click48d = 0;
 var click48o = 0;

 var click49b = 0;
 var click49d = 0;
 var click49o = 0;

 var click50b = 0;
 var click50d = 0;
 var click50o = 0;

 var click51b = 0;
 var click51d = 0;
 var click51o = 0;

 var click52b = 0;
 var click52d = 0;
 var click52o = 0;

 var click53b = 0;
 var click53d = 0;
 var click53o = 0;

 var click54b = 0;
 var click54d = 0;
 var click54o = 0;

function a1() {
    click1b -= 1;
    click1d -= 1;
    click1o -= 1;
if (document.getElementById('a1').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a1').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b1();
}

if (document.getElementById('a1').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a1').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b1();
}



  if (MartilloEquipado == 1) {
    if (document.getElementById('a1').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a1').src = suerte[numeros1];
        b1();
    }
  }

  if (document.getElementById('a1').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a1').src=items1[numero1a];
    }
    if (Suerte == 1) {
        document.getElementById('a1').src=items1[numero1a];
    }
    if (Suerte == 2) {
        document.getElementById('a1').src=items2[numero1b];
    }
    if (Suerte == 3) {
        document.getElementById('a1').src=items3[numero1c];
    }
    
    b1();
 }
 if (document.getElementById('a1').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a1').src= suerte[numeros1];
    document.getElementById('a1').style.animationName= "";
    document.getElementById('a1').style.animationDuration= "";
    document.getElementById('a1').style.animationIterationCount= "";
    b1();
 }
 if (click1b == 0) {
    document.getElementById('a1').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click1d == 0) {
    document.getElementById('a1').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click1o == 0) {
    document.getElementById('a1').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 
 function b1() {

 if (document.getElementById('a1').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click1b = 6;
    }
    if (Velocidad == 1) {
        click1b = 5;
    }
    if (Velocidad == 2) {
        click1b = 4;
    }
    if (Velocidad == 3) {
        click1b = 3;
  }}
 
 if (document.getElementById('a1').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click1d = 5;
    }
    if (Velocidad == 1) {
        click1d = 4;
    }
    if (Velocidad == 2) {
        click1d = 3;
    }
    if (Velocidad == 3) {
        click1d = 2;
  }}
    
 if (document.getElementById('a1').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click1o = 4;
    }
    if (Velocidad == 1) {
        click1o = 3;
    }
    if (Velocidad == 2) {
        click1o = 2;
    }
    if (Velocidad == 3) {
        click1o = 1;
  }}
 }                         

 function a2() {
    click2b -= 1;
    click2d -= 1;
    click2o -= 1;

if (document.getElementById('a2').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a2').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b2();
}

if (document.getElementById('a2').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a2').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b2();
}


  if (MartilloEquipado == 1) {
    if (document.getElementById('a2').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a2').src = suerte[numeros2];
        b2();
    }
  }

  if (document.getElementById('a2').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a2').src=items1[numero2a];
    }
    if (Suerte == 1) {
        document.getElementById('a2').src=items1[numero2a];
    }
    if (Suerte == 2) {
        document.getElementById('a2').src=items2[numero2b];
    }
    if (Suerte == 3) {
        document.getElementById('a2').src=items3[numero2c];
    }
    b2();
 }
 if (document.getElementById('a2').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a2').src= suerte[numeros2];
    document.getElementById('a2').style.animationName= "";
    document.getElementById('a2').style.animationDuration= "";
    document.getElementById('a2').style.animationIterationCount= "";
    b2();
 }
 if (click2b == 0) {
    document.getElementById('a2').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click2d == 0) {
    document.getElementById('a2').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click2o == 0) {
    document.getElementById('a2').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b2() {

 if (document.getElementById('a2').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click2b = 6;
    }
    if (Velocidad == 1) {
        click2b = 5;
    }
    if (Velocidad == 2) {
        click2b = 4;
    }
    if (Velocidad == 3) {
        click2b = 3;
  }}
 
 if (document.getElementById('a2').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click2d = 5;
    }
    if (Velocidad == 1) {
        click2d = 4;
    }
    if (Velocidad == 2) {
        click2d = 3;
    }
    if (Velocidad == 3) {
        click2d = 2;
  }}
    
 if (document.getElementById('a2').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click2o = 4;
    }
    if (Velocidad == 1) {
        click2o = 3;
    }
    if (Velocidad == 2) {
        click2o = 2;
    }
    if (Velocidad == 3) {
        click2o = 1;
  }}}                          

 function a3() {
    click3b -= 1;
    click3d -= 1;
    click3o -= 1;

if (document.getElementById('a3').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a3').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b3();
}

if (document.getElementById('a3').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a3').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b3();
}

   if (MartilloEquipado == 1) {
    if (document.getElementById('a3').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a3').src = suerte[numeros3];
        b3();
    }
  }

  if (document.getElementById('a3').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a3').src=items1[numero3a];
    }
    if (Suerte == 1) {
        document.getElementById('a3').src=items1[numero3a];
    }
    if (Suerte == 2) {
        document.getElementById('a3').src=items2[numero3b];
    }
    if (Suerte == 3) {
        document.getElementById('a3').src=items3[numero3c];
    }
    b3();
 }
 if (document.getElementById('a3').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a3').src= suerte[numeros3];
    document.getElementById('a3').style.animationName= "";
    document.getElementById('a3').style.animationDuration= "";
    document.getElementById('a3').style.animationIterationCount= "";
    b3();
 }
 if (click3b == 0) {
    document.getElementById('a3').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click3d == 0) {
    document.getElementById('a3').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click3o == 0) {
    document.getElementById('a3').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b3() {

 if (document.getElementById('a3').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
   if (Velocidad == 0) {
        click3b = 6;
    }
    if (Velocidad == 1) {
        click3b = 5;
    }
    if (Velocidad == 2) {
        click3b = 4;
    }
    if (Velocidad == 3) {
        click3b = 3;
  }}
 
 if (document.getElementById('a3').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click3d = 5;
    }
    if (Velocidad == 1) {
        click3d = 4;
    }
    if (Velocidad == 2) {
        click3d = 3;
    }
    if (Velocidad == 3) {
        click3d = 2;
  }}
    
 if (document.getElementById('a3').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click3o = 4;
    }
    if (Velocidad == 1) {
        click3o = 3;
    }
    if (Velocidad == 2) {
        click3o = 2;
    }
    if (Velocidad == 3) {
        click3o = 1;
  }}}                          

 function a4() {
    click4b -= 1;
    click4d -= 1;
    click4o -= 1;

if (document.getElementById('a4').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a4').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b4();
}

if (document.getElementById('a4').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a4').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b4();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a4').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a4').src = suerte[numeros1];
        b4();
    }
  }

  if (document.getElementById('a4').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a4').src=items1[numero4a];
    }
    if (Suerte == 1) {
        document.getElementById('a4').src=items1[numero4a];
    }
    if (Suerte == 2) {
        document.getElementById('a4').src=items2[numero4b];
    }
    if (Suerte == 3) {
        document.getElementById('a4').src=items3[numero4c];
    }
    b4();
 }
 if (document.getElementById('a4').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a4').src= suerte[numeros1];
    document.getElementById('a4').style.animationName= "";
    document.getElementById('a4').style.animationDuration= "";
    document.getElementById('a4').style.animationIterationCount= "";
    b4();
 }
 if (click4b == 0) {
    document.getElementById('a4').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click4d == 0) {
    document.getElementById('a4').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click4o == 0) {
    document.getElementById('a4').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b4() {

 if (document.getElementById('a4').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
     if (Velocidad == 0) {
        click4b = 6;
    }
    if (Velocidad == 1) {
        click4b = 5;
    }
    if (Velocidad == 2) {
        click4b = 4;
    }
    if (Velocidad == 3) {
        click4b = 3;
  }}
 if (document.getElementById('a4').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
     if (Velocidad == 0) {
        click4d = 5;
    }
    if (Velocidad == 1) {
        click4d = 4;
    }
    if (Velocidad == 2) {
        click4d = 3;
    }
    if (Velocidad == 3) {
        click4d = 2;
  }}   
 if (document.getElementById('a4').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
     if (Velocidad == 0) {
        click4o = 4;
    }
    if (Velocidad == 1) {
        click4o = 3;
    }
    if (Velocidad == 2) {
        click4o = 2;
    }
    if (Velocidad == 3) {
        click4o = 1;
  }}}                         

 function a5() {
    click5b -= 1;
    click5d -= 1;
    click5o -= 1;

if (document.getElementById('a5').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a5').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b5();
}

if (document.getElementById('a5').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a5').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b5();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a5').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a5').src = suerte[numeros2];
        b5();
    }
  }

  if (document.getElementById('a5').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a5').src=items1[numero5a];
    }
    if (Suerte == 1) {
        document.getElementById('a5').src=items1[numero5a];
    }
    if (Suerte == 2) {
        document.getElementById('a5').src=items2[numero5b];
    }
    if (Suerte == 3) {
        document.getElementById('a5').src=items3[numero5c];
    }
    b5();
 }
 if (document.getElementById('a5').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a5').src= suerte[numeros2];
    document.getElementById('a5').style.animationName= "";
    document.getElementById('a5').style.animationDuration= "";
    document.getElementById('a5').style.animationIterationCount= "";
    b5();
 }
 if (click5b == 0) {
    document.getElementById('a5').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click5d == 0) {
    document.getElementById('a5').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click5o == 0) {
    document.getElementById('a5').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b5() {

 if (document.getElementById('a5').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click5b = 6;
    }
    if (Velocidad == 1) {
        click5b = 5;
    }
    if (Velocidad == 2) {
        click5b = 4;
    }
    if (Velocidad == 3) {
        click5b = 3;
  }}
 
 if (document.getElementById('a5').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click5d = 5;
    }
    if (Velocidad == 1) {
        click5d = 4;
    }
    if (Velocidad == 2) {
        click5d = 3;
    }
    if (Velocidad == 3) {
        click5d = 2;
  }}
    
 if (document.getElementById('a5').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click5o = 4;
    }
    if (Velocidad == 1) {
        click5o = 3;
    }
    if (Velocidad == 2) {
        click5o = 2;
    }
    if (Velocidad == 3) {
        click5o = 1;
  }}}                         

 function a6() {
    click6b -= 1;
    click6d -= 1;
    click6o -= 1;

if (document.getElementById('a6').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a6').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b6();
}

if (document.getElementById('a6').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a6').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b6();
}

   if (MartilloEquipado == 1) {
    if (document.getElementById('a6').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a6').src = suerte[numeros3];
        b6();
    }
   }

  if (document.getElementById('a6').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a6').src=items1[numero6a];
    }
    if (Suerte == 1) {
        document.getElementById('a6').src=items1[numero6a];
    }
    if (Suerte == 2) {
        document.getElementById('a6').src=items2[numero6b];
    }
    if (Suerte == 3) {
        document.getElementById('a6').src=items3[numero6c];
    }
    b6();
 }
 if (document.getElementById('a6').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a6').src= suerte[numeros3];
    document.getElementById('a6').style.animationName= "";
    document.getElementById('a6').style.animationDuration= "";
    document.getElementById('a6').style.animationIterationCount= "";
    b6();
 }
 if (click6b == 0) {
    document.getElementById('a6').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click6d == 0) {
    document.getElementById('a6').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click6o == 0) {
    document.getElementById('a6').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b6() {

 if (document.getElementById('a6').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click6b = 6;
    }
    if (Velocidad == 1) {
        click6b = 5;
    }
    if (Velocidad == 2) {
        click6b = 4;
    }
    if (Velocidad == 3) {
        click6b = 3;
  }}
 
 if (document.getElementById('a6').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click6d = 5;
    }
    if (Velocidad == 1) {
        click6d = 4;
    }
    if (Velocidad == 2) {
        click6d = 3;
    }
    if (Velocidad == 3) {
        click6d = 2;
  }}
    
 if (document.getElementById('a6').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click6o = 4;
    }
    if (Velocidad == 1) {
        click6o = 3;
    }
    if (Velocidad == 2) {
        click6o = 2;
    }
    if (Velocidad == 3) {
        click6o = 1;
  }}}                       

 function a7() {
    click7b -= 1;
    click7d -= 1;
    click7o -= 1;

if (document.getElementById('a7').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a7').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b7();
}

if (document.getElementById('a7').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a7').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b7();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a7').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a7').src = suerte[numeros1];
        b7();
    }
  }

  if (document.getElementById('a7').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a7').src=items1[numero7a];
    }
    if (Suerte == 1) {
        document.getElementById('a7').src=items1[numero7a];
    }
    if (Suerte == 2) {
        document.getElementById('a7').src=items2[numero7b];
    }
    if (Suerte == 3) {
        document.getElementById('a7').src=items3[numero7c];
    }
    b7();
 }
 if (document.getElementById('a7').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a7').src= suerte[numeros1];
    document.getElementById('a7').style.animationName= "";
    document.getElementById('a7').style.animationDuration= "";
    document.getElementById('a7').style.animationIterationCount= "";
    b7();
 }
 if (click7b == 0) {
    document.getElementById('a7').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click7d == 0) {
    document.getElementById('a7').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click7o == 0) {
    document.getElementById('a7').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b7() {

 if (document.getElementById('a7').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click7b = 6;
    }
    if (Velocidad == 1) {
        click7b = 5;
    }
    if (Velocidad == 2) {
        click7b = 4;
    }
    if (Velocidad == 3) {
        click7b = 3;
  }}
 
 if (document.getElementById('a7').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click7d = 5;
    }
    if (Velocidad == 1) {
        click7d = 4;
    }
    if (Velocidad == 2) {
        click7d = 3;
    }
    if (Velocidad == 3) {
        click7d = 2;
  }}
    
 if (document.getElementById('a7').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click7o = 4;
    }
    if (Velocidad == 1) {
        click7o = 3;
    }
    if (Velocidad == 2) {
        click7o = 2;
    }
    if (Velocidad == 3) {
        click7o = 1;
  }}}                         

 function a8() {
    click8b -= 1;
    click8d -= 1;
    click8o -= 1;

if (document.getElementById('a8').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a8').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b8();
}

if (document.getElementById('a8').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a8').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b8();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a8').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a8').src = suerte[numeros2];
        b8();
    }
  }
   
  if (document.getElementById('a8').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a8').src=items1[numero8a];
    }
    if (Suerte == 1) {
        document.getElementById('a8').src=items1[numero8a];
    }
    if (Suerte == 2) {
        document.getElementById('a8').src=items2[numero8b];
    }
    if (Suerte == 3) {
        document.getElementById('a8').src=items3[numero8c];
    }
    b8();
 }
 if (document.getElementById('a8').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a8').src= suerte[numeros2];
    document.getElementById('a8').style.animationName= "";
    document.getElementById('a8').style.animationDuration= "";
    document.getElementById('a8').style.animationIterationCount= "";
    b8();
 }
 if (click8b == 0) {
    document.getElementById('a8').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click8d == 0) {
    document.getElementById('a8').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click8o == 0) {
    document.getElementById('a8').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b8() {

 if (document.getElementById('a8').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click8b = 6;
    }
    if (Velocidad == 1) {
        click8b = 5;
    }
    if (Velocidad == 2) {
        click8b = 4;
    }
    if (Velocidad == 3) {
        click8b = 3;
  }}
 
 if (document.getElementById('a8').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click8d = 5;
    }
    if (Velocidad == 1) {
        click8d = 4;
    }
    if (Velocidad == 2) {
        click8d = 3;
    }
    if (Velocidad == 3) {
        click8d = 2;
  }}
    
 if (document.getElementById('a8').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click8o = 4;
    }
    if (Velocidad == 1) {
        click8o = 3;
    }
    if (Velocidad == 2) {
        click8o = 2;
    }
    if (Velocidad == 3) {
        click8o = 1;
  }}}                         

 function a9() {
    click9b -= 1;
    click9d -= 1;
    click9o -= 1;

if (document.getElementById('a9').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a9').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b9();
}

if (document.getElementById('a9').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a9').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b9();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a9').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a9').src = suerte[numeros3];
        b9();

    }
  }

  if (document.getElementById('a9').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a9').src=items1[numero9a];
    }
    if (Suerte == 1) {
        document.getElementById('a9').src=items1[numero9a];
    }
    if (Suerte == 2) {
        document.getElementById('a9').src=items2[numero9b];
    }
    if (Suerte == 3) {
        document.getElementById('a9').src=items3[numero9c];
    }
    b9();
 }
 if (document.getElementById('a9').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a9').src= suerte[numeros3];
    document.getElementById('a9').style.animationName= "";
    document.getElementById('a9').style.animationDuration= "";
    document.getElementById('a9').style.animationIterationCount= "";
    b9();
 }
 if (click9b == 0) {
    document.getElementById('a9').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click9d == 0) {
    document.getElementById('a9').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3
    diamante += 1;
    dibujarscore();
    
 }
 if (click9o == 0) {
    document.getElementById('a9').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b9() {

 if (document.getElementById('a9').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click9b = 6;
    }
    if (Velocidad == 1) {
        click9b = 5;
    }
    if (Velocidad == 2) {
        click9b = 4;
    }
    if (Velocidad == 3) {
        click9b = 3;
  }}
 
 if (document.getElementById('a9').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click9d = 5;
    }
    if (Velocidad == 1) {
        click9d = 4;
    }
    if (Velocidad == 2) {
        click9d = 3;
    }
    if (Velocidad == 3) {
        click9d = 2;
  }}
    
 if (document.getElementById('a9').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click9o = 4;
    }
    if (Velocidad == 1) {
        click9o = 3;
    }
    if (Velocidad == 2) {
        click9o = 2;
    }
    if (Velocidad == 3) {
        click9o = 1;
  }}}                         


function a10() {
    click10b -= 1;
    click10d -= 1;
    click10o -= 1;

if (document.getElementById('a10').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a10').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b10();
}

if (document.getElementById('a10').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a10').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b10();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a10').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a10').src = suerte[numeros1];
        b10();
    }
  }

  if (document.getElementById('a10').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a10').src=items1[numero10a];
    }
    if (Suerte == 1) {
        document.getElementById('a10').src=items1[numero10a];
    }
    if (Suerte == 2) {
        document.getElementById('a10').src=items2[numero10b];
    }
    if (Suerte == 3) {
        document.getElementById('a10').src=items3[numero10c];
    }
    b10();
 }
 if (document.getElementById('a10').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a10').src= suerte[numeros1];
    document.getElementById('a10').style.animationName= "";
    document.getElementById('a10').style.animationDuration= "";
    document.getElementById('a10').style.animationIterationCount= "";
    b10();
 }
 if (click10b == 0) {
    document.getElementById('a10').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click10d == 0) {
    document.getElementById('a10').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click10o == 0) {
    document.getElementById('a10').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b10() {

 if (document.getElementById('a10').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click10b = 6;
    }
    if (Velocidad == 1) {
        click10b = 5;
    }
    if (Velocidad == 2) {
        click10b = 4;
    }
    if (Velocidad == 3) {
        click10b = 3;
  }}
 
 if (document.getElementById('a10').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click10d = 5;
    }
    if (Velocidad == 1) {
        click10d = 4;
    }
    if (Velocidad == 2) {
        click10d = 3;
    }
    if (Velocidad == 3) {
        click10d = 2;
  }}
    
 if (document.getElementById('a10').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click10d = 4;
    }
    if (Velocidad == 1) {
        click10d = 3;
    }
    if (Velocidad == 2) {
        click10d = 2;
    }
    if (Velocidad == 3) {
        click10d = 1;
  }}}                          

 function a11() {
    click11b -= 1;
    click11d -= 1;
    click11o -= 1;

if (document.getElementById('a11').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a11').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b11();
}

if (document.getElementById('a11').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a11').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b11();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a11').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a11').src = suerte[numeros2];
        b11();
    }
  }

  if (document.getElementById('a11').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a11').src=items1[numero11a];
    }
    if (Suerte == 1) {
        document.getElementById('a11').src=items1[numero11a];
    }
    if (Suerte == 2) {
        document.getElementById('a11').src=items2[numero11b];
    }
    if (Suerte == 3) {
        document.getElementById('a11').src=items3[numero11c];
    }
    b11();
 }
 if (document.getElementById('a11').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a11').src= suerte[numeros2];
    document.getElementById('a11').style.animationName= "";
    document.getElementById('a11').style.animationDuration= "";
    document.getElementById('a11').style.animationIterationCount= "";
    b11();
 }
 if (click11b == 0) {
    document.getElementById('a11').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click11d == 0) {
    document.getElementById('a11').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click11o == 0) {
    document.getElementById('a11').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b11() {

 if (document.getElementById('a11').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click11b = 6;
    }
    if (Velocidad == 1) {
        click11b = 5;
    }
    if (Velocidad == 2) {
        click11b = 4;
    }
    if (Velocidad == 3) {
        click11b = 3;
  }}
 
 if (document.getElementById('a11').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click11d = 5;
    }
    if (Velocidad == 1) {
        click11d = 4;
    }
    if (Velocidad == 2) {
        click11d = 3;
    }
    if (Velocidad == 3) {
        click11d = 2;
  }}
    
 if (document.getElementById('a11').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click11o = 4;
    }
    if (Velocidad == 1) {
        click11o = 3;
    }
    if (Velocidad == 2) {
        click11o = 2;
    }
    if (Velocidad == 3) {
        click11o = 1;
  }}}                          

 function a12() {
    click12b -= 1;
    click12d -= 1;
    click12o -= 1;

if (document.getElementById('a12').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a12').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b12();
}

if (document.getElementById('a12').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a12').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b12();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a12').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a12').src = suerte[numeros3];
        b12();
    }
  }

  if (document.getElementById('a12').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a12').src=items1[numero12a];
    }
    if (Suerte == 1) {
        document.getElementById('a12').src=items1[numero12a];
    }
    if (Suerte == 2) {
        document.getElementById('a12').src=items2[numero12b];
    }
    if (Suerte == 3) {
        document.getElementById('a12').src=items3[numero12c];
    }
    b12();
 }
 if (document.getElementById('a12').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a12').src= suerte[numeros3];
    document.getElementById('a12').style.animationName= "";
    document.getElementById('a12').style.animationDuration= "";
    document.getElementById('a12').style.animationIterationCount= "";
    b12();
 }
 if (click12b == 0) {
    document.getElementById('a12').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click12d == 0) {
    document.getElementById('a12').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click12o == 0) {
    document.getElementById('a12').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b12() {

 if (document.getElementById('a12').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click12b = 6;
    }
    if (Velocidad == 1) {
        click12b = 5;
    }
    if (Velocidad == 2) {
        click12b = 4;
    }
    if (Velocidad == 3) {
        click12b = 3;
  }}
 
 if (document.getElementById('a12').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click12d = 5;
    }
    if (Velocidad == 1) {
        click12d = 4;
    }
    if (Velocidad == 2) {
        click12d = 3;
    }
    if (Velocidad == 3) {
        click12d = 2;
  }}
    
 if (document.getElementById('a12').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click12o = 4;
    }
    if (Velocidad == 1) {
        click12o = 3;
    }
    if (Velocidad == 2) {
        click12o = 2;
    }
    if (Velocidad == 3) {
        click12o = 1;
  }}}                          

 function a13() {
    click13b -= 1;
    click13d -= 1;
    click13o -= 1;

if (document.getElementById('a13').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a13').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b13();
}

if (document.getElementById('a13').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a13').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b13();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a13').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a13').src = suerte[numeros1];
        b13();
    }
  }

  if (document.getElementById('a13').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a13').src=items1[numero13a];
    }
    if (Suerte == 1) {
        document.getElementById('a13').src=items1[numero13a];
    }
    if (Suerte == 2) {
        document.getElementById('a13').src=items2[numero13b];
    }
    if (Suerte == 3) {
        document.getElementById('a13').src=items3[numero13c];
    }
    b13();
 }
 if (document.getElementById('a13').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a13').src= suerte[numeros1];
    document.getElementById('a13').style.animationName= "";
    document.getElementById('a13').style.animationDuration= "";
    document.getElementById('a13').style.animationIterationCount= "";
    b13();
 }
 if (click13b == 0) {
    document.getElementById('a13').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click13d == 0) {
    document.getElementById('a13').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click13o == 0) {
    document.getElementById('a13').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b13() {

 if (document.getElementById('a13').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click13b = 6;
    }
    if (Velocidad == 1) {
        click13b = 5;
    }
    if (Velocidad == 2) {
        click13b = 4;
    }
    if (Velocidad == 3) {
        click13b = 3;
  }}
 
 if (document.getElementById('a13').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click13d = 5;
    }
    if (Velocidad == 1) {
        click13d = 4;
    }
    if (Velocidad == 2) {
        click13d = 3;
    }
    if (Velocidad == 3) {
        click13d = 2;
  }}
    
 if (document.getElementById('a13').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click13o = 4;
    }
    if (Velocidad == 1) {
        click13o = 3;
    }
    if (Velocidad == 2) {
        click13o = 2;
    }
    if (Velocidad == 3) {
        click13o = 1;
  }}}                          

 function a14() {
    click14b -= 1;
    click14d -= 1;
    click14o -= 1;

if (document.getElementById('a14').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a14').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b14();
}

if (document.getElementById('a14').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a14').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b14();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a14').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a14').src = suerte[numeros2];
        b14();
    }
  }

  if (document.getElementById('a14').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a14').src=items1[numero14a];
    }
    if (Suerte == 1) {
        document.getElementById('a14').src=items1[numero14a];
    }
    if (Suerte == 2) {
        document.getElementById('a14').src=items2[numero14b];
    }
    if (Suerte == 3) {
        document.getElementById('a14').src=items3[numero14c];
    }
    b14();
 }
 if (document.getElementById('a14').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a14').src= suerte[numeros2];
    document.getElementById('a14').style.animationName= "";
    document.getElementById('a14').style.animationDuration= "";
    document.getElementById('a14').style.animationIterationCount= "";
    b14();
 }
 if (click14b == 0) {
    document.getElementById('a14').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click14d == 0) {
    document.getElementById('a14').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click14o == 0) {
    document.getElementById('a14').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b14() {

 if (document.getElementById('a14').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click14b = 6;
    }
    if (Velocidad == 1) {
        click14b = 5;
    }
    if (Velocidad == 2) {
        click14b = 4;
    }
    if (Velocidad == 3) {
        click14b = 3;
  }}
 
 if (document.getElementById('a14').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click14d = 5;
    }
    if (Velocidad == 1) {
        click14d = 4;
    }
    if (Velocidad == 2) {
        click14d = 3;
    }
    if (Velocidad == 3) {
        click14d = 2;
  }}
    
 if (document.getElementById('a14').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click14o = 4;
    }
    if (Velocidad == 1) {
        click14o = 3;
    }
    if (Velocidad == 2) {
        click14o = 2;
    }
    if (Velocidad == 3) {
        click14o = 1;
  }}}                         

 function a15() {
    click15b -= 1;
    click15d -= 1;
    click15o -= 1;

if (document.getElementById('a15').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a15').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b15();
}

if (document.getElementById('a15').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a15').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b15();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a15').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a15').src = suerte[numeros3];
        b15();
    }
  }

  if (document.getElementById('a15').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a15').src=items1[numero15a];
    }
    if (Suerte == 1) {
        document.getElementById('a15').src=items1[numero15a];
    }
    if (Suerte == 2) {
        document.getElementById('a15').src=items2[numero15b];
    }
    if (Suerte == 3) {
        document.getElementById('a15').src=items3[numero15c];
    }
    b15();
 }
 if (document.getElementById('a15').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a15').src= suerte[numeros3];
    document.getElementById('a15').style.animationName= "";
    document.getElementById('a15').style.animationDuration= "";
    document.getElementById('a15').style.animationIterationCount= "";
    b15();
 }
 if (click15b == 0) {
    document.getElementById('a15').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click15d == 0) {
    document.getElementById('a15').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click15o == 0) {
    document.getElementById('a15').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b15() {

 if (document.getElementById('a15').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click15b = 6;
    }
    if (Velocidad == 1) {
        click15b = 5;
    }
    if (Velocidad == 2) {
        click15b = 4;
    }
    if (Velocidad == 3) {
        click15b = 3;
  }}
 
 if (document.getElementById('a15').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click15d = 5;
    }
    if (Velocidad == 1) {
        click15d = 4;
    }
    if (Velocidad == 2) {
        click15d = 3;
    }
    if (Velocidad == 3) {
        click15d = 2;
  }}
    
 if (document.getElementById('a15').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click15d = 4;
    }
    if (Velocidad == 1) {
        click15d = 3;
    }
    if (Velocidad == 2) {
        click15d = 2;
    }
    if (Velocidad == 3) {
        click15d = 1;
  }}}                         

 function a16() {
    click16b -= 1;
    click16d -= 1;
    click16o -= 1;

if (document.getElementById('a16').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a16').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b16();
}

if (document.getElementById('a16').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a16').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b16();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a16').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a16').src = suerte[numeros1];
        b16();
    }
  }


  if (document.getElementById('a16').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a16').src=items1[numero16a];
    }
    if (Suerte == 1) {
        document.getElementById('a16').src=items1[numero16a];
    }
    if (Suerte == 2) {
        document.getElementById('a16').src=items2[numero16b];
    }
    if (Suerte == 3) {
        document.getElementById('a16').src=items3[numero16c];
    }
    b16();
 }
 if (document.getElementById('a16').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a16').src= suerte[numeros1];
    document.getElementById('a16').style.animationName= "";
    document.getElementById('a16').style.animationDuration= "";
    document.getElementById('a16').style.animationIterationCount= "";
    b16();
 }
 if (click16b == 0) {
    document.getElementById('a16').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click16d == 0) {
    document.getElementById('a16').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click16o == 0) {
    document.getElementById('a16').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b16() {

 if (document.getElementById('a16').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click16b = 6;
    }
    if (Velocidad == 1) {
        click16b = 5;
    }
    if (Velocidad == 2) {
        click16b = 4;
    }
    if (Velocidad == 3) {
        click16b = 3;
  }}
 
 if (document.getElementById('a16').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click16d = 5;
    }
    if (Velocidad == 1) {
        click16d = 4;
    }
    if (Velocidad == 2) {
        click16d = 3;
    }
    if (Velocidad == 3) {
        click16d = 2;
  }}
    
 if (document.getElementById('a16').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click16o = 4;
    }
    if (Velocidad == 1) {
        click16o = 3;
    }
    if (Velocidad == 2) {
        click16o = 2;
    }
    if (Velocidad == 3) {
        click16o = 1;
  }}}                         

 function a17() {
    click17b -= 1;
    click17d -= 1;
    click17o -= 1;

if (document.getElementById('a17').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a17').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b17();
}

if (document.getElementById('a17').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a17').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b17();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a17').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a17').src = suerte[numeros2];
        b17();
    }
  }

  if (document.getElementById('a17').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a17').src=items1[numero17a];
    }
    if (Suerte == 1) {
        document.getElementById('a17').src=items1[numero17a];
    }
    if (Suerte == 2) {
        document.getElementById('a17').src=items2[numero17b];
    }
    if (Suerte == 3) {
        document.getElementById('a17').src=items3[numero17c];
    }
    b17();
 }
 if (document.getElementById('a17').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a17').src= suerte[numeros2];
    document.getElementById('a17').style.animationName= "";
    document.getElementById('a17').style.animationDuration= "";
    document.getElementById('a17').style.animationIterationCount= "";
    b17();
 }
 if (click17b == 0) {
    document.getElementById('a17').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click17d == 0) {
    document.getElementById('a17').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click17o == 0) {
    document.getElementById('a17').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b17() {

 if (document.getElementById('a17').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click17b = 6;
    }
    if (Velocidad == 1) {
        click17b = 5;
    }
    if (Velocidad == 2) {
        click17b = 4;
    }
    if (Velocidad == 3) {
        click17b = 3;
  }}
 
 if (document.getElementById('a17').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click17d = 5;
    }
    if (Velocidad == 1) {
        click17d = 4;
    }
    if (Velocidad == 2) {
        click17d = 3;
    }
    if (Velocidad == 3) {
        click17d = 2;
  }}
    
 if (document.getElementById('a17').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click17o = 4;
    }
    if (Velocidad == 1) {
        click17o = 3;
    }
    if (Velocidad == 2) {
        click17o = 2;
    }
    if (Velocidad == 3) {
        click17o = 1;
  }}}                         

 function a18() {
    click18b -= 1;
    click18d -= 1;
    click18o -= 1;


if (document.getElementById('a18').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a18').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b18();
}

if (document.getElementById('a18').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a18').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b18();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a18').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a18').src = suerte[numeros3];
        b18();
    }
  }

  if (document.getElementById('a18').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a18').src=items1[numero18a];
    }
    if (Suerte == 1) {
        document.getElementById('a18').src=items1[numero18a];
    }
    if (Suerte == 2) {
        document.getElementById('a18').src=items2[numero18b];
    }
    if (Suerte == 3) {
        document.getElementById('a18').src=items3[numero18c];
    }
    b18();
 }
 if (document.getElementById('a18').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a18').src= suerte[numeros3];
    document.getElementById('a18').style.animationName= "";
    document.getElementById('a18').style.animationDuration= "";
    document.getElementById('a18').style.animationIterationCount= "";
    b18();
 }
 if (click18b == 0) {
    document.getElementById('a18').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click18d == 0) {
    document.getElementById('a18').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click18o == 0) {
    document.getElementById('a18').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b18() {

 if (document.getElementById('a18').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click18b = 6;
    }
    if (Velocidad == 1) {
        click18b = 5;
    }
    if (Velocidad == 2) {
        click18b = 4;
    }
    if (Velocidad == 3) {
        click18b = 3;
  }}
 
 if (document.getElementById('a18').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click18d = 5;
    }
    if (Velocidad == 1) {
        click18d = 4;
    }
    if (Velocidad == 2) {
        click18d = 3;
    }
    if (Velocidad == 3) {
        click18d = 2;
  }}
    
 if (document.getElementById('a18').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click18o = 4;
    }
    if (Velocidad == 1) {
        click18o = 3;
    }
    if (Velocidad == 2) {
        click18o = 2;
    }
    if (Velocidad == 3) {
        click18o = 1;
  }}}                        


function a19() {
    click19b -= 1;
    click19d -= 1;
    click19o -= 1;

if (document.getElementById('a19').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a19').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b19();
}

if (document.getElementById('a19').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a19').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b19();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a19').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a19').src = suerte[numeros1];
        b19();
    }
  }

  if (document.getElementById('a19').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a19').src=items1[numero19a];
    }
    if (Suerte == 1) {
        document.getElementById('a19').src=items1[numero19a];
    }
    if (Suerte == 2) {
        document.getElementById('a19').src=items2[numero19b];
    }
    if (Suerte == 3) {
        document.getElementById('a19').src=items3[numero19c];
    }
    b19();
 }
 if (document.getElementById('a19').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a19').src= suerte[numeros1];
    document.getElementById('a19').style.animationName= "";
    document.getElementById('a19').style.animationDuration= "";
    document.getElementById('a19').style.animationIterationCount= "";
    b19();
 }
 if (click19b == 0) {
    document.getElementById('a19').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click19d == 0) {
    document.getElementById('a19').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click19o == 0) {
    document.getElementById('a19').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b19() {

 if (document.getElementById('a19').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click19b = 6;
    }
    if (Velocidad == 1) {
        click19b = 5;
    }
    if (Velocidad == 2) {
        click19b = 4;
    }
    if (Velocidad == 3) {
        click19b = 3;
  }}
 
 if (document.getElementById('a19').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click19d = 5;
    }
    if (Velocidad == 1) {
        click19d = 4;
    }
    if (Velocidad == 2) {
        click19d = 3;
    }
    if (Velocidad == 3) {
        click19d = 2;
  }}
    
 if (document.getElementById('a19').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click19o = 4;
    }
    if (Velocidad == 1) {
        click19o = 3;
    }
    if (Velocidad == 2) {
        click19o = 2;
    }
    if (Velocidad == 3) {
        click19o = 1;
  }}}                          

 function a20() {
    click20b -= 1;
    click20d -= 1;
    click20o -= 1;

if (document.getElementById('a20').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a20').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b20();
}

if (document.getElementById('a20').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a20').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b20();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a20').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a20').src = suerte[numeros2];
        b20();
    }
  }

  if (document.getElementById('a20').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a20').src=items1[numero20a];
    }
    if (Suerte == 1) {
        document.getElementById('a20').src=items1[numero20a];
    }
    if (Suerte == 2) {
        document.getElementById('a20').src=items2[numero20b];
    }
    if (Suerte == 3) {
        document.getElementById('a20').src=items3[numero20c];
    }
    b20();
 }
 if (document.getElementById('a20').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a20').src= suerte[numeros2];
    document.getElementById('a20').style.animationName= "";
    document.getElementById('a20').style.animationDuration= "";
    document.getElementById('a20').style.animationIterationCount= "";
    b20();
 }
 if (click20b == 0) {
    document.getElementById('a20').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click20d == 0) {
    document.getElementById('a20').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click20o == 0) {
    document.getElementById('a20').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b20() {

 if (document.getElementById('a20').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click20b = 6;
    }
    if (Velocidad == 1) {
        click20b = 5;
    }
    if (Velocidad == 2) {
        click20b = 4;
    }
    if (Velocidad == 3) {
        click20b = 3;
  }}
 
 if (document.getElementById('a20').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click20d = 5;
    }
    if (Velocidad == 1) {
        click20d = 4;
    }
    if (Velocidad == 2) {
        click20d = 3;
    }
    if (Velocidad == 3) {
        click20d = 2;
  }}
    
 if (document.getElementById('a20').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click20o = 4;
    }
    if (Velocidad == 1) {
        click20o = 3;
    }
    if (Velocidad == 2) {
        click20o = 2;
    }
    if (Velocidad == 3) {
        click20o = 1;
  }}}                          

 function a21() {
    click21b -= 1;
    click21d -= 1;
    click21o -= 1;

if (document.getElementById('a21').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a21').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b21();
}

if (document.getElementById('a21').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a21').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b21();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a21').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a21').src = suerte[numeros3];
        b21();
    }
  }

  if (document.getElementById('a21').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a21').src=items1[numero21a];
    }
    if (Suerte == 1) {
        document.getElementById('a21').src=items1[numero21a];
    }
    if (Suerte == 2) {
        document.getElementById('a21').src=items2[numero21b];
    }
    if (Suerte == 3) {
        document.getElementById('a21').src=items3[numero21c];
    }
    b21();
 }
 if (document.getElementById('a21').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a21').src= suerte[numeros3];
    document.getElementById('a21').style.animationName= "";
    document.getElementById('a21').style.animationDuration= "";
    document.getElementById('a21').style.animationIterationCount= "";
    b21();
 }
 if (click21b == 0) {
    document.getElementById('a21').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click21d == 0) {
    document.getElementById('a21').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click21o == 0) {
    document.getElementById('a21').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b21() {

 if (document.getElementById('a21').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click21b = 6;
    }
    if (Velocidad == 1) {
        click21b = 5;
    }
    if (Velocidad == 2) {
        click21b = 4;
    }
    if (Velocidad == 3) {
        click21b = 3;
  }}
 
 if (document.getElementById('a21').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click21d = 5;
    }
    if (Velocidad == 1) {
        click21d = 4;
    }
    if (Velocidad == 2) {
        click21d = 3;
    }
    if (Velocidad == 3) {
        click21d = 2;
  }}
    
 if (document.getElementById('a21').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click21o = 4;
    }
    if (Velocidad == 1) {
        click21o = 3;
    }
    if (Velocidad == 2) {
        click21o = 2;
    }
    if (Velocidad == 3) {
        click21o = 1;
  }}}                          

 function a22() {
    click22b -= 1;
    click22d -= 1;
    click22o -= 1;

if (document.getElementById('a22').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a22').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b22();
}

if (document.getElementById('a22').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a22').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b22();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a22').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a22').src = suerte[numeros1];
        b22();
    }
  }

  if (document.getElementById('a22').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a22').src=items1[numero22a];
    }
    if (Suerte == 1) {
        document.getElementById('a22').src=items1[numero22a];
    }
    if (Suerte == 2) {
        document.getElementById('a22').src=items2[numero22b];
    }
    if (Suerte == 3) {
        document.getElementById('a22').src=items3[numero22c];
    }
    b22();
 }
 if (document.getElementById('a22').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a22').src= suerte[numeros1];
    document.getElementById('a22').style.animationName= "";
    document.getElementById('a22').style.animationDuration= "";
    document.getElementById('a22').style.animationIterationCount= "";
    b22();
 }
 if (click22b == 0) {
    document.getElementById('a22').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click22d == 0) {
    document.getElementById('a22').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click22o == 0) {
    document.getElementById('a22').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b22() {

 if (document.getElementById('a22').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click22b = 6;
    }
    if (Velocidad == 1) {
        click22b = 5;
    }
    if (Velocidad == 2) {
        click22b = 4;
    }
    if (Velocidad == 3) {
        click22b = 3;
  }}
 
 if (document.getElementById('a22').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click22d = 5;
    }
    if (Velocidad == 1) {
        click22d = 4;
    }
    if (Velocidad == 2) {
        click22d = 3;
    }
    if (Velocidad == 3) {
        click22d = 2;
  }}
    
 if (document.getElementById('a22').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click22d = 4;
    }
    if (Velocidad == 1) {
        click22d = 3;
    }
    if (Velocidad == 2) {
        click22d = 2;
    }
    if (Velocidad == 3) {
        click22d = 1;
  }}}                          

 function a23() {
    click23b -= 1;
    click23d -= 1;
    click23o -= 1;

if (document.getElementById('a23').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a23').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b23();
}

if (document.getElementById('a23').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a23').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b23();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a23').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a23').src = suerte[numeros2];
        b23();
    }
  }

  if (document.getElementById('a23').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a23').src=items1[numero23a];
    }
    if (Suerte == 1) {
        document.getElementById('a23').src=items1[numero23a];
    }
    if (Suerte == 2) {
        document.getElementById('a23').src=items2[numero23b];
    }
    if (Suerte == 3) {
        document.getElementById('a23').src=items3[numero23c];
    }
    b23();
 }
 if (document.getElementById('a23').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a23').src= suerte[numeros2];
    document.getElementById('a23').style.animationName= "";
    document.getElementById('a23').style.animationDuration= "";
    document.getElementById('a23').style.animationIterationCount= "";
    b23();
 }
 if (click23b == 0) {
    document.getElementById('a23').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click23d == 0) {
    document.getElementById('a23').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click23o == 0) {
    document.getElementById('a23').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b23() {

 if (document.getElementById('a23').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click23b = 6;
    }
    if (Velocidad == 1) {
        click23b = 5;
    }
    if (Velocidad == 2) {
        click23b = 4;
    }
    if (Velocidad == 3) {
        click23b = 3;
  }}
 
 if (document.getElementById('a23').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click23d = 5;
    }
    if (Velocidad == 1) {
        click23d = 4;
    }
    if (Velocidad == 2) {
        click23d = 3;
    }
    if (Velocidad == 3) {
        click23d = 2;
  }}
    
 if (document.getElementById('a23').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click23o = 4;
    }
    if (Velocidad == 1) {
        click23o = 3;
    }
    if (Velocidad == 2) {
        click23o = 2;
    }
    if (Velocidad == 3) {
        click23o = 1;
  }}}                         

 function a24() {
    click24b -= 1;
    click24d -= 1;
    click24o -= 1;

if (document.getElementById('a24').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a24').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b24();
}

if (document.getElementById('a24').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a24').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b24();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a24').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a24').src = suerte[numeros3];
        b24();
    }
  }

  if (document.getElementById('a24').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a24').src=items1[numero24a];
    }
    if (Suerte == 1) {
        document.getElementById('a24').src=items1[numero24a];
    }
    if (Suerte == 2) {
        document.getElementById('a24').src=items2[numero24b];
    }
    if (Suerte == 3) {
        document.getElementById('a24').src=items3[numero24c];
    }
    b24();
 }
 if (document.getElementById('a24').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a24').src= suerte[numeros3];
    document.getElementById('a24').style.animationName= "";
    document.getElementById('a24').style.animationDuration= "";
    document.getElementById('a24').style.animationIterationCount= "";
    b24();
 }
 if (click24b == 0) {
    document.getElementById('a24').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click24d == 0) {
    document.getElementById('a24').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click24o == 0) {
    document.getElementById('a24').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b24() {

 if (document.getElementById('a24').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click24b = 6;
    }
    if (Velocidad == 1) {
        click24b = 5;
    }
    if (Velocidad == 2) {
        click24b = 4;
    }
    if (Velocidad == 3) {
        click24b = 3;
  }}
 
 if (document.getElementById('a24').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click24d = 5;
    }
    if (Velocidad == 1) {
        click24d = 4;
    }
    if (Velocidad == 2) {
        click24d = 3;
    }
    if (Velocidad == 3) {
        click24d = 2;
  }}
    
 if (document.getElementById('a24').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click24o = 4;
    }
    if (Velocidad == 1) {
        click24o = 3;
    }
    if (Velocidad == 2) {
        click24o = 2;
    }
    if (Velocidad == 3) {
        click24o = 1;
  }}}                         

 function a25() {
    click25b -= 1;
    click25d -= 1;
    click25o -= 1;

if (document.getElementById('a25').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a25').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b25();
}

if (document.getElementById('a25').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a25').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b25();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a25').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a25').src = suerte[numeros1];
        b25();
    }
  }

  if (document.getElementById('a25').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a25').src=items1[numero25a];
    }
    if (Suerte == 1) {
        document.getElementById('a25').src=items1[numero25a];
    }
    if (Suerte == 2) {
        document.getElementById('a25').src=items2[numero25b];
    }
    if (Suerte == 3) {
        document.getElementById('a25').src=items3[numero25c];
    }
    b25();
 }
 if (document.getElementById('a25').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a25').src= suerte[numeros1];
    document.getElementById('a25').style.animationName= "";
    document.getElementById('a25').style.animationDuration= "";
    document.getElementById('a25').style.animationIterationCount= "";
    b25();
 }
 if (click25b == 0) {
    document.getElementById('a25').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click25d == 0) {
    document.getElementById('a25').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click25o == 0) {
    document.getElementById('a25').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b25() {

 if (document.getElementById('a25').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click25b = 6;
    }
    if (Velocidad == 1) {
        click25b = 5;
    }
    if (Velocidad == 2) {
        click25b = 4;
    }
    if (Velocidad == 3) {
        click25b = 3;
  }}
 
 if (document.getElementById('a25').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click25d = 5;
    }
    if (Velocidad == 1) {
        click25d = 4;
    }
    if (Velocidad == 2) {
        click25d = 3;
    }
    if (Velocidad == 3) {
        click25d = 2;
  }}
    
 if (document.getElementById('a25').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click25o = 4;
    }
    if (Velocidad == 1) {
        click25o = 3;
    }
    if (Velocidad == 2) {
        click25o = 2;
    }
    if (Velocidad == 3) {
        click25o = 1;
  }}}                         

 function a26() {
    click26b -= 1;
    click26d -= 1;
    click26o -= 1;


if (document.getElementById('a26').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a26').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b26();
}

if (document.getElementById('a26').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a26').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b26();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a26').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a26').src = suerte[numeros2];
        b26();
    }
  }

  if (document.getElementById('a26').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a26').src=items1[numero26a];
    }
    if (Suerte == 1) {
        document.getElementById('a26').src=items1[numero26a];
    }
    if (Suerte == 2) {
        document.getElementById('a26').src=items2[numero26b];
    }
    if (Suerte == 3) {
        document.getElementById('a26').src=items3[numero26c];
    }
    b26();
 }
 if (document.getElementById('a26').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a26').src= suerte[numeros2];
    document.getElementById('a26').style.animationName= "";
    document.getElementById('a26').style.animationDuration= "";
    document.getElementById('a26').style.animationIterationCount= "";
    b26();
 }
 if (click26b == 0) {
    document.getElementById('a26').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click26d == 0) {
    document.getElementById('a26').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click26o == 0) {
    document.getElementById('a26').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b26() {

 if (document.getElementById('a26').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click26b = 6;
    }
    if (Velocidad == 1) {
        click26b = 5;
    }
    if (Velocidad == 2) {
        click26b = 4;
    }
    if (Velocidad == 3) {
        click26b = 3;
  }}
 
 if (document.getElementById('a26').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click26d = 5;
    }
    if (Velocidad == 1) {
        click26d = 4;
    }
    if (Velocidad == 2) {
        click26d = 3;
    }
    if (Velocidad == 3) {
        click26d = 2;
  }}
    
 if (document.getElementById('a26').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click26o = 4;
    }
    if (Velocidad == 1) {
        click26o = 3;
    }
    if (Velocidad == 2) {
        click26o = 2;
    }
    if (Velocidad == 3) {
        click26o = 1;
  }}}                         

 function a27() {
    click27b -= 1;
    click27d -= 1;
    click27o -= 1;

if (document.getElementById('a27').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a27').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b27();
}

if (document.getElementById('a27').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a27').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b27();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a27').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a27').src = suerte[numeros3];
        b27();
    }
  }

  if (document.getElementById('a27').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a27').src=items1[numero27a];
    }
    if (Suerte == 1) {
        document.getElementById('a27').src=items1[numero27a];
    }
    if (Suerte == 2) {
        document.getElementById('a27').src=items2[numero27b];
    }
    if (Suerte == 3) {
        document.getElementById('a27').src=items3[numero27c];
    }
    b27();
 }
 if (document.getElementById('a27').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a27').src= suerte[numeros3];
    document.getElementById('a27').style.animationName= "";
    document.getElementById('a27').style.animationDuration= "";
    document.getElementById('a27').style.animationIterationCount= "";
    b27();
 }
 if (click27b == 0) {
    document.getElementById('a27').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click27d == 0) {
    document.getElementById('a27').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click27o == 0) {
    document.getElementById('a27').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b27() {

 if (document.getElementById('a27').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click27b = 6;
    }
    if (Velocidad == 1) {
        click27b = 5;
    }
    if (Velocidad == 2) {
        click27b = 4;
    }
    if (Velocidad == 3) {
        click27b = 3;
  }}
 
 if (document.getElementById('a27').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click27d = 5;
    }
    if (Velocidad == 1) {
        click27d = 4;
    }
    if (Velocidad == 2) {
        click27d = 3;
    }
    if (Velocidad == 3) {
        click27d = 2;
  }}
    
 if (document.getElementById('a27').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click27o = 4;
    }
    if (Velocidad == 1) {
        click27o = 3;
    }
    if (Velocidad == 2) {
        click27o = 2;
    }
    if (Velocidad == 3) {
        click27o = 1;
  }}}                        


function a28() {
    click28b -= 1;
    click28d -= 1;
    click28o -= 1;

if (document.getElementById('a28').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a28').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b28();
}

if (document.getElementById('a28').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a28').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b28();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a28').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a28').src = suerte[numeros1];
        b28();
    }
  }

  if (document.getElementById('a28').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a28').src=items1[numero28a];
    }
    if (Suerte == 1) {
        document.getElementById('a28').src=items1[numero28a];
    }
    if (Suerte == 2) {
        document.getElementById('a28').src=items2[numero28b];
    }
    if (Suerte == 3) {
        document.getElementById('a28').src=items3[numero28c];
    }
    b28();
 }
 if (document.getElementById('a28').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a28').src= suerte[numeros1];
    document.getElementById('a28').style.animationName= "";
    document.getElementById('a28').style.animationDuration= "";
    document.getElementById('a28').style.animationIterationCount= "";
    b28();
 }
 if (click28b == 0) {
    document.getElementById('a28').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click28d == 0) {
    document.getElementById('a28').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click28o == 0) {
    document.getElementById('a28').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b28() {

 if (document.getElementById('a28').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click28b = 6;
    }
    if (Velocidad == 1) {
        click28b = 5;
    }
    if (Velocidad == 2) {
        click28b = 4;
    }
    if (Velocidad == 3) {
        click28b = 3;
  }}
 
 if (document.getElementById('a28').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click28d = 5;
    }
    if (Velocidad == 1) {
        click28d = 4;
    }
    if (Velocidad == 2) {
        click28d = 3;
    }
    if (Velocidad == 3) {
        click28d = 2;
  }}
    
 if (document.getElementById('a28').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click28o = 4;
    }
    if (Velocidad == 1) {
        click28o = 3;
    }
    if (Velocidad == 2) {
        click28o = 2;
    }
    if (Velocidad == 3) {
        click28o = 1;
  }}}                          

 function a29() {
    click29b -= 1;
    click29d -= 1;
    click29o -= 1;

if (document.getElementById('a29').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a29').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b29();
}

if (document.getElementById('a29').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a29').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b29();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a29').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a29').src = suerte[numeros2];
        b29();
    }
  }

  if (document.getElementById('a29').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a29').src=items1[numero29a];
    }
    if (Suerte == 1) {
        document.getElementById('a29').src=items1[numero29a];
    }
    if (Suerte == 2) {
        document.getElementById('a29').src=items2[numero29b];
    }
    if (Suerte == 3) {
        document.getElementById('a29').src=items3[numero29c];
    }
    b29();
 }
 if (document.getElementById('a29').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a29').src= suerte[numeros2];
    document.getElementById('a29').style.animationName= "";
    document.getElementById('a29').style.animationDuration= "";
    document.getElementById('a29').style.animationIterationCount= "";
    b29();
 }
 if (click29b == 0) {
    document.getElementById('a29').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click29d == 0) {
    document.getElementById('a29').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click29o == 0) {
    document.getElementById('a29').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b29() {

 if (document.getElementById('a29').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click29b = 6;
    }
    if (Velocidad == 1) {
        click29b = 5;
    }
    if (Velocidad == 2) {
        click29b = 4;
    }
    if (Velocidad == 3) {
        click29b = 3;
  }}
 
 if (document.getElementById('a29').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click29d = 5;
    }
    if (Velocidad == 1) {
        click29d = 4;
    }
    if (Velocidad == 2) {
        click29d = 3;
    }
    if (Velocidad == 3) {
        click29d = 2;
  }}
    
 if (document.getElementById('a29').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click29o = 4;
    }
    if (Velocidad == 1) {
        click29o = 3;
    }
    if (Velocidad == 2) {
        click29o = 2;
    }
    if (Velocidad == 3) {
        click29o = 1;
  }}}                          

 function a30() {
    click30b -= 1;
    click30d -= 1;
    click30o -= 1;

if (document.getElementById('a30').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a30').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b30();
}

if (document.getElementById('a30').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a30').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b30();
}

if (MartilloEquipado == 1) {
    if (document.getElementById('a30').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a30').src = suerte[numeros3];
        b30();
    }
  }

  if (document.getElementById('a30').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a30').src=items1[numero30a];
    }
    if (Suerte == 1) {
        document.getElementById('a30').src=items1[numero30a];
    }
    if (Suerte == 2) {
        document.getElementById('a30').src=items2[numero30b];
    }
    if (Suerte == 3) {
        document.getElementById('a30').src=items3[numero30c];
    }
    b30();
 }
 if (document.getElementById('a30').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a30').src= suerte[numeros3];
    document.getElementById('a30').style.animationName= "";
    document.getElementById('a30').style.animationDuration= "";
    document.getElementById('a30').style.animationIterationCount= "";
    b30();
 }
 if (click30b == 0) {
    document.getElementById('a30').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click30d == 0) {
    document.getElementById('a30').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click30o == 0) {
    document.getElementById('a30').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b30() {

 if (document.getElementById('a30').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click30b = 6;
    }
    if (Velocidad == 1) {
        click30b = 5;
    }
    if (Velocidad == 2) {
        click30b = 4;
    }
    if (Velocidad == 3) {
        click30b = 3;
  }}
 
 if (document.getElementById('a30').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click30d = 5;
    }
    if (Velocidad == 1) {
        click30d = 4;
    }
    if (Velocidad == 2) {
        click30d = 3;
    }
    if (Velocidad == 3) {
        click30d = 2;
  }}
    
 if (document.getElementById('a30').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click30o = 4;
    }
    if (Velocidad == 1) {
        click30o = 3;
    }
    if (Velocidad == 2) {
        click30o = 2;
    }
    if (Velocidad == 3) {
        click30o = 1;
  }}}                          

 function a31() {
    click31b -= 1;
    click31d -= 1;
    click31o -= 1;

if (document.getElementById('a31').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a31').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b31();
}

if (document.getElementById('a31').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a31').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b31();
}

if (MartilloEquipado == 1) {
    if (document.getElementById('a31').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a31').src = suerte[numeros1];
        b31();
    }
  }

  if (document.getElementById('a31').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a31').src=items1[numero31a];
    }
    if (Suerte == 1) {
        document.getElementById('a31').src=items1[numero31a];
    }
    if (Suerte == 2) {
        document.getElementById('a31').src=items2[numero31b];
    }
    if (Suerte == 3) {
        document.getElementById('a31').src=items3[numero31c];
    }
    b31();
 }
 if (document.getElementById('a31').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a31').src= suerte[numeros1];
    document.getElementById('a31').style.animationName= "";
    document.getElementById('a31').style.animationDuration= "";
    document.getElementById('a31').style.animationIterationCount= "";
    b31();
 }
 if (click31b == 0) {
    document.getElementById('a31').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click31d == 0) {
    document.getElementById('a31').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click31o == 0) {
    document.getElementById('a31').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b31() {

 if (document.getElementById('a31').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click31b = 6;
    }
    if (Velocidad == 1) {
        click31b = 5;
    }
    if (Velocidad == 2) {
        click31b = 4;
    }
    if (Velocidad == 3) {
        click31b = 3;
  }}
 
 if (document.getElementById('a31').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click31d = 5;
    }
    if (Velocidad == 1) {
        click31d = 4;
    }
    if (Velocidad == 2) {
        click31d = 3;
    }
    if (Velocidad == 3) {
        click31d = 2;
  }}
    
 if (document.getElementById('a31').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click31o = 4;
    }
    if (Velocidad == 1) {
        click31o = 3;
    }
    if (Velocidad == 2) {
        click31o = 2;
    }
    if (Velocidad == 3) {
        click31o = 1;
  }}}                          

 function a32() {
    click32b -= 1;
    click32d -= 1;
    click32o -= 1;

if (document.getElementById('a32').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a32').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b32();
}

if (document.getElementById('a32').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a32').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b32();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a32').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a32').src = suerte[numeros2];
        b32();
    }
  }

  if (document.getElementById('a32').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a32').src=items1[numero32a];
    }
    if (Suerte == 1) {
        document.getElementById('a32').src=items1[numero32a];
    }
    if (Suerte == 2) {
        document.getElementById('a32').src=items2[numero32b];
    }
    if (Suerte == 3) {
        document.getElementById('a32').src=items3[numero32c];
    }
    b32();
 }
 if (document.getElementById('a32').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a32').src= suerte[numeros2];
    document.getElementById('a32').style.animationName= "";
    document.getElementById('a32').style.animationDuration= "";
    document.getElementById('a32').style.animationIterationCount= "";
    b32();
 }
 if (click32b == 0) {
    document.getElementById('a32').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click32d == 0) {
    document.getElementById('a32').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click32o == 0) {
    document.getElementById('a32').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b32() {

 if (document.getElementById('a32').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click32b = 6;
    }
    if (Velocidad == 1) {
        click32b = 5;
    }
    if (Velocidad == 2) {
        click32b = 4;
    }
    if (Velocidad == 3) {
        click32b = 3;
  }}
 
 if (document.getElementById('a32').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click32d = 5;
    }
    if (Velocidad == 1) {
        click32d = 4;
    }
    if (Velocidad == 2) {
        click32d = 3;
    }
    if (Velocidad == 3) {
        click32d = 2;
  }}
    
 if (document.getElementById('a32').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click32o = 4;
    }
    if (Velocidad == 1) {
        click32o = 3;
    }
    if (Velocidad == 2) {
        click32o = 2;
    }
    if (Velocidad == 3) {
        click32o = 1;
  }}}                         

 function a33() {
    click33b -= 1;
    click33d -= 1;
    click33o -= 1;

if (document.getElementById('a33').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a33').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b33();
}

if (document.getElementById('a33').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a33').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b33();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a33').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a33').src = suerte[numeros3];
        b33();
    }
  }

  if (document.getElementById('a33').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a33').src=items1[numero33a];
    }
    if (Suerte == 1) {
        document.getElementById('a33').src=items1[numero33a];
    }
    if (Suerte == 2) {
        document.getElementById('a33').src=items2[numero33b];
    }
    if (Suerte == 3) {
        document.getElementById('a33').src=items3[numero33c];
    }
    b33();
 }
 if (document.getElementById('a33').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a33').src= suerte[numeros3];
    document.getElementById('a33').style.animationName= "";
    document.getElementById('a33').style.animationDuration= "";
    document.getElementById('a33').style.animationIterationCount= "";
    b33();
 }
 if (click33b == 0) {
    document.getElementById('a33').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click33d == 0) {
    document.getElementById('a33').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click33o == 0) {
    document.getElementById('a33').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b33() {

 if (document.getElementById('a33').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click33b = 6;
    }
    if (Velocidad == 1) {
        click33b = 5;
    }
    if (Velocidad == 2) {
        click33b = 4;
    }
    if (Velocidad == 3) {
        click33b = 3;
  }}
 
 if (document.getElementById('a33').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click33d = 5;
    }
    if (Velocidad == 1) {
        click33d = 4;
    }
    if (Velocidad == 2) {
        click33d = 3;
    }
    if (Velocidad == 3) {
        click33d = 2;
  }}
    
 if (document.getElementById('a33').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click33o = 4;
    }
    if (Velocidad == 1) {
        click33o = 3;
    }
    if (Velocidad == 2) {
        click33o = 2;
    }
    if (Velocidad == 3) {
        click33o = 1;
  }}}                         

 function a34() {
    click34b -= 1;
    click34d -= 1;
    click34o -= 1;

if (document.getElementById('a34').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a34').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b34();
}

if (document.getElementById('a34').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a34').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b34();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a34').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a34').src = suerte[numeros1];
        b34();
    }
  }

  if (document.getElementById('a34').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a34').src=items1[numero34a];
    }
    if (Suerte == 1) {
        document.getElementById('a34').src=items1[numero34a];
    }
    if (Suerte == 2) {
        document.getElementById('a34').src=items2[numero34b];
    }
    if (Suerte == 3) {
        document.getElementById('a34').src=items3[numero34c];
    }
    b34();
 }
 if (document.getElementById('a34').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a34').src= suerte[numeros1];
    document.getElementById('a34').style.animationName= "";
    document.getElementById('a34').style.animationDuration= "";
    document.getElementById('a34').style.animationIterationCount= "";
    b34();
 }
 if (click34b == 0) {
    document.getElementById('a34').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click34d == 0) {
    document.getElementById('a34').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click34o == 0) {
    document.getElementById('a34').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b34() {

 if (document.getElementById('a34').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click34b = 6;
    }
    if (Velocidad == 1) {
        click34b = 5;
    }
    if (Velocidad == 2) {
        click34b = 4;
    }
    if (Velocidad == 3) {
        click34b = 3;
  }}
 
 if (document.getElementById('a34').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click34d = 5;
    }
    if (Velocidad == 1) {
        click34d = 4;
    }
    if (Velocidad == 2) {
        click34d = 3;
    }
    if (Velocidad == 3) {
        click34d = 2;
  }}
    
 if (document.getElementById('a34').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click34o = 4;
    }
    if (Velocidad == 1) {
        click34o = 3;
    }
    if (Velocidad == 2) {
        click34o = 2;
    }
    if (Velocidad == 3) {
        click34o = 1;
  }}}                         

 function a35() {
    click35b -= 1;
    click35d -= 1;
    click35o -= 1;

if (document.getElementById('a35').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a35').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b35();
}

if (document.getElementById('a35').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a35').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b35();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a35').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a35').src = suerte[numeros2];
        b35();
    }
  }

  if (document.getElementById('a35').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a35').src=items1[numero35a];
    }
    if (Suerte == 1) {
        document.getElementById('a35').src=items1[numero35a];
    }
    if (Suerte == 2) {
        document.getElementById('a35').src=items2[numero35b];
    }
    if (Suerte == 3) {
        document.getElementById('a35').src=items3[numero35c];
    }
    b35();
 }
 if (document.getElementById('a35').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a35').src= suerte[numeros2];
    document.getElementById('a35').style.animationName= "";
    document.getElementById('a35').style.animationDuration= "";
    document.getElementById('a35').style.animationIterationCount= "";
    b35();
 }
 if (click35b == 0) {
    document.getElementById('a35').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click35d == 0) {
    document.getElementById('a35').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click35o == 0) {
    document.getElementById('a35').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b35() {

 if (document.getElementById('a35').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click35b = 6;
    }
    if (Velocidad == 1) {
        click35b = 5;
    }
    if (Velocidad == 2) {
        click35b = 4;
    }
    if (Velocidad == 3) {
        click35b = 3;
  }}
 
 if (document.getElementById('a35').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click35d = 5;
    }
    if (Velocidad == 1) {
        click35d = 4;
    }
    if (Velocidad == 2) {
        click35d = 3;
    }
    if (Velocidad == 3) {
        click35d = 2;
  }}
    
 if (document.getElementById('a35').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click35o = 4;
    }
    if (Velocidad == 1) {
        click35o = 3;
    }
    if (Velocidad == 2) {
        click35o = 2;
    }
    if (Velocidad == 3) {
        click35o = 1;
  }}}                         

 function a36() {
    click36b -= 1;
    click36d -= 1;
    click36o -= 1;

if (document.getElementById('a36').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a36').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b36();
}

if (document.getElementById('a36').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a36').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b36();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a36').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a36').src = suerte[numeros3];
        b36();
    }
  }

  if (document.getElementById('a36').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a36').src=items1[numero36a];
    }
    if (Suerte == 1) {
        document.getElementById('a36').src=items1[numero36a];
    }
    if (Suerte == 2) {
        document.getElementById('a36').src=items2[numero36b];
    }
    if (Suerte == 3) {
        document.getElementById('a36').src=items3[numero36c];
    }
    b36();
 }
 if (document.getElementById('a36').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a36').src= suerte[numeros3];
    document.getElementById('a36').style.animationName= "";
    document.getElementById('a36').style.animationDuration= "";
    document.getElementById('a36').style.animationIterationCount= "";
    b36();
 }
 if (click36b == 0) {
    document.getElementById('a36').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click36d == 0) {
    document.getElementById('a36').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click36o == 0) {
    document.getElementById('a36').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b36() {

 if (document.getElementById('a36').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click36b = 6;
    }
    if (Velocidad == 1) {
        click36b = 5;
    }
    if (Velocidad == 2) {
        click36b = 4;
    }
    if (Velocidad == 3) {
        click36b = 3;
  }}
 
 if (document.getElementById('a36').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click36d = 5;
    }
    if (Velocidad == 1) {
        click36d = 4;
    }
    if (Velocidad == 2) {
        click36d = 3;
    }
    if (Velocidad == 3) {
        click36d = 2;
  }}
    
 if (document.getElementById('a36').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click36o = 4;
    }
    if (Velocidad == 1) {
        click36o = 3;
    }
    if (Velocidad == 2) {
        click36o = 2;
    }
    if (Velocidad == 3) {
        click36o = 1;
  }}}                        


function a37() {
    click37b -= 1;
    click37d -= 1;
    click37o -= 1;

if (document.getElementById('a37').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a37').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b37();
}

if (document.getElementById('a37').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a37').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b37();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a37').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a37').src = suerte[numeros1];
        b37();
    }
  }

  if (document.getElementById('a37').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a37').src=items1[numero37a];
    }
    if (Suerte == 1) {
        document.getElementById('a37').src=items1[numero37a];
    }
    if (Suerte == 2) {
        document.getElementById('a37').src=items2[numero37b];
    }
    if (Suerte == 3) {
        document.getElementById('a37').src=items3[numero37c];
    }
    b37();
 }
 if (document.getElementById('a37').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a37').src= suerte[numeros1];
    document.getElementById('a37').style.animationName= "";
    document.getElementById('a37').style.animationDuration= "";
    document.getElementById('a37').style.animationIterationCount= "";
    b37();
 }
 if (click37b == 0) {
    document.getElementById('a37').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click37d == 0) {
    document.getElementById('a37').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click37o == 0) {
    document.getElementById('a37').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b37() {

 if (document.getElementById('a37').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click37b = 6;
    }
    if (Velocidad == 1) {
        click37b = 5;
    }
    if (Velocidad == 2) {
        click37b = 4;
    }
    if (Velocidad == 3) {
        click37b = 3;
  }}
 
 if (document.getElementById('a37').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click37d = 5;
    }
    if (Velocidad == 1) {
        click37d = 4;
    }
    if (Velocidad == 2) {
        click37d = 3;
    }
    if (Velocidad == 3) {
        click37d = 2;
  }}
    
 if (document.getElementById('a37').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click37o = 4;
    }
    if (Velocidad == 1) {
        click37o = 3;
    }
    if (Velocidad == 2) {
        click37o = 2;
    }
    if (Velocidad == 3) {
        click37o = 1;
  }}}                          

 function a38() {
    click38b -= 1;
    click38d -= 1;
    click38o -= 1;

if (document.getElementById('a38').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a38').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b38();
}

if (document.getElementById('a38').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a38').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b38();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a38').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a38').src = suerte[numeros2];
        b38();
    }
  }

  if (document.getElementById('a38').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a38').src=items1[numero38a];
    }
    if (Suerte == 1) {
        document.getElementById('a38').src=items1[numero38a];
    }
    if (Suerte == 2) {
        document.getElementById('a38').src=items2[numero38b];
    }
    if (Suerte == 3) {
        document.getElementById('a38').src=items3[numero38c];
    }
    b38();
 }
 if (document.getElementById('a38').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a38').src= suerte[numeros2];
    document.getElementById('a38').style.animationName= "";
    document.getElementById('a38').style.animationDuration= "";
    document.getElementById('a38').style.animationIterationCount= "";
    b38();
 }
 if (click38b == 0) {
    document.getElementById('a38').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click38d == 0) {
    document.getElementById('a38').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click38o == 0) {
    document.getElementById('a38').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b38() {

 if (document.getElementById('a38').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click38b = 6;
    }
    if (Velocidad == 1) {
        click38b = 5;
    }
    if (Velocidad == 2) {
        click38b = 4;
    }
    if (Velocidad == 3) {
        click38b = 3;
  }}
 
 if (document.getElementById('a38').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click38d = 5;
    }
    if (Velocidad == 1) {
        click38d = 4;
    }
    if (Velocidad == 2) {
        click38d = 3;
    }
    if (Velocidad == 3) {
        click38d = 2;
  }}
    
 if (document.getElementById('a38').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click38o = 4;
    }
    if (Velocidad == 1) {
        click38o = 3;
    }
    if (Velocidad == 2) {
        click38o = 2;
    }
    if (Velocidad == 3) {
        click38o = 1;
  }}}                          

 function a39() {
    click39b -= 1;
    click39d -= 1;
    click39o -= 1;

if (document.getElementById('a39').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a39').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b39();
}

if (document.getElementById('a39').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a39').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b30();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a39').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a39').src = suerte[numeros3];
        b39();
    }
  }

  if (document.getElementById('a39').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a39').src=items1[numero39a];
    }
    if (Suerte == 1) {
        document.getElementById('a39').src=items1[numero39a];
    }
    if (Suerte == 2) {
        document.getElementById('a39').src=items2[numero39b];
    }
    if (Suerte == 3) {
        document.getElementById('a39').src=items3[numero39c];
    }
    b39();
 }
 if (document.getElementById('a39').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a39').src= suerte[numeros3];
    document.getElementById('a39').style.animationName= "";
    document.getElementById('a39').style.animationDuration= "";
    document.getElementById('a39').style.animationIterationCount= "";
    b39();
 }
 if (click39b == 0) {
    document.getElementById('a39').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click39d == 0) {
    document.getElementById('a39').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click39o == 0) {
    document.getElementById('a39').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b39() {

 if (document.getElementById('a39').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click39b = 6;
    }
    if (Velocidad == 1) {
        click39b = 5;
    }
    if (Velocidad == 2) {
        click39b = 4;
    }
    if (Velocidad == 3) {
        click39b = 3;
  }}
 
 if (document.getElementById('a39').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click39d = 5;
    }
    if (Velocidad == 1) {
        click39d = 4;
    }
    if (Velocidad == 2) {
        click39d = 3;
    }
    if (Velocidad == 3) {
        click39d = 2;
  }}
    
 if (document.getElementById('a39').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click39o = 4;
    }
    if (Velocidad == 1) {
        click39o = 3;
    }
    if (Velocidad == 2) {
        click39o = 2;
    }
    if (Velocidad == 3) {
        click39o = 1;
  }}}                          

 function a40() {
    click40b -= 1;
    click40d -= 1;
    click40o -= 1;

if (document.getElementById('a40').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a40').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b40();
}

if (document.getElementById('a40').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a40').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b40();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a40').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a40').src = suerte[numeros1];
        b40();
    }
  }

  if (document.getElementById('a40').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a40').src=items1[numero40a];
    }
    if (Suerte == 1) {
        document.getElementById('a40').src=items1[numero40a];
    }
    if (Suerte == 2) {
        document.getElementById('a40').src=items2[numero40b];
    }
    if (Suerte == 3) {
        document.getElementById('a40').src=items3[numero40c];
    }
    b40();
 }
 if (document.getElementById('a40').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a40').src= suerte[numeros1];
    document.getElementById('a40').style.animationName= "";
    document.getElementById('a40').style.animationDuration= "";
    document.getElementById('a40').style.animationIterationCount= "";
    b40();
 }
 if (click40b == 0) {
    document.getElementById('a40').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click40d == 0) {
    document.getElementById('a40').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click40o == 0) {
    document.getElementById('a40').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b40() {

 if (document.getElementById('a40').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click40b = 6;
    }
    if (Velocidad == 1) {
        click40b = 5;
    }
    if (Velocidad == 2) {
        click40b = 4;
    }
    if (Velocidad == 3) {
        click40b = 3;
  }}
 
 if (document.getElementById('a40').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click40d = 5;
    }
    if (Velocidad == 1) {
        click40d = 4;
    }
    if (Velocidad == 2) {
        click40d = 3;
    }
    if (Velocidad == 3) {
        click40d = 2;
  }}
    
 if (document.getElementById('a40').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click40o = 4;
    }
    if (Velocidad == 1) {
        click40o = 3;
    }
    if (Velocidad == 2) {
        click40o = 2;
    }
    if (Velocidad == 3) {
        click40o = 1;
  }}}                          

 function a41() {
    click41b -= 1;
    click41d -= 1;
    click41o -= 1;

if (document.getElementById('a41').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a41').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b41();
}

if (document.getElementById('a41').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a41').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b41();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a41').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a41').src = suerte[numeros2];
        b41();
    }
  }

  if (document.getElementById('a41').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a41').src=items1[numero41a];
    }
    if (Suerte == 1) {
        document.getElementById('a41').src=items1[numero41a];
    }
    if (Suerte == 2) {
        document.getElementById('a41').src=items2[numero41b];
    }
    if (Suerte == 3) {
        document.getElementById('a41').src=items3[numero41c];
    }
    b41();
 }
 if (document.getElementById('a41').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a41').src= suerte[numeros2];
    document.getElementById('a41').style.animationName= "";
    document.getElementById('a41').style.animationDuration= "";
    document.getElementById('a41').style.animationIterationCount= "";
    b41();
 }
 if (click41b == 0) {
    document.getElementById('a41').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click41d == 0) {
    document.getElementById('a41').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click41o == 0) {
    document.getElementById('a41').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b41() {

 if (document.getElementById('a41').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click41b = 6;
    }
    if (Velocidad == 1) {
        click41b = 5;
    }
    if (Velocidad == 2) {
        click41b = 4;
    }
    if (Velocidad == 3) {
        click41b = 3;
  }}
 
 if (document.getElementById('a41').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click41d = 5;
    }
    if (Velocidad == 1) {
        click41d = 4;
    }
    if (Velocidad == 2) {
        click41d = 3;
    }
    if (Velocidad == 3) {
        click41d = 2;
  }}
    
 if (document.getElementById('a41').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click41o = 4;
    }
    if (Velocidad == 1) {
        click41o = 3;
    }
    if (Velocidad == 2) {
        click41o = 2;
    }
    if (Velocidad == 3) {
        click41o = 1;
  }}}                         

 function a42() {
    click42b -= 1;
    click42d -= 1;
    click42o -= 1;

if (document.getElementById('a42').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a42').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b42();
}

if (document.getElementById('a42').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a42').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b42();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a42').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a42').src = suerte[numeros3];
        b42();
    }
  }

  if (document.getElementById('a42').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a42').src=items1[numero42a];
    }
    if (Suerte == 1) {
        document.getElementById('a42').src=items1[numero42a];
    }
    if (Suerte == 2) {
        document.getElementById('a42').src=items2[numero42b];
    }
    if (Suerte == 3) {
        document.getElementById('a42').src=items3[numero42c];
    }
    b42();
 }
 if (document.getElementById('a42').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a42').src= suerte[numeros3];
    document.getElementById('a42').style.animationName= "";
    document.getElementById('a42').style.animationDuration= "";
    document.getElementById('a42').style.animationIterationCount= "";
    b42();
 }
 if (click42b == 0) {
    document.getElementById('a42').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click42d == 0) {
    document.getElementById('a42').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click42o == 0) {
    document.getElementById('a42').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b42() {

 if (document.getElementById('a42').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click42b = 6;
    }
    if (Velocidad == 1) {
        click42b = 5;
    }
    if (Velocidad == 2) {
        click42b = 4;
    }
    if (Velocidad == 3) {
        click42b = 3;
  }}
 
 if (document.getElementById('a42').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click42d = 5;
    }
    if (Velocidad == 1) {
        click42d = 4;
    }
    if (Velocidad == 2) {
        click42d = 3;
    }
    if (Velocidad == 3) {
        click42d = 2;
  }}
    
 if (document.getElementById('a42').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click42o = 4;
    }
    if (Velocidad == 1) {
        click42o = 3;
    }
    if (Velocidad == 2) {
        click42o = 2;
    }
    if (Velocidad == 3) {
        click42o = 1;
  }}}                         

 function a43() {
    click43b -= 1;
    click43d -= 1;
    click43o -= 1;

if (document.getElementById('a43').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a43').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b43();
}

if (document.getElementById('a43').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a43').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b43();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a43').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a43').src = suerte[numeros1];
        b43();
    }
  }

  if (document.getElementById('a43').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a43').src=items1[numero43a];
    }
    if (Suerte == 1) {
        document.getElementById('a43').src=items1[numero43a];
    }
    if (Suerte == 2) {
        document.getElementById('a43').src=items2[numero43b];
    }
    if (Suerte == 3) {
        document.getElementById('a43').src=items3[numero43c];
    }
    b43();
 }
 if (document.getElementById('a43').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a43').src= suerte[numeros1];
    document.getElementById('a43').style.animationName= "";
    document.getElementById('a43').style.animationDuration= "";
    document.getElementById('a43').style.animationIterationCount= "";
    b43();
 }
 if (click43b == 0) {
    document.getElementById('a43').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click43d == 0) {
    document.getElementById('a43').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click43o == 0) {
    document.getElementById('a43').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b43() {

 if (document.getElementById('a43').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click43b = 6;
    }
    if (Velocidad == 1) {
        click43b = 5;
    }
    if (Velocidad == 2) {
        click43b = 4;
    }
    if (Velocidad == 3) {
        click43b = 3;
  }}
 
 if (document.getElementById('a43').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click43d = 5;
    }
    if (Velocidad == 1) {
        click43d = 4;
    }
    if (Velocidad == 2) {
        click43d = 3;
    }
    if (Velocidad == 3) {
        click43d = 2;
  }}
    
 if (document.getElementById('a43').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click43o = 4;
    }
    if (Velocidad == 1) {
        click43o = 3;
    }
    if (Velocidad == 2) {
        click43o = 2;
    }
    if (Velocidad == 3) {
        click43o = 1;
  }}}                         

 function a44() {
    click44b -= 1;
    click44d -= 1;
    click44o -= 1;

if (document.getElementById('a44').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a44').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b44();
}

if (document.getElementById('a44').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a44').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b44();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a44').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a44').src = suerte[numeros2];
        b44();
    }
  }

  if (document.getElementById('a44').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a44').src=items1[numero44a];
    }
    if (Suerte == 1) {
        document.getElementById('a44').src=items1[numero44a];
    }
    if (Suerte == 2) {
        document.getElementById('a44').src=items2[numero44b];
    }
    if (Suerte == 3) {
        document.getElementById('a44').src=items3[numero44c];
    }
    b44();
 }
 if (document.getElementById('a44').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a44').src= suerte[numeros2];
    document.getElementById('a44').style.animationName= "";
    document.getElementById('a44').style.animationDuration= "";
    document.getElementById('a44').style.animationIterationCount= "";
    b44();
 }
 if (click44b == 0) {
    document.getElementById('a44').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click44d == 0) {
    document.getElementById('a44').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click44o == 0) {
    document.getElementById('a44').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b44() {

 if (document.getElementById('a44').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click44b = 6;
    }
    if (Velocidad == 1) {
        click44b = 5;
    }
    if (Velocidad == 2) {
        click44b = 4;
    }
    if (Velocidad == 3) {
        click44b = 3;
  }}
 
 if (document.getElementById('a44').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click44d = 5;
    }
    if (Velocidad == 1) {
        click44d = 4;
    }
    if (Velocidad == 2) {
        click44d = 3;
    }
    if (Velocidad == 3) {
        click44d = 2;
  }}
    
 if (document.getElementById('a44').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click44o = 4;
    }
    if (Velocidad == 1) {
        click44o = 3;
    }
    if (Velocidad == 2) {
        click44o = 2;
    }
    if (Velocidad == 3) {
        click44o = 1;
  }}}                         

 function a45() {
    click45b -= 1;
    click45d -= 1;
    click45o -= 1;

if (document.getElementById('a45').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a45').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b45();
}

if (document.getElementById('a45').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a45').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b45();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a45').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a45').src = suerte[numeros3];
        b45();
    }
  }

  if (document.getElementById('a45').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a45').src=items1[numero45a];
    }
    if (Suerte == 1) {
        document.getElementById('a45').src=items1[numero45a];
    }
    if (Suerte == 2) {
        document.getElementById('a45').src=items2[numero45b];
    }
    if (Suerte == 3) {
        document.getElementById('a45').src=items3[numero45c];
    }
    b45();
 }
 if (document.getElementById('a45').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a45').src= suerte[numeros3];
    document.getElementById('a45').style.animationName= "";
    document.getElementById('a45').style.animationDuration= "";
    document.getElementById('a45').style.animationIterationCount= "";
    b45();
 }
 if (click45b == 0) {
    document.getElementById('a45').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click45d == 0) {
    document.getElementById('a45').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click45o == 0) {
    document.getElementById('a45').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b45() {

 if (document.getElementById('a45').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click45b = 6;
    }
    if (Velocidad == 1) {
        click45b = 5;
    }
    if (Velocidad == 2) {
        click45b = 4;
    }
    if (Velocidad == 3) {
        click45b = 3;
  }}
 
 if (document.getElementById('a45').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click45d = 5;
    }
    if (Velocidad == 1) {
        click45d = 4;
    }
    if (Velocidad == 2) {
        click45d = 3;
    }
    if (Velocidad == 3) {
        click45d = 2;
  }}
    
 if (document.getElementById('a45').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click45o = 4;
    }
    if (Velocidad == 1) {
        click45o = 3;
    }
    if (Velocidad == 2) {
        click45o = 2;
    }
    if (Velocidad == 3) {
        click45o = 1;
  }}}                        


function a46() {
    click46b -= 1;
    click46d -= 1;
    click46o -= 1;

if (document.getElementById('a46').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a46').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b46();
}

if (document.getElementById('a46').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a46').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b46();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a46').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a46').src = suerte[numeros1];
        b46();
    }
  }

  if (document.getElementById('a46').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a46').src=items1[numero46a];
    }
    if (Suerte == 1) {
        document.getElementById('a46').src=items1[numero46a];
    }
    if (Suerte == 2) {
        document.getElementById('a46').src=items2[numero46b];
    }
    if (Suerte == 3) {
        document.getElementById('a46').src=items3[numero46c];
    }
    b46();
 }
 if (document.getElementById('a46').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a46').src= suerte[numeros1];
    document.getElementById('a46').style.animationName= "";
    document.getElementById('a46').style.animationDuration= "";
    document.getElementById('a46').style.animationIterationCount= "";
    b46();
 }
 if (click46b == 0) {
    document.getElementById('a46').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click46d == 0) {
    document.getElementById('a46').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click46o == 0) {
    document.getElementById('a46').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b46() {

 if (document.getElementById('a46').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click46b = 6;
    }
    if (Velocidad == 1) {
        click46b = 5;
    }
    if (Velocidad == 2) {
        click46b = 4;
    }
    if (Velocidad == 3) {
        click46b = 3;
  }}
 
 if (document.getElementById('a46').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click46d = 5;
    }
    if (Velocidad == 1) {
        click46d = 4;
    }
    if (Velocidad == 2) {
        click46d = 3;
    }
    if (Velocidad == 3) {
        click46d = 2;
  }}
    
 if (document.getElementById('a46').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click46o = 4;
    }
    if (Velocidad == 1) {
        click46o = 3;
    }
    if (Velocidad == 2) {
        click46o = 2;
    }
    if (Velocidad == 3) {
        click46o = 1;
  }}}                          

 function a47() {
    click47b -= 1;
    click47d -= 1;
    click47o -= 1;

if (document.getElementById('a47').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a47').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b47();
}

if (document.getElementById('a47').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a47').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b47();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a47').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a47').src = suerte[numeros2];
        b47();
    }
  }

  if (document.getElementById('a47').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a47').src=items1[numero47a];
    }
    if (Suerte == 1) {
        document.getElementById('a47').src=items1[numero47a];
    }
    if (Suerte == 2) {
        document.getElementById('a47').src=items2[numero47b];
    }
    if (Suerte == 3) {
        document.getElementById('a47').src=items3[numero47c];
    }
    b47();
 }
 if (document.getElementById('a47').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a47').src= suerte[numeros2];
    document.getElementById('a47').style.animationName= "";
    document.getElementById('a47').style.animationDuration= "";
    document.getElementById('a47').style.animationIterationCount= "";
    b47();
 }
 if (click47b == 0) {
    document.getElementById('a47').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click47d == 0) {
    document.getElementById('a47').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click47o == 0) {
    document.getElementById('a47').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b47() {

 if (document.getElementById('a47').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click47b = 6;
    }
    if (Velocidad == 1) {
        click47b = 5;
    }
    if (Velocidad == 2) {
        click47b = 4;
    }
    if (Velocidad == 3) {
        click47b = 3;
  }}
 
 if (document.getElementById('a47').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click47d = 5;
    }
    if (Velocidad == 1) {
        click47d = 4;
    }
    if (Velocidad == 2) {
        click47d = 3;
    }
    if (Velocidad == 3) {
        click47d = 2;
  }}
    
 if (document.getElementById('a47').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click47o = 4;
    }
    if (Velocidad == 1) {
        click47o = 3;
    }
    if (Velocidad == 2) {
        click47o = 2;
    }
    if (Velocidad == 3) {
        click47o = 1;
  }}}                          

 function a48() {
    click48b -= 1;
    click48d -= 1;
    click48o -= 1;

if (document.getElementById('a48').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a48').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b48();
}

if (document.getElementById('a48').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a48').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b48();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a48').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a48').src = suerte[numeros3];
        b48();
    }
  }

  if (document.getElementById('a48').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a48').src=items1[numero48a];
    }
    if (Suerte == 1) {
        document.getElementById('a48').src=items1[numero48a];
    }
    if (Suerte == 2) {
        document.getElementById('a48').src=items2[numero48b];
    }
    if (Suerte == 3) {
        document.getElementById('a48').src=items3[numero48c];
    }
    b48();
 }
 if (document.getElementById('a48').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a48').src= suerte[numeros3];
    document.getElementById('a48').style.animationName= "";
    document.getElementById('a48').style.animationDuration= "";
    document.getElementById('a48').style.animationIterationCount= "";
    b48();
 }
 if (click48b == 0) {
    document.getElementById('a48').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click48d == 0) {
    document.getElementById('a48').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click48o == 0) {
    document.getElementById('a48').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b48() {

 if (document.getElementById('a48').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click48b = 6;
    }
    if (Velocidad == 1) {
        click48b = 5;
    }
    if (Velocidad == 2) {
        click48b = 4;
    }
    if (Velocidad == 3) {
        click48b = 3;
  }}
 
 if (document.getElementById('a48').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click48d = 5;
    }
    if (Velocidad == 1) {
        click48d = 4;
    }
    if (Velocidad == 2) {
        click48d = 3;
    }
    if (Velocidad == 3) {
        click48d = 2;
  }}
    
 if (document.getElementById('a48').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click48o = 4;
    }
    if (Velocidad == 1) {
        click48o = 3;
    }
    if (Velocidad == 2) {
        click48o = 2;
    }
    if (Velocidad == 3) {
        click48o = 1;
  }}}                          

 function a49() {
    click49b -= 1;
    click49d -= 1;
    click49o -= 1;

if (document.getElementById('a49').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a49').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b49();
}

if (document.getElementById('a49').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a49').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b49();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a49').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a49').src = suerte[numeros1];
        b49();
    }
  }

  if (document.getElementById('a49').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a49').src=items1[numero49a];
    }
    if (Suerte == 1) {
        document.getElementById('a49').src=items1[numero49a];
    }
    if (Suerte == 2) {
        document.getElementById('a49').src=items2[numero49b];
    }
    if (Suerte == 3) {
        document.getElementById('a49').src=items3[numero49c];
    }
    b49();
 }
 if (document.getElementById('a49').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a49').src= suerte[numeros1];
    document.getElementById('a49').style.animationName= "";
    document.getElementById('a49').style.animationDuration= "";
    document.getElementById('a49').style.animationIterationCount= "";
    b49();
 }
 if (click49b == 0) {
    document.getElementById('a49').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click49d == 0) {
    document.getElementById('a49').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click49o == 0) {
    document.getElementById('a49').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b49() {

 if (document.getElementById('a49').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click49b = 6;
    }
    if (Velocidad == 1) {
        click49b = 5;
    }
    if (Velocidad == 2) {
        click49b = 4;
    }
    if (Velocidad == 3) {
        click49b = 3;
  }}
 
 if (document.getElementById('a49').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click49d = 5;
    }
    if (Velocidad == 1) {
        click49d = 4;
    }
    if (Velocidad == 2) {
        click49d = 3;
    }
    if (Velocidad == 3) {
        click49d = 2;
  }}
    
 if (document.getElementById('a49').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click49o = 4;
    }
    if (Velocidad == 1) {
        click49o = 3;
    }
    if (Velocidad == 2) {
        click49o = 2;
    }
    if (Velocidad == 3) {
        click49o = 1;
  }}}                          

 function a50() {
    click50b -= 1;
    click50d -= 1;
    click50o -= 1;

if (document.getElementById('a50').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a50').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b50();
}

if (document.getElementById('a50').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a50').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b50();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a50').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a50').src = suerte[numeros2];
        b50();
    }
  }

  if (document.getElementById('a50').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a50').src=items1[numero50a];
    }
    if (Suerte == 1) {
        document.getElementById('a50').src=items1[numero50a];
    }
    if (Suerte == 2) {
        document.getElementById('a50').src=items2[numero50b];
    }
    if (Suerte == 3) {
        document.getElementById('a50').src=items3[numero50c];
    }
    b50();
 }
 if (document.getElementById('a50').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a50').src= suerte[numeros2];
    document.getElementById('a50').style.animationName= "";
    document.getElementById('a50').style.animationDuration= "";
    document.getElementById('a50').style.animationIterationCount= "";
    b50();
 }
 if (click50b == 0) {
    document.getElementById('a50').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click50d == 0) {
    document.getElementById('a50').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click50o == 0) {
    document.getElementById('a50').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b50() {

 if (document.getElementById('a50').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click50b = 6;
    }
    if (Velocidad == 1) {
        click50b = 5;
    }
    if (Velocidad == 2) {
        click50b = 4;
    }
    if (Velocidad == 3) {
        click50b = 3;
  }}
 
 if (document.getElementById('a50').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click50d = 5;
    }
    if (Velocidad == 1) {
        click50d = 4;
    }
    if (Velocidad == 2) {
        click50d = 3;
    }
    if (Velocidad == 3) {
        click50d = 2;
  }}
    
 if (document.getElementById('a50').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click50o = 4;
    }
    if (Velocidad == 1) {
        click50o = 3;
    }
    if (Velocidad == 2) {
        click50o = 2;
    }
    if (Velocidad == 3) {
        click50o = 1;
  }}}                         

 function a51() {
    click51b -= 1;
    click51d -= 1;
    click51o -= 1;

if (document.getElementById('a51').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a51').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b51();
}

if (document.getElementById('a51').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a51').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b51();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a51').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a51').src = suerte[numeros3];
        b51();
    }
  }

  if (document.getElementById('a51').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a51').src=items1[numero51a];
    }
    if (Suerte == 1) {
        document.getElementById('a51').src=items1[numero51a];
    }
    if (Suerte == 2) {
        document.getElementById('a51').src=items2[numero51b];
    }
    if (Suerte == 3) {
        document.getElementById('a51').src=items3[numero51c];
    }
    b51();
 }
 if (document.getElementById('a51').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a51').src= suerte[numeros3];
    document.getElementById('a51').style.animationName= "";
    document.getElementById('a51').style.animationDuration= "";
    document.getElementById('a51').style.animationIterationCount= "";
    b51();
 }
 if (click51b == 0) {
    document.getElementById('a51').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click51d == 0) {
    document.getElementById('a51').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click51o == 0) {
    document.getElementById('a51').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b51() {

 if (document.getElementById('a51').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click51b = 6;
    }
    if (Velocidad == 1) {
        click51b = 5;
    }
    if (Velocidad == 2) {
        click51b = 4;
    }
    if (Velocidad == 3) {
        click51b = 3;
  }}
 
 if (document.getElementById('a51').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click51d = 5;
    }
    if (Velocidad == 1) {
        click51d = 4;
    }
    if (Velocidad == 2) {
        click51d = 3;
    }
    if (Velocidad == 3) {
        click51d = 2;
  }}
    
 if (document.getElementById('a51').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click51o = 4;
    }
    if (Velocidad == 1) {
        click51o = 3;
    }
    if (Velocidad == 2) {
        click51o = 2;
    }
    if (Velocidad == 3) {
        click51o = 1;
  }}}                         

 function a52() {
    click52b -= 1;
    click52d -= 1;
    click52o -= 1;

if (document.getElementById('a52').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a52').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b52();
}

if (document.getElementById('a52').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a52').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b52();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a52').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a52').src = suerte[numeros1];
        b52();
    }
  }

  if (document.getElementById('a52').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a52').src=items1[numero52a];
    }
    if (Suerte == 1) {
        document.getElementById('a52').src=items1[numero52a];
    }
    if (Suerte == 2) {
        document.getElementById('a52').src=items2[numero52b];
    }
    if (Suerte == 3) {
        document.getElementById('a52').src=items3[numero52c];
    }
    b52();
 }
 if (document.getElementById('a52').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a52').src= suerte[numeros1];
    document.getElementById('a52').style.animationName= "";
    document.getElementById('a52').style.animationDuration= "";
    document.getElementById('a52').style.animationIterationCount= "";
    b52();
 }
 if (click52b == 0) {
    document.getElementById('a52').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click52d == 0) {
    document.getElementById('a52').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click52o == 0) {
    document.getElementById('a52').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b52() {

 if (document.getElementById('a52').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click52b = 6;
    }
    if (Velocidad == 1) {
        click52b = 5;
    }
    if (Velocidad == 2) {
        click52b = 4;
    }
    if (Velocidad == 3) {
        click52b = 3;
  }}
 
 if (document.getElementById('a52').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click52d = 5;
    }
    if (Velocidad == 1) {
        click52d = 4;
    }
    if (Velocidad == 2) {
        click52d = 3;
    }
    if (Velocidad == 3) {
        click52d = 2;
  }}
    
 if (document.getElementById('a52').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click52o = 4;
    }
    if (Velocidad == 1) {
        click52o = 3;
    }
    if (Velocidad == 2) {
        click52o = 2;
    }
    if (Velocidad == 3) {
        click52o = 1;
  }}}                         

 function a53() {
    click53b -= 1;
    click53d -= 1;
    click53o -= 1;

if (document.getElementById('a53').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a53').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b53();
}

if (document.getElementById('a53').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a53').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b53();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a53').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a53').src = suerte[numeros2];
        b53();
    }
  }

  if (document.getElementById('a53').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a53').src=items1[numero53a];
    }
    if (Suerte == 1) {
        document.getElementById('a53').src=items1[numero53a];
    }
    if (Suerte == 2) {
        document.getElementById('a53').src=items2[numero53b];
    }
    if (Suerte == 3) {
        document.getElementById('a53').src=items3[numero53c];
    }
    b53();
 }
 if (document.getElementById('a53').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a53').src= suerte[numeros2];
    document.getElementById('a53').style.animationName= "";
    document.getElementById('a53').style.animationDuration= "";
    document.getElementById('a53').style.animationIterationCount= "";
    b53();
 }
 if (click53b == 0) {
    document.getElementById('a53').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click53d == 0) {
    document.getElementById('a53').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click53o == 0) {
    document.getElementById('a53').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b53() {

 if (document.getElementById('a53').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click53b = 6;
    }
    if (Velocidad == 1) {
        click53b = 5;
    }
    if (Velocidad == 2) {
        click53b = 4;
    }
    if (Velocidad == 3) {
        click53b = 3;
  }}
 
 if (document.getElementById('a53').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click53d = 5;
    }
    if (Velocidad == 1) {
        click53d = 4;
    }
    if (Velocidad == 2) {
        click53d = 3;
    }
    if (Velocidad == 3) {
        click53d = 2;
  }}
    
 if (document.getElementById('a53').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click53o = 4;
    }
    if (Velocidad == 1) {
        click53o = 3;
    }
    if (Velocidad == 2) {
        click53o = 2;
    }
    if (Velocidad == 3) {
        click53o = 1;
  }}}                         

 function a54() {
    click54b -= 1;
    click54d -= 1;
    click54o -= 1;

if (document.getElementById('a54').src == "https://i.ibb.co/BnrdGCh/poder1a1.png") {
    document.getElementById('a54').src = "https://i.ibb.co/0jqRTQJ/oro.jpg";
    b54();
}

if (document.getElementById('a54').src == "https://i.ibb.co/JCxQhWx/poder1a2.jpg") {
    document.getElementById('a54').src = "https://i.ibb.co/hRrsJ5P/bitcoin.jpg";
    b54();
}

  if (MartilloEquipado == 1) {
    if (document.getElementById('a54').src == "https://i.ibb.co/grw64xB/carbon.jpg") {
        document.getElementById('a54').src = suerte[numeros3];
        b54();
    }
  }

  if (document.getElementById('a54').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    if (Suerte == 0) {
        document.getElementById('a54').src=items1[numero54a];
    }
    if (Suerte == 1) {
        document.getElementById('a54').src=items1[numero54a];
    }
    if (Suerte == 2) {
        document.getElementById('a54').src=items2[numero54b];
    }
    if (Suerte == 3) {
        document.getElementById('a54').src=items3[numero54c];
    }
    b54();
 }
 if (document.getElementById('a54').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a54').src= suerte[numeros3];
    document.getElementById('a54').style.animationName= "";
    document.getElementById('a54').style.animationDuration= "";
    document.getElementById('a54').style.animationIterationCount= "";
    b54();
 }
 if (click54b == 0) {
    document.getElementById('a54').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click54d == 0) {
    document.getElementById('a54').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click54o == 0) {
    document.getElementById('a54').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b54() {

 if (document.getElementById('a54').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    if (Velocidad == 0) {
        click54b = 6;
    }
    if (Velocidad == 1) {
        click54b = 5;
    }
    if (Velocidad == 2) {
        click54b = 4;
    }
    if (Velocidad == 3) {
        click54b = 3;
  }}
 
 if (document.getElementById('a54').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    if (Velocidad == 0) {
        click54d = 5;
    }
    if (Velocidad == 1) {
        click54d = 4;
    }
    if (Velocidad == 2) {
        click54d = 3;
    }
    if (Velocidad == 3) {
        click54d = 2;
  }}
    
 if (document.getElementById('a54').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    if (Velocidad == 0) {
        click54o = 4;
    }
    if (Velocidad == 1) {
        click54o = 3;
    }
    if (Velocidad == 2) {
        click54o = 2;
    }
    if (Velocidad == 3) {
        click54o = 1;
  }}}
 function dibujarscore1() {
    
    document.getElementById('scorefinal').style.display="block";


    document.getElementById('score1').innerHTML = "Total = " + puntos;
    document.getElementById('score1').style.animationName="animaciontexto";
    document.getElementById('score1').style.animationDuration="1s";


    document.getElementById('bitcoin1').innerHTML = "4 x "+ bitcoin;
    document.getElementById('bitcoin1').style.animationName="animaciontexto";
    document.getElementById('bitcoin1').style.animationDuration="1s";


    document.getElementById('diamante1').innerHTML = "3 x "+ diamante;
    document.getElementById('diamante1').style.animationName="animaciontexto";
    document.getElementById('diamante1').style.animationDuration="1s";
    

    document.getElementById('oro1').innerHTML = "2 x "+ oro; 
    document.getElementById('oro1').style.animationName="animaciontexto";
    document.getElementById('oro1').style.animationDuration="1s";

    document.getElementById('oro').style.animationName="animaciontexto";
    document.getElementById('oro').style.animationDuration="1s";

    document.getElementById('score').style.animationName="animaciontexto";
    document.getElementById('score').style.animationDuration="1s";

    document.getElementById('diamante').style.animationName="animaciontexto";
    document.getElementById('diamante').style.animationDuration="1s";

    document.getElementById('bitcoin').style.animationName="animaciontexto";
    document.getElementById('bitcoin').style.animationDuration="1s";   } 

    var puntos4 = document.getElementById('puntos2').value;
    document.getElementById('score1').innerHTML = puntos4;

    var bitcoin4 = document.getElementById('bitcoin2').value;
    document.getElementById('bitcoin1').innerHTML = bitcoin4;

    var diamante4 = document.getElementById('diamante2').value;
    document.getElementById('diamante1').innerHTML = diamante4;

    var oro4 = document.getElementById('oro2').value;
    document.getElementById('oro1').innerHTML = oro4;

function SumarPuntaje1() {
     Monedas += puntos;
     document.getElementById('Monedas').innerHTML= Monedas;
     puntos = 0;
     document.getElementById('scorefinal').style.display="none";
     document.getElementById('a1').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a2').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a3').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a4').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a5').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a6').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a7').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a8').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a9').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a10').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a11').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a12').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a13').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a14').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a15').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a16').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a17').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a18').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a19').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a20').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a21').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a22').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a23').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a24').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a25').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a26').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a27').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a28').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a29').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a30').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a31').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a32').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a33').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a34').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a35').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a36').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a37').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a38').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a39').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a40').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a41').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a42').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a43').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a44').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a45').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a46').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a47').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a48').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a49').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a50').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a51').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a52').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a53').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     document.getElementById('a54').src ="https://i.ibb.co/8KBVgbZ/sinfondo.png";
     numero1a += 3;
     numero2a += 3;
     numero3a += 3;
     numero4a += 3;
     numero5a += 3;
     numero6a += 3;
     numero7a += 3;
     numero8a += 3;
     numero9a += 3;
     numero10a += 3;
     numero11a += 3;
     numero12a += 3;
     numero13a += 3;
     numero14a += 3;
     numero15a += 3;
     numero16a += 3;
     numero17a += 3;
     numero18a += 3;
     numero19a += 3;
     numero20a += 3;
     numero21a += 3;
     numero22a += 3;
     numero23a += 3;
     numero24a += 3;
     numero25a += 3;
     numero26a += 3;
     numero27a += 3;
     numero28a += 3;
     numero29a += 3;
     numero30a += 3;
     numero31a += 3;
     numero32a += 3;
     numero33a += 3;
     numero34a += 3;
     numero35a += 3;
     numero36a += 3;
     numero37a += 3;
     numero38a += 3;
     numero39a += 3;
     numero40a += 3;
     numero41a += 3;
     numero42a += 3;
     numero43a += 3;
     numero44a += 3;
     numero45a += 3;
     numero46a += 3;
     numero47a += 3;
     numero48a += 3;
     numero49a += 3;
     numero50a += 3;
     numero51a += 3;
     numero52a += 3;
     numero53a += 3;
     numero54a += 3;


     numero1b += 4;
     numero2b += 4;
     numero3b += 4;
     numero4b += 4;
     numero5b += 4;
     numero6b += 4;
     numero7b += 4;
     numero8b += 4;
     numero9b += 4;
     numero10b += 4;
     numero11b += 4;
     numero12b += 4;
     numero13b += 4;
     numero14b += 4;
     numero15b += 4;
     numero16b += 4;
     numero17b += 4;
     numero18b += 4;
     numero19b += 4;
     numero20b += 4;
     numero21b += 4;
     numero22b += 4;
     numero23b += 4;
     numero24b += 4;
     numero25b += 4;
     numero26b += 4;
     numero27b += 4;
     numero28b += 4;
     numero29b += 4;
     numero30b += 4;
     numero31b += 4;
     numero32b += 4;
     numero33b += 4;
     numero34b += 4;
     numero35b += 4;
     numero36b += 4;
     numero37b += 4;
     numero38b += 4;
     numero39b += 4;
     numero40b += 4;
     numero41b += 4;
     numero42b += 4;
     numero43b += 4;
     numero44b += 4;
     numero45b += 4;
     numero46b += 4;
     numero47b += 4;
     numero48b += 4;
     numero49b += 4;
     numero50b += 4;
     numero51b += 4;
     numero52b += 4;
     numero53b += 4;
     numero54b += 4;


    
     numero1c += 5;
     numero2c += 5;
     numero3c += 5;
     numero4c += 5;
     numero5c += 5;
     numero6c += 5;
     numero7c += 5;
     numero8c += 5;
     numero9c += 5;
     numero10c += 5;
     numero11c += 5;
     numero12c += 5;
     numero13c += 5;
     numero14c += 5;
     numero15c += 5;
     numero16c += 5;
     numero17c += 5;
     numero18c += 5;
     numero19c += 5;
     numero20c += 5;
     numero21c += 5;
     numero22c += 5;
     numero23c += 5;
     numero24c += 5;
     numero25c += 5;
     numero26c += 5;
     numero27c += 5;
     numero28c += 5;
     numero29c += 5;
     numero30c += 5;
     numero31c += 5;
     numero32c += 5;
     numero33c += 5;
     numero34c += 5;
     numero35c += 5;
     numero36c += 5;
     numero37c += 5;
     numero38c += 5;
     numero39c += 5;
     numero40c += 5;
     numero41c += 5;
     numero42c += 5;
     numero43c += 5;
     numero44c += 5;
     numero45c += 5;
     numero46c += 5;
     numero47c += 5;
     numero48c += 5;
     numero49c += 5;
     numero50c += 5;
     numero51c += 5;
     numero52c += 5;
     numero53c += 5;
     numero54c += 5;


    if (numero1a >= 50) {
        numero1a = 1;
    }
    if (numero1b >= 50) {
        numero1b = 1;
    }
    if (numero1c >= 50) {
        numero1c = 1;
    }



    
    if (numero2a >= 50) {
        numero2a = 3;
    }
    if (numero2b >= 50) {
        numero2b = 3;
    }
    if (numero2c >= 50) {
        numero2c = 3;
    }

    if (numero3a >= 50) {
        numero3a = 5;
    }
    if (numero3b >= 50) {
        numero3b = 5;
    }
    if (numero3c >= 50) {
        numero3c = 5;
    }



    if (numero4a >= 50) {
        numero4a = 7;
    }
    if (numero4b >= 50) {
        numero4b = 7;
    }
    if (numero4c >= 50) {
        numero4c = 7;
    }



    if (numero5a >= 50) {
        numero5a = 9;
    }
    if (numero5b >= 50) {
        numero5b = 9;
    }
    if (numero5c >= 50) {
        numero5c = 9;
    }



    if (numero6a >= 50) {
        numero6a = 1;
    }
    if (numero6b >= 50) {
        numero6b = 1;
    }
    if (numero6c >= 50) {
        numero6c = 1;
    }



    if (numero7a >= 50) {
        numero7a = 2;
    }
    if (numero7b >= 50) {
        numero7b = 2;
    }
    if (numero7c >= 50) {
        numero7c = 2;
    }



    if (numero8a >= 50) {
        numero8a = 3;
    }
    if (numero8b >= 50) {
        numero8b = 3;
    }
    if (numero8c >= 50) {
        numero8c = 3;
    }



    if (numero9a >= 50) {
        numero9a = 4;
    }
    if (numero9b >= 50) {
        numero9b = 4;
    }
    if (numero9c >= 50) {
        numero9c = 4;
    }



    if (numero10a >= 50) {
        numero10a = 30;
    }
    if (numero10b >= 50) {
        numero10b = 30;
    }
    if (numero10c >= 50) {
        numero10c = 30;
    }


    if (numero11a >= 50) {
        numero11a = 45;
    }
    if (numero11b >= 50) {
        numero11b = 45;
    }
    if (numero11c >= 50) {
        numero11c = 45;
    }


    if (numero12a >= 50) {
        numero12a = 33;
    }
    if (numero12b >= 50) {
        numero12b = 33;
    }
    if (numero12c >= 50) {
        numero12c = 33;
    }



    if (numero13a >= 50) {
        numero13a = 36;
    }
    if (numero13b >= 50) {
        numero13b = 36;
    }
    if (numero13c >= 50) {
        numero13c = 36;
    }



    if (numero14a >= 50) {
        numero14a = 5;
    }
    if (numero14b >= 50) {
        numero14b = 5;
    }
    if (numero14c >= 50) {
        numero14c = 5;
    }



    if (numero15a >= 50) {
        numero15a = 45;
    }
    if (numero15b >= 50) {
        numero15b = 45;
    }
    if (numero15c >= 50) {
        numero15c = 45;
    }



    if (numero16a >= 50) {
        numero16a = 23;
    }
    if (numero16b >= 50) {
        numero16b = 23;
    }
    if (numero16c >= 50) {
        numero16c = 23;
    }



    if (numero17a >= 50) {
        numero17a = 7;
    }
    if (numero17b >= 50) {
        numero17b = 7;
    }
    if (numero17c >= 50) {
        numero17c = 7;
    }



    if (numero18a >= 50) {
        numero18a = 8;
    }
    if (numero18b >= 50) {
        numero18b = 8;
    }
    if (numero18c >= 50) {
        numero18c = 8;
    }



    if (numero19a >= 50) {
        numero19a = 9;
    }
    if (numero19b >= 50) {
        numero19b = 9;
    }
    if (numero19c >= 50) {
        numero19c = 9;
    }



    if (numero20a >= 50) {
        numero20a = 10;
    }
    if (numero20b >= 50) {
        numero20b = 10;
    }
    if (numero20c >= 50) {
        numero20c = 10;
    }



    if (numero21a >= 50) {
        numero21a = 11;
    }
    if (numero21b >= 50) {
        numero21b = 11;
    }
    if (numero21c >= 50) {
        numero21c = 11;
    }



    if (numero22a >= 50) {
        numero22a = 12;
    }
    if (numero22b >= 50) {
        numero22b = 12;
    }
    if (numero22c >= 50) {
        numero22c = 12;
    }



    if (numero23a >= 50) {
        numero23a = 13;
    }
    if (numero23b >= 50) {
        numero23b = 13;
    }
    if (numero23c >= 50) {
        numero23c = 13;
    }



    if (numero24a >= 50) {
        numero24a = 14;
    }
    if (numero24b >= 50) {
        numero24b = 14;
    }
    if (numero24c >= 50) {
        numero24c = 14;
    }



    if (numero25a >= 50) {
        numero25a = 15;
    }
    if (numero25b >= 50) {
        numero25b = 15;
    }
    if (numero25c >= 50) {
        numero25c = 15;
    }




    if (numero26a >= 50) {
        numero26a = 11;
    }
    if (numero26b >= 50) {
        numero26b = 11;
    }
    if (numero26c >= 50) {
        numero26c = 11;
    }



    if (numero26a >= 50) {
        numero26a = 11;
    }
    if (numero26b >= 50) {
        numero26b = 11;
    }
    if (numero26c >= 50) {
        numero26c = 11;
    }




    if (numero27a >= 50) {
        numero27a = 12;
    }
    if (numero27b >= 50) {
        numero27b = 12;
    }
    if (numero27c >= 50) {
        numero27c = 12;
    }



    if (numero28a >= 50) {
        numero28a = 13;
    }
    if (numero28b >= 50) {
        numero28b = 13;
    }
    if (numero28c >= 50) {
        numero28c = 13;
    }




    if (numero29a >= 50) {
        numero29a = 14;
    }
    if (numero29b >= 50) {
        numero29b = 14;
    }
    if (numero29c >= 50) {
        numero29c = 14;
    }



    if (numero30a >= 50) {
        numero30a = 15;
    }
    if (numero30b >= 50) {
        numero30b = 15;
    }
    if (numero30c >= 50) {
        numero30c = 15;
    }



    if (numero31a >= 50) {
        numero31a = 16;
    }
    if (numero31b >= 50) {
        numero31b = 16;
    }
    if (numero31c >= 50) {
        numero31c = 16;
    }



    if (numero32a >= 50) {
        numero32a = 17;
    }
    if (numero32b >= 50) {
        numero32b = 17;
    }
    if (numero32c >= 50) {
        numero32c = 17;
    }



    if (numero33a >= 50) {
        numero33a = 18;
    }
    if (numero33b >= 50) {
        numero33b = 18;
    }
    if (numero33c >= 50) {
        numero33c = 18;
    }



    if (numero34a >= 50) {
        numero34a = 19;
    }
    if (numero34b >= 50) {
        numero34b = 19;
    }
    if (numero34c >= 50) {
        numero34c = 19;
    }



    if (numero35a >= 50) {
        numero35a = 20;
    }
    if (numero35b >= 50) {
        numero35b = 20;
    }
    if (numero35c >= 50) {
        numero35c = 20;
    }



    if (numero36a >= 50) {
        numero36a = 15;
    }
    if (numero36b >= 50) {
        numero36b = 15;
    }
    if (numero36c >= 50) {
        numero36c = 15;
    }



    if (numero37a >= 50) {
        numero37a = 16;
    }
    if (numero37b >= 50) {
        numero37b = 16;
    }
    if (numero37c >= 50) {
        numero37c = 16;
    }



    if (numero38a >= 50) {
        numero38a = 17;
    }
    if (numero38b >= 50) {
        numero38b = 17;
    }
    if (numero38c >= 50) {
        numero38c = 17;
    }



    if (numero39a >= 50) {
        numero39a = 18;
    }
    if (numero39b >= 50) {
        numero39b = 18;
    }
    if (numero39c >= 50) {
        numero39c = 18;
    }



    if (numero40a >= 50) {
        numero40a = 19;
    }
    if (numero40b >= 50) {
        numero40b = 19;
    }
    if (numero40c >= 50) {
        numero40c = 19;
    }



    if (numero41a >= 50) {
        numero41a = 20;
    }
    if (numero41b >= 50) {
        numero41b = 20;
    }
    if (numero41c >= 50) {
        numero41c = 20;
    }



    if (numero42a >= 50) {
        numero42a = 21;
    }
    if (numero42b >= 50) {
        numero42b = 21;
    }
    if (numero42c >= 50) {
        numero42c = 21;
    }



    if (numero43a >= 50) {
        numero43a = 22;
    }
    if (numero43b >= 50) {
        numero43b = 22;
    }
    if (numero43c >= 50) {
        numero43c = 22;
    }



    if (numero44a >= 50) {
        numero44a = 23;
    }
    if (numero44b >= 50) {
        numero44b = 23;
    }
    if (numero44c >= 50) {
        numero44c = 23;
    }




    if (numero45a >= 50) {
        numero45a = 24;
    }
    if (numero45b >= 50) {
        numero45b = 24;
    }
    if (numero45c >= 50) {
        numero45c = 24;
    }



    if (numero46a >= 50) {
        numero46a = 25;
    }
    if (numero46b >= 50) {
        numero46b = 25;
    }
    if (numero46c >= 50) {
        numero46c = 25;
    }



    if (numero47a >= 50) {
        numero47a = 20;
    }
    if (numero47b >= 50) {
        numero47b = 20;
    }
    if (numero47c >= 50) {
        numero47c = 20;
    }



    if (numero48a >= 50) {
        numero48a = 21;
    }
    if (numero48b >= 50) {
        numero48b = 21;
    }
    if (numero48c >= 50) {
        numero48c = 21;
    }



    if (numero49a >= 50) {
        numero49a = 22;
    }
    if (numero49b >= 50) {
        numero49b = 22;
    }
    if (numero49c >= 50) {
        numero49c = 22;
    }



    if (numero50a >= 50) {
        numero50a = 23;
    }
    if (numero50b >= 50) {
        numero50b = 23;
    }
    if (numero50c >= 50) {
        numero50c = 23;
    }



    if (numero51a >= 50) {
        numero51a = 2;
    }
    if (numero51b >= 50) {
        numero51b = 2;
    }
    if (numero51c >= 50) {
        numero51c = 2;
    }



    if (numero52a >= 50) {
        numero52a = 3;
    }
    if (numero52b >= 50) {
        numero52b = 3;
    }
    if (numero52c >= 50) {
        numero52c = 3;
    }



    if (numero53a >= 50) {
        numero53a = 4;
    }
    if (numero53b >= 50) {
        numero53b = 4;
    }
    if (numero53c >= 50) {
        numero53c = 4;
    }



    if (numero54a >= 50) {
        numero54a = 5;
    }
    if (numero54b >= 50) {
        numero54b = 5;
    }
    if (numero54c >= 50) {
        numero54c = 5;
    }
}
function QuitarAnimacionDestello() {


if (document.getElementById('a1').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a1').style.animationName= "";
    document.getElementById('a1').style.animationDuration= "";
    document.getElementById('a1').style.animationIterationCount= "";
}    

if (document.getElementById('a2').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a2').style.animationName= "";
    document.getElementById('a2').style.animationDuration= "";
    document.getElementById('a2').style.animationIterationCount= "";
}    

if (document.getElementById('a3').src == "https://i.ibb.co/TLs8dN5/destello.png") {}    
else{
    document.getElementById('a3').style.animationName= "";
    document.getElementById('a3').style.animationDuration= "";
    document.getElementById('a3').style.animationIterationCount= "";
}

if (document.getElementById('a4').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a4').style.animationName= "";
    document.getElementById('a4').style.animationDuration= "";
    document.getElementById('a4').style.animationIterationCount= "";

}

if (document.getElementById('a5').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a5').style.animationName= "";
    document.getElementById('a5').style.animationDuration= "";
    document.getElementById('a5').style.animationIterationCount= "";
}

if (document.getElementById('a6').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a6').style.animationName= "";
    document.getElementById('a6').style.animationDuration= "";
    document.getElementById('a6').style.animationIterationCount= "";
}

if (document.getElementById('a7').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a7').style.animationName= "";
    document.getElementById('a7').style.animationDuration= "";
    document.getElementById('a7').style.animationIterationCount= "";
}

if (document.getElementById('a8').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a8').style.animationName= "";
    document.getElementById('a8').style.animationDuration= "";
    document.getElementById('a8').style.animationIterationCount= "";
}

if (document.getElementById('a9').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a9').style.animationName= "";
    document.getElementById('a9').style.animationDuration= "";
    document.getElementById('a9').style.animationIterationCount= "";
}

if (document.getElementById('a10').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a10').style.animationName= "";
    document.getElementById('a10').style.animationDuration= "";
    document.getElementById('a10').style.animationIterationCount= "";
}

if (document.getElementById('a11').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a11').style.animationName= "";
    document.getElementById('a11').style.animationDuration= "";
    document.getElementById('a11').style.animationIterationCount= "";
}

if (document.getElementById('a12').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a12').style.animationName= "";
    document.getElementById('a12').style.animationDuration= "";
    document.getElementById('a12').style.animationIterationCount= "";
}

if (document.getElementById('a13').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a13').style.animationName= "";
    document.getElementById('a13').style.animationDuration= "";
    document.getElementById('a13').style.animationIterationCount= "";
}

if (document.getElementById('a14').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a14').style.animationName= "";
    document.getElementById('a14').style.animationDuration= "";
    document.getElementById('a14').style.animationIterationCount= "";
}

if (document.getElementById('a15').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a15').style.animationName= "";
    document.getElementById('a15').style.animationDuration= "";
    document.getElementById('a15').style.animationIterationCount= "";
}

if (document.getElementById('a16').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a16').style.animationName= "";
    document.getElementById('a16').style.animationDuration= "";
    document.getElementById('a16').style.animationIterationCount= "";
}

if (document.getElementById('a17').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a17').style.animationName= "";
    document.getElementById('a17').style.animationDuration= "";
    document.getElementById('a17').style.animationIterationCount= "";
}

if (document.getElementById('a18').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a18').style.animationName= "";
    document.getElementById('a18').style.animationDuration= "";
    document.getElementById('a18').style.animationIterationCount= "";
}

if (document.getElementById('a19').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a19').style.animationName= "";
    document.getElementById('a19').style.animationDuration= "";
    document.getElementById('a19').style.animationIterationCount= "";
}

if (document.getElementById('a20').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a20').style.animationName= "";
    document.getElementById('a20').style.animationDuration= "";
    document.getElementById('a20').style.animationIterationCount= "";
}

if (document.getElementById('a21').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a21').style.animationName= "";
    document.getElementById('a21').style.animationDuration= "";
    document.getElementById('a21').style.animationIterationCount= "";
}

if (document.getElementById('a22').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a22').style.animationName= "";
    document.getElementById('a22').style.animationDuration= "";
    document.getElementById('a22').style.animationIterationCount= "";
}

if (document.getElementById('a23').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a23').style.animationName= "";
    document.getElementById('a23').style.animationDuration= "";
    document.getElementById('a23').style.animationIterationCount= "";
}

if (document.getElementById('a24').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a24').style.animationName= "";
    document.getElementById('a24').style.animationDuration= "";
    document.getElementById('a24').style.animationIterationCount= "";
}

if (document.getElementById('a25').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a25').style.animationName= "";
    document.getElementById('a25').style.animationDuration= "";
    document.getElementById('a25').style.animationIterationCount= "";
}

if (document.getElementById('a26').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a26').style.animationName= "";
    document.getElementById('a26').style.animationDuration= "";
    document.getElementById('a26').style.animationIterationCount= "";
}

if (document.getElementById('a27').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a27').style.animationName= "";
    document.getElementById('a27').style.animationDuration= "";
    document.getElementById('a27').style.animationIterationCount= "";
}

if (document.getElementById('a28').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a28').style.animationName= "";
    document.getElementById('a28').style.animationDuration= "";
    document.getElementById('a28').style.animationIterationCount= "";
}

if (document.getElementById('a29').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a29').style.animationName= "";
    document.getElementById('a29').style.animationDuration= "";
    document.getElementById('a29').style.animationIterationCount= "";
}

if (document.getElementById('a30').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a30').style.animationName= "";
    document.getElementById('a30').style.animationDuration= "";
    document.getElementById('a30').style.animationIterationCount= "";
}

if (document.getElementById('a31').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a31').style.animationName= "";
    document.getElementById('a31').style.animationDuration= "";
    document.getElementById('a31').style.animationIterationCount= "";
}

if (document.getElementById('a32').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a32').style.animationName= "";
    document.getElementById('a32').style.animationDuration= "";
    document.getElementById('a32').style.animationIterationCount= "";
}

if (document.getElementById('a33').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a33').style.animationName= "";
    document.getElementById('a33').style.animationDuration= "";
    document.getElementById('a33').style.animationIterationCount= "";
}

if (document.getElementById('a34').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a34').style.animationName= "";
    document.getElementById('a34').style.animationDuration= "";
    document.getElementById('a34').style.animationIterationCount= "";
}

if (document.getElementById('a35').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a35').style.animationName= "";
    document.getElementById('a35').style.animationDuration= "";
    document.getElementById('a35').style.animationIterationCount= "";
}

if (document.getElementById('a36').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a36').style.animationName= "";
    document.getElementById('a36').style.animationDuration= "";
    document.getElementById('a36').style.animationIterationCount= "";
}

if (document.getElementById('a37').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a37').style.animationName= "";
    document.getElementById('a37').style.animationDuration= "";
    document.getElementById('a37').style.animationIterationCount= "";
}

if (document.getElementById('a38').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a38').style.animationName= "";
    document.getElementById('a38').style.animationDuration= "";
    document.getElementById('a38').style.animationIterationCount= "";
}

if (document.getElementById('a39').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a39').style.animationName= "";
    document.getElementById('a39').style.animationDuration= "";
    document.getElementById('a39').style.animationIterationCount= "";
}

if (document.getElementById('a40').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a40').style.animationName= "";
    document.getElementById('a40').style.animationDuration= "";
    document.getElementById('a40').style.animationIterationCount= "";
}

if (document.getElementById('a41').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a41').style.animationName= "";
    document.getElementById('a41').style.animationDuration= "";
    document.getElementById('a41').style.animationIterationCount= "";
}

if (document.getElementById('a42').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a42').style.animationName= "";
    document.getElementById('a42').style.animationDuration= "";
    document.getElementById('a42').style.animationIterationCount= "";
}

if (document.getElementById('a43').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a43').style.animationName= "";
    document.getElementById('a43').style.animationDuration= "";
    document.getElementById('a43').style.animationIterationCount= "";
}

if (document.getElementById('a44').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a44').style.animationName= "";
    document.getElementById('a44').style.animationDuration= "";
    document.getElementById('a44').style.animationIterationCount= "";
}

if (document.getElementById('a45').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a45').style.animationName= "";
    document.getElementById('a45').style.animationDuration= "";
    document.getElementById('a45').style.animationIterationCount= "";
}

if (document.getElementById('a46').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a46').style.animationName= "";
    document.getElementById('a46').style.animationDuration= "";
    document.getElementById('a46').style.animationIterationCount= "";
}

if (document.getElementById('a47').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a47').style.animationName= "";
    document.getElementById('a47').style.animationDuration= "";
    document.getElementById('a47').style.animationIterationCount= "";
}

if (document.getElementById('a48').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a48').style.animationName= "";
    document.getElementById('a48').style.animationDuration= "";
    document.getElementById('a48').style.animationIterationCount= "";
}

if (document.getElementById('a49').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a49').style.animationName= "";
    document.getElementById('a49').style.animationDuration= "";
    document.getElementById('a49').style.animationIterationCount= "";
}

if (document.getElementById('a50').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a50').style.animationName= "";
    document.getElementById('a50').style.animationDuration= "";
    document.getElementById('a50').style.animationIterationCount= "";
}

if (document.getElementById('a51').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a51').style.animationName= "";
    document.getElementById('a51').style.animationDuration= "";
    document.getElementById('a51').style.animationIterationCount= "";
}

if (document.getElementById('a52').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a52').style.animationName= "";
    document.getElementById('a52').style.animationDuration= "";
    document.getElementById('a52').style.animationIterationCount= "";
}

if (document.getElementById('a53').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a53').style.animationName= "";
    document.getElementById('a53').style.animationDuration= "";
    document.getElementById('a53').style.animationIterationCount= "";
}

if (document.getElementById('a54').src == "https://i.ibb.co/TLs8dN5/destello.png") {}
else{
    document.getElementById('a54').style.animationName= "";
    document.getElementById('a54').style.animationDuration= "";
    document.getElementById('a54').style.animationIterationCount= "";
}

 }               