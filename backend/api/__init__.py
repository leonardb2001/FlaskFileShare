from flask import Flask
from api import dbinit

dbinit.dataBase().createDB()

app = Flask(__name__)

from api import routes
