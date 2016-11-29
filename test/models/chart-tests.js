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
        const chart = new Chart();
        chart.whatAchieve = "Analyser Assets";
        chart.chartType = "Line";
        chart.chartTitle = "Asset for WO Department";
        chart.xAxisTitle = "Days";
        chart.yAxisTitlePrimary = "Code MSI";
        chart.yAxisTitleSecondary = "Code MSI";
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

    it('dispose', function() {
        // Arrange
        chart.isSelected = "1";
        chart.whatAchieve = "1";
        chart.chartType = "1";
        chart.chartTitle = "1";
        chart.xAxisTitle = "1";
        chart.yAxisTitle = "1";
        chart.yAxisTitleprimary = "1";
        chart.yAxisTitlesecondary = "1";
        chart.axisScreen = "1";
        chart.axisFieldInOnkey = "1";
        chart.axisAddDataLabels = "1";
        chart.axisTrendlineRequired = "1";
        chart.fieldToGroupFieldInOnkey = "1";
        chart.fieldToGroupAddDataLabels = "1";
        chart.fieldToGroupTrendlineRequired = "1";
        chart.yAxisPrimaryScreen = "1";
        chart.yAxisPrimaryFieldInOnkey = "1";
        chart.yAxisPrimaryAddDataLabels = "1";
        chart.yAxisPrimaryTrendlineRequired = "1";
        chart.yAxisSecondaryScreen = "1";
        chart.yAxisSecondaryFieldInOnkey = "1";
        chart.yAxisSecondaryAddDataLabels = "1";
        chart.yAxisSecondaryTrendlineRequired = "1";
        chart.totals = "1";
        chart.sortOrder = "1";
        chart.additionalRequirements = "1";

        // Act
        chart.dispose();

        // Assert
        expect(chart.isSelected).to.be.null;
        expect(chart.whatAchieve).to.be.null;
        expect(chart.chartType).to.be.null;
        expect(chart.chartTitle).to.be.null;
        expect(chart.xAxisTitle).to.be.null;
        expect(chart.yAxisTitle).to.be.null;
        expect(chart.yAxisTitleprimary).to.be.null;
        expect(chart.yAxisTitlesecondary).to.be.null;
        expect(chart.axisScreen).to.be.null;
        expect(chart.axisFieldInOnkey).to.be.null;
        expect(chart.axisAddDataLabels).to.be.null;
        expect(chart.axisTrendlineRequired).to.be.null;
        expect(chart.fieldToGroupFieldInOnkey).to.be.null;
        expect(chart.fieldToGroupAddDataLabels).to.be.null;
        expect(chart.fieldToGroupTrendlineRequired).to.be.null;
        expect(chart.yAxisPrimaryScreen).to.be.null;
        expect(chart.yAxisPrimaryFieldInOnkey).to.be.null;
        expect(chart.yAxisPrimaryAddDataLabels).to.be.null;
        expect(chart.yAxisPrimaryTrendlineRequired).to.be.null;
        expect(chart.yAxisSecondaryScreen).to.be.null;
        expect(chart.yAxisSecondaryFieldInOnkey).to.be.null;
        expect(chart.yAxisSecondaryAddDataLabels).to.be.null;
        expect(chart.yAxisSecondaryTrendlineRequired).to.be.null;
        expect(chart.totals).to.be.null;
        expect(chart.sortOrder).to.be.null;
        expect(chart.additionalRequirements).to.be.null;
    })
});