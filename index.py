from flask import Flask, render_template, make_response

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/hobbies")
def hobbies():
    return render_template('hobbies.html')

@app.route("/projects")
def projects():
    return render_template('projects.html')

def main():
    app.run()

main()