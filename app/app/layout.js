import { Inter } from 'next/font/google'
// import './globals.css'
import Head from '@/app/ui/Head/head'
import Loader from './ui/Loader/loader'
import Cursor from './ui/Cursor/cursor'
import progressScroll from './ui/progressScroll/progress'
import Navbar from './ui/navBar/navBar'
import Footer from './ui/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clarkson Awomu',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head />
      
      <body className={inter.className}>{children}
       {/* <Loader /> */}
       <Cursor />
       <progressScroll />
        <Navbar />
      
      <Footer />
      </body>
    </html>
  )
}
