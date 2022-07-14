import tabula

import csv 
import json 

# PDF to CSV

# Read PDF
# df = tabula.read_pdf("Schools.pdf", pages="all")[0]
# Print CSV
# tabula.convert_into("Schools.pdf", "Schools.csv", output_format="csv", pages="all")

def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvFile: 
        csvReader = csv.DictReader(csvFile) 
        for row in csvReader: 
            jsonArray.append(row)
    
    print(jsonArray)
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonFile: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonFile.write(jsonString)
          
csvFilePath = r'school-data.csv'
jsonFilePath = r'schools.json'
csv_to_json(csvFilePath, jsonFilePath)