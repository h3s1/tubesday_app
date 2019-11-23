# 🎬 TUBESDAY Native(iOS / Android) 🎥
![badge](https://img.shields.io/badge/Part-Front--end-brightgreen)![lang](https://img.shields.io/badge/Language-JavaScript-blue)![react-native](https://img.shields.io/badge/Tech--stack-ReactNative-orange)






## Description

유튜브 영상 추천 플랫폼 튭스데이(TubesDay).
사용자들이 추천하는 유튜브 영상들을 만나보세요.



#### 서비스 특징

- 사용자들이 재미있는 유튜브 영상을 추천해 줍니다.
- 네이버 실시간 검색어와 관련된 영상들도 추천해줘요!
- 유튜브 추천 알고리즘으로 인해 매번 보는 영상만 계속 보다 질리셨다면, 이제 다른 사람들이 관심 가지는 영상들을 추천받아 보세요!



|                                       처음 시작자용 화면                                        |
| :-------------------------------------------------------------------------------------: | 
| ![main_video](https://github.com/ChaeWonKong/image-resource/blob/master/tube.gif?raw=true) | 



## Dev stack

- React 16.9.0
- React Native 0.61.2



## Getting Started



### prerequisites


| Require                              | Description                                                               |
| ------------------------------------ | ------------------------------------------------------------------------- |
| [Git](https://git-scm.com/)          | We follow the [GitHub Flow](https://guides.github.com/introduction/flow/) |
| [Node.js](nodejs.org)                | 10.16.0 or above                                                          |
| [Yarn](https://yarnpkg.com/lang/en/) | Recommend [stable version](https://github.com/yarnpkg/yarn/releases)      |



### Installation

#### Install nvm, yarn

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ command -v nvm
$ which node
$ npm install -g yarn
```



#### Install project

```bash
$ nvm install 10.16.0
$ nvm use
$ yarn install
```




#### Start project

```bash
# iOS
$ react-native run-ios

# Android
$ react-native run-android
```





## Features

- [x] 영상 플레이어
- [X] Scrollable Header: 화면 스크롤 시 헤더를 숨김으로써 더 많은 정보를 볼 수 있게 함.
- [X] Redux 적용: Fetching한 영상 정보를 Redux 스토어에 저장
- [ ] 영상 추천(Create) 뷰 작성
- [ ] 회원가입 뷰 작성
- [ ] 로그인 뷰 작성