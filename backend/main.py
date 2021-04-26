from typing import Optional
from fastapi import FastAPI
import mysql.connector
import json
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.openapi.models import Response
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

origins = [
    "http://localhost",
    "http://127.0.0.1:8926",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/channels")
def read_root():
    mydb = mysql.connector.connect(host="localhost", user="root", password="", database="streamin")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT c.idChannel, c.nameChannel, c.link, c.type, c.description, c.country from channel c")
    row_headers=[x[0]for x in mycursor.description]
    myresult = mycursor.fetchall()
    json_data=[]
    for result in myresult:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.post("/register")
def register(idUser : int, firstName : str, lastName : str, phoneNumber : str, email: str, password : str, role:str):
    mydb = mysql.connector.connect(host="localhost", user="root", password="", database="streamin")
    mycursor = mydb.cursor()
    mycursor.execute("INSERT INTO user values('%d', '%s', '%s', '%s', '%s', '%s', '%s')"%(idUser, firstName, lastName, phoneNumber, email, password, role))
    myresult = mycursor.fetchall();
    mydb.commit()
    return myresult

@app.get("/auth")
def auth(email: str, password: str):
    mydb = mysql.connector.connect(host="localhost", user="root", password="", database="streamin")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT u.email, u.password FROM user u");
    myresult = mycursor.fetchall()
    for user in myresult:
        print(user)
        if user[0] == email and user[1] == password:
            return "true"
        else:
            return "false"

@app.delete("/delete")
def deleteChannel(name : str):
    mydb = mysql.connector.connect(host="localhost", user="root", password="", database="streamin")
    mycursor = mydb.cursor()
    mycursor.execute("DELETE * FROM channel WHERE nameChannel = '%s'"%(name))
    mybd.commit()
    return "channel deleted"

@app.post("/update")
def updateChannel(name : str, link : str, type : str, description: str):
    mydb = mysql.connector.connect(host="localhost", user="root", password="", database="streamin")
    mycursor = mydb.cursor()
    mycursor.execute("UPDATE channel SET link = '%s', type = '%s', description = '%s' WHERE nameChannel = '%s'"%(link, type, description, name))
    mybd.commit()
    return "channel updated"
     