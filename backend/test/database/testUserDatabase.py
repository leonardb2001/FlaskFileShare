
import unittest
import os
import sqlite3
from app.database.database import Database
from app.model import User

file = 'ffs_test.db'

class DatabaseTest(unittest.TestCase):
    def setUp(self):
        self.db = Database(file, force=True)

    def testAddUser(self):
        user = User(
             '1',
             'user1',
             'user1@email.com',
             'oawornv0awe9fh9efhn9en',
             1578950353
        )
        self.db.addUser(user)

    def testAddGetUser(self):
        uuid = '2'
        user1 = User(
             uuid,
             'user2',
             'user2@email.com',
             'oawornv0awe9fh9efhn9en',
             1578950353
        )
        self.db.addUser(user1)
        user2 = self.db.getUser(uuid)
        self.assertEqual(user1, user2)

    def testUniqueUname(self):
        user1 = User(
             '1',
             'user',
             'user1@email.com',
             'oawornv0awe9fh9efhn9en',
             1578950353
        )
        user2 = User(
             '2',
             'user',
             'user2@email.com',
             'oawornv0awe9fh9efhn9en',
             1578950353
        )
        self.db.addUser(user1)
        with self.assertRaises(sqlite3.IntegrityError):
            self.db.addUser(user2)

    def testUniqueEmail(self):
        user1 = User(
             '1',
             'user1',
             'user@email.com',
             'oawornv0awe9fh9efhn9en',
             1578950353
        )
        user2 = User(
             '2',
             'user2',
             'user@email.com',
             'oawornv0awe9fh9efhn9en',
             1578950353
        )
        self.db.addUser(user1)
        with self.assertRaises(sqlite3.IntegrityError):
            self.db.addUser(user2)

    def testWrongUseridReturnsNone(self):
        self.assertIsNone(self.db.getUser('wrong_id'))

    def testDeleteUser(self):
        uuid = '1'
        user = User(
             uuid,
             'user',
             'user1@email.com',
             'oawornv0awe9fh9efhn9en',
             1578950353
        )
        self.db.addUser(user)
        self.db.deleteUser(uuid)
        self.assertIsNone(self.db.getUser(uuid))

