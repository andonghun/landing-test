import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`inline-flex items-center gap-2 text-gray-900 ${fontStyle}`}
    >
      <Image
        src="/assets/images/yajasu_logo.png"
        alt="야자수"
        width={size}
        height={size}
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
