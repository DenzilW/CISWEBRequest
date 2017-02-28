
import {expect} from 'chai';
import 'aurelia-polyfills';
import {Help} from './../../../src/views/help/help';

describe('Help Tests', function() {
    var help;

    beforeEach(function() {
        help = new Help ();
    });
    
    it('constructor', function() {
        expect(help).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Help()).to.throw("Cannot call a class as a function");
    });    
})
