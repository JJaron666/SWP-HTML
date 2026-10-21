export class Auto {                           //großbuchstabe wenn es um class
    private _marke: string = "";
    private _ps: number = 0;
    private _farbe: string = "";
 
    constructor(make: string = "", ps: number, farbe: string = "") {   //konstruktor
        this._marke = make;
        this._ps = ps;
        this._farbe = farbe;
    }
 
    get farbe(): string {
        return this._farbe;
    }
 
    set farbe(value: string) {
        this._farbe = value;
    }
 
    get marke(): string {
        return this._marke;
    }
 
    set marke(value: string) {
        this._marke = value;
    }  
 
    get ps(): number {
        return this._ps;
    }
 
    set ps(value: number) {
        this._ps = value;
    }
 
    printdata() {
        console.log("Auto data " + "Marke: " + this._marke + ", Ps: " + this._ps, "Farbe: " + this._farbe);
    }
}
 
 