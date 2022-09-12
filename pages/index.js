import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="max-h-screen bg-main-hero bg-no-repeat bg-cover border-8 border-red-600">
        <Layout title={'Homepage'}>
          <div>
            <Hero />
            <div className="text-red-500">hello</div>
          </div>
        </Layout>
      </div>
    </>
  );
}
