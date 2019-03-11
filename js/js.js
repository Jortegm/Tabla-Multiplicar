function MostrarTabla() {
    //cogemos en numero ingresado
    var z = document.getElementById('numero').value;
    var m;
    //comprobamos si el usuario a introducido un numero y si no, le mostramos mensaje en pantalla
    if (isNaN(z) || z === '') {
        error = '¡¡ Error !! >>> Dato mal escrito.';
        res2.innerHTML = error
    } else {
        m = '<div>';
        z = parseInt(z);
        for (var i = 0; i <= 10; i++) {
            m += '<p>' + z + 'x' + i + '=' + z * i + '</p>';
        }

        m += '</div>';
        res2.innerHTML = m;
    }
}