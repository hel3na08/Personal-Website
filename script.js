function rechner() {
    let dieter = +document.getElementById("zahl1").value;
    let svenja = +document.getElementById("zahl2").value;

    let ergebnis = dieter + svenja; 
    document.getElementById("ergebnis").innerHTML = ergebnis;
}