import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="지금 바로 시작하세요"
      subtitle="14일 무료 체험 기간 동안 모든 기능을 제한 없이 사용해보세요."
      button={
        <></>
        // <Link href="https://app.yazasu.com/register">
        //   <Button>무료로 시작하기</Button>
        // </Link>
      }
    />
  </Section>
);

export { Banner };
