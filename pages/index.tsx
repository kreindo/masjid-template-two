import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { BangRevaJie } from '../components/Container';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-400">
      <div className="relative min-h-screen bg-main-hero bg-no-repeat bg-cover">
        <Layout title={'Homepage'}>
          <Hero />
        </Layout>
      </div>
      <div className="relative h-[100px]">
        <Image
          src={'/assets/images/divider1.svg'}
          alt={'divider 1'}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
      <BangRevaJie>
        <div className="w-60 h-60 bg-red-500 text-white"></div>
        <div className="w-60 h-60 bg-red-500 text-white"></div>
        <div className="w-60 h-60 bg-red-500 text-white"></div>
        <div className="w-60 h-60 bg-red-500 text-white"></div>
        <div className="w-60 h-60 bg-red-500 text-white"></div>
      </BangRevaJie>
    </div>
  );
}
