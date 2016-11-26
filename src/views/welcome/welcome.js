import {CisReport} from './../../models/cis-report';

export class Welcome {
    model = null;
    
    constructor() {
        this.model = new CisReport();
    }

    gotoNextTab() {
        console.log("go to next tab");
    }

    gotoPreviousTab() {
        console.log("go to previous tab");
    }
}