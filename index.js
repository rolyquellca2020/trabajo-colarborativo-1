function sum( a, b, c ) {
    let numberA = a, numberB = b, numberC = c;
    let suma = numberA + numberB + numberC;
    const evento  = document.getElementById("send");
    evento.addEventListener('onclick', function mode(req, res) {
        res.send("hola");
        res.send("nu");
        res.send("NOASD")
    })
    
    return  suma;
}
const val = sum(1,5,3);
console.log(val);