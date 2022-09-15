import Image from 'next/image';
import Link from 'next/link';
export const Header = () => {
  return (
    <div className="flex mt-[50px] justify-between items-center text-white">
      <div className="flex items-center font-bold text-2xl">
        <Image
          className="brightness-0 invert"
          src={'/assets/images/masjid_nurussalam-02.svg'}
          alt="logo"
          width={50}
          height={50}
        />
        <h1 className="ml-4">Masjid Nurussalam</h1>
      </div>
      <div>
        <ul className="flex">
          <li className="ml-[75px] font-semibold">
            <Link href={'#Home'}>Home</Link>
          </li>
          <li className="ml-[75px]">
            <Link href={'#Kegiatan'}>Kegiatan</Link>
          </li>
          <li className="ml-[75px]">
            <Link href={'#Map'}>Map</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
