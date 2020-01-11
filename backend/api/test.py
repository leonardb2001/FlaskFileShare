
from api import app
from flask import request, abort, jsonify
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth

from api import testdata

login = HTTPBasicAuth()
auth = HTTPTokenAuth(scheme='Bearer')
prefix = '/test'

@app.errorhandler(400)
def handle400(e):
    if hasattr(e, 'description'):
        return (jsonify({'status':400, 'message': e.description}), 400)
    return (jsonify({'status':400, 'message': ''}), 400)

@app.errorhandler(401)
def handle401(e):
    if hasattr(e, 'description'):
        return (jsonify({'status':401, 'message': e.description}), 401)
    return (jsonify({'status':401, 'message': ''}), 401)

@app.errorhandler(403)
def handle403(e):
    if hasattr(e, 'description'):
        return (jsonify({'status':403, 'message': e.description}), 403)
    return (jsonify({'status':403, 'message': ''}), 403)

@app.errorhandler(404)
def handle404(e):
    if hasattr(e, 'description'):
        return (jsonify({'status':404, 'message': e.description}), 404)
    return (jsonify({'status':404, 'message': ''}), 404)

@app.errorhandler(405)
def handle405(e):
    if hasattr(e, 'description'):
        return (jsonify({'status':405, 'message': e.description}), 405)
    return (jsonify({'status':405, 'message': ''}), 405)

@login.error_handler
def unauthorized():
    return (jsonify({'status':401, 'message': 'wrong credentials'}), 401)

@login.verify_password
def verify_password(username, password):
    if username == 'tommy' and password == 'password123':
        return True
    return False

@auth.error_handler
def unauthorized():
    return (jsonify({'status':401, 'message': 'wrong auth_token'}), 401)

@auth.verify_token
def verify_token(token):
    if token == 'secret_auth_token':
        return True
    return False

# curl -i tommy:password123@localhost:5000/test/auth_token
@app.route(prefix + '/auth_token')
@login.login_required
def auth_token():
    return jsonify(testdata.login)

# curl -H "Authorization: Bearer secret_auth_token" -i localhost:5000/test/users?username=tommy
@app.route(prefix + '/users', methods=['GET'])
@auth.login_required
def getUsers():
    username = request.args.get('username')
    if username == None:
        abort(400, 'no username specified')
    return jsonify(testdata.users)

# curl -d '{"username":"u","email":"e","password":"p"}' -H "Content-Type: application/json" -X POST -i localhost:5000/test/users
@app.route(prefix + '/users', methods=['POST'])
def postUser():
    if (not request.json or
        not 'username' in request.json or
        not 'email' in request.json or
        not 'password' in request.json):
        abort(400, 'wrong json parameters')
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')
    if username == 'tommy':
        abort(403)
    return ('', 201) # return nothing when user registrates?


# curl -i -x delete tommy:password123@localhost:5000/test/users/9e32f25dab6c4d7f8bd54a4bfba9ccd9
@app.route(prefix + '/users/<userid>', methods=['DELETE'])
@login.login_required
def deleteUser(userid):
    if userid == '9e32f25dab6c4d7f8bd54a4bfba9ccd9' and login.username() == 'tommy':
        return ('', 204)
    abort(401)

# curl -H "Authorization: Bearer secret_auth_token" -i localhost:5000/test/users/9e32f25dab6c4d7f8bd54a4bfba9ccd9/files
# curl -X POST -H "Authorization: Bearer secret_auth_token" -d '{"path":"p","name":"n","type":"f"}' -H "Content-Type: application/json" -i localhost:5000/test/users/9e32f25dab6c4d7f8bd54a4bfba9ccd9/files
@app.route(prefix + '/files', methods=['GET', 'POST'])
@auth.login_required
def files():
    if request.method == 'GET':
        userid = request.args.get('userid')
        if userid is None:
            abort(400, 'no userid provided')
        if userid == '9e32f25dab6c4d7f8bd54a4bfba9ccd9':
            return jsonify(testdata.files)
        abort(404)
    if request.method == 'POST':
        if (not request.json or
            not 'userid' in request.json or
            not 'filename' in request.json or
            not 'path' in request.json or
            not 'parentid' in request.json or
            not 'type' in request.json):
            abort(400, 'wrong json')
        userid = request.json.get('userid')
        if userid != '9e32f25dab6c4d7f8bd54a4bfba9ccd9':
            abort(404)
        parentid = request.json.get('parentid')
        path = request.json.get('path')
        name = request.json.get('filename')
        type = request.json.get('type')
        if type not in ['f', 'd']:
            abort(400, 'wrong file type')
        response = jsonify(
            {
                'id': 'ni28fn29ap2ndc23',
                'path': path,
                'name': name,
                'type': type
            })
        response.status_code = 201
        response.headers['location'] = '/files/ni28fn29ap2ndc23'
        return response


# curl -i -X DELETE -H "Authorization: Bearer secret_auth_token" localhost:5000/test/users/9e32f25dab6c4d7f8bd54a4bfba9ccd9/files/ni28fn29ap2ndc23
@app.route(prefix + '/files/<fileid>', methods=['DELETE'])
@auth.login_required
def deletefile(fileid):
    if fileid == 'ni28fn29ap2ndc23':
        return ('', 204)
    abort(404)
