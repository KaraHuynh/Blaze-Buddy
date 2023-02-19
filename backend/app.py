from flask import Flask
import pickle, json

cohere_pred = pickle.load(open("news_fire_data.p","rb"))
app = Flask(__name__)

# @app.route('/')
# def data():
json_data = {}
json_arr = []
with open("Dataset.json", 'a') as file: 
  file.write("{\"data\": [")
for x in cohere_pred:
  # Data to be written
  dictionary = {
      "title": x[0],
      "date": x[1],
      "description": x[2],
      "location": x[3]
  }
  # json_arr.append(dictionary)
  json_data = json.dumps(dictionary)
  with open("Dataset.json", 'a') as file: 
    file.write(json_data)
    file.write(",")
with open("Dataset.json", 'a') as file: 
  file.write("]}")
  # return {"Data": json_arr}

