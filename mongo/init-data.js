// 데이터베이스 생성
db = db.getSiblingDB('sk');

// mood 컬렉션 초기 데이터
db.mood.insertMany([
    { name: "Calm", kor: "차분한" },
    { name: "Dark", kor: "어두운" },
    { name: "Unique", kor: "독특한" }
]);

// purpose 컬렉션 초기 데이터
db.purpose.insertMany([
    { name: "Event", kor: "이벤트" },
    { name: "Profile", kor: "프로필" },
    { name: "Youtube", kor: "유튜브" }
]);
