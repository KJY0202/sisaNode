# Knight Mello Fan Site

Knight Mello 멤버 4명을 소개하는 React 팬메이드 사이트입니다. 사진과 프로필은 `src/data/members.js` 한 곳에서 관리할 수 있습니다.

## 실행 방법

Node.js가 설치되어 있는지 확인한 뒤, 이 폴더에서 터미널을 열고 실행하세요.

```bash
npm install
npm run dev
```

터미널에 표시되는 로컬 주소(보통 `http://localhost:5173`)를 브라우저에서 여세요.

배포용 빌드 확인:

```bash
npm run build
npm run preview
```

## 사진 넣는 방법

1. 사진 파일을 `public/images/` 폴더에 넣습니다.
2. `src/data/members.js`에서 해당 멤버의 `image`, `gallery` 값을 수정합니다.
3. 예를 들어 `public/images/pareo-main.jpg`를 넣었다면 경로는 `"/images/pareo-main.jpg"`입니다.

사진을 아직 넣지 않아도 사이트는 작동합니다. 이미지가 없거나 경로가 잘못되면 컬러 그라데이션 플레이스홀더가 표시됩니다.

## 관리하기 쉽게 나눈 구조

```text
knight-mello-site/
├── public/
│   └── images/                 # 직접 넣을 멤버 사진
├── src/
│   ├── components/
│   │   ├── Header.jsx          # 상단 내비게이션
│   │   ├── MemberCard.jsx      # 멤버 카드 한 장
│   │   ├── MemberGrid.jsx      # 4명 카드 목록
│   │   └── MemberProfile.jsx   # 선택 멤버 상세 프로필
│   ├── data/
│   │   └── members.js          # 멤버 이름, 색상, 프로필, 사진 경로
│   ├── App.jsx                 # 페이지 조립 및 선택 상태
│   ├── main.jsx                # React 시작점
│   └── styles/
│       ├── global.css          # 공통 스타일과 배경
│       └── site.css            # 페이지/컴포넌트 스타일
├── index.html
├── package.json
└── vite.config.js
```

## 실제 정보로 바꿀 곳

`src/data/members.js`의 `bio`, `birthday`, `height`, `bloodType`, `favorites`, `timeline`, `socials`는 편집용 예시/빈 값입니다. 확인된 정보로 바꾸고, 모르는 정보는 빈 문자열 또는 빈 배열로 두세요.

이 사이트는 비공식 팬메이드 프로젝트입니다. 공식 사이트로 오해되지 않도록 푸터에 팬메이드 안내를 표시합니다.
