import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link rel="icon " type='png' href="./images/2.png" /> */}
        
      <title>instagram</title>
      <link rel="icon" href="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg" sizes="any" />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
