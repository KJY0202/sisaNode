# ONDO Cafe — React demo

## 실행
```bash
npm install
npm run dev
```

## 빌드 확인
```bash
npm run build
```

## 구현 내용
- `/`, `/menu`, `/menu/:id`, `/event`, 나머지 주소는 404
- 공통 헤더와 푸터를 Layout에서 한 번만 렌더링
- 메뉴 상세 주소(`/menu/:id`)에서도 메뉴 네비게이션만 활성화
- 메뉴 탭은 `?cat=coffee` 형태로 URL에 보존
- 찜과 발급 쿠폰은 Zustand persist로 localStorage `ondo` 키에 저장
- 월말 프로모션 카운트다운
- 시즌 메뉴 카드와 카테고리 전환 Motion 애니메이션
- 이름/전화번호/필수 동의 유효성 검사 및 쿠폰 표시
- 390px 폭 대응 및 `prefers-reduced-motion` 지원

## 참고
이 프로젝트는 프런트엔드 데모입니다. 이벤트 입력 정보는 서버로 전송되지 않으며, 쿠폰 코드는 휴대폰 번호 끝 네 자리로 생성합니다. 실제 서비스에서는 서버 측 발급/중복 검증과 개인정보 처리 고지가 필요합니다.
