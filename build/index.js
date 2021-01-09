"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        console.log('length: ', length);
        console.log('initial collection: ', this.collection);
        for (var i = 0; i < length; i++) {
            console.log("\n===== i=" + i + " =====");
            console.log('jLimiter: ', length - i - 1);
            for (var j = 0; j < length - i - 1; j++) {
                console.log("----- j=" + j + " -----");
                if (this.collection[j] > this.collection[j + 1]) {
                    // swap left with right
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
                console.log("collection: ", this.collection);
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log('\nFinal Sorted Collection: ', sorter.collection);
