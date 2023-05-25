# kanban-app

> A Kanban Application

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


설계

1. 컴포넌트 설계
2. 상태 모델링 및 데이터플로 설계
3. 라우팅 설계

1. 컴포넌트 설계

어느 정도 크기의 컴포넌트로 나눌것인지 혹은 컴포넌트끼리 어떻게 연관지을지 설계

이점 
- 일관성
- 중복 방지
- 생산성 향상

아토믹 디자인 원칙 
원자 - 분자 - 유기체 - 템플릿 - 페이지 

원자: UI를 구성하는 기본 요소 [레이블, 텍스트 박스, 버튼 등]
분자: 원자를 조합해 만든 요소 [로그인 폼(폼 컴포넌트, 텍스트 박스, 버튼 등), 태스크 목록 헤더(h2, 태스트 추가 버튼 컴포넌트 등)]
유기쳬: 원자, 분자, 유기체가 모여 구성되는 요소 [태스크 목록(태스크를 여러 개 포함하는 목록 컴포넌트, 태스크 목록 헤더 등)]
템플릿: 분자와 유기체가 조합돼 만들어진 페이지의 템플릿, 곧 와이어프레임
