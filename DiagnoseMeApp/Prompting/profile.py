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
