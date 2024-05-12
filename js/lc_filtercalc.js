function lcfiltercalc() {
    window.alert("Geeft is de inductie, in Henry: ")
    let inductie = prompt();
    window.alert("Geeft nu is de capaciteit, in Farad")
    let capaciteit = prompt();
    let resonante = (1/(2*(Math.PI)*(Math.sqrt(inductie*capaciteit))))
    window.alert("Uw resonante frequentie is rond de "+resonante)

}