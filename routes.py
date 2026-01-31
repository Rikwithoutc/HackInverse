from functools import wraps
# When running `python app.py`, the main module is named '__main__'.
# Import from '__main__' if possible to avoid creating a second Flask app
# instance by importing the `app` module (which would load app.py twice).
try:
    from __main__ import app, db
except Exception:
    from app import app, db
from models import User
from flask import render_template, url_for, redirect, request, session
from sqlalchemy import or_
from werkzeug.security import generate_password_hash, check_password_hash

print("ROUTES.PY IS RUNNING!!")

@app.route('/')
def home():
    return redirect("http://localhost:5173/")


    
    
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = User.query.filter_by(email=email).first()
        if not user:
            return redirect(url_for('error', message="User not found."))
        
        if not check_password_hash(user.passhash, password):
            return redirect(url_for('error', message="Incorrect password."))
        
        session['user_id'] = user.id
        
        return {
            "userid": user.id,
            "email": user.email,
            "password": password
        }

    return redirect("http://localhost:5173/log-in")


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        password = request.form['password']

        user = User.query.filter_by(email=email).first()
        if user:
            return redirect(url_for('error', message="User already exists."))
        
        new_user = User(
            firstname=firstname,
            lastname=lastname,
            email=email,
            passhash=generate_password_hash(password)
        )

        db.session.add(new_user)
        db.session.commit()
        
        return {
            "userid": new_user.id,
            "email": new_user.email,
            "password": password,
            "firstname": new_user.firstname,
            "lastname": new_user.lastname
        }

    return redirect("http://localhost:5173/log-in")


@app.route('/test')
def test():
    return "Flask is alive!"
