import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard UI',
  description: 'A simple minimalistic dashboard app',
};

export default function DashboardeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="en">
      <body>
        <div className="h-screen flex">
          {/* left portion */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
            <Link
              href={'/'}
              className="flex items-center justify-center gap-2 lg:justify-start"
            >
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <span className="hidden lg:block">SunSchool</span>
            </Link>
            <Menu />
          </div>
          {/* right portion */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
