let p_id = "pegaphant";
let p_posx = 0;
let p_posy = 0;
let p_direction = 1;
let p_name = "PEGAPHANT";

let bilder = ["pega.png", "pega2.png", "pega3.png"];

let gesamtPegaListe = [];

function createImg(n) {
    for (let x = 0; x < n; x++) {

        let random_x = Math.floor(Math.random() * 1000) + 1;
        let random_y = Math.floor(Math.random() * 600) + 1;

        let img = document.createElement("img");
        img.src = bilder[Math.floor(Math.random() * bilder.length)];
        img.className = "pegaclass";

        img.style.left = random_x + "px";
        img.style.top = random_y + "px";

        img.id = "id" + x;

        document.body.appendChild(img);

        // zufällige X- und Y-Richtung
        let directionX = Math.random() < 0.5 ? -1 : 1;
        let directionY = Math.random() < 0.5 ? -1 : 1;

        // [ID, X, Y, RichtungX, RichtungY, Name]
        gesamtPegaListe.push([
            "id" + x,
            random_x,
            random_y,
            directionX,
            directionY,
            "pegaFant" + x
        ]);
    }
}

createImg(30);


function animatearrayGesamt() {

    for (let x = 0; x < gesamtPegaListe.length; x++) {

        let elephant = document.getElementById(gesamtPegaListe[x][0]);

        let bild_x = gesamtPegaListe[x][1];
        let bild_y = gesamtPegaListe[x][2];

        let directionX = gesamtPegaListe[x][3];
        let directionY = gesamtPegaListe[x][4];

        // Geschwindigkeit
        let speed = 2;

        // X und Y verändern = diagonale Bewegung
        bild_x += directionX * speed;
        bild_y += directionY * speed;


        // rechter Rand
        if (bild_x >= 1000) {
            directionX = -1;
        }

        // linker Rand
        if (bild_x <= 0) {
            directionX = 1;
        }

        // unterer Rand
        if (bild_y >= 600) {
            directionY = -1;
        }

        // oberer Rand
        if (bild_y <= 0) {
            directionY = 1;
        }


        // Werte wieder speichern
        gesamtPegaListe[x][1] = bild_x;
        gesamtPegaListe[x][2] = bild_y;
        gesamtPegaListe[x][3] = directionX;
        gesamtPegaListe[x][4] = directionY;


        // Bild verschieben
        elephant.style.left = bild_x + "px";
        elephant.style.top = bild_y + "px";
    }

    requestAnimationFrame(animatearrayGesamt);
}
 


animatearrayGesamt()

let panzer = document.createElement("img");

panzer.src = "panzer.webp";
panzer.id = "panzer";

document.body.appendChild(panzer);

let panzerX = 500;

document.addEventListener("keydown", function(event) {

    if (event.key == "a") {
        panzerX = panzerX - 10;
    }

    if (event.key == "d") {
        panzerX = panzerX + 10;
    }

    panzer.style.left = panzerX + "px";
});

let rakete = document.createElement("img");

rakete.src = "rakete.webp";
rakete.id = "rakete";

document.body.appendChild(rakete);

// Position vom Panzer
let panzerPosition = panzer.getBoundingClientRect();

rakete.style.left = (panzerPosition.left + 45) + "px";
rakete.style.top = (panzerPosition.top - 50) + "px"; 

// LEERTASTE
document.addEventListener("keydown", function(event) {

    if (event.code == "Space") {
        raketeSchiessen();
    }

});


// ============================
// RAKETEN
// ============================

let raketen = [];


// LEERTASTE = SCHIESSEN
document.addEventListener("keydown", function(event) {

    if (event.code == "Space" && raketen.length < 3) {

        event.preventDefault();

        schiessen();
    }
});


function schiessen() {

    // Rakete erstellen
    let rakete = document.createElement("img");

    rakete.src = "rakete.webp";
    rakete.className = "rakete";


    // Position vom Panzer holen
    let p = panzer.getBoundingClientRect();

    let x = p.left + p.width / 2 - 15;
    let y = p.top - 50;


    // Rakete beim Panzer platzieren
    rakete.style.left = x + "px";
    rakete.style.top = y + "px";

    document.body.appendChild(rakete);


    // Rakete speichern
    raketen.push(rakete);


    // Rakete bewegen
    function fliegen() {

        y = y - 6;

        rakete.style.top = y + "px";


        // ============================
        // PEGAPHANTS TREFFEN
        // ============================

        for (let i = gesamtPegaListe.length - 1; i >= 0; i--) {

            let pega =
                document.getElementById(gesamtPegaListe[i][0]);

            if (!pega) {
                continue;
            }


            // HITBOXEN
            let r = rakete.getBoundingClientRect();
            let e = pega.getBoundingClientRect();


            if (
                r.left < e.right &&
                r.right > e.left &&
                r.top < e.bottom &&
                r.bottom > e.top
            ) {

                // Pegaphant löschen
                pega.remove();

                gesamtPegaListe.splice(i, 1);


                // Rakete löschen
                raketeLoeschen(rakete);

                return;
            }
        }


        // Rakete oben aus dem Bildschirm
        if (y < -60) {

            raketeLoeschen(rakete);

            return;
        }


        requestAnimationFrame(fliegen);
    }


    fliegen();
}


// ============================
// RAKETE LÖSCHEN
// ============================

function raketeLoeschen(rakete) {

    rakete.remove();

    let nummer = raketen.indexOf(rakete);

    if (nummer != -1) {
        raketen.splice(nummer, 1);
    }
}