from flask import Flask
from flask_cors import CORS
from api import dbinit

db = dbinit.DataBase()
db.createDB()

app = Flask(__name__)
CORS(app)

from api import routes
from api import test
