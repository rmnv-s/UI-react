import Image from 'next/image';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex'>
        <section className='text-day-1000'>
          <h1 className='text-color-1000'>Hello</h1>
        </section>
      </main>
    </>
  );
}
