export class ReportBase {
    saveToHtml() {
        throw new Error("override saveToTemplate");
    }    
}