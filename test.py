import requests

url = 'http://127.0.0.1:5000/get_names'

payload = {'username': 'Madara'}
names = requests.post(url, json=payload)
print(names.json())
