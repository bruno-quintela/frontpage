var open = false;

var dof = (function() {
	function init() {
        
         $("#togglePerspective").click(function(){
            if (!open)
                $(".layers").css('-webkit-transform','rotateY(50deg) rotateX(90deg) translateZ(-97px)');
             else
                 $(".layers").css('-webkit-transform','');
            open= !open;
        })
        
        $("#zoomToLayer1").click(function(){
            $('.layer-1').css('-webkit-transform', 'translateZ(0px)');
            $('.layer-2').css('-webkit-transform', 'translateZ(-1000px)');
            $('.layer-3').css('-webkit-transform', 'translateZ(-5000px)');
        })
        
        $("#zoomToLayer2").click(function(){
            $('.layer-1').css('-webkit-transform', 'translateZ(1000px)');
            $('.layer-2').css('-webkit-transform', 'translateZ(0px)');
            $('.layer-3').css('-webkit-transform', 'translateZ(-1000px)');
        })
        
        $("#zoomToLayer3").click(function(){
            $('.layer-1').css('-webkit-transform', 'translateZ(5000px)');
            $('.layer-2').css('-webkit-transform', 'translateZ(1000px)');
            $('.layer-3').css('-webkit-transform', 'translateZ(0px)');
        })
        
	}
    
    

	init();

})();
