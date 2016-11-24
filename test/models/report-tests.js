import {expect} from 'chai';
import 'aurelia-polyfills';
import {Report} from './../../src/models/report';

describe('Report Tests', function() {
    var report;

    beforeEach(function() {
        report = new Report ();
    });
    
    it('constructor', function() {
        expect(report).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Report()).to.throw("Cannot call a class as a function");
    });    
})