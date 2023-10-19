import Navigation from '@/app/components/navigation/navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Gowun_Batang, Nanum_Gothic } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const gowun_batang = Gowun_Batang({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-gowun-batang' });
const nanum_gothic = Nanum_Gothic({ weight: ['400', '700'], subsets: ['latin'], display: 'swap', variable: '--font-nanum-gothic' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='grid'>
      <body className={`${gowun_batang.variable} ${nanum_gothic.variable} justify-self-center 2xl:w-[1462px] w-full`}>{children}</body>
    </html>
  );
}
