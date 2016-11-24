import {expect} from 'chai';
import 'aurelia-polyfills';
import {ReportData} from './../../src/models/reportdata';

describe('Reportdata Tests', function() {
    var reportData;

    beforeEach(function() {
        reportData = new ReportData ();
    });
    
    it('constructor', function() {
        expect(reportData).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => ReportData()).to.throw("Cannot call a class as a function");
    });    
})