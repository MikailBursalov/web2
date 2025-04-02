import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { ChatBot } from '@/components/root/Header/ChatBot'

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ChatBot />
    </>
  )
}
