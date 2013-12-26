var Door = require('./door.js');

function DoorWalker() {}

DoorWalker.prototype.walk = function (doors, step) {

    if (step <= 0) {
        return;
    }

    step = step || 1;

    if (doors === undefined) {
        return;
    }

    if (doors.length === 0) {
        return;
    }

    for (var i = step - 1; i < doors.length; i += step) {
        doors[i].toggle();
    }
}

module.exports = DoorWalker;
