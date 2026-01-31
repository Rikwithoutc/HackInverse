from flask import Flask, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# --------------------
# DATABASE CONFIG FIRST
# --------------------
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///hackinverse.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# --------------------
# IMPORTS LAST (config may reference app & db)
# --------------------
import config
import models
import routes

if __name__ == "__main__":
    app.run(debug=True)