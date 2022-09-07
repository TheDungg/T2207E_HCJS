var x = 0;
var flag = false;
function demoEvent(){
    if (flag ==  false){
        var h = document.getElementById("heading");
        h.style.color = "red";
        setInterval(changeText,20);
        flag = true;
    }

}

function changeText(){
    var h = document.getElementById("heading");
    h.style.transform = "rotate("+x+"deg)";
    x++;
}

function inputSearch(obj){
  //  var ix = document.getElementById("ips");
    console.log("Searching: "+ obj.value);
}
/*
function inputSearch2(){
    var ix = document.getElementById("city");
    console.log("Searching: "+ ix.value);
}*/

function demoEvent2(){
   // var ips = document.getElementsByTagName("input"); // array
   // var ips = document.getElementsByClassName("input-text"); // array
    var ips = document.querySelectorAll("input.input-text[type=text]"); // array
    for(var i=0; i<ips.length;i++){
        ips[i].style.backgroundColor = "deeppink";
    }
}