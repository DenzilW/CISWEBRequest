import {expect} from 'chai';
import 'aurelia-polyfills';
import {ReportBase} from './../../src/models/report-base';

describe('ReportBase Tests', function() {
    let reportBase;

    beforeEach(function() {
        reportBase = new ReportBase ();
    });
    
    it('constructor', function() {
        expect(reportBase).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => ReportBase()).to.throw("Cannot call a class as a function");
    });    
})