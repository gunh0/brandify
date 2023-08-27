from fastapi import FastAPI
from pymongo import MongoClient

app = FastAPI()

# 데이터베이스와 컬렉션 선택
client = MongoClient("mongodb://localhost:27017/")  # 로컬호스트 주소와 포트
db = client.sk  # 데이터베이스 이름
mood_collection = db.mood  # mood 컬렉션
purpose_collection = db.purpose  # purpose 컬렉션

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/moods")
async def get_moods():
    moods = mood_collection.find({}, {"_id": 0})  # _id 필드는 제외하고 가져옴
    return {"moods": list(moods)}

@app.get("/purposes")
async def get_purposes():
    purposes = purpose_collection.find({}, {"_id": 0})  # _id 필드는 제외하고 가져옴
    return {"purposes": list(purposes)}
