'use client'
import { useEffect, useRef, useState } from 'react'
import { SendHorizontal, SparklesIcon, XIcon } from 'lucide-react'

export const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsChatOpen(false)
      }
    }

    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isChatOpen])

  return (
    <>
      {/* Кнопка открытия чата */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-5 right-5 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
        >
          <SparklesIcon className="w-6 h-6" />
        </button>
      )}

      {/* Сам чат */}
      {isChatOpen && (
        <div
          ref={chatRef}
          className="fixed z-50 bottom-5 right-5 bg-white shadow-lg border rounded-lg w-96 h-[500px] flex flex-col"
        >
          <div className="p-3 flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
            <span>Чат-бот</span>
            <button onClick={() => setIsChatOpen(false)}>
              <XIcon />
            </button>
          </div>
          <div className="p-3 flex-1 overflow-auto">Сообщения чата...</div>

          <div className="relative w-full">
            <input
              type="text"
              className="border-t p-2 rounded-md w-[99%] mx-auto"
              placeholder="Напишите сообщение..."
            />
            <SendHorizontal
              className="text-blue-500 absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
