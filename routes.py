from functools import wraps
from app import app
from flask import render_template, url_for, redirect, request, session
from sqlalchemy import or_
from models import db, User, Tournament, Team, Player, Match, Innings
from werkzeug.security import generate_password_hash, check_password_hash



app.route('/')
def home():
    return render_template('home.html')