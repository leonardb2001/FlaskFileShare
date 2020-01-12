
from app import app
from app.database import db

@app.route('/test1')
def test1():
    return 'test1'
