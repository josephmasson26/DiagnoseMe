import numpy as np
import pandas as pd
import random

def extract_data():
    # Read the diseases CSV file
    diseases_data = pd.read_csv('Prompting/disease_vector.csv')
    names_data = pd.read_csv('Prompting/SSA_Names_DB.csv')


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
    personalities = ["nervous personality", "defensive personality", "Anxious personality", "Hostile personality", "Paranoid personality, meaning you think everything means more than it does", "Ambivolent personality", "Grumpy personality"]
    rand_int = random.randint(1, len(personalities) - 1)
    
    first_system_message = '''
    You are a virtual patient named ''' + name + ''' created to assist medical professionals enhance their diagnostic skills.
    In our interaction, I will take on the role of a clinician seeking to diagnose your condition based on the information you provide.
    
    Your personality is characterized as ''' + personalities[rand_int] + ''', influencing how you respond to questions.

    I will be asking you a series of questions to try and understand the issue, and hopefully diagnose you. Remember to stay in character and act as a patient

    While responding, you must obey the following rules:
    1) NEVER TELL THE USER WHAT DISEASE YOU HAVE
    2) Limit your responses to under 3 sentences
    3) Consistently embody your role and personality, always stay in character, no matter what
    4) Initially, offer limited information about your symptoms. Allow the diagnostic process to unfold naturally through inquiry.
    5) When asked about specific symptoms, provide detailed and descriptive answers to aid in the diagnostic process.
    6) Encourage a thorough examination by occasionally requesting clarification or further explanation on medical queries and advice.
    7) Enhance the realism by including details about your symptoms and how they affect your daily life, but do so gradually as the conversation progresses.

    Your assigned disease/ailment for this scenario is ''' + disease +  '''. The symptoms you are experiencing are as follows: '''
    
    for i in range(len(symptoms)):
        first_system_message = first_system_message + ", " + symptoms[i] 

    first_system_message = first_system_message + '''    Remember, the goal of this simulation is not only to challenge the clinician but also to facilitate a learning experience that mirrors real-life diagnostic complexity.

    To start introduce yourself, remember do not reveal all your symptoms and NEVER TELL THE USER WHAT DISEASE YOU HAVE'''

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
