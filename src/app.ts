/*
* File: app.ts
* Author: Berta Péter
* Copyright: 2024, Berta Péter
* Group: Szoft I-2-N
* Date: 2024-05-30
* Github: https://github.com/bp-ter/
* Licenc: GNU GPL
*/

class Atlo {
    aSide?: HTMLInputElement | null;
    bSide?: HTMLInputElement | null;
    diagon?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.aSide = document.querySelector('#aSide')
        this.bSide = document.querySelector('#bSide')
        this.diagon = document.querySelector('#diagon')
        this.calcButton = document.querySelector('#calcButton')
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const aSideInput = Number(this.aSide?.value);
        const bSideInput = Number(this.bSide?.value);
        const diagon = this.calcDiagon(aSideInput, bSideInput);
        this.diagon!.value = String(diagon);
        
    }

    calcDiagon(aSide: number, bSide: number):number {
        return Math.sqrt(Math.pow(aSide, 2) + Math.pow(bSide, 2));
    }
}

new Atlo();