import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RootLayoutWrapper from './components/RootLayoutWrapper';
import { GlobalProvider } from "@/contexts/GlobalContext";
import { PrimeReactProvider } from 'primereact/api';
import { ScrollTop } from 'primereact/scrolltop';

export const metadata = {
  title: "EducTin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <PrimeReactProvider>
      <GlobalProvider>
        <html lang="en">
          <body>
           
            <RootLayoutWrapper>  <ScrollTop  className="text-white bg-primary"/> {children} </RootLayoutWrapper>
          </body>
        </html>
      </GlobalProvider>
    </PrimeReactProvider>
  );
}
