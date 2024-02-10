import numpy as np
import pandas as pd


def extract_data():
    # Read the diseases CSV file
    diseases_data = pd.read_csv('Diseases-Hep.csv')
    names_data = pd.read_csv('SSA_Names_DB.csv')


    # Extract one row from the diseases data
    row = diseases_data.sample(n=1)
    disease = row.iloc[0,0]
    name = names_data.sample(n=1).iloc[0,0]
    
    return row, name, disease 

def create_profile():
 
    row, name, disease = extract_data()
    print(row)
    row.drop(row.columns[0])
    # row_numeric = row.select_dtypes(include=[np.number, 'boolean'])

    print("row: ", row)

    # for col in row_numeric.columns:
    #     row_numeric[col] = np.random.rand() < row_numeric[col]

    # row_numeric = row_numeric.astype(int)

    # symptoms = row_numeric.columns[(row_numeric.iloc[0] > 0)].tolist()

    return disease, symptoms


print(create_profile())









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
