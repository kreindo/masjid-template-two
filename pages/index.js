import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <>
      <Layout
        title={'Homepage'}
        className={'mx-auto max-w-screen-md lg:max-w-screen-lg'}
      >
        <Hero />
        <Hero />
        <div className="text-red">hello</div>
      </Layout>
    </>
  );
}
