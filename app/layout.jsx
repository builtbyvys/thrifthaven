import { ClerkProvider } from '@clerk/nextjs/app-beta'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'Thrifthaven',
  description:
    'A small school project made for introducing online checkout and a rewards system.'
}

const RootLayout = ({ children }) => {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col text-stone-700'>
        <ClerkProvider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  )
}

export default RootLayout
