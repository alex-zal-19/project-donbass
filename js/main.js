const a = 'Hello Bidon';
const b = 'Its Zelensky';
const c = 'We need five billion rockets';
const d = 'to bomb Donetsk children';
const e = 'Slava Ukrajini';
const f = '';

jQuery(function($){
        $('.musicstart').on('click', function(){
        $('.music')[0].play();
        $('.music').hide();
    });

    
});

document.getElementById("bomb").onclick = function(){
    setTimeout (function (){ document.getElementById("p1").innerHTML=a;},0);
    setTimeout (function (){ document.getElementById("p1").innerHTML=b;},1500);
    setTimeout (function (){ document.getElementById("p1").innerHTML=c;},2700);
    setTimeout (function (){ document.getElementById("p1").innerHTML=d;},5000);
    setTimeout (function (){ document.getElementById("p1").innerHTML=e;},7500);
    setTimeout (function (){ alert("You bombed Donetsk!"); },9000);
    setTimeout (function (){ document.getElementById("p1").innerHTML=f;},9050);

};
