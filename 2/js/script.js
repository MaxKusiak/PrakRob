let a = document.querySelectorAll(".circle");
a.forEach(function(element, index){
    element.addEventListener("mouseenter", function(){
        document.querySelector(".second_cufra").innerHTML = index + 1;
        document.querySelector(".green").style.backgroundColor = document.querySelector(".green").dataset.color;
        document.querySelector(".green").classList.remove("green");
    })
})
function truefals(x, y){
    if(x == document.querySelector(".second_cufra").innerHTML * 3){
        // console.log(document.querySelector(y).style.backgroundColor);
        document.querySelector(y).style.backgroundColor = "green";
        document.querySelector(y).classList.add("green");
    }else{
        // console.log(document.querySelector(z).style.transform);
        if(document.querySelector(y).style.transform == "rotate(0deg)" || document.querySelector(y).style.transform == ""){
            document.querySelector(y).style.transform = "rotate(360deg)";
        }else{
            document.querySelector(y).style.transform = "rotate(0deg)";
        }
    }
}