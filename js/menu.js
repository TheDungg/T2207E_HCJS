function loadingMenu () {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);
        var list = data.data; //array
        for(var i = 0; i<list.length;i++){
            var name = list[i].name;
            var image = list[i].icon;
            var str = `<li><img width="50" src="${image}"/> ${name}</li>`;
            var ul = document.getElementById("menu");
            ul.innerHTML += str;
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/menu",true);
    xhttp.send();
}
loadingMenu()