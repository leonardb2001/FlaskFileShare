
import sqlite3
from app.model.user import User
from app.model.file import File

class Database:
    def __init__(self, source):
        self.conn = sqlite3.connect(source)
        cursor = self.conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS files (
            uuid TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            path TEXT NOT NULL,
            type TEXT NOT NULL,
            children TEXT NOT NULL,
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
        cursor.execute('INSERT INTO users VALUES (?, ?, ?, ?, ?)', user.toTuple())
        self.conn.commit()

    def getUser(self, userid):
        # Takes the id of an existing user (probably gonna be generated by UUID) as an argument and returns all database columns of him

        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM users WHERE uuid = ?', userid)
        result = cursor.fetchone()
        if result is not None:
            return User.fromTuple(result)
        return None

    def deleteUser(self, userid):
        cursor = self.conn.cursor()
        cursor.execute('DELETE FROM users WHERE uuid = ?', userid)
        self.conn.commit()

    def getAllUserUploads(self, userid):
        # Takes the id of an existing user (probably gonna be generated by UUID) as an argument and returns all information about all his uploaded files

        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE owner = ?', userid)
        return cursor.fetchall() # TODO: map array entries to file object with map and File.fromTuple(...)

    def getFile(self, fileid):
        # Takes the id of an existing file as an argument and returns all database columns of it

        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE uuid = ?', fileid)
        return File.fromTuple(self.cursor.fetchone())

    def addFile(self, file):
        cursor = self.conn.cursor()
        cursor.execute('INSERT INTO files VALUES (?, ?, ?, ?, ?, ?, ?)', file.toTuple())
        self.conn.commit()

    def deleteFile(self, fileid):
        cursor = self.conn.cursor()
        cursor.execute('DELETE FROM files WHERE uuid = ?', fileid)
    
    def __del__(self):
        self.conn.close()
