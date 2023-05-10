import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import TopCards from '../components/TopCards';
import HeightChart from '../components/HeightChart';
import YieldChart from '../components/YieldChart';
import DensityChart from '../components/DensityChart';
import GPTCard from '../components/GPTCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>HempHub</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-2 grid md:grid-cols-2 grid-cols-1 gap-4'>
          <button onClick="fetchData"></button>
          <HeightChart />
          <YieldChart />
          <DensityChart />
        </div>
         <GPTCard />
      </main>
    </>
  );
}
