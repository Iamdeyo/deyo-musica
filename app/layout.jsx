import TopNav from '@/components/TopNav';
import './globals.css';

import SideNav from '@/components/SideNav';
import Providers from '@/redux/provider';

export const metadata = {
  title: 'Musica',
  description: 'Simple music application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className=" relative">
            <TopNav />
            <SideNav />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
