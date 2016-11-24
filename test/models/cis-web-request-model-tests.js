import {expect} from 'chai';
import 'aurelia-polyfills';
import {CISWebRequestModel} from './../../src/models/cis-web-request-model';

describe('CisWebRequestModel Tests', function() {
    var cisWebRequestModel;

    beforeEach(function() {
        cisWebRequestModel = new CISWebRequestModel ();
    });
    
    it('constructor', function() {
        expect(cisWebRequestModel).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CISWebRequestModel()).to.throw("Cannot call a class as a function");
    });   

    it('save'); 
})