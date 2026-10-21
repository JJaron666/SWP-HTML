import { Auto } from "./Auto/auto.ts";
 
const farben = ["rot", "blau", "grün", "gelb"];
const automarken = ["BMW", "Mercedes", "Audi", "VW", "Opel"];
 
const auto = new Auto(automarken[Math.floor(Math.random() * automarken.length)], 890, farben[Math.floor(Math.random() * farben.length)]);     //um die Klasse Auto zu instanziieren, muss man das Schlüsselwort new verwenden.
//auto.marke = "BMW";             //set marke
//auto.ps = 890;                  //set ps
//auto.farbe = "rot";              //set farbe
auto.printdata();            //ausgabe
 
//Erstelle anzahlAutos an Autos!!
let anzahlAutos =  1000;
const autos: Auto[] = [];
for (let i = 0; i < anzahlAutos; i++) {
    autos.push(new Auto(automarken[Math.floor(Math.random() * automarken.length)],
    Math.floor(Math.random() * 350) +1,
    farben[Math.floor(Math.random() * farben.length)]));
}
 
autos.forEach((auto) => {
    auto.printdata();
});
 