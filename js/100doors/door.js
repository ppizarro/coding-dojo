var Door = function () {
    this.closed = true;
}

Door.prototype.isClosed = function () {
    return this.closed;
}

Door.prototype.open = function () {
    this.closed = false;
}

Door.prototype.close = function () {
    this.closed = true;
}

Door.prototype.toggle = function () {
    this.closed = !this.closed;
}

module.exports = Door;
