//atsevišķā failā rakstītas funkcijas var importēt
function outsideFunction(){
    document.getElementById("demo").innerHTML = "content changed with outside script";
}

//DOCUMENT PARĀDA LAPĀ, CONSOLE - ZEM INSPECT
//write izmanto debug, ja izsauc, pēc tam visu lapu nodzēš
document.write("<br> <br>")
document.write(10+7);
document.write("<br> <br>")
//lai izlektu paziņojums, var ar vai bez window
//alert('kļūdas paziņojums')
//window.alert()

console.log('Rakstām log!')

//var(kā mainīgais) let(saistīts ar to scope, kurā tas ir pieejams) const(nevar mainīt, masīvos var mainīt, bet nevar mainīt pašu masīvu)
var x;
x = 5;
var y = 1;
console.log(x)

//== vērtības vienādas
//=== vienāda vērtība un vienāds tips
//!= nav vienāda vērt.
//!== nav vienāda vērt. un tips
//> < >= <=
//loģiskie operat.
//&&(un)  ||(vai)  !(ne)  strādā binārajā veidā
//matemātiskas darb.
//+ - * ** / %
//++ -- increment and decrement x++ x--

console.log(x==y);
console.log(x===y);

//const - nav maināms
//try {
    //const PI = 3.1415;
    //PI = 3.14;
//}
//ja šeit būs kļūda ↑ tad ar šī ↓ palīdzību izmetīs error
//catch (err) {
    //document.getElementById('demo').innerHTML = err;
//}

function audioStats(){
    console.log('Audio stats called');
    var player = document.getElementById("audio");
    var play_ranges = [];
    for (var i = 0; i < player.played.length; i++){
        play_ranges.push([player.played.start(i), player.played.end(i)]);
    }
    //alert(play_ranges);
    var played = document.createElement("input");
    played.type = "hidden";
    played.value = play_ranges;
    played.name = "played";
    document.getElementById("audio_form").appendChild(played);
}

function show_count(){
    var player = document .getElementById("audio");
    var playing = (player.paused ? 'Paused' : 'Playing');

    var n = player.played.length;
    alert(`Audio was played ${n} times and now is: ${playing}`);
}