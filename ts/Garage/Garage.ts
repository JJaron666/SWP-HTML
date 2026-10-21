import { Auto } from "../Auto/auto.ts";

export class Garage {
     private _name: string;
    private _anzahlPlaetze: BigInt;
    private _autos: Auto[];

    constructor(name: string, anzahlplaetze: bigInt) {
        this._anzahlPlaetze = anzahlplaetze;
        this._name = name;
        this._autos = [];
    }
 
}
