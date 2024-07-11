import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          <Header />
            <Homepage />
          <Footer />
      </>
  )
}
