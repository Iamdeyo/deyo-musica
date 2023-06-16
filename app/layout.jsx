import TopNav from '@/components/TopNav';
import './globals.css';
import { Quicksand } from 'next/font/google';
import SideNav from '@/components/SideNav';
import Providers from '@/redux/provider';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: 'Musica',
  description: 'Simple music application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Providers>
          <div className="lg:container mx-auto relative">
            <TopNav />
            <SideNav />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
