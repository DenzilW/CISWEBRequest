import {CISWebRequestModel} from './../../models/cis-web-request-model';

export class Welcome {
    model;
    
    constructor() {
        this.model = new CISWebRequestModel();
    }

    addParameter(event) {
        this.model.formData.addParameter("", true);
    }
}