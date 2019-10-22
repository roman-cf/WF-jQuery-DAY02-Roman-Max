let images = ['img/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.webp', './img/santa-claus.png']

for (let i = 0; i < 9; i++) {
    let img = document.createElement("img");
    let index = Math.floor(Math.random() * 2);
    img.src = images[index];
    img.className = index;
    $("body").append(img);
}

$(".1").click(function(){
    $(this).css("opacity","0");
})
