function update1 (){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        // console.log(this.responseText)
        // convert to object of json
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp; //26 do
        var x1 = document.getElementById("temp"); // in ra html
        x1.innerText = t; // in ra html

        var n = data.name;
        var c = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = n +", "+ c;

        var p = data.main.pressure;
        document.getElementById("press").innerText = p;



    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true)
    xhttp.send();
}
function update2 (){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        // console.log(this.responseText)
        // convert to object of json
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp; //26 do
        var x1 = document.getElementById("temp"); // in ra html
        x1.innerText = t; // in ra html

        var n = data.name;
        var c = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = n +", "+ c;

        var p = data.main.pressure;
        document.getElementById("press").innerText = p;



    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true)
    xhttp.send();
}
function update3 (){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        // console.log(this.responseText)
        // convert to object of json
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp; //26 do
        var x1 = document.getElementById("temp"); // in ra html
        x1.innerText = t; // in ra html

        var n = data.name;
        var c = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = n +", "+ c;

        var p = data.main.pressure;
        document.getElementById("press").innerText = p;



    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true)
    xhttp.send();
}
function update4 (){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        // console.log(this.responseText)
        // convert to object of json
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp; //26 do
        var x1 = document.getElementById("temp"); // in ra html
        x1.innerText = t; // in ra html

        var n = data.name;
        var c = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = n +", "+ c;

        var p = data.main.pressure;
        document.getElementById("press").innerText = p;



    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true)
    xhttp.send();
}
function update5 (){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        // console.log(this.responseText)
        // convert to object of json
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp; //26 do
        var x1 = document.getElementById("temp"); // in ra html
        x1.innerText = t; // in ra html

        var n = data.name;
        var c = data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = n +", "+ c;

        var p = data.main.pressure;
        document.getElementById("press").innerText = p;



    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true)
    xhttp.send();
}
