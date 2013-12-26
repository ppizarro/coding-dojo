#!/usr/bin/python3

import door
import unittest

class TestDoor(unittest.TestCase):
    """ Test case for Door class. """

    def setUp(self):
        self.door = door.Door()

    def tearDown(self):
        self.door = None

    def test_door_created(self):
        """ Test if door should be created """
	self.assertIsInstance(self.door, door.Door, "It should be a Door object");

    def test_if_new_door_is_closed(self):
        """ Test if door should be closed """
        self.assertEqual(self.door.isClosed(), True)

    def test_if_door_is_not_closed_after_open(self):
        """ Test if door should not be closed after open """
        self.door.open()
        self.assertEqual(self.door.isClosed(), False)

    def test_if_door_is_closed_after_call_close(self):
        """ Test if door should be closed after call close """
        self.door.open()
        self.door.close()
        self.assertEqual(self.door.isClosed(), True);

    def test_if_door_is_not_closed_after_one_toggle_and_closed_after_another_one_toggle(self):
        """ Test if door should be open after one toggle and closed after another one toggle """
        self.door.toggle()
        self.assertEqual(self.door.isClosed(), False)
        self.door.toggle()
        self.assertEqual(self.door.isClosed(), True)

    def test_if_two_doors_should_be_in_different_state(self):
        """ Test if doors should be n different states """
        door2 = door.Door()
        door2.open()
        self.assertNotEqual(door2.isClosed(), self.door.isClosed())

if __name__ == '__main__':
    unittest.main(exit=False)
