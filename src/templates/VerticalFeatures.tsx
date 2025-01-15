import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="주요 기능"
    description="홀덤펍 운영에 필요한 모든 기능을 제공합니다"
  >
    <VerticalFeatureRow
      title="게임 예약 및 참여"
      description="주변 매장의 게임을 쉽게 검색하고 예약할 수 있습니다. 실시간 알림으로 게임 시작을 놓치지 마세요."
      image="/assets/images/feature.svg"
      imageAlt="게임 예약 기능"
    />
    <VerticalFeatureRow
      title="매장 관리 시스템"
      description="매장 정보 설정부터 게임 운영, 결제 관리까지 한 번에 처리하세요. 직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다."
      image="/assets/images/feature2.svg"
      imageAlt="매장 관리 시스템"
      reverse
    />
    <VerticalFeatureRow
      title="통계 및 분석"
      description="매출, 게임 통계, 고객 데이터를 실시간으로 분석하여 더 나은 의사결정을 도와드립니다."
      image="/assets/images/feature3.svg"
      imageAlt="통계 분석 기능"
    />
  </Section>
);

export { VerticalFeatures };
