import { useState, useRef, useEffect } from 'react'

export const RealtorDescription = () => {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef(null)
  const [height, setHeight] = useState('0px')

  const text = `
    Я веб-разработчик с опытом создания современных приложений. Имею знания во фронтенде, люблю писать чистый код,
    следую современным практикам разработки и активно развиваюсь в сфере UI/UX. 
    Работал с такими технологиями как React, Next.js, Tailwind CSS, а также интеграцией с REST и MQTT API. 
    Ответственно подхожу к задачам и всегда нацелен на результат.
  `.trim()

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? `${contentRef.current.scrollHeight}px` : '80px')
    }
  }, [expanded])

  return (
    <div className="mt-10">
      <table className="w-full table-auto border-collapse">
        <tbody>
          <tr className="align-top">
            <td className="font-semibold text-xl text-left p-2 w-1/6">
              О себе
            </td>
            <td className="text-left p-2 text-xl">
              <div
                style={{
                  maxHeight: height,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
                ref={contentRef}
              >
                {text}
              </div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-blue-500 cursor-pointer text-base"
              >
                {expanded ? 'Свернуть' : 'Развернуть'}
              </button>
            </td>
          </tr>
          <tr>
            <td className="font-semibold text-xl text-left p-2">
              Специализация
            </td>
            <td className="text-left p-2 text-xl">
              Frontend, React, JavaScript
            </td>
          </tr>
          <tr>
            <td className="font-semibold text-xl text-left p-2">
              Регион работы
            </td>
            <td className="text-left p-2 text-xl">Кыргызстан, Бишкек</td>
          </tr>
          <tr>
            <td className="font-semibold text-xl text-left p-2">Контакты</td>
            <td className="text-left p-2 text-xl">
              +996 556 444 514, example@gmail.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
