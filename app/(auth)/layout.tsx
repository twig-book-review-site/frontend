import {ReactNode} from "react";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function LoginLayout ({ children }: { children: ReactNode }) {
  return (
        <main className='flex items-center justify-center h-screen w-full'>
          {children}
        </main>
  );
}