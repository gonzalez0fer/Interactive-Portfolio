$("#button").click(function() {
  $('.moon-a').toggleClass('moon-crash');
  $('.zelda-a').toggleClass('zelda-b');
  $('.clouds_one_termina').toggleClass('clouds_one_termina_b');
  $('.clouds_two_termina').toggleClass('clouds_two_termina_b');
  /*window.setTimeout(nubes2,2000);*/
});



$("#button2").on('click', function() {
  var aura = $('.aura');
  var raziel = $('.raziel1');
  var vela = $('.candle');
  // register is not visible lets make it visible.
  if(aura.css('opacity') === '0')
  {
    aura.css({
      'opacity': '1',
    });
    vela.css({
      'opacity': '0',
    });
    raziel.css({
      'z-index': '209',
      'filter': 'brightness(160%)',
    });
  }
  else //We know the opacity is not 0 lets make it 0.
  {
    aura.css({
      'opacity': '0',
    });
    vela.css({
      'opacity': '1',
    });
    raziel.css({
      'filter': 'brightness(60%)',
    });

  }
});
