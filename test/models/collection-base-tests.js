import {expect} from 'chai';
import 'aurelia-polyfills';
import {CollectionBase} from './../../src/models/collection-base';

class TestObject {
    value = null;

    dispose() {
        this.value = null;
    }
}

describe('CollectionBase Tests', function() {
    var collectionBase;

    beforeEach(function() {
        collectionBase = new CollectionBase ();

        collectionBase.add = function() {
            const item = new TestObject();
            this.items.push(item);
            return item;
        }
    });
    
    it('constructor', function() {
        expect(collectionBase).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => CollectionBase()).to.throw("Cannot call a class as a function");
    });

    it("removeAt", function() {
        // Arrange
        const param1 = collectionBase.add();
        param1.value = "param1";

        const param2 = collectionBase.add();
        param2.value = "param2";

        const param3 = collectionBase.add();
        param3.value = "param3";

        // Act
        const removedItem = collectionBase.removeAt(1);

        // Assert
        expect(collectionBase.items.indexOf(removedItem)).to.be.equal(-1,"Expect item not be included");
        expect(removedItem).to.be.not.equal(param2.value, "Expected that param2 must be removed");
    });

    it("remove", function() {
        // Arrange
        const param1 = collectionBase.add();
        param1.value = "param1";

        const param2 = collectionBase.add();
        param2.value = "param2";

        const param3 = collectionBase.add();
        param3.value = "param3";

        // Act
        collectionBase.remove(param1);

        // Assert
        expect(collectionBase.items[0].value).to.be.not.equal(param1.value, "Expected that param1 must be removed");
    });

});