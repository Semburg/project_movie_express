console.log("Clientside Code run");

var button = document.getElementById("btn");
if(button){
    btn.addEventListener("click", function(e) {
        e.preventDefault()
        console.log("clicked");
    })
}
