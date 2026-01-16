# 도메랑 랜딩페이지 프로젝트

## 프로젝트 개요

**도메랑**은 어린이 교구 B2B 도매 플랫폼으로, 셀러와 공급사를 연결하는 서비스입니다.

### 타겟 사용자
- **셀러**: 재고 없이 판매를 시작하고 싶은 온/오프라인 판매자
- **공급사(입점사)**: 판로를 확대하고 싶은 어린이 교구 제조/유통사

### 핵심 가치 제안
- 위탁 판매로 초기 비용 부담 없이 시작
- KC 인증 제품만 취급 (어린이 안전 최우선)
- 스마트스토어, 쿠팡 등 4개+ 마켓 자동 연동
- 주문 수집부터 배송까지 자동화

---

## 기술 스택

| 영역 | 기술 |
|------|------|
| Framework | Next.js 16.1.1 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12.26 |
| Icons | Lucide React |
| Font | Pretendard (한글) |

---

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지 (컴포넌트 조합)
│   ├── globals.css         # 전역 스타일, 커스텀 애니메이션
│   └── favicon.ico
│
├── components/
│   ├── Hero.tsx            # 히어로 (역할 선택 + 목업 + 숫자 정보)
│   ├── Problem.tsx         # 문제 제기
│   ├── Solution.tsx        # 솔루션 (셀러↔도메랑↔공급사)
│   ├── KeyFeatures.tsx     # 핵심 기능 (화면 목업 + 설명)
│   ├── KCCertification.tsx # KC 인증 강조
│   ├── HowItWorks.tsx      # 사용 방법 가이드 (4단계)
│   ├── CTA.tsx             # 최종 액션 유도
│   └── Footer.tsx          # 푸터
│
├── hooks/
│   └── useScrollAnimation.ts
│
public/
└── logo.png
```

---

## 페이지 섹션 순서 및 레이아웃

| 섹션 | 레이아웃 | 설명 |
|------|----------|------|
| Hero | 중앙 정렬 + 실제 목업 | 역할 선택 버튼, 서비스 목업, 핵심 숫자 (300+상품, 0원, 4+마켓, 3일) |
| Problem | 컴팩트 pill 태그 | "이런 고민 있으셨죠?" + 가로 나열 pill 버튼 |
| Solution | 다이어그램 | 셀러↔도매랑↔공급사 연결 구조 + 하단 통계 바 |
| KeyFeatures | 좌우 교차 레이아웃 | 홀수: 텍스트 왼쪽 / 짝수: 텍스트 오른쪽 + 대형 목업 |
| KCCertification | 배너형 (그라데이션) | 아이콘 + 텍스트 + 포인트 pill 가로 배치 |
| HowItWorks | 수평 타임라인 | 애니메이션 진행선 + 셀러/공급사 탭 |
| CTA | 중앙 정렬 | "지금 도메랑과 함께 시작하세요" + 사전 신청 |
| Footer | 그리드 | 연락처, 서비스 링크, SNS |

---

## 핵심 기능 정리

### 셀러 기능
| 기능 | 설명 |
|------|------|
| 원클릭 마켓 등록 | 마이픽 담기 → 상품 전송 → 4개 마켓 자동 등록 |
| 주문 자동 수집 | 주문수집 클릭 → 바로 도매랑 발주 완료 |
| 배송상태 동기화 | 도매랑 업데이트 → 각 마켓 자동 반영 |
| 문의 통합 관리 | 마켓별 흩어진 문의 한곳에서 확인 |
| 재입고 알림 | 품절 상품 입고 시 알림톡 발송 |
| 인기·신상품 소싱 | 메인에서 트렌드 확인, 시즌별 소싱 |

### 공급사 기능
| 기능 | 설명 |
|------|------|
| 마켓 연동·상품 불러오기 | 외부 마켓 연동 → 상품 정보 자동 불러오기 |
| 통계·정산 대시보드 | 판매량, 정산 예정 금액 한눈에 |

### Coming Soon
- 우수 셀러 & 우수 공급사(상품) 매칭 기능

---

## 프로세스 플로우

### 셀러 플로우
```
도매랑 상품 선택 → 마이픽 담기 → 외부 마켓 상품 전송
→ 고객 주문 발생 → 주문 수집 (자동/수기)
→ 클릭 발주 → 공급사 직배송 → 배송상태 자동 동기화
```

### 공급사 플로우
```
외부 마켓 연동 → 상품 불러오기 → 도매랑 등록
→ 전국 셀러에게 노출 → 셀러들이 각자 마켓에 등록
→ 어드민 주문 확인 → 상품 발송
```

*모든 단계는 자동 연동 또는 수기 입력 모두 지원*

---

## 브랜드 가이드

### 컬러 팔레트
| 용도 | 컬러 | 코드 |
|------|------|------|
| Primary | 보라색 | `#672C8C` |
| Primary Dark | 진보라 | `#321148` |
| Seller Accent | 파란색 | `#3B82F6` |
| Supplier Accent | 주황색 | `#F97316` |

### 디자인 패턴
- 둥근 모서리: `rounded-2xl`, `rounded-full`
- 그림자: `shadow-lg`, `shadow-xl`
- 호버 효과: 스케일/이동 애니메이션
- 글로우: 그라데이션 blur 효과

---

## 개발 명령어

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 실행
npm run lint     # 린트
```

---

## 남은 개선 작업

### 우선순위 높음
- [ ] FAQ 섹션 추가 (초기비용, 재고, 반품, 정산 등)
- [ ] 실제 서비스 스크린샷으로 목업 교체 (개발 완료 후)

### 우선순위 중간
- [ ] 네비게이션 바 추가 (스크롤 시 고정 헤더)
- [ ] CTA에 이메일 수집 폼 추가
- [ ] 오픈 일정 구체화

---

## 코드 패턴

### 애니메이션 기본 패턴
```tsx
// 페이드인
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>

// 호버
<motion.div
  whileHover={{ scale: 1.05, y: -8 }}
  whileTap={{ scale: 0.95 }}
>
```

### 글로우 카드 패턴
```tsx
<div className="relative group">
  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
  <div className="relative bg-white p-6 rounded-2xl shadow-lg">
    {/* 내용 */}
  </div>
</div>
```

### 새 섹션 추가 방법
1. `src/components/`에 컴포넌트 생성
2. `'use client'` 선언 (Framer Motion 사용 시)
3. `src/app/page.tsx`에서 import 및 배치
