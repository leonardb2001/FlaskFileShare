
import unittest
import os
from app.database.database import Database
from app.model import User

file = 'ffs_test.db'

class DatabaseTest(unittest.TestCase):
    def setUp(self):
        if os.path.exists(file):
            os.remove(file)
        self.db = Database(file)

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
