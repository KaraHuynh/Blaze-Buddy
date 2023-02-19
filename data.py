import requests
import json
import pandas as pd

from tkinter import *

from geopy.geocoders import Nominatim

FINAL_DATA = []

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
    
apikey = "e2369a7744fad538192ca160bc6550b5"

url = 'https://firms.modaps.eosdis.nasa.gov/api/country/csv/e2369a7744fad538192ca160bc6550b5/VIIRS_NOAA20_NRT/CAN/1/2023-02-17'

def extra_data(url):
    response = requests.get(url)
    raw_data = response.text

    with open('NASA_data.csv', 'w') as out:
        out.write(raw_data)

    data = pd.read_csv (r'./NASA_data.csv')
    
    for row in range(len(data)):      
        if data['confidence'][row] != "l":  
            temp = [data['country_id'][row], coordinate_converter(data['latitude'][row], data['longitude'][row]), data['acq_date'][row], convert_time(data['acq_time'][row],)]
            FINAL_DATA.append(temp)


extra_data(url)
# print(FINAL_DATA)


