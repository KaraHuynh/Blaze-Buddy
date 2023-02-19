import requests
import json
import pandas as pd
import csv
from tkinter import *
import datetime
from geopy.geocoders import Nominatim

FINAL_DATA = []
CAN_DATA_LEN = 0
def coordinate_converter(lat,lon):
    # Initialize Nominatim API
    geolocator = Nominatim(user_agent="MyApp")

    # Latitude & Longitude input
    coordinates = str(lat) + "," + str(lon)

    location = geolocator.reverse(coordinates)

    address = location.raw['address']

    # Traverse the data
    city = address.get('city', '')
    state = address.get('state', '')
    country = address.get('country', '')
    return (city,state,country)

def convert_time(time):
    return pd.to_datetime(time, format='%H%M').strftime('%I:%M %p')

def convert_dayNight(day):
    if  day=="N":
       return "Night"
    else:
       return "Morning"

def convertFRP(frpData):
    min_val = min(frpData)
    max_val = max(frpData)
    incr = int((min_val + max_val) / 3)
    rng = [min_val, min_val+incr, max_val-incr ,max_val]
    # print(min_val)
    # print(max_val)
    # print(incr)
    # print(rng)
    for i in range(len(frpData)):
        if frpData[i] >= rng[0] and frpData[i] <= rng[1]:
            frpData[i]="Low"
        elif frpData[i] >= rng[1] and frpData[i] <= rng[2]: 
            frpData[i]="Medium"
        elif frpData[i] >= rng[2] and frpData[i] <= rng[3]: 
            frpData[i]="High"
    return frpData
apikey = "e2369a7744fad538192ca160bc6550b5"

Previous_Date = datetime.datetime.today() - datetime.timedelta(days=1)
url_CAN = 'https://firms.modaps.eosdis.nasa.gov/api/country/csv/e2369a7744fad538192ca160bc6550b5/VIIRS_NOAA20_NRT/CAN/1/'+ str(Previous_Date.date())
url_USA = 'https://firms.modaps.eosdis.nasa.gov/api/country/csv/e2369a7744fad538192ca160bc6550b5/VIIRS_NOAA20_NRT/USA/1/'+ str(Previous_Date.date())
def extra_data(url):
    response = requests.get(url)
    raw_data = response.text

    with open('NASA_data.csv', 'w') as out:
        out.write(raw_data)

    data = pd.read_csv (r'./NASA_data.csv')
    counter = 0
    frpRates = []
    for row in range(len(data)):    
        if counter > 15:
            break  
        if data['confidence'][row] != "l":  
            temp = [data['country_id'][row], coordinate_converter(data['latitude'][row], data['longitude'][row]), data['acq_date'][row], convert_time(data['acq_time'][row],)]
            FINAL_DATA.append(temp)



extra_data(url)
print(FINAL_DATA)

f = open('Final_NasaFIRM_clean.csv', 'w')

# create the csv writer
writer = csv.writer(f)

# write a row to the csv file
for row in FINAL_DATA:
    writer.writerow(row)

# close the file
f.close()

