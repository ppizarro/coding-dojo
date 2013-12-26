var assert = require('assert');
var Door = require('../door.js');
var DoorWalker = require('../doorWalker.js');


describe('DoorWalker suite test', function () {
    var walker,
        doors;

    beforeEach(function () {
        walker = new DoorWalker();
        doors = [new Door(), new Door()];
    });

    afterEach(function () {
       walker = null;
    });

    it('should be created', function () {
        expect(walker).toEqual(jasmine.any(DoorWalker));
    });

    it('should be open after walk', function () {
        walker.walk(doors);
        expect(doors[0].isClosed()).toBe(false);
        expect(doors[1].isClosed()).toBe(false);
    });

    it('should be closed after walk twice', function () {
        walker.walk(doors);
        walker.walk(doors);
        expect(doors[0].isClosed()).toBe(true);
        expect(doors[1].isClosed()).toBe(true);
    });

    it('should not be throw if call walk without params', function () {
        expect(walker.walk).not.toThrow();
    });

    it('should not be throw if call walk with an array empty', function () {
        var emptyWalk = function () {
            walker.walk([]);
        }
        expect(emptyWalk).not.toThrow();
    });

    it('should not be walk if call walk with step equal -1', function () {
        walker.walk(doors, -1);
        expect(doors[0].isClosed()).toBe(true);
        expect(doors[1].isClosed()).toBe(true);
    });

    it('should not be walk if call walk with step equal 0', function () {
        walker.walk(doors, 0);
        expect(doors[0].isClosed()).toBe(true);
        expect(doors[1].isClosed()).toBe(true);
    });

    it('should be walk over all doors if call walk with step equal 1', function () {
        walker.walk(doors, 1);
        expect(doors[0].isClosed()).toBe(false);
        expect(doors[1].isClosed()).toBe(false);
    });

    it('should be walk only second doors if call walk with step equal 2', function () {
        walker.walk(doors, 2);
        expect(doors[0].isClosed()).toBe(true);
        expect(doors[1].isClosed()).toBe(false);
    });

    it('should not be walk if call walk with step more than nuber of doors', function () {
        walker.walk(doors, 3);
        expect(doors[0].isClosed()).toBe(true);
        expect(doors[1].isClosed()).toBe(true);
    });

});
