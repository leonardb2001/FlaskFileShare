
import sqlite3
class dataBase:

    def __init__(self):
        super().__init__()

        self.connection = self.sqlite3.connect('ffs.db')
        self.cursor = self.connection.cursor()

    def createDB(self):
        try:

            self.query = '''CREATE TABLE IF NOT EXISTS files (
                    id TEXT PRIMARY KEY,
                    path TEXT NOT NULL,
                    name TEXT NOT NULL,
                    uid TEXT NOT NULL,
                    date INTEGER NOT NULL
                    );'''
            self.cursor.execute(self.query)
            self.query = '''CREATE TABLE IF NOT EXISTS users (
                    uid TEXT PRIMARY KEY,
                    uname TEXT NOT NULL,
                    email TEXT NOT NULL UNIQUE,
                    pw_hash TEXT NOT NULL,
                    date INTEGER NOT NULL
                    )'''
            self.cursor.execute(self.query)
            self.cursor.close()
        except Exception as e:
            print("Fehler:", e)

    def getUser(self,user):

        try:

            self.query = '''SELECT * FROM users WHERE uname = ?'''

            self.cursor.execute(self.query,(user,))

            return self.cursor.fetchall()

        except Exception as e:

            return e;
