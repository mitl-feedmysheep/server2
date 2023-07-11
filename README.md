# FeedMySheep

## 로컬 테스트 DB 셋팅

1. docker / mysql workbench 설치
2. mysql 8.0 설치
    ```console
   docker pull mysql:8.0
   ```
3. docker mysql container 백그라운드 실행
     ```console
   docker run --name feed_my_sheep -e MYSQL_ROOT_PASSWORD=feedmysheep -d -p 3306:3306 mysql:8.0
   ```
4. 서버 로컬 실행
   ```console
   npm run start:local
   ```
5. entity에 따라 synchronize (production 환경이 아니라면 동기화O)
   ```console
   process.env.NODE_ENV === prod ? false : true 
   ```
tst