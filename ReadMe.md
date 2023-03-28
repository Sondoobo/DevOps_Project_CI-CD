# 🏷️ devops-03-P2-TeamF
<br>

 - Team : 
 
 손동훈 : [Sondoobo](https://github.com/Sondoobo) | 박예빈 : [yebinnn](https://github.com/yebinnn) | 김건 : [Geon-OZ](https://https://github.com/Geon-OZ) | 
 --- | --- | --- |

 - Duration : 2022.01.17 ~ 2022.01.25
<br>

## 📖 Summary

AWS 기반 인프라로 프론트엔드와 백엔드 서버에 대한 CI/CD 자동화 파이프라인이 구축된
배달 애플리케이션 서비스를 구축한다.

<br>

## 👉 배달 애플리케이션 서비스
  
#### 백엔드 기능 요구사항
- 현재 주문이 가능한 식당을 조회할 수 있어야 한다.
- 주문이 가능한 식당의 메뉴를 조회할 수 있어야 한다.
- 고객은 자신의 주문 목록을 조회할 수 있어야 한다.
- 고객은 원하는 메뉴를 주문할 수 있어야 한다.
<br>


## 🖼️ Architecture
![Final_Project_Team D-페이지-4 drawio](https://user-images.githubusercontent.com/119152428/228308588-62b25dff-e941-4167-a289-6c94b1c8bca5.png)

 - Code Pipeline : 프론트엔드 서비스에 대해 CI/CD 자동화를 위해 사용했습니다.
 - Git Action : 백엔드 서비스에 대해 CI/CD 자동화를 위해 사용했습니다.
 - CloudFront : CDN을 구축하여 ECS 태스크 및 DB로 향하는 트래픽의 부하를 덜어주기 위한 목적으로 사용했습니다.
 - ECS : 컨테이너 단위로 백엔드 서버를 구성하기 위해 ECS를 사용하였습니다.
 - Secrets Manager : 애플리케이션 단위에서 DB에 접근할 수 있는 비밀번호를 소유하지 못하도록 Secrets Manager를 통해 참조형으로 구성하였습니다.
 
<br>

## 🛠️ Environment
<div align=center>
<img src="https://img.shields.io/badge/AWS-232F3E?stylefor-the-badge&logo=Amazon AWS&logoColor=FAFAFA" width="80" height="30"/>
<img src="https://img.shields.io/badge/Docker-004B8D?stylefor-the-badge&logo=Docker&logoColor=2496ED" width="80" height="30"/>
<img src="https://img.shields.io/badge/Fastify-000000?stylefor-the-badge&logo=Fastify&logoColor=FAFAFA" width="80" height="30"/>
<img src="https://img.shields.io/badge/GitHub Actions-000000?stylefor-the-badge&logo=GitHub Actions&logoColor=2088FF" width="80" height="30"/>

<br>
<img src="https://img.shields.io/badge/MongoDB-47A248?stylefor-the-badge&logo=MySQL&logoColor=4479A1" width="80" height="30"/>
<img src="https://img.shields.io/badge/Node.js-173B3F?stylefor-the-badge&logo=Node.js&logoColor=339933" width="80" height="30"/>
 </div>
 <br>

## 🖥️ Prerequisites
AWS 배포 자동화를 구현하기 위해서는 AWS에 계정이 있어야 합니다.
```
https://aws.amazon.com/ko/
``` 
백엔드 서비스의 AWS 인프라를 CI/CD로 배포하기 위해서는 TeamF-WAS 폴더에서 다음을 실행합니다.
```
git status
git add <변경 파일명>
git commit -m '커밋 메세지'
git push [origin] [branch]
```
백엔드 서비스의 github action workflow를 작동시키기 위해서는 아래의 secrets가 필요합니다.
```
AWS_ACCESS_KEY_ID=<value>
AWS_SECRET_ACCESS_KEY=<value>
```
데이터베이스에 값을 넣기 위해서는 mongo DB Compass를 이용해 다음을 실행합니다.
```
[url]
monogodb://<사용자 이름>:<사용자 비밀번호>@<호스트 네임>:27017/?authMechanism=DEFAULT
source init.sql
```
<br>

## 🖥️ Installing
***npm dependencies***
```
npm i @fastify/autoload
npm i @fastify/cors
npm i @fastify/mongodb
npm i @fastify/sensible
npm i fastify
npm i fastify-cli
npm i fastify-plugin
``` 
서버 구동을 위해 ./TeamF-WAS의 위치에서 다음을 실행합니다.
```
npm run start
```


