var path = "img/";

for (var i=1; i<cart.length; i++){

var pId = cart[i].itemId;

$("main").append("<div class='product'></div>");
$("main>div:nth-child("+i+")").attr("id", "product"+pId);

$("#product"+pId).append("<p class='names'></p>");
$("main > div:nth-child("+i+") p:first").text(cart[i].name);

$("#product"+pId).append("<img class='pix'>");
$("main>div:nth-child("+i+") img:first").attr("src", path + cart[i].imgUrl);

$("#product"+pId).append("<div class='statusContainer'></div>");
$("#product"+pId+">div:first").attr("id", "stCont"+pId);
 
$("#stCont"+pId).append("<input class='addBtn' type='button' value='add to cart'>")
$("#stCont"+pId).append("<p class='price'></p>");
$("#stCont"+pId+" p.price").attr("id", "price"+pId);

$("#price"+pId).text(cart[i].price + " €");

};

$(".addBtn").on("click", function(){
	
}  )
