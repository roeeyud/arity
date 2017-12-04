const arity = require('../arity');

describe('arity', () => {
    it('should return number of declared arguments of a function', function () {
        function testFn(a, b, c) {}
        expect(arity(testFn)).toBe(3);
    });

    it('should return number of declared arguments of a function (1)', function () {
        function testFn(a) {}
        expect(arity(testFn)).toBe(1);
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

    it('failed with this fn before', function () {
        function testFn(id, options, dispatch = () => null) {
            return dispatch({
                resource: 'a',
                method: 'b',
                path: 'c',
                payload: id,
                options,
            });
        }

        expect(arity(testFn)).toBe(3);
    });

    it('"," at the end', function () {
        function testFn(
            id,
            options,
            a,
            c,
            ) {
            return dispatch({
                resource: 'a',
                method: 'b',
                path: 'c',
                payload: id,
                options,
            });
        }

        expect(arity(testFn)).toBe(4);
    });

    it('arrow', function () {
        expect(arity((id, options, a, c) => {
            return dispatch({
                resource: 'a',
                method: 'b',
                path: 'c',
                payload: id,
                options,
            });
        })).toBe(4);
    });


    it('arrow fn in const', function () {
        const fn = (id, options, a, c) => {
            return dispatch({
                resource: 'a',
                method: 'b',
                path: 'c',
                payload: id,
                options,
            });
        };

        expect(arity(fn)).toBe(4);
    });

    it('function fn in const', function () {
        const fn = function(id, options, a, c) {
            return dispatch({
                resource: 'a',
                method: 'b',
                path: 'c',
                payload: id,
                options,
            });
        };

        expect(arity(fn)).toBe(4);
    });
});
