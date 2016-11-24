import {expect} from 'chai';
import 'aurelia-polyfills';
import {CisProject} from './../../src/models/cisproject';

describe('Cisproject Tests', function() {
    var cisproject;

    beforeEach(function() {
        cisproject = new CisProject ();
    });
    
    it('constructor', function() {
        expect(cisproject).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CisProject()).to.throw("Cannot call a class as a function");
    });    
})