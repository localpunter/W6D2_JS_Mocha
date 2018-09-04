const assert = require('assert')
assert.equal(2, 1); // DON'T USE
assert.strictEqual(1, "1");
assert.deepEqual([1, 2, 3], ["1", 2, 3]); // DON'T USE
assert.deepStrictEqual([1, 2, 3], ["1", "2", "3"]); // assertion error
