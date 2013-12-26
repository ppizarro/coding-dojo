#!/usr/bin/python3

class Door():
    """ Door Class """

    def __init__(self):
        """ (Door) -> NoneType
        The door starts closed.
        """

        self.closed = True

    def isClosed(self):
        """ (Door) -> Boolean
        Return the door state
        """

	return self.closed

    def open(self):
        """ (Door) -> NoneType
        Open the door.
        """

        self.closed = False

    def close(self):
        """ (Door) -> NoneType
        Close the door.
        """

        self.closed = True


    def toggle(self):
        """ (Door) -> NoneType
        Invert the door state.
        """

        self.closed = not self.closed

if (__name__ == '__main__'):
    door = Door()
    print(door)
