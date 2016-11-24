/*
    Denzil Williams:
    Model for holding data about the report
*/
import {ReportBase} from './report-base';
import {CISWebRequestModel} from './cis-web-request-model';

export class Report extends ReportBase {
    typeReport;
    usage;
    pageLayout;
    purposeOfReport;
    reportTitle
    formattingRequirements;
    parameters;

    constructor() {
        super();
        this.parameters = new CISWebRequestModel();
    }

    addParameter(event) {
        this.parameters.formData.addParameter("", true);
    }

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}