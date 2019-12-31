from flask import Flask
from api import createDB
createDB()
print("Init fuehrt aus")
app = Flask(__name__)

from api import routes
