from flask import Flask, render_template, request
import csv


app = Flask(__name__)

with open('./static/data.csv', mode='w', newline='') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=['name', 'surname'])
    csv_writer.writeheader()


@app.route('/hello', methods=['GET'])
def hello_world():
    return 'Hello World!'


@app.route('/', methods=['GET', 'POST'])
def main():
    # return 'jauna lapa'
    if request.method == 'POST':
        name = request.form['name']
        surname = request.form['surname']
        with open('./static/data.csv', mode='a', newline='') as csv_file:
            csv_writer = csv.DictWriter(csv_file, fieldnames=['name', 'surname'])
            csv_writer.writerow({'name': name, 'surname': surname})
    return render_template('main.html')


@app.route('/get_names', methods=['POST'])
def get_names():
    is_valid = False
    if 'username' in request.json:
        if request.json['username'] == 'Madara':
            is_valid = True
    with open('./static/data.csv') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        data = {}
        for idx, row in enumerate(csv_reader):
            data[idx] = row
    return data if is_valid else {}


if __name__ == '__main__':
    app.run()


