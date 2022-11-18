//1er mini-projet - concatener

    var miSustantivo = "perro";
    var miAdjetivo = "negro";
    var miVerbo = "corre";
    var miAdverbio = "rapidamente";

    var palabrasEnBlanco = "El " + miSustantivo + " " + miVerbo + " " + miAdverbio + " a la tienda.";
    console.log(palabrasEnBlanco); //El perro corrre rapidamente a la tienda.


    var miSustantivo = "bicicleta";
    var miAdjetivo = "amarilla";
    var miVerbo = "vuela";
    var miAdverbio = "lentamente";

    var palabrasEnBlanco = "La " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la luna.";
    console.log(palabrasEnBlanco); //La bicicleta amarilla vuela lentamente a la luna.



//2ème mini-projet - concatener avec des arreglos

    var miListaDeCompras = [["cereal", 3]["leche", 5], ["pollo", 1], ["refresco", 8], ["galletas", 4], ["pan", 4]];

    //cereal
    console.log("Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + "."); //Voy a comprar 3 unidades de cereal.

    //leche
    console.log("Voy a comprar " + miListaDeCompras[1][1] + " unidades de " + miListaDeCompras[1][0] + "."); //Voy a comprar 5 unidades de leche.

    //pollo
    console.log("Voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + "."); //Voy a comprar 9 unidades de pollo.



//3ème mini-projet - égalité stricte

    var a;
    var b;

    a = 5;
    b = 5;

    console.log(a == b);  //true
    console.log(a === b); //true

    b = 8;

    console.log(a == b); //false
    console.log(a === b); //false

    b = "5";

    console.log(a == b); //true
    console.log(a === b); //false

    a = "JavaScript"; 
    b = "JavaScript";

    console.log(a == b); //true
    console.log(a === b); //true


//4èmè miniprojet - codigo de golf

    function scoreGolf(par, frappe) {
        if (frappe == 1) {
            return "Hold in one!";
        } else if (frappe <= par - 2) {
            return "Eagle!";
        } else if (frappe == par - 1) {
            return "Birdie";
        } else if (frappe == par) {
            return "Par";
        } else if (frappe == par + 1) {
            return "Bogey";
        } else if (frappe == par + 2) {
            return "Doble Bogey";
        } else if (frappe >= par + 3) {
            return "Go home!";
        }
    }

    console.log(scoreGolf(4, 4)); //Par


//5ème miniprojet - conteo de cartas

    var conteo = 0;
    
    function contarCartas(carta) {
        var decision;

        switch (carta) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                conteo++;
                break;
            case 10:
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
                conteo--;
                break;
        }

        if (conteo > 0) {
            decision = "apostar";
        } else {
            decision = "esperar";
        }
        
        return conteo + " " + decision;
    }

    console.log(contarCartas(2)); //1 apostar
    console.log(contarCartas(3)); //2 apostar
    console.log(contarCartas(7)); //2 apostar
    console.log(contarCartas(K)); //1 apostar
    console.log(contarCartas(A)); //0 esperar


//6eme miniprojet

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "vuelta a la luna",
        artista: "ysy a",
        canciones: ["rockstar", "hielo"]
    },
    5439: {
        tituloDelAlbum: "Ciudad gris"
    }
};

function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad];
    } else if (propiedad === "canciones") {
        discos[id][propiedad] = [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum); //"vuelta a la luna"
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos[7853].tituloDelAlbum); //undefined

console.log(coleccionDeDiscos[5439].canciones); //undefined
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "solo");
console.log(coleccionDeDiscos[5439].canciones); //["solo"]

console.log(coleccionDeDiscos[5439].artista); //undefined
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "cro");
console.log(coleccionDeDiscos[5439].artista); //cro