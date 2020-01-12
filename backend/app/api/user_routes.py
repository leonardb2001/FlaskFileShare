
from app import app
from app.database import db
from flask import jsonify, abort

@app.route('/test1')
def test1():
    return 'test1'
