# 기반 이미지 선택
FROM python:3.11.5-slim

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 패키지 설치
RUN apt-get update && apt-get install -y make

# 호스트 머신의 현재 디렉토리의 내용을 컨테이너의 /app 디렉토리에 복사
COPY . /app/

# 필요한 패키지 설치
RUN pip install --no-cache-dir -r requirements.txt

# 컨테이너 내에서 사용될 포트 지정
EXPOSE 8080

# FastAPI 서버 실행
CMD ["make", "run-srv"]
