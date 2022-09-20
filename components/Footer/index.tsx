import Image from 'next/image';
import Logo from '../../public/assets/logo/logo.svg';
export const Footer = () => {
  return (
    <div className="absolute w-full bottom-0 flex items-center justify-center bg-[#1B1A18] h-[100px]">
      <div className="w-[60px] h-[60px]">
        <Image src={Logo} alt={'logo'} />
      </div>
    </div>
  );
};
