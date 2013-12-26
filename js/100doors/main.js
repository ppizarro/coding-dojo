var Door = require('./door.js'),
    DoorWalker = require('./doorWalker.js'),
    doors = [],
    walker = new DoorWalker(),
    openDoors = 0,
    closedDoors = 0;

for (var i = 0; i < 100; i++) {
    doors[i] = new Door();
}

for (var step = 1; step <= 100; step++) {
    walker.walk(doors, step);
}

for (var i = 0; i < 100; i++) {
    if (doors[i].isClosed()) {
        closedDoors++;
    } else {
        openDoors++;
        console.log('open door: ' + (i + 1));
    }
}

console.log('\ndoors open: ' + openDoors);
console.log('doors closed: ' + closedDoors);
