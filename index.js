var name ="Stef";
function un(){
    var a = "Coucou";
    deux();
    var x = a + name;
    console.log(x);
}

function deux(){
    var b = "Salut";
    trois();
    var y = b + name;
    console.log(y);
}

function trois(){
    var c = "Hi";
    var z = c + name;
    console.log(z); 
}
un();

var a = "Coucou";
first();
function first(){
    var b ="Salut";
    second();
    function second(){
        var c ="Hey";
        console.log(a,b,c)
    }
}

//le code ne fontionne pas variable b non définie dans la fonction third
// var a = "coucou";
// first();
// function first(){
//     var b = "salut";
//     second();
//     function second(){
//         var c = "hey";
//         console.log(a,b,c);
//         third();
//     }
// }
// function third(){
//     var d = "bonjor je su bonéso de vos ver";
//     console.log(a+b+c+d);
// }

// var i= 10;
// for(var i=0;i<10;i++){
// console.log(i);
// }
// console.log(i);

let i= 62;
for(let i=0;i<10;i++){
console.log(i);
}
console.log(i);