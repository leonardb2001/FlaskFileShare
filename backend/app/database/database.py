
import sqlite3
import os
from app.model.user import User
from app.model.file import File

class Database:
    def __init__(self, source, force=False):
        if force == True and os.path.exists(source):
            os.remove(source)
        self.conn = sqlite3.connect(source)
        cursor = self.conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS files (
            uuid TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            path TEXT NOT NULL,
            type TEXT NOT NULL,
            parent TEXT NOT NULL,
            date INTEGER NOT NULL,
            owner TEXT NOT NULL
            );
        ''')
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
            uuid TEXT PRIMARY KEY,
            uname TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            pw_hash TEXT NOT NULL,
            date INTEGER NOT NULL
            )
        ''')
        self.conn.commit()

    def addUser(self, user):
        #takes a user object and adds its values to the database
        cursor = self.conn.cursor()
        cursor.execute('INSERT INTO users VALUES (?, ?, ?, ?, ?)', user.toDBTuple())
        self.conn.commit()

    def getUser(self, userid):
        #takes the id of an existing and returns all database columns of it
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM users WHERE uuid = ?', (userid,))
        result = cursor.fetchone()
        if result is not None:
            return User.fromDBTuple(result)
        return None

    def deleteUser(self, userid):
        #takes the id of a user and deletes that gay faggot from the database
        cursor = self.conn.cursor()
        cursor.execute('DELETE FROM users WHERE uuid = ?', (userid,))
        self.conn.commit()

    def getAllUserUploads(self, userid):
        #takes the id of an existing user and returns all information about all its uploaded files
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE owner = ?', (userid,))
        return list(map(lambda f: File.fromDBTuple(f), cursor.fetchall()))

    def getFile(self, fileid):
        #takes the id of an existing file and returns all database columns of it
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE uuid = ?', (fileid,))
        return File.fromDBTuple(cursor.fetchone())

    def getAllDirectoryChildren(self,dirid):
        #takes a folders id and returns all it's children
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE parent = ?', (dirid,))
        return list(map(lambda f: File.fromDBTuple(f), cursor.fetchall()))

    def addFile(self, file):
        #takes a file object and adds it to the files table
        cursor = self.conn.cursor()
        cursor.execute('INSERT INTO files VALUES (?, ?, ?, ?, ?, ?, ?)', file.toDBTuple())
        self.conn.commit()

    def deleteSingleComponent(self, fileid):
        #takes a file's/folder's id and deletes it from the files table
        cursor = self.conn.cursor()
        cursor.execute('DELETE FROM files WHERE uuid = ?', (fileid,))
        self.conn.commit()

    def deleteFolder(self, folderid):
        #takes a folder's id and deletes it and its children recursively
        cursor = self.conn.cursor()
        cursor.execute('SELECT id,type FROM files WHERE parent = ?', (folderid,))
        to_delete = cursor.fetchall()
        for file in to_delete:
            if file[1] == 'f':
                self.deleteSingleComponent(file[0])
            else:
                self.deleteFolder(file[0])
        self.deleteSingleComponent(folderid)
