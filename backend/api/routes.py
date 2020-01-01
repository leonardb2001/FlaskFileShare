from flask import render_template
from api import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

app.run(debug=True)
