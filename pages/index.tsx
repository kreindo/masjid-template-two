import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { BangRevaJie } from '../components/Container';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-slate-800">
      <div className="relative min-h-screen bg-main-hero bg-no-repeat bg-cover">
        <Layout title={'Homepage'}>
          <Hero />
        </Layout>
      </div>
      <div className="relative h-[200px]">
        <Image
          src={'/assets/images/divider1.svg'}
          alt={'divider 1'}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
      <BangRevaJie>
        <div className="mb-[10px] w-60 h-1 bg-red-500 text-white"></div>
        <div>
          <h1 className="text-white">Hello content</h1>
        </div>
        <div className="mb-[10px] w-60 h-1 bg-red-500 text-white"></div>
        <div className="mb-[10px] w-60 h-1 bg-red-500 text-white"></div>
        <div className="mb-[10px] w-60 h-1 bg-red-500 text-white"></div>
        <div className="mb-[10px] w-60 h-1 bg-red-500 text-white"></div>
      </BangRevaJie>
    </div>
  );
}
