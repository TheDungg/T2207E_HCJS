var x;
x=10;
x="xin chao cac ban";
x=3.14;
var y=20;
var z = x + y //23.14
x="hello";
var k = x + y; // hello 20

console.log(k); // giong lenh printf

var t = true; // false
for(var i=0;i<10;i++){
    console.log("i="+i)
}

var ar = [];
ar[0] = 1;
ar.push(10);
ar.push("hello");
// duyet mang theo index
for(var i = 0;i < ar.length;i++){
    console.log(ar[i]);
}
// duyet mang theo kieu xet tung phan tu (for each)
ar.map(xyz=>{
    console.log(xyz);
});


var tk = tinhtong(5,3);
var tk2 = tinhtong("hello",10);
function tinhtong(a,b){
    return a+b;
}
console.log(tk);
console.log(tk2);

function demo(){
    console.log("Hello everybody...")
    console.log("Hello everybody...")
    console.log("Hello everybody...")
}

//setTimeout(demo,3000);
//setInterval(demo,3000); chay lien tuc
console.log("ABCXYZ...");
//var n = 10;
/*function countdown(){
    var xyz = document.getElementById("head");
    xyz.innerText = n;
    n--;
    if (n<0){
        clearInterval(si);
    }
}*/
//var si = setInterval(countdown,1000);

var m=0;
var n=0;
function sochan(){
    if(m % 2 == 0){
        var xyz = document.getElementById("head");
        xyz.innerText += " "+m;
        console.log(m);
        n++;
    }
    m++;
    if(n>=10){
        clearInterval(kq);
    }
}
var kq = setInterval(sochan,100);