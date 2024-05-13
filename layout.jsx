// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Afacad } from 'next/font/google'
import { Manrope } from 'next/font/google'
import './styles.css'

const afacad = Afacad({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-afacad',
})
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={afacad.variable + ' ' + manrope.variable}>
        {children}
      </body>
    </html>
  )
}
