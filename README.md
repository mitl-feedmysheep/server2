# FeedMySheep

## 로컬 셋팅

### 로컬 패키지 설치

1. Organization package access

   - ~/.npmrc에 추가

   ```console
   @mitl-feedmysheep:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken={노션에 명시된 feedmysheep-package-token}
   ```

2. 패키지 설치

   ```console
   npm i
   ```

### 로컬 테스트 DB 셋팅

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

### 로컬 서버 구동

1. 로컬에서는 로컬 DB와 연동하여 서버를 구동한다.
   ```console
   npm run start:local
   ```
