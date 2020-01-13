
import unittest
from app.database.database import Database
from app.model import User

class DatabaseTest(unittest.Testcase):
    def setUp(self):
        self.db = Database('ffs_test.db')

    def testAddGetUser(self):
        uuid = '123456789'
        user1 = User(uuid, 'uname', 'uname@email.com', 'oawornv0awe9fh9efhn9en', 1578950353)
        self.db.addUser(user1)
        user2 = self.db.getUser(uuid)
        self.assertEqual(user1, user2)

def run():
    unittest.main()


