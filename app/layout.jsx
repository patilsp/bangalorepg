
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { GlobalProvider } from '@/context/GlobalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css';
import 'photoswipe/dist/photoswipe.css';
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"


export const metadata = {
  title: 'Namma PG',
  description: 'Find The Perfect PG for Bachelor',
  keywords: 'rental, property, real estate',

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang='en'>
          {/* <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            
          </body> */}

        <body
          className={cn(
            "min-h-screen  font-sans antialiased"
          )}
        >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
                <main className="flex-1">{children}</main>
              {/* <SiteFooter /> */}
            </div>
            <ToastContainer />
        </body>

        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
