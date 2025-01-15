import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <a href="#features">기능 소개</a>
        </li>
        <li>
          <a href="#pricing">요금제</a>
        </li> */}
        <li>{/* <Button xl>무료로 시작하기</Button> */}</li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'홀덤펍 관리를 더 쉽고 스마트하게,\n'}
            <span className="text-primary-500">야자수</span>
          </>
        }
        description="홀덤펍을 운영하고 관리하는 최적의 솔루션"
        button={<></>}
      />
    </Section>
  </Background>
);

export { Hero };
