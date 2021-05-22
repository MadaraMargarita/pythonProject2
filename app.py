import csv
from flask import Flask, render_template, request

app = Flask(__name__)

with open('./static/data.csv', mode='a+', newline='') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=['name', 'surname'])
    csv_writer.writeheader()


@app.route('/hello', methods=['GET'])
def hello_world():
    return 'Hello World!'


@app.route('/', methods=['GET', 'POST'])
def main():
    if request.method == 'POST':
        name = request.form['name']
        surname = request.form['surname']
        with open('./static/data.csv', mode='a', newline='') as csv_file:
            csv_writer = csv.DictWriter(csv_file, fieldnames=['name', 'surname'])
            csv_writer.writerow({'name': name, 'surname': surname})
    return render_template('main.html')


@app.route('/get_names', methods=['GET', 'POST'])
def get_names():
    with open('./static/data.csv') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        data = {}
        for idx, row in enumerate(csv_reader):
            data[idx] = row
    return data

#ja nebūs ievadīts Mara, tad nedos datus, bet atgriezīs tikai {}

    #is_valid = False
    #if 'username' in request.json:
        #if request.json['username'] == 'Mara':
            #is_valid = True
    #with open('./static/data.csv') as csv_file:
        #csv_reader = csv.DictReader(csv_file)
        #data = {}
        #for idx, row in enumerate(csv_reader):
            #data[idx] = row
        #return data if is_valid else {}

@app.route('/get_count', methods=['POST'])
def get_count():
    is_valid = False
    if 'key' in request.json:
        if request.json['key'] == 1234:
            is_valid = True
    data = str(len(get_names()))
    return data if is_valid else {'error': 'get the right key'}

    #key = request.form['key']
    #if key != 'password':
        #return 'error: get the right key'
    #data = str(len(get_names()))
    #return data


app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True
if __name__ == '__main__':
    app.run()
