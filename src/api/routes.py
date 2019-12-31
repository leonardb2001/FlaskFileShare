from flask import render_template
from api import app
import sqlite3
    
@app.route('/index')
def index():
    
    return render_template('index.html')

@app.route('/test')
def r():
    pass
    try:
        connection = sqlite3.connect('FFS.db')

        cursor = connection.cursor()

        print("Datenbank erstellt")

        #TODO: ...if not exists...

        if cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='{files}'"):
            pass;
        else:
            
            query = '''CREATE TABLE files (
                    path TEXT NOT NULL,
                    name TEXT NOT NULL,
                    ext TEXT NOT NULL,
                    author TEXT,
                    date INTEGER
                    );'''
        if cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='{users}'"):
            pass;
        else:

            query = '''CREATE TABLE users (
                    name TEXT NOT NULL,
                    password TEXT NOT NULL,
                    date INTEGER
                    )'''

        cursor.execute(query)

        print(cursor.fetchall())

        cursor.close()

        print("cursor closed")

    except Exception as  e:
        print("Fehler:",e)

    finally:
        if(connection):
            connection.close()

        print("connection closed")

        return render_template('index.html')

    
if __name__=="__main__":
    app.run(debug=True)
