import './globals.css'
import { AuthProvider } from '@/service/providers/AuthProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={``}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
