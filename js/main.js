var open = false;

var dof = (function() {
	 var open = false;
    var defaultRotation = -40;
	function init() {
        
        $("#toggle").click(function(){
           changePerspective()
           open = !open;
        })
        
        $("#rotateRight").click(function(){
           rotatePerspective(90)
           setTimeout(function(){$(".portfolio-anim-simulate").addClass("animate-showPortfolio")},200);
        })
        
        $("#rotateLeft").click(function(){
           rotatePerspective(-90)
        })
        
        $('.ms-label-1').click(function(){
            $('.ms-screen-1').css('-webkit-transform','rotateX(90deg) translateZ(-350px)');
        })
        
        function changePerspective()
        {
            if( !open ) {
                $(".ms-perspective").addClass('ms-view-layers');
            }
            else
            {
                $(".ms-perspective").removeClass('ms-view-layers');
                $(".ms-device").css('-webkit-transform','');
            }
        }
        
        function rotatePerspective(angleY)
        {
            defaultRotation += angleY;
            $(".ms-device").css('-webkit-transform','rotateY('+defaultRotation+'deg) rotateX(90deg) translateZ(-15px) translateZ(-97px)');
        }
	}
    
    init();

})();
