import {expect} from 'chai';
import 'aurelia-polyfills';
import {CisReport} from './../../src/models/cis-report';

describe('CisReport Tests', function() {
    var cisReport;

    beforeEach(function() {
        cisReport = new CisReport ();
    });
    
    it('constructor', function() {
        expect(cisReport).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CisReport()).to.throw("Cannot call a class as a function");
    });    
})