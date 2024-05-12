function integratorcalc() {
    window.alert("Geeft is de weerstand, in Ohm: ")
    let widerstand = prompt();
    window.alert("Geeft nu is de capaciteit, in Farad")
    let capaciteitene = prompt();
    let resonantene = (1/(2*(Math.PI)*widerstand*capaciteitene))
    window.alert("Uw integratiefrequentie is rond de "+resonantene)
}