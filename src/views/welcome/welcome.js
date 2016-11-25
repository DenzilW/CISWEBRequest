import {CisReport} from './../../models/cis-report';

export class Welcome {
    model = null;
    
    constructor() {
        this.model = new CisReport();
    }
}