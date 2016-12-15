import {expect} from 'chai';
import 'aurelia-polyfills';
import {CisReportData, CisReportDataGroupingCollection, CisReportDataGroupingItem, CisReportDataOnKeyFieldsCollection, CisReportDataOnKeyFieldsItem} from './../../src/models/cis-report-data';

describe('Reportdata Tests', function() {
    let reportData;

    beforeEach(function() {
        reportData = new CisReportData ();
    });
    
    it('constructor', function() {
        expect(reportData).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CisReportData()).to.throw("Cannot call a class as a function");
    });  

    it('saveToEmail', function() {
        // Arrange
        const cisReportData = new CisReportData();
        cisReportData.reportDataTitle = "Report Work Order";
        cisReportData.reportIncludeTotals = "1000";
        cisReportData.additionalReportData = "Asset for WO Department";

        // Act
        const emailTemplate = cisReportData.saveToEmail();

        // Assert
        expect(emailTemplate.length).to.be.above(0, "emailtemplate should have some length");
        expect(emailTemplate.indexOf('Report data title: Report Work Order')).to.be.above(-1, "reportDataTitle text not set correctly");
        expect(emailTemplate.indexOf('Report data to include totals?  : 1000')).to.be.above(-1, "reportIncludeTotals text not set correctly");
        expect(emailTemplate.indexOf('Any additional requirements for the report data?: Asset for WO Department')).to.be.above(-1, "additionalReportData text not set correctly");
    })  
});

describe('CisReportDataGroupingCollection Tests', function() {
    let collection;

    beforeEach(function() {
        collection = new CisReportDataGroupingCollection();
    });

    it('add', function() {
        // Arrange
        const count = collection.items.length;

        // Act
        collection.add();

        // Assert
        expect(collection.items.length).to.be.equal(1, 'CisReportDataGroupingCollection should have one item');
    })
});

describe('CisReportDataGroupingItem Tests', function() {
    let item;

    beforeEach(function() {
        item = new CisReportDataGroupingItem();
    });
});

describe('CisReportDataOnKeyFieldsCollection Tests', function() {
    let collection;

    beforeEach(function() {
        collection = new CisReportDataOnKeyFieldsCollection();
    });

    it('add', function() {
        // Arrange
        const count = collection.items.length;

        // Act
        collection.add();

        // Assert
        expect(collection.items.length).to.be.equal(1, 'CisReportDataOnKeyFieldsCollection should have one item');
    })

});

describe('CisReportDataOnKeyFieldsItem Tests', function() {
    let item;

    beforeEach(function() {
        item = new CisReportDataOnKeyFieldsItem();
    });
});


