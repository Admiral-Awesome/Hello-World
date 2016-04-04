
var fontSize = 10;

var helloInterval = setInterval( helloWordl, 1500);

var clearBodyInteval = setInterval( function() { document.body.innerHTML = ""; fontSize = 10; } , 17000);

function  helloWordl() {
    var p = document.createElement("p");
    p.innerHTML = "Hello, World!";
    console.log(fontSize);
    p.style.fontSize = fontSize + "px";
    document.body.appendChild(p);
    fontSize += 4;
}

//clearInteval(helloIntrval);

//clearInteval(clearBodyInteval);