export class ReportBase {
    saveToEmail() {
        throw new Error("override saveToTemplate");
    }    
}