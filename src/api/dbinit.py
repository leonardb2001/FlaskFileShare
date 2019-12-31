
import sqlite3

def createDB():
    try:
        connection = sqlite3.connect('ffs.db')
        cursor = connection.cursor()
        query = '''CREATE TABLE IF NOT EXISTS files (
                id TEXT PRIMARY KEY,
                path TEXT NOT NULL,
                name TEXT NOT NULL,
                uid TEXT NOT NULL,
                date INTEGER NOT NULL
                );'''
        cursor.execute(query)
        query = '''CREATE TABLE IF NOT EXISTS users (
                uid TEXT PRIMARY KEY,
                uname TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                pw_hash TEXT NOT NULL,
                date INTEGER NOT NULL
                )'''
        cursor.execute(query)
        cursor.close()
    except Exception as e:
        print("Fehler:", e)
    finally:
        if connection:
            connection.close()
