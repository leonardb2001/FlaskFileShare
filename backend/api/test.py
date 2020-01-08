
from api import app
from flask import request, abort
from flask_httpauth import HTTPBasicAuth
import json

login = HTTPBasicAuth()
auth = HTTPBasicAuth(scheme='Token')
prefix = '/test'

@login.verify_password
def verify_password(userid, password):
    if userid == 'abcdefgh123456789' and password == 'password123':
        return True
    return False

@auth.verify_token
def verify_token(token):
    if token == 'secret_auth_token':
        return True
    return False

@app.route(prefix + '/auth_token')
@login.login_required
def auth_token():
    return 'secret_auth_token'


@app.route(prefix + '/users', methods=['GET', 'POST'])
@auth.login_required
def getUsers():
    if request.method == 'GET':
        username = request.args.get('username')
        if username == None:
            abort(400)
        else:
            pass



