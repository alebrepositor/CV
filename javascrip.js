document.addEventListener("DOMContentLoaded", function() {
    
    /*Cambiar el selector al hacer click en diferentes links del navegador*/
    function cambiarSelector(botonACambiar,unBoton,otroBoton){
        unBoton.classList.remove('active');
        otroBoton.classList.remove('active');
        botonACambiar.classList.add('active');
    }

    document.querySelector('#experiencia').addEventListener('click', function(){ 
    
      cambiarSelector(document.getElementById("experiencia"),document.getElementById("habilidad"),document.getElementById("contacto"));
    
    });

    document.querySelector('#habilidad').addEventListener('click', function(){ 
    
      cambiarSelector(document.getElementById("habilidad"),document.getElementById("experiencia"),document.getElementById("contacto"));
    
    });

    document.querySelector('#contacto').addEventListener('click', function(){ 
    
      cambiarSelector(document.getElementById("contacto"),document.getElementById("experiencia"),document.getElementById("habilidad"));
    
    });
    
    /*Animacion al hacer escroll, el navegador cambia*/
    window.addEventListener("scroll", (event) => {
      var $tamanioNavegador = ($("nav").height() - 120)
      var $tamanioSeccionFoto = ($("#sidebarinfo").height() - 100 );
      
      var $height = $(window).scrollTop();
      var $experiencia =($("#experiencias").position().top) ; 
      var $habilidad = ($("#habilidades").position().top)  ;
      var $contacto = ($("#contactame").position().top) ; 
      
      
      
      if ($( window ).width() <= 767){
          $experiencia = $experiencia + $tamanioSeccionFoto;
          $habilidad =   $habilidad + $tamanioSeccionFoto;
          $contacto =    $contacto +  $tamanioSeccionFoto;
      }
      else{
          $experiencia =  $experiencia+ $tamanioNavegador;
          $habilidad = $habilidad+ $tamanioNavegador;
          $contacto = $contacto+ $tamanioNavegador;
      }
     
        console.log($( window ).width() )
        console.log( $height)
        console.log( $experiencia)
        console.log( $habilidad)
        console.log($contacto )
     
      if ($height < $habilidad ){
          cambiarSelector(document.getElementById("experiencia"),document.getElementById("habilidad"),document.getElementById("contacto"));
      }
      else if ($height >= $habilidad &&  $height < $contacto  ){
          cambiarSelector(document.getElementById("habilidad"),document.getElementById("experiencia"),document.getElementById("contacto"));
      }
      else if ($height >= $contacto){
         cambiarSelector(document.getElementById("contacto"),document.getElementById("experiencia"),document.getElementById("habilidad"));
      }
      
    
    });
    
    /* Codigo correspondiente a RamdonUser*/
    
    
    function agregarTexto(primerNombre,segundoNombre,telefono,email,imagen){
        
        var telefonoSeteado = telefono.replace(/[^0-9]/g, ''); //Limpiar caracteres espaciales dejando solo numeros.
        
        document.title = primerNombre + ' ' + segundoNombre;
        document.getElementById("tituloCv").innerText = primerNombre + ' ' + segundoNombre;
        document.getElementById("telefonoId").href = "tel:+" + telefonoSeteado;
        document.getElementById("telefonoId").innerText = telefonoSeteado;
        document.getElementById("whatsappId").href = "https://api.whatsapp.com/send?phone=" + telefonoSeteado;
        document.getElementById("emailId").href = "mailto:"+email; 
        document.getElementById("emailId").innerText = email;
        document.getElementById("imagenId").src = imagen;
    }
    
   
    /*Api ramdon user*/
    
    
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          var person = data.results[0];
          agregarTexto(person.name.first,person.name.last,person.cell,person.email,person.picture.large)
          
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { //si api genera un error, se muestra una persona.
                    alert("La API ramdomuser dejo de funcionar, presione aceptar" ); 
                    agregarTexto("Juan","Perez","24569822","juanperez@gmail.com","https://www.w3schools.com/bootstrap5/paris.jpg");
        }
    });
    
});
