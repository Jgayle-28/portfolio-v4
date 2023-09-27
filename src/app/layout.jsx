import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const aliens = localFont({
  src: [
    {
      path: '../../public/fonts/aliens-cows.thin.ttf',
      weight: '100',
    },
    {
      path: '../../public/fonts/aliens-cows.extralight.ttf',
      weight: '200',
    },
    {
      path: '../../public/fonts/aliens-cows.light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/aliens-cows.regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/aliens-cows.bold.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/aliens-cows.extrabold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/aliens-cows.heavy.ttf',
      weight: '700',
    },
  ],
  variable: '--font-alien',
})

export const metadata = {
  title: 'Jerehme Gayle - Full Stack Developer',
  description: 'Get in touch with me to know more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
