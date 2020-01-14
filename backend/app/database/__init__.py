from app.database.database import Database
from app.model import User, generateUserUUID, File, generateFileUUID

db = Database('ffs.db', force=True)

exampleUsers = [
    User(generateUserUUID(), 'user1', 'user1@gmail.com', 'abcdefg', 1578959729),
    User(generateUserUUID(), 'user2', 'user2@gmail.com', 'abcdefg', 1578959729),
    User(generateUserUUID(), 'user3', 'user3@gmail.com', 'abcdefg', 1578959729),
    User(generateUserUUID(), 'user4', 'user4@gmail.com', 'abcdefg', 1578959729),
    User(generateUserUUID(), 'user5', 'user5@gmail.com', 'abcdefg', 1578959729),
    User(generateUserUUID(), 'user6', 'user6@gmail.com', 'abcdefg', 1578959729),
    User(generateUserUUID(), 'user7', 'user7@gmail.com', 'abcdefg', 1578959729),
    User(generateUserUUID(), 'user8', 'user8@gmail.com', 'abcdefg', 1578959729),
    User(generateUserUUID(), 'user9', 'user9@gmail.com', 'abcdefg', 1578959729)
]

dir_id = generateFileUUID()

exampleFiles = [
    File(generateFileUUID(), 'file1', '', 'f', '', 1578959729, exampleUsers[0].uuid),
    File(dir_id, 'dir1', '', 'd', '', 1578959729, exampleUsers[0].uuid),
    File(generateFileUUID(), 'file2', 'dir1/', 'f', dir_id, 1578959729, exampleUsers[0].uuid),
    File(generateFileUUID(), 'file3', 'dir1/', 'f', dir_id, 1578959729, exampleUsers[0].uuid),
    File(generateFileUUID(), 'file4', '', 'f', '', 1578959729, exampleUsers[1].uuid),
    File(generateFileUUID(), 'file5', '', 'f', '', 1578959729, exampleUsers[1].uuid),
    File(generateFileUUID(), 'file6', '', 'f', '', 1578959729, exampleUsers[1].uuid)
]

for u in exampleUsers:
    db.addUser(u)

for f in exampleFiles:
    db.addFile(f)

print(db.getFile(dir_id))
