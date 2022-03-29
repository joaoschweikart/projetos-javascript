setInterval( function(){
    nextImage();
    verificaNumero();
}, 2500)

var count = 1;

function nextImage(){
    count++
    if (count > 4){
        count=1
    }
    document.getElementById("slide"+count).checked = true;
}
