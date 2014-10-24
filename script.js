
$( document ).ready(function() {
    console.log( "ready!" );
    
    function alertar(){
	var texto = $("#time");
	texto.toggle();
	}

	
    $("#clik").click(alertar);
    
});
