var obj = {
    name: "Nam",
    age: 18,
    tel: "0983734530",
    girlFriend: ['hbn','manbome'],
    eat: function (){
        console.log(this.name + " dang an mi tom...");
    }
};

var obj2 = {
    name: "Nam",
    age: 18,
    tel: "0983734530",
    girlFriend: ['hbn','manbome'],
    eat: function (){
        console.log(this.name + " dang an mi tom...");
    }
};

console.log(obj.tel);
obj.eat();
console.log(obj.girlFriend[0]);
obj.name = "Huy";
obj.eat();

var a = document.getElementById("abc");
console.log(a.innerText);
var x = 15;
function changeText(){
   // a.innerText = " Xin chao cac ban";
   // a.innerHTML = x + " <p>Xin chao cac ban</p>";
    a.style.fontSize = x+"px";
    a.style.color = "pink";
    x++;
    a.classList.add("classnaodo");
    a.style.transform = "rotate("+x+"deg)";
}
setInterval(changeText,30);
