//atsevišķā failā rakstītas funkcijas var importēt
function outsideFunction(){
    document.getElementById("demo").innerHTML = "content changed with outside script";
}

//write izmanto debug, ja izsauc, pēc tam visu lapu nodzēš
//document.write(10+7);

//alert('kļūdas paziņojums')
//window.alert()

console.log('rakstam log')

//var let const
var x;
x = 5;
var y = 1;

//==
//=== vienāda vērtība un vienāds tips
//!=
//!== nav vienāda vērt. un tips
//> < >= <=
//loģiskie operat.
//&& || !
//matemātiskas darb.
//+ - * ** / %
//++ -- increment and decrement

console.log(x==y);
console.log(x===y);

//<audio controls>
    //<source id="audio" src="{{ url_for('static', filename='piano.wav') }}">
//</audio>


//const - nav maināms
try {
    const PI = 3.1415;
    PI = 3.14;
}
catch (err) {
    document.getElementById('demo').innerHTML = err;
}