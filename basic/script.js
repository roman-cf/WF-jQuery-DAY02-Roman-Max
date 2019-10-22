$("body").append("<img src='./img/1-2-christmas-bell-png-image.png'>");
$("body").append("<img src='./img/santa-claus.png'>");
$("body").append("<img src='./img/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.webp'>");

$("img").css({"width":"33%", "height":"auto"});

$("img").on("click", function(){
	let src = $(this).attr("src");

	switch(src){
		case './img/1-2-christmas-bell-png-image.png' : alert("You clicked the christmas bell"); break;
		case './img/santa-claus.png' : alert("you clicked santa"); break;
		case './img/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.webp': alert("you clicked the gift"); break;
		default : alert("not known image"); break;

	}		


		
} )