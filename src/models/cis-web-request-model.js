/*
    Store parameter value and show on reports
*/
export class Parameter {
    value;
    showOnReport;

    constructor(value, showOnReport) {
        this.value = value;
        this.showOnReport = showOnReport;
    }
}

/*
    Store all properties of the form
*/
export class FormData {
    parameters;

    constructor() {
        this.createParameters();
    }

    createParameters() {
        this.parameters = [];
        this.parameters.push(new Parameter("", false));
    }

    addParameter(value, showOnReport) {
        this.parameters.push(new Parameter(value, showOnReport));
    }
}

export class CISWebRequestModel {
    formData;

    constructor() {
        this.formData = new FormData();
    }
}