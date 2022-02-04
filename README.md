# 항해99 7주차 클론코딩 <13조

📆2021.12.13 ~ 2021.12.18
</br>

# Team Splash


웹사이트 unsplash 클론 코딩 =>
</br>
<a href="https://unsplash.com/">Unsplash 웹사이트</a>
</br>
<a href="http://unsplashed.s3-website.ap-northeast-2.amazonaws.com/">Unsplash 클론 코딩 웹사이트</a>

</br>
</br>

## 구성원 및 역할👫

### **Front-end**

- 정주혜:
- 이준명:

프론트 깃헙 링크 =>
<a href="https://github.com/Hanghae99-Team-Splash/Team-Splash-Frontend">바로가기</a>

</br>

### **Back-end**

- 이현범: 회원가입, JWT 로그인 기능 구현, 태그화, 좋아요, 카카오톡 로그인, Spring Security 사용
- 임전혁: S3 게시물 기능 구현, 조회수 기능 구현, 테스트코드 작성, EC2배포, CORS처리

백엔드 깃헙 링크 =>
<a href="https://github.com/Hanghae99-Team-Splash/Team-Splash-Backend">바로가기</a>

</br>
</br>

---

</br>

## 🎞프로젝트 시연 영상🎞
<a href="https://www.youtube.com/watch?v=7NqR7eWZ1Hw">시연 영상 보러가기<a/>

</br>
</br>

##TECH STAC

### Front-End

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">  
  
</div>
</br>
</br>

# 주요 기능

**로그인/회원가입**

- 이메일 중복확인 기능
- 회원가입시 Email, 비밀번호 유효성 검사
- 빈칸 금지
  </br>

**메인페이지**

- 로그인한 유저이름 출력
- 게시글 목록 출력
  - 키워드 클릭 시 해당 카테고리의 출력
  - 카드별 이미지, Title, 작성자, 조회수 표시
- 카테고리 별 게시글 출력(필터)
  - 키워드 클릭 시 해당 카테고리의 출력
- 상세페이지 이동
  - 카드 클릭 시 해당 상세페이지 이동
    </br>

**게시글 작성 페이지**

- 사진 업로드
- 빈칸 메세지
  </br>

**상세페이지**

- 게시글 상세내용 출력
- 댓글기능 - 로그인한 사용자만 댓글 작성가능
  </br>

**마이페이지**

- 로그인한 사용자의 게시물 확인 가능
  </br>
  </br>

## 📅Entity 다이어그램

<img width="723" alt="스크린샷 2021-12-16 오후 10 03 58" src="https://user-images.githubusercontent.com/57126167/146377185-47f86312-386d-45ff-bcf8-9c4199de3769.png">
</br>

</br>

# Trouble Shooting

<details>
    <summary>
        1. CORS 정책으로 인한 접속문제
    </summary>
    <div markcown="1">
        cors필터를 스프링 시큐리티에 끼워 넣어서 해결
    </div>
</details>

<details>
    <summary>
        2. Spring Security와 JWT로 인한 카카오 로그인 문제
    </summary>
    <div markcown="1">
        카카오 강제로그인을 없애고 jwt 토큰 발급을 이용해 해결
    </div>
</details>

</br>
</br>
