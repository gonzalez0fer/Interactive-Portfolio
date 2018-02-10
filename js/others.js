
/*loader*/
window.onload = function(){
  var contenedor = document.getElementById('loader');
  contenedor.style.visibility ='hidden';
  contenedor.style.opacity = '0';
}

/*mario parallax*/
$('.nube-mario-1').parallax({ speed: 0.2, axis: 'x' });
$('.nube-mario-2').parallax({ speed: 0.5, axis: 'x' });
