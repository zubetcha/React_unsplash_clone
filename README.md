</br>

# Unsplash 클론 코딩

<img src="https://user-images.githubusercontent.com/91620721/152481773-846e84b3-82d2-47af-8f4f-d4df95f82838.gif" width="1280" height="600"/>
<!-- ![img](https://user-images.githubusercontent.com/91620721/152481773-846e84b3-82d2-47af-8f4f-d4df95f82838.gif) -->

</br>

## 🎈 Description
> 2021.12.13 - 2021.12.18
> 
> 고화질 이미지 공유 사이트인 Unsplash를 클론 코딩한 프로젝트입니다.

<a href="https://unsplash.com/">Unsplash 웹사이트</a>
</br>
<a href="https://www.youtube.com/watch?v=7NqR7eWZ1Hw">시연 영상 보러가기<a/>

</br>

## 👥 Team Member

</br>

| Position | Member | Github |
|:---:|:---:|:---:|
| Front-end | 정주혜 | [정주혜 님의 Github](https://github.com/zubetcha) |
| Front-end | 이준명 | [이준명 님의 Github](https://github.com/Leejunmyung) |
| Back-end | 이현범 | [이현범 님의 Github](https://github.com/mylhb9) |
| Back-end | 임전혁 | [임전혁 님의 Github](https://github.com/yarogono) |

</br>

## 🪄 Teck Stack
`Front-end`

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

`Back-end`

<div>
<img height="28" src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"></a>&nbsp;
<img height="28" src="https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white"></a>&nbsp;
<img height="28" src="https://img.shields.io/badge/Springboot-47?style=flat&logo=Springboot&logoColor=white"/></a>&nbsp;
<img height="28" src="https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white"/></a>&nbsp;
<img height="28" src="https://img.shields.io/badge/JWT-000000?style=flat&logo=JSON%20web%20tokens&logoColor=white"></a>&nbsp;  
<img height="28" src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=Swagger&logoColor=white"></a>&nbsp;
<img height="28" src="https://img.shields.io/badge/gradle-02303A?style=flat&logo=gradle&logoColor=white"></a>&nbsp;
<img height="28" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=flat&logo=amazonaws&logoColor=white"></a>&nbsp;
<img height="28" src="https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white"></a>&nbsp;
</div>

</br>

## 👩🏻‍💻 What I Did

> 로그인 화면, 회원가입 화면, 이미지 업로드 화면, 이미지 디테일 화면, 마이페이지 화면 구현
</br>

`Login Page`

![unsplash-login](https://user-images.githubusercontent.com/91620721/152493753-e3b39a6a-5e16-4805-8f2c-3fc570940ef0.png)

</br>

`Join Page`

![unsplash-join](https://user-images.githubusercontent.com/91620721/152493979-232fc86d-cd6c-4e35-b18e-6241ec4ed246.png)

</br>

`Image Upload Page`

![unplash-upload](https://user-images.githubusercontent.com/91620721/152494286-d6dd2cfd-1578-4d5c-88e7-3ff0e2486cc6.png)

</br>

`Image Detail Page`

![unsplash-detail](https://user-images.githubusercontent.com/91620721/152494464-2d6b571f-9dbc-4b3c-a8ea-4e0d8aa48277.png)

</br>

`My Page`

![unsplash-mypage](https://user-images.githubusercontent.com/91620721/152494560-fd83c5d7-17d5-4de7-b541-1de4a922e570.png)


</br>

## 주요 기능

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

## Trouble Shooting

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
