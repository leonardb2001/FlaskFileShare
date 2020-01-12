
import sqlite3
class Database:
    def __init__(self, source):
        self.conn = sqlite3.connect(source)
        cursor = self.conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS files (
            id TEXT PRIMARY KEY,
            path TEXT NOT NULL,
            name TEXT NOT NULL,
            uid TEXT NOT NULL,
            date INTEGER NOT NULL
            );
        ''')
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
            uid TEXT PRIMARY KEY,
            uname TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            pw_hash TEXT NOT NULL,
            date INTEGER NOT NULL
            )
        ''')
        self.conn.commit()

    def addUser(self, user):
        # This method will take a json string and create a database entry for a new user

        pass

    def getUser(self, userid):
        # Takes the id of an existing user (probably gonna be generated by UUID) as an argument and returns all database columns of him

        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM users WHERE uid = ?', userid)
        return cursor.fetchall()


    def getAllUserUploads(self, userid):
        # Takes the id of an existing user (probably gonna be generated by UUID) as an argument and returns all information about all his uploaded files

        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE author = ?', userid)
        return cursor.fetchall()

    def getFile(self, fileid):
        # Takes the id of an existing file as an argument and returns all database columns of it

        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM files WHERE id = ?', fileid)
        return self.cursor.fetchall()
    
    def __del__(self):
        self.conn.close()