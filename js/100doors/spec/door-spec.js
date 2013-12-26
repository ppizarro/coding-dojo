var Door = require('../door.js');

describe('Door suite test', function () {
    var door;

    beforeEach(function () {
        door = new Door();
    });

    afterEach(function () {
        door = null;
    });

    it('should be created', function () {
        expect(door).toEqual(jasmine.any(Door));
    });

    it('should be closed', function () {
        expect(door.isClosed()).toBe(true);
    });

    it('should not be closed after open', function () {
        door.open();
        expect(door.isClosed()).toBe(false);
    });

    it('should be closed after close', function () {
        door.open();
        door.close();
        expect(door.isClosed()).toBe(true);
    });

    it('should be open after one toggle and closed after another one toggle', function () {
        door.toggle();
        expect(door.isClosed()).toBe(false);
        door.toggle();
        expect(door.isClosed()).toBe(true);
    });

    it('should be in different state each door', function () {
        var door2 = new Door();
        door2.open();
        expect(door2.isClosed()).not.toEqual(door.isClosed());
    });
});
