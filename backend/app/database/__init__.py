from app.database.database import Database
from app.model import User
from app.model import File

db = Database('ffs.db', force=True)

exampleUsers = [
    User('1', 'user1', 'user1@gmail.com', 'abcdefg', 1578959729),
    User('2', 'user2', 'user2@gmail.com', 'abcdefg', 1578959729),
    User('3', 'user3', 'user3@gmail.com', 'abcdefg', 1578959729),
    User('4', 'user4', 'user4@gmail.com', 'abcdefg', 1578959729),
    User('5', 'user5', 'user5@gmail.com', 'abcdefg', 1578959729),
    User('6', 'user6', 'user6@gmail.com', 'abcdefg', 1578959729),
    User('7', 'user7', 'user7@gmail.com', 'abcdefg', 1578959729),
    User('8', 'user8', 'user8@gmail.com', 'abcdefg', 1578959729),
    User('9', 'user9', 'user9@gmail.com', 'abcdefg', 1578959729)
]

exampleFiles = [
    File('1', 'file1', '', 'f', [], 1578959729, '1'),
    File('2', 'dir1', '', 'd', [3, 4], 1578959729, '1'),
    File('3', 'file2', 'dir1/', 'f', [], 1578959729, '1'),
    File('4', 'file3', 'dir1/', 'f', [], 1578959729, '1'),
    File('5', 'file4', '', 'f', [], 1578959729, '2'),
    File('6', 'file5', '', 'f', [], 1578959729, '2'),
    File('7', 'file6', '', 'f', [], 1578959729, '2')
]

for u in exampleUsers:
    db.addUser(u)

for f in exampleFiles:
    db.addFile(f)
