import {expect, assert} from 'chai';
import 'aurelia-polyfills';
import {Charts, Chart} from './../../src/models/chart';

describe('Charts Tests', function() {
    let charts = null;

    beforeEach(function() {
        charts = new Charts ();
    });
    
    it('constructor', function() {
        expect(charts).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Charts()).to.throw("Cannot call a class as a function");
    });    

    it('saveToEmail', function() {
        // Arrange
        const charts = new Charts();
        charts.add();

        charts.items[0].whatAchieve = "Analyser Assets";
        charts.items[0].chartType = "Line";
        charts.items[0].chartTitle = "Asset for WO Department";
        charts.items[0].xAxisTitle = "Days";
        charts.items[0].yAxisTitlePrimary = "Code MSI";
        charts.items[0].yAxisTitleSecondary = "Description MSI";
        charts.items[0].axisScreen = "Asset Screen";
        charts.items[0].axisFieldInOnkey = "Code";
        charts.items[0].axisAddDataLabels = "true";
        charts.items[0].axisTrendlineRequired = "true";
        charts.items[0].fieldToGroupFieldInOnkey = "Descriptionn";
        charts.items[0].fieldToGroupAddDataLabels = "false";
        charts.items[0].fieldToGroupTrendlineRequired = "false";
        charts.items[0].yAxisPrimaryScreen = "WorkOrder";
        charts.items[0].yAxisPrimaryFieldInOnkey = "Description";
        charts.items[0].yAxisPrimaryAddDataLabels = "false";
        charts.items[0].yAxisPrimaryTrendlineRequired = "false";
        charts.items[0].yAxisSecondaryScreen = "Asset Screen";
        charts.items[0].yAxisSecondaryFieldInOnkey = "IsMsi";
        charts.items[0].yAxisSecondaryAddDataLabels = "true";
        charts.items[0].yAxisSecondaryTrendlineRequired = "false";
        charts.items[0].totals = "2500";
        charts.items[0].sortOrder = "Ascending";
        charts.items[0].additionalRequirements = "Asset summary per MSI";



        // Act
        const emailTemplate = charts.saveToEmail();

        // Assert
        expect(emailTemplate.length).to.be.above(0, "emailtemplate should have some length");
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

    it('add', function() {
        //Arrange
        const count = charts.items.length;

        // Act
        charts.add();
        const newCount = charts.items.length;  
        
        // Assert
        expect(newCount).to.be.equal(count + 1,"Expect count to be greater than 0");
    });
    
});

describe('Chart Tests', function() {
    let chart;

    beforeEach(function() {
        chart = new Chart();
    });

    it('constructor', function() {
        expect(chart).to.not.be.null;
    });

        it('saveToEmail', function() {
        // Arrange
        const chart = new Chart();
        chart.whatAchieve = "Analyser Assets";
        chart.chartType = "Line";
        chart.chartTitle = "Asset for WO Department";
        chart.xAxisTitle = "Days";
        chart.yAxisTitlePrimary = "Code MSI";
        chart.yAxisTitleSecondary = "Description MSI";
        chart.axisScreen = "Asset Screen";
        chart.axisFieldInOnkey = "Code";
        chart.axisAddDataLabels = "true";
        chart.axisTrendlineRequired = "true";
        chart.fieldToGroupFieldInOnkey = "Descriptionn";
        chart.fieldToGroupAddDataLabels = "false";
        chart.fieldToGroupTrendlineRequired = "false";
        chart.yAxisPrimaryScreen = "WorkOrder";
        chart.yAxisPrimaryFieldInOnkey = "Description";
        chart.yAxisPrimaryAddDataLabels = "false";
        chart.yAxisPrimaryTrendlineRequired = "false";
        chart.yAxisSecondaryScreen = "Asset Screen";
        chart.yAxisSecondaryFieldInOnkey = "IsMsi";
        chart.yAxisSecondaryAddDataLabels = "true";
        chart.yAxisSecondaryTrendlineRequired = "false";
        chart.totals = "2500";
        chart.sortOrder = "Ascending";
        chart.additionalRequirements = "Asset summary per MSI";

        // Act
        const emailTemplate = chart.saveToEmail();

        // Assert
        expect(emailTemplate.length).to.be.above(0, "emailtemplate should have some length");
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
});