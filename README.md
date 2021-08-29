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
