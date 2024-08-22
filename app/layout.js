import { Aleo } from "next/font/google";
import "./globals.css";
import Header from './src/components/header/header'
import Footer from './src/components/footer/footer'

const aleo = Aleo({ subsets: ["latin"] });

export const metadata = {
  title: "Fireplace Palace",
  description: "Fireplace Palace website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
