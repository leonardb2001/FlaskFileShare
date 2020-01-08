
from api import app
from flask import request, abort, jsonify
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth

from api import testdata

login = HTTPBasicAuth()
auth = HTTPTokenAuth(scheme='Bearer')
prefix = '/test'

@login.verify_password
def verify_password(username, password):
    if username == 'tommy' and password == 'password123':
        return True
    return False

@auth.verify_token
def verify_token(token):
    if token == 'secret_auth_token':
        return True
    return False

# curl -i tommy:password123@localhost:5000/test/auth_token
@app.route(prefix + '/auth_token')
@login.login_required
def auth_token():
    return 'secret_auth_token'


# curl -H "Authorization: Bearer secret_auth_token" -i localhost:5000/test/users?username=tommy
# curl -H "Authorization: Bearer secret_auth_token" -d '{"username":"u","email":"e","password":"p"}' -H "Content-Type: application/json" -i localhost:5000/test/users
@app.route(prefix + '/users', methods=['GET', 'POST'])
@auth.login_required
def getUsers():
    if request.method == 'GET':
        username = request.args.get('username')
        if username == None:
            abort(400)
        else:
            return jsonify(testdata.users)
    if request.method == 'POST':
        if (not request.json or
            not 'username' in request.json or
            not 'email' in request.json or
            not 'password' in request.json):
            abort(400)
        username = request.json.get('username')
        email = request.json.get('email')
        password = request.json.get('password')
        if username == 'tommy':
            abort(403)
        return (jsonify({'id': 'aosien20n29na0sd9r3n20'}), 201)

