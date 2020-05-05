const unit = require('../unit');
const request = require('request');
const assert = require('assert');
describe('Arithmetic functions', function () {
    describe('f', function () {
       it('should return sum of the modules of two numbers', function () {
           assert(unit.f(2,3) == 5);
           assert(unit.f(2,3) == 5);
       });
    });
    describe('f', function () {
        it('returns zero on zero arguments', function () {
            assert(unit.f(0,0) == 0);
        });
    });
    describe('f', function () {
        it('should work correctly on negative numbers', function () {
            assert(unit.f(-2,-1) == 3);
            assert(unit.f(-3,2) == 5);
        });
    });
    describe('f', function () {
        it('should check number of arguments', function () {
            assert(unit.f(2) == undefined);
            assert(unit.f(-3,2, 10) == undefined);
        });
    });
});
describe('Asynchronous arithmetic function', function () {
    describe('async_f', function () {
        it('Should return the sum of the number with the number stored in the file', function () {
            before(function(done){
                assert(unit.async_f(5) == 10);
                assert(unit.async_f(5) == 10);
                done();
            });
    });
    });
    describe('async_f', function () {
        it('Returns the number that is stored in the file when adding to zero', function () {
            before(function(done){
                assert(unit.async_f(0) == 5);
                done();
            });

        });
    });
    describe('async_f', function () {
        it('Ыhould work correctly on negative numbers', function () {
            before(function(done){
                assert(unit.async_f(-2) == 3);
                done();
            });

        });
    });
    describe('async_f', function () {
        it('Should check number of arguments', function () {
            before(function(done){
                assert(unit.async_f(2, 4) == undefined);
                assert(unit.async_f() == undefined);
                done();
            });
        });
    });
});


