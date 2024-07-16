import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

mydb=mysql.connector.connect(
    host=os.environ.get("HOST"),
    user=os.environ.get("USER"),
    password=os.environ.get("PASSWORD"),
    database=os.environ.get("DATABASE"),
    port=os.environ.get("PORT")
)

mycursor = mydb.cursor()
mycursor.execute('show databases')
for x in mycursor:
  print(x)