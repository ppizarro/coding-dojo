#!/usr/bin/python3

import doorwalker
import door
import unittest

class TestDoorWalker(unittest.TestCase):
    """ Test case for DoorWalker class. """

    def setUp(self):
        self.walker = doorwalker.DoorWalker()
        self.doors = [ door.Door(), door.Door() ]

    def tearDown(self):
        self.walker = None

    def test_if_door_walker_should_be_created(self):
        """ Test if walker should be created """

        self.assertIsInstance(self.walker, doorwalker.DoorWalker)

    def test_if_door_should_be_open_after_walk(self):
        """ Test if all door should be open after walk """
	self.walker.walk(self.doors)
        self.assertEqual(self.doors[0].isClosed(), False)
        self.assertEqual(self.doors[1].isClosed(), False)

    def test_if_door_should_be_closed_after_walk_twice(self):
        """ Test if all door should be closed after walk twice """
	self.walker.walk(self.doors)
	self.walker.walk(self.doors)
        self.assertEqual(self.doors[0].isClosed(), True)
        self.assertEqual(self.doors[1].isClosed(), True)

    def test_it_should_not_throw_if_call_walk_with_an_empty_list(self):
        """ Test if should be throw if call walk with an empty list """
        self.walker.walk([])

if (__name__ == '__main__'):
    unittest.main(exit=False)
