// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import { Layout } from '../components/layout/Layout';
import { Header } from '../components/organisation/Header';

export default function Home() {
  return (
    <div className='relative h-screen'>
      <Header />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 mx-auto'>
        <div className='flex items-center justify-center w-full py-40 border-solid border-black border-2'>
          <div>
            <h1 className='pb-12 text-6xl text-center'>TAKAMASA KAWANO</h1>
            <h2 className='text-3xl text-center'>WEB DEVELOPER</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
