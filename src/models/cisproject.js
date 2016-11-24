/*
    Denzil Williams:
    Model for holding information about the project
*/
import {ReportBase} from './report-base';

export class CisProject {
    projectnumber;
    requester;
    typeofrequest;
    databaselocation;

    saveToHtml() {
        // todo: return real html
        return "html";
    }
}