import {expect} from 'chai';
import 'aurelia-polyfills';
import {CisReport} from './../../src/models/cis-report';
import {CisProject} from './../../src/models/cis-project';

describe('CisReport Tests', function() {
    let cisReport;

    beforeEach(function() {
        cisReport = new CisReport ();
    });
    
    it('constructor', function() {
        expect(cisReport).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CisReport()).to.throw("Cannot call a class as a function");
    }); 

    it('saveToEmail', function() {
        // Arrange
        cisReport.project.projectNumber = "0009";
        cisReport.project.requester = "DREW";
        cisReport.project.typeOfRequest = "Blue Print";
        cisReport.project.databaseLocation = "DB";

        cisReport.report.typeReport = "Analyser Profile";
        cisReport.report.usage = "On Key Reports";
        cisReport.report.pageLayout = "Potrait";
        cisReport.report.purposeOfReport = "To report on Work Order Data";
        cisReport.report.reportTitle = "WO Report";
        cisReport.report.formattingRequirements = "Background:blue";

        cisReport.parameters.add();
        cisReport.parameters.items[0].value = "AssetCode";
        cisReport.parameters.items[0].showOnReport = "true";

        cisReport.charts.add();
        cisReport.charts.items[0].whatAchieve = "Analyser Assets";
        cisReport.charts.items[0].chartType = "Line";
        cisReport.charts.items[0].chartTitle = "Asset for WO Department";
        cisReport.charts.items[0].xAxisTitle = "Days";
        cisReport.charts.items[0].yAxisTitlePrimary = "Code MSI";
        cisReport.charts.items[0].yAxisTitleSecondary = "Description MSI";
        cisReport.charts.items[0].axisScreen = "Asset Screen";
        cisReport.charts.items[0].axisFieldInOnkey = "Code";
        cisReport.charts.items[0].axisAddDataLabels = "true";
        cisReport.charts.items[0].axisTrendlineRequired = "true";
        cisReport.charts.items[0].fieldToGroupFieldInOnkey = "Descriptionn";
        cisReport.charts.items[0].fieldToGroupAddDataLabels = "false";
        cisReport.charts.items[0].fieldToGroupTrendlineRequired = "false";
        cisReport.charts.items[0].yAxisPrimaryScreen = "WorkOrder";
        cisReport.charts.items[0].yAxisPrimaryFieldInOnkey = "Description";
        cisReport.charts.items[0].yAxisPrimaryAddDataLabels = "false";
        cisReport.charts.items[0].yAxisPrimaryTrendlineRequired = "false";
        cisReport.charts.items[0].yAxisSecondaryScreen = "Asset Screen";
        cisReport.charts.items[0].yAxisSecondaryFieldInOnkey = "IsMsi";
        cisReport.charts.items[0].yAxisSecondaryAddDataLabels = "true";
        cisReport.charts.items[0].yAxisSecondaryTrendlineRequired = "false";
        cisReport.charts.items[0].totals = "2500";
        cisReport.charts.items[0].sortOrder = "Ascending";
        cisReport.charts.items[0].additionalRequirements = "Asset summary per MSI";

        // Act
        const emailTemplate = cisReport.saveToEmail();

        // Assert
        expect(emailTemplate.length).to.be.above(0, "emailtemplate should have some length");
        expect(emailTemplate.indexOf('Project Number: 0009')).to.be.above(-1, "project number text not set correctly");
        expect(emailTemplate.indexOf('Requester: DREW')).to.be.above(-1, "requester text not set correctly");
        expect(emailTemplate.indexOf('Type Of Request: Blue Print')).to.be.above(-1, "db text not set correctly");
        expect(emailTemplate.indexOf('Database backup location: DB')).to.be.above(-1, "db text not set correctly");

        expect(emailTemplate.indexOf('Type Of Report: Analyser Profile')).to.be.above(-1, "Type Of Report text not set correctly");
        expect(emailTemplate.indexOf('Usage: On Key Reports')).to.be.above(-1, "usage text not set correctly");
        expect(emailTemplate.indexOf('Page Layout: Potrait')).to.be.above(-1, "Potrait text not set correctly");
        expect(emailTemplate.indexOf('Purpose of the report: To report on Work Order Data')).to.be.above(-1, "purposeOfReport text not set correctly");
        expect(emailTemplate.indexOf('Report Title: WO Report')).to.be.above(-1, "reportTitle text not set correctly");
        expect(emailTemplate.indexOf('Formatting - specific requirements for colours, fonts: Background:blue')).to.be.above(-1, "formattingRequirements text not set correctly");

        expect(emailTemplate.indexOf('AssetCode')).to.be.above(-1, "value text not set correctly");
        expect(emailTemplate.indexOf('true')).to.be.above(-1, "showOnReport text not set correctly");

        expect(emailTemplate.indexOf('What must the chart display / achieve?: Analyser Assets')).to.be.above(-1, "whatAchieve text not set correctly");
        expect(emailTemplate.indexOf('Chart Type: Line')).to.be.above(-1, "chartType text not set correctly");
        expect(emailTemplate.indexOf('Chart Title: Asset for WO Department')).to.be.above(-1, "chartTitle text not set correctly");
        expect(emailTemplate.indexOf('X-axis title: Days')).to.be.above(-1, "xAxisTitle text not set correctly");
        expect(emailTemplate.indexOf('Y-axis title - primary axis: Code MSI')).to.be.above(-1, "yAxisTitleprimary text not set correctly");
        expect(emailTemplate.indexOf('Y-axis title - secondary axis (if used): Description MSI')).to.be.above(-1, "xAxyAxisTitlesecondaryisTitle text not set correctly");
        expect(emailTemplate.indexOf('Totals  : 2500')).to.be.above(-1, "totals text not set correctly");
        expect(emailTemplate.indexOf('Sort Order  : Ascending')).to.be.above(-1, "sortOrder text not set correctly");
        expect(emailTemplate.indexOf('Any additional requirements for the chart? : Asset summary per MSI')).to.be.above(-1, "additionalRequirements text not set correctly");
    })   
})