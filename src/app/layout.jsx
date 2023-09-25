
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeaderTop from './components/HeaderTop'
import SearchBar from './components/SearchBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'my blog project',
  description: 'getting familiar with blogging world ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='py-5 min-h-screen'>
        <Navbar />
        <SearchBar />
        {children} 
       
        </main>
        <HeaderTop />
        <Footer />

        

        

      </body>
      </html>
  )
}
