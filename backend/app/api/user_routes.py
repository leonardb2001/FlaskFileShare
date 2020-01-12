
from app import app
from app.database import db

@app.route('/')
def index():
    db.test()
    return 'hello world'
