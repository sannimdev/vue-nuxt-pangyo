# Nuxt.js

## 1. Nuxt의 프로젝트 구조

### 폴더

-   .nuxt: nuxt 빌드할 때 결과물이 담기는 폴더이다. (숨김파일)
-   assets: 이미지, 웹 리소스(css)
-   components: vue-cli 관련된 컴포넌트
-   layout: 라우터를 기준으로 특정 url에 접근했을 때 출력되는 페이지 레이아웃을 담당하는 컴포넌트
-   middleware: SSR을 진행할 때 브라우저 단에 넘기기 전에 실행하는 함수
-   pages: 파일 기반의 라우팅이 되는 곳
    -   main.vue => /main 으로 접근
-   plugins: 뷰 플러그인을 지칭함 (vue instance 생성 전에 초기화할 라이브러리 등)
-   static: 빌드했을 때 서버에 루트 주소로 옮기게 될 변경이 필요없는 favicon, logo 등
-   store: vuex의 store를 의미한다.

### 설정과 관련된 파일

-   jsconfig.json
-   nuxt.config.js
-   package.json

### Nuxt의 라우팅 관련 컴포넌트 구조

![처음 접하는 nuxt 프로젝트 구조에 md 관련 이미지를 같이 관리하면 헷갈릴 것 같아서 이미지는 외부의 플랫폼을 이용](https://i.imgur.com/yGTkvfx.png)

## 2. backend 마련하기

-   현재 수업은 프런트엔드 수업이므로 backend 구동을 위한 소스코드를 가져와야 한다.
-   [캡틴판교의 learn-nuxt 리포지터리](https://github.com/joshua1988/learn-nuxt)를 클론하여 backend파일만 복사하고 해당 프로젝트에 삽입한다.
