
from app import app
from app.database import db
from flask import jsonify, abort

@app.route('/test2')
def test2():
    return 'test2'
