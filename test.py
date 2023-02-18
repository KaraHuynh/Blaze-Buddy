import cohere
from cohere.classify import Example
import pandas as pd
import requests
import datetime
from tqdm import tqdm
pd.set_option('display.max_colwidth', None)
from data import *

apiKey = "ldiSz8fD0J84YLM4ByOgMV8DBHFwJXzghqcgRdcw"
co = cohere.Client(apiKey)


# Generate Summary
prompt = f"""  
This program generates a news article summary for fire related incidents.

Headline: Fire at apartment building in Shoal Lake 40 First Nation displaces 30
Summary: Emergency crews were called to a fire at a six-unit apartment in the community, located along the Manitoba-Ontario border roughly 142 km southwest of Winnipeg, around 5 a.m. Saturday.
--  
Headline: Destructive wildfires blaze through central chile 
Summary: Authorities have identified more than 300 active fires throughout the country since early February 2023.
--  
Headline: Homeowner charged with arson, fraud after house fire in Okno, Man.
Summary: Headline: Police say an investigation with help from the local fire department found the fire was deliberately set.    
--  
Headline: Home destroyed by overnight fire in Oshawa, Ont.
Summary: We had a fire, we don’t know what caused it, but it’s quite damaged inside. He was home at the time with his fiancée – asleep in the basement – when the smoke detector alerted him something was wrong.
--  
Headline: Severe summer wildfires are impacting western U.S. Mountain Snowpack during winter and spring
Summary: In recent years, wildfires have become more frequent, larger, and burn at higher severity across the western United States and especially in California.
"""

# Sentiment Analysis
classifications = co.classify(
  model='large',
  inputs=["This item was broken when it arrived", "This item broke after 3 weeks"],
  examples=[Example("The order came 5 days early", "positive"), Example("The item exceeded my expectations", "positive"), Example("I ordered more for my friends", "positive"), Example("I would buy this again", "positive"), Example("I would recommend this to others", "positive"), Example("The package was damaged", "negative"), Example("The order is 5 days late", "negative"), Example("The order was incorrect", "negative"), Example("I want to return my item", "negative"), Example("The item\'s material feels low quality", "negative")])
print('The confidence levels of the labels are: {}'.format(
       classifications.classifications))