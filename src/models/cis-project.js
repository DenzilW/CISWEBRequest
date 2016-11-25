/*
    Denzil Williams:
    Model for holding information about the project
*/
import {ReportBase} from './report-base';

export class CisProject extends ReportBase{
    projectnumber;
    requester;
    typeofrequest;
    databaselocation;

    saveToEmail() {
        // todo: return real html
        return "html";
    }
}