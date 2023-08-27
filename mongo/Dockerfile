# 기반 이미지 선택
FROM mongo:7.0.1-rc0

# 데이터 디렉토리 마운트 포인트 생성
VOLUME /data/db

# 초기 데이터 생성 스크립트 실행
COPY init-data.js /docker-entrypoint-initdb.d/