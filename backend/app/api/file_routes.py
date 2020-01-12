
from app import app
from app.database import db

@app.route('/test2')
def test2():
    return 'test2'
