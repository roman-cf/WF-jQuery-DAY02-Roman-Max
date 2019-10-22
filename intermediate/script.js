var path = "img/";

var cart = JSON.stringify(cartInventory);
	cart = JSON.parse(cart);
for (let item of cart){
	item.cartStatus = 0;
}

for (var i=1; i<cartInventory.length; i++){

var pId = cartInventory[i].itemId;

$("main").append("<div class='product'></div>");
$("main>div:nth-child("+i+")").attr("id", "product"+pId);

$("#product"+pId).append("<p class='names'></p>");
$("main > div:nth-child("+i+") p:first").text(cartInventory[i].name);

$("#product"+pId).append("<img class='pix'>");
$("main>div:nth-child("+i+") img:first").attr("src", path + cartInventory[i].imgUrl);

$("#product"+pId).append("<div class='statusContainer'></div>");
$("#product"+pId+">div:first").attr("id", "stCont"+pId);
 
$("#stCont"+pId).append("<input class='addBtn' type='button' value='add to cart'>")
$("#stCont"+pId).append("<p class='price'></p>");
$("#stCont"+pId+" p.price").attr("id", "price"+pId);
$("#stCont"+pId+" input.addBtn").attr("id", "btn"+pId);

$("#price"+pId).text(cartInventory[i].price + " €");

};

$(".addBtn").on("click", function(e){
	shopping(e.target.id);
}  )

console.log(cart)

function shopping(e){
	var temp = Number(e.slice(3))
	
	for (let item of cart){
		if (item.itemId == temp){
			
			if (item.status > item.cartStatus){
				item.cartStatus ++;
				cartBuilder(item);
			}else{
				alert("nicht genug vorrätig");
			}
		}
	}
	//console.log(cart);
	console.log(cartInventory);
}


function cartBuilder(item){
	$("#shoppingCart").append(`
								<div class="cartItem"> 
									<img src=${path + item.imgUrl}>
									<h4> ${item.name}</h4>
									<p> ${item.price}</p>
									<input type="Number" value="${item.cartStatus}">
									<p> ${item.price * item.cartStatus}
								</div>
								`)
	$("#modealBackground").css("display","flex");
}
