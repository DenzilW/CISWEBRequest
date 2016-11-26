import {expect} from 'chai';
import 'aurelia-polyfills';
import {CisReport} from './../../src/models/cis-report';

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
        // Act
        const html = cisReport.saveToEmail();

        // Assert
        expect(html).to.equal("html", "result of saveToEmail should be 'html'");
    })   
})