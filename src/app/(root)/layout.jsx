import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { ChatBot } from '@/components/root/Header/ChatBot'

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatBot />
    </div>
  )
}
