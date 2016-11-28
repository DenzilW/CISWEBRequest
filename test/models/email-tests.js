import {expect} from 'chai';
import 'aurelia-polyfills';
import {Email} from './../../src/models/email';

describe('Email Tests', function() {
    var email;

    beforeEach(function() {
        email = new Email ();
    });
    
    it('constructor', function() {
        expect(email).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Email()).to.throw("Cannot call a class as a function");
    });    
})