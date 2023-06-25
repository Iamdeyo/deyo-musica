import TopNav from '@/components/TopNav';
import localFont from 'next/font/local';
import './globals.css';

import SideNav from '@/components/SideNav';
import Providers from '@/redux/provider';
import Player from '@/components/Player';

// Font files can be colocated inside of `app`
const quicksand = localFont({
  src: './Quicksand.ttf',
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata = {
  title: 'Musica',
  description: 'Simple music application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.variable}`}>
      <body>
        <Providers>
          <div className="relative pb-32 2xl:container mx-auto font-quicksand">
            <TopNav />
            <SideNav />
            <main className="mt-[87px] lg:mt-[111px]">{children}</main>
            <Player />
          </div>
        </Providers>
      </body>
    </html>
  );
}
