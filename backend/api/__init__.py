from flask import Flask
from api import dbinit

db = dbinit.DataBase()
db.createDB()

app = Flask(__name__)

from api import routes
from api import test
