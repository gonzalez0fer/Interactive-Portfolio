	
	conteo= 0;
	sonido= document.getElementById('moneda');
	sonido2= document.getElementById('moneda2');
	texto= document.getElementById('textocambiante');


	function desaparecer(id){
		var elem = document.getElementById(id);
		elem.style.opacity = 0;
		sonido.play();
		conteo++;
		texto.innerHTML= "X "+conteo+" -Portafolio virtual";

		if(conteo==14){
			sonido2.play();
		}
	}



	