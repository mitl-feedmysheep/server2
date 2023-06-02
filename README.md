# FeedMySheep

## 로컬 테스트 DB 세팅

1. docker / mysql workbench 설치
2. mysql 8.0 설치
    ```console
   docker pull mysql:8.0
   ```
3. docker mysql container 백그라운드 실행
     ```console
   docker run --name feed_my_sheep -e MYSQL_ROOT_PASSWORD=feedmysheep -d -p 3306:3306 mysql:8.0
   ```
4. mysql workbench를 사용하여, schema 생성
    
5. 