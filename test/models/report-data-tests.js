import {expect} from 'chai';
import 'aurelia-polyfills';
import {ReportData} from './../../src/models/report-data';

describe('Reportdata Tests', function() {
    let reportData;

    beforeEach(function() {
        reportData = new ReportData ();
    });
    
    it('constructor', function() {
        expect(reportData).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => ReportData()).to.throw("Cannot call a class as a function");
    });  

    it('saveToEmail', function() {
        // Act
        const html = reportData.saveToEmail();

        // Assert
        expect(html).to.equal("html", "result of saveToEmail should be 'html'");
    })  
})