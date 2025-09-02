const assert = require("assert");

function sum(a,b) {
    return a+ b
}

assert.strictEqual(sum(2,3), 5, "Sum of 2 and 3 should be 5");
console.log("All tests passed!");