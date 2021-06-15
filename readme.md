# svelte-aframe-boilerplate

[원본](https://github.com/gihong-park/svelte-webpack-ssr)

# 개요

`svelte`를 `SSR`서버를 이용해 미리 완성된 `aframe` html 페이지를 라우팅하는 서버를 만듭니다.

## 사용 기술

- svelte
- fastify
- webpack
- aframe

# 폴더 구조

## assets

사용될 `asset`들을 저장합니다. 주로 `gltf`등의 모델을 다룹니다. 모델은 폴더별로 만들어 넣어둡니다.

## client

클라이언트에 사용될 실제 파일들이 들어갑니다. `pages` 폴더에 들어가는 내용들이 추후에 라우터에 등록하게 됩니다.

### client/pages

클라이언트에서도 페이지를 이루는 파일들 입니다. `react`의 `scenes`에 해당합니다.

### client/entities

여러 씬에서 공통으로 사용될 수 있는 엔티티들을 모아둡니다. 카메라, 조명 등이 해당됩니다.

### client/components

`registComponents`함수를 이용해 등록해서 재사용할 컴포넌트 들을 모아둡니다. 아직 구현되지 않았습니다.

### client/mixins

애셋에서 관리될 믹스인들을 모아둡니다. 아직 구현되지 않았습니다.

## server

서버 관련 파일을 모아둡니다.

### .client-entry-scripts

static html 파일 빌드 과정에서 생기는 `svelte` -> `js` 과정의 임시 파일들입니다.

### config

설정에 관련된 별도의 파일들을 모아둡니다. 추후에는 포트 등의 서버 정보 관련들을 더 모아둘 예정입니다.

- create-client-entry-scripts : 위에서 설명한 폴더와 파일을 생성하기 위한 스크립트입니다.

### routes

라우팅을 위해 사용되는 파일들을 모아둡니다. 실제 라우팅 등록은 `index.js`에서 진행합니다.

- header.js : 헤더 정보를 모아둡니다
- register.js : `fastify`서버에 실제 라우팅을 등록합니다.
- renderer.js : 실제 페이지 랜더에 사용되는 템플릿을 정의해둡니다.
- index.js : 라우팅을 등록해둡니다.

### index.js

SSR 서버를 실행합니다.

## Contributors

- [박기홍](https://github.com/gihong2012) 
- [유경수](https://github.com/yoogomja) [메일](mailto://dev.yoogomja@gmail.com)
