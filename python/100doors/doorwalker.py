#!/usr/bin/python3

class DoorWalker:
    """ DoorWalker class """

    def __init__(self):
        """ (DoorWlaker) -> NoneType """

    def walk(self, doors):
        """ (DoorWalker, list of Door) -> NoneType
        Walk throught the doors and change the door state.
        """

        for door in doors:
            door.toggle()

if (__name__ == '__main__'):
    walker = DoorWalker()
    print(walker) 
