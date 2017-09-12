const arity = require('../arity');

describe('arity', () => {
    it('should return number of declared arguments of a function', function () {
        function testFn(a, b, c) {}
        expect(arity(testFn)).toBe(3);
    });

    it('should support default values for arguments', function () {
        function testFn(a = 1, b = 2, c) {}
        expect(arity(testFn)).toBe(3);
    });

    it('should support argument destructors', function () {
        function testFn(a, { b }, c) {}
        expect(arity(testFn)).toBe(3);
    });

    it('should support no arguments', function () {
        function testFn() {}
        expect(arity(testFn)).toBe(0);
    });
});
