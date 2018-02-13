var src = document.getElementById("f0");
var num = 25;
var dur = 2.5;
var startX = function(){ return $(window).width()/2+(-25+50*Math.random()) }
var endY = function(){ return $(window).height()/2 }

function startFire(){
	for (var i=1; i<num; i++){
		var _f = src.cloneNode(true);
    _f.id = String("flame"+i);
		document.getElementById("fire").appendChild(_f);
		if      (i%3) _f.style.backgroundImage = "url(http://creativeocean.com/dev/_images/flame2.png)";
		else if (i%2) _f.style.backgroundImage = "url(http://creativeocean.com/dev/_images/flame1.png)";
		loop(_f, i/num );
	}
  src.style.display='none';
}


function loop(_f, _p=0){ //console.log(_f._gsTransform.scaleX)
  var _tl = new TimelineLite()
  .fromTo(_f, dur/2+(dur/2)*Math.random(), {
    alpha:1,
    x:startX(),
    y:$(window).height(),
    scaleX:.75,
    scaleY:.33
  }, {
    y:endY(),
    ease:Linear.easeNone,
    scaleX:1+.5*Math.random(),
    scaleY:3+5*Math.random(),
    onComplete:loop, onCompleteParams:[_f]
  },0)
  .to(_f, dur/5, {alpha:0},"-="+String(dur/4))
  .progress(_p)
}


startFire();
