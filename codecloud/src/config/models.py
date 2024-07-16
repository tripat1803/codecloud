from db import mycursor

mycursor.execute('''CREATE TABLE _users ()''')
mycursor.execute('''CREATE TABLE _projects ()''')
mycursor.execute('''CREATE TABLE _deployments ()''')