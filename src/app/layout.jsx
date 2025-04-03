import './globals.css'
import { AuthProvider } from '@/service/providers/AuthProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="h-full">
      <body className="h-full">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
