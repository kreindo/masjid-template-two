import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { BangRevaJie } from '../components/Container';
import Image from 'next/image';
import { KegiatanCard } from 'components/KegiatanCard';

export default function Home() {
  return (
    <div className="bg-slate-800">
      <div className="relative min-h-[1000px] max-h-[1000px] bg-main-hero bg-no-repeat bg-cover">
        <Layout title={'Homepage'}>
          <Hero />
        </Layout>
      </div>
      {/* <div className="relative h-[50px]">
        <Image
          src={'/assets/images/divider1.svg'}
          alt={'divider 1'}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div> */}
      <BangRevaJie>
        <div id="Kegiatan" className="my-[20px] text-white">
          <KegiatanCard />
        </div>
        <div>
          <h1 className="text-white">Hello content</h1>
        </div>
      </BangRevaJie>
    </div>
  );
}
