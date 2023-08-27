import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

app = FastAPI()

# CORS 설정 - 모든 origin 허용
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 환경변수에서 개발 모드 여부 확인
dev_mode = os.environ.get("DEV_MODE") == "true"

# 데이터베이스와 컬렉션 선택
if dev_mode:
    # 개발 모드일 때는 0.0.0.0 주소로 접속
    client = MongoClient("mongodb://0.0.0.0:27017/")  # 개발 서버 주소와 포트
else:
    # Docker Compose 모드일 때는 sk-mongo 컨테이너 이름으로 접속
    client = MongoClient("mongodb://sk-mongo:27017/")  # MongoDB 컨테이너 이름과 포트

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
