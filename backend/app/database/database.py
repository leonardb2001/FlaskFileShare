
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
        cursor = self.conn.cursor()
        cursor.execute('INSERT INTO users VALUES (?, ?, ?, ?, ?)', user.toDBTuple())
        self.conn.commit()

    def getUser(self, userid):
        # Takes the id of an existing user (probably gonna be generated by UUID) as an argument and returns all database columns of him
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM users WHERE uuid = ?', (userid,))
        result = cursor.fetchone()
        if result is not None:
            return User.fromDBTuple(result)
        return None

    def deleteUser(self, userid):
        cursor = self.conn.cursor()
        cursor.execute('DELETE FROM users WHERE uuid = ?', (userid,))
        self.conn.commit()

    def getAllUserUploads(self, userid):
        # Takes the id of an existing user (probably gonna be generated by UUID) as an argument and returns all information about all his uploaded files
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE owner = ?', (userid,))
        return list(map(lambda f: File.fromDBTuple(f), cursor.fetchall()))

    def getFile(self, fileid):
        # Takes the id of an existing file as an argument and returns all database columns of it
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE uuid = ?', (fileid,))
        return File.fromDBTuple(cursor.fetchone())

    def getAllDirectoryChildren(self,dirid):
        #takes a folders id and returns all it's children
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE parent = ?', (dirid,))
        return list(map(lambda f: File.fromDBTuple(f), cursor.fetchall()))

    def addFile(self, file):
        cursor = self.conn.cursor()
        cursor.execute('INSERT INTO files VALUES (?, ?, ?, ?, ?, ?, ?)', file.toDBTuple())
        self.conn.commit()

    def deleteFile(self, fileid):
        cursor = self.conn.cursor()
        cursor.execute('DELETE FROM files WHERE uuid = ?', (fileid,))
        self.conn.commit()

    def deleteUser(self, userid):
        cursor = self.conn.cursor()
        cursor.execute('DELETE FROM files WHERE uuid = ?', (userid,))
        self.conn.commit()

    def deleteFolder(self, folderid):
        cursor = self.conn.cursor()
        cursor.execute('SELECT FROM files WHERE parent = ?', (userid,))
        to_delete = cursor.fetchall()
        self.conn.commit()
        for file in to_delete:
            if file[3] == 'f':
                self.deleteFile(file[0])
            else:
                self.deleteFolder(file[0])
                self.deleteFile(file[0])
