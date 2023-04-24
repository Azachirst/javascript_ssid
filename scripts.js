$('.ventanas').hide();
$('#vista2').hide();
$('#puntos1').hide();

$(document).ready(function () {

    $('#opcion1').click(function (e) { 
        e.preventDefault();
        $('#row1').fadeOut();
        $('#inicio').fadeIn();
    });

    $('#opcion2').click(function (e) { 
        e.preventDefault();
        $('#row1').fadeOut();
        $('#nosotros').fadeIn();
    });

    $('#opcion3').click(function (e) { 
        e.preventDefault();
        $('#row1').fadeOut();
        $('#consultoria').fadeIn();
    });

    $('#opcion4').click(function (e) { 
        e.preventDefault();
        $('#row1').fadeOut();
        $('#contacto').fadeIn();
    });

    $('#cerrarinicio').click(function (e) { 
        e.preventDefault();
        $('#row1').show();
        $('#inicio').fadeOut();
    });

$('#cerrarnosotros').click(function (e) { 
    e.preventDefault();
        $('#row1').show();
    $('#nosotros').fadeOut();
});

$('#cerrarconsultoria').click(function (e) { 
    e.preventDefault();
        $('#row1').show();
    $('#consultoria').fadeOut();
});

$('#cerrarcontacto').click(function (e) { 
    e.preventDefault();
        $('#row1').show();
    $('#contacto').fadeOut();
});

$('#siguiente').click(function (e) { 
    e.preventDefault();
    $('#vista1').hide();
    $('#puntos2').hide();
    $('#vista2').show();
    $('#puntos1').show();
});

$('#atras').click(function (e) { 
    e.preventDefault();
    $('#vista2').hide();
    $('#puntos1').hide();
    $('#vista1').show();
    $('#puntos2').show();
});


});

//VALIDADOR DE FORMULARIO

    $('#alerta').hide();
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    if(nombre.length == 0 || email.length == 0 || mensaje.length == 0) {
      $('#alerta').fadeIn();
      return;
    }
    this.submit();
  }

  //EVENTO PARA LAS FOTOS DE LA GALERIA

  var imgcarousel = document.querySelectorAll(".fotoscarousel")

  for(const imgc of imgcarousel){
    imgc.addEventListener('mouseover', () => {
        imgc.style.width="250px";
    });
    imgc.addEventListener('mouseout', () => {
        imgc.style.width="200px";
    });
  }

//RELOJ DIGITAL

function relojContacto(){
    const reloj = document.getElementById("reloj");
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    reloj.innerHTML = "Es la hora: "+ hora + " : " + minuto + " : " + segundo;


    setTimeout("relojContacto()",1000)
}

relojContacto();
  
