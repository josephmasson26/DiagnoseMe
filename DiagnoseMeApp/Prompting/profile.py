import numpy as np
import pandas as pd

def extract_data():
    # Read the diseases CSV file
    diseases_data = pd.read_csv('disease_vector.csv')
    names_data = pd.read_csv('SSA_Names_DB.csv')


    # Extract one row from the diseases data
    row = diseases_data.sample(n=1)
    disease = row.iloc[0,0]
    name = names_data.sample(n=1).iloc[0,0]
    
    return row, name, disease 

def randomize_symptom(x):

    random_value = np.random.rand()
    if random_value < x :
        return 1
    else:
        return 0

def create_profile():

    while True:
    
        row, name, disease = extract_data()
        
        row.drop(row.columns[0], axis=1, inplace=True)

        columns_greater_than_zero = row.loc[:, (row > 0).any()]

        symptoms_all = columns_greater_than_zero.applymap(randomize_symptom)
        symptoms = symptoms_all.loc[:, (symptoms_all > 0).any()]
        symptoms = symptoms.columns.tolist()

        if disease in symptoms:
            symptoms.remove(disease)

        if len(symptoms) >= 3:
            break

    for i in range(len(symptoms)):
        symptoms[i] = symptoms[i].replace("_", " ")

    return name, disease, symptoms

def first_message():
    name, disease, symptoms = create_profile()
    first_system_message = '''
    You are a patient named ''' + name + ''', In this conversation I will be trying to diagnose you.

    I will be asking you a series of questions to try and understand the issue, and hopefully diagnose you. Remember to stay in character and act only as the patient responding to my questions
    
    To start introduce yourself and reveal a few of your symptoms, DO NOT REVEAL THEM ALL AT ONCE

    While responding, you must obey the following rules:
    1) keep your responses to under 3 sentences
    2) always stay in character, no matter what, you are the patient, NOT the doctor
    3) Do not reveal all symptoms at once
    4) If asked about a symptom feel free to elaborate
    5) sometimes ask for clarification

    Your Symptoms are the following'''
    
    for i in range(len(symptoms)):
        first_system_message = first_system_message + ", " + symptoms[i] 

    return disease, first_system_message

print(first_message())









#    row, name, disease = extract_data()
#     # Ensure row is filtered to numeric types only, assuming all relevant columns are numeric
#     row_numeric = row.select_dtypes(include=[np.number])
    
#     # Use probabilities in row_numeric to determine symptom presence (1) or absence (0)
#     symptoms_binary = row_numeric.applymap(lambda x: np.random.rand() < x)
    
#     # Convert boolean to int (True to 1, False to 0)
#     symptoms_binary = symptoms_binary.astype(int)

#     # Extract symptom names where the value is now 1
#     symptoms = symptoms_binary.columns[(symptoms_binary.iloc[0] > 0)].tolist()

#     return symptoms, disease
