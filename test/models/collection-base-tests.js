import {expect} from 'chai';
import 'aurelia-polyfills';
import {CollectionBase} from './../../src/models/collection-base';

describe('CollectionBase Tests', function() {
    var collectionBase;

    beforeEach(function() {
        collectionBase = new CollectionBase ();
    });
    
    it('constructor', function() {
        expect(collectionBase).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CollectionBase()).to.throw("Cannot call a class as a function");
    });    
})