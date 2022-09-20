import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { BangRevaJie } from '../components/Container';
import Image from 'next/image';
import { KegiatanCard } from 'components/KegiatanCard';
import { Footer } from 'components/Footer';
import { KegiatanBox } from 'components/KegiatanBox';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-800">
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
        <div id="Kegiatan" className="my-[100px] text-white">
          <KegiatanCard />
        </div>
        <div className="mb-[100px]">
          <KegiatanBox title={'Foo Bar Boo'} dummy={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex iste
            doloribus sapiente impedit laborum dolorum. Amet iusto distinctio
            cum.
          </KegiatanBox>
          <KegiatanBox title={'Foo Bar Boo'} dummy={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex iste
            doloribus sapiente impedit laborum dolorum. Amet iusto distinctio
            cum.
          </KegiatanBox>
          <KegiatanBox title={'Foo Bar Boo'} dummy={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex iste
            doloribus sapiente impedit laborum dolorum. Amet iusto distinctio
            cum.
          </KegiatanBox>
          <KegiatanBox title={'Foo Bar Boo'} dummy={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex iste
            doloribus sapiente impedit laborum dolorum. Amet iusto distinctio
            cum.
          </KegiatanBox>
        </div>
      </BangRevaJie>
      <div id="Map" className="mb-[50px] flex justify-center items-center">
        <h1 className="text-white text-3xl font-bold">Lokasi</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254172.44553857786!2d120.08321543281248!3d-5.500827999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbc08611c908c4f%3A0xe2f1c9e93907d5f5!2sNURUL%20SALAM!5e0!3m2!1sen!2sid!4v1663638512280!5m2!1sen!2sid"
        width="100%"
        height="450"
        className="border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </div>
  );
}
