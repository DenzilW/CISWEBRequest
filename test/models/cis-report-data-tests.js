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
        // Act
        const html = reportData.saveToEmail();

        // Assert
        expect(html).to.equal("html", "result of saveToEmail should be 'html'");
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

    it('dispose', function() {
        // Arrange
        item.screen = "A";
        item.fieldInOnKey = "B";
        item.sortOrder = "C";

        // Act
        item.dispose();

        // Assert
        expect(item.screen).to.be.null;
        expect(item.fieldInOnKey).to.be.null;
        expect(item.sortOrder).to.be.null;
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

    it('dispose', function() {
        // Arrange
        item.screen = "A";
        item.fieldInOnKey = "B";
        item.fieldTitle = "C";
        item.sortOrder = "D";

        // Act
        item.dispose();

        // Assert
        expect(item.screen).to.be.null;
        expect(item.fieldInOnKey).to.be.null;
        expect(item.fieldTitle).to.be.null;
        expect(item.sortOrder).to.be.null;
    })
});
