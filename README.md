<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
</picture>

<div align="center"><strong>홀덤펍 통합 관리자 대시보드</strong></div>
<div align="center">Next.js 기반의 홀덤펍 관리자 시스템</div>
<br />

## 개요

이 프로젝트는 홀덤펍 운영을 위한 관리자 대시보드입니다. 다음과 같은 기술 스택을 사용합니다:

- Framework - [Next.js (14)](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Auth - [Auth.js](https://authjs.dev/)
- Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)

## 주요 기능

| 페이지    | 기능 설명                                                                                  |
| :-------- | :----------------------------------------------------------------------------------------- |
| 로그인    | - 관리자 인증<br>- 권한별 접근 제어 (시스템 관리자/매장 관리자)                            |
| 대시보드  | - 일일 매출 통계<br>- 진행중인 게임 현황<br>- 예약 현황<br>- 주요 지표 그래프              |
| 매장 관리 | - 매장 기본 정보 관리 <br>- 편의시설 정보 관리<br>- 매장별 정책 설정                       |
| 게임 관리 | - 게임 생성/수정/삭제<br>- 블라인드 구조 설정<br>- 참가자 관리<br>- 게임 진행 현황         |
| 회원 관리 | - 회원 목록 조회/검색<br>- 임시 회원 생성<br>- 회원 상세 정보 관리<br>- 포인트/이용권 관리 |
| 결제/정산 | - 결제 내역 관리<br>- 포인트 적립/사용 내역<br>- 매출 통계 및 리포트                       |
| 설정      | - 관리자 계정 설정(시스템 관리자에게만)<br>                                                |

## 시작하기

1. 저장소 복제:

```bash

```

2. 의존성 설치:

```bash
npm install
```

3. 환경 변수 설정:

```bash
cp env.example.txt .env.local
```

필요한 환경 변수:

- DATABASE_URL: 데이터베이스 연결 정보
- NEXTAUTH_SECRET: 인증 시크릿 키
- KAKAO_CLIENT_ID: 카카오 로그인 연동 정보
- KAKAO_CLIENT_SECRET: 카카오 로그인 시크릿

4. 개발 서버 실행:

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.
