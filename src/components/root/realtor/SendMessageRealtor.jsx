import { Asterisk } from 'lucide-react'

export const SendMessageRealtor = () => {
  return (
    <div>
      <div className={`border rounded-md p-8 space-y-5`}>
        <h1 className={'font-bold text-xl'}>Отправить сообщение</h1>
        <div>
          <h3 className={`w-full flex items-center gap-2 font-normal text-sm`}>
            <span>В каком городе?</span> <Asterisk className={`text-red-500`} />
          </h3>
          <div>
            <input
              type="text"
              placeholder={'Bishkek'}
              className={`border focus:outline-blue-500 duration-300 rounded-sm border-slate-600 w-full p-2`}
            />
          </div>
        </div>
        <div>
          <h3 className={`w-full flex items-center gap-2 font-normal text-sm`}>
            <span>Ваше имя</span> <Asterisk className={`text-red-500`} />
          </h3>
          <div>
            <input
              type="text"
              placeholder={'Jon'}
              className={`border focus:outline-blue-500 duration-300 rounded-sm border-slate-600 w-full p-2`}
            />
          </div>
        </div>
        <div>
          <h3 className={`w-full flex items-center gap-2 font-normal text-sm`}>
            <span>Номер для связи</span> <Asterisk className={`text-red-500`} />
          </h3>
          <div>
            <input
              type="text"
              placeholder={'+996'}
              className={`border focus:outline-blue-500 duration-300 rounded-sm border-slate-600 w-full p-2`}
            />
          </div>
        </div>
        <div>
          <h3 className={`w-full flex items-center gap-2 font-normal text-sm`}>
            <span>Сообщение</span> <Asterisk className={`text-red-500`} />
          </h3>
          <div>
            <textarea
              rows={3}
              placeholder={'Введите свое сообщение сюда'}
              className={`border focus:outline-blue-500 duration-300 rounded-sm border-slate-600 w-full p-2`}
            />
          </div>
        </div>
        <div>
          <button
            className={`bg-blue-500 md:hover:bg-inherit md:hover:border-blue-500 duration-300 border md:hover:text-blue-500 cursor-pointer rounded-sm w-full text-center py-1.5 text-white text-xl`}
          >
            Отправить сообщение
          </button>
          <div>
            <span>
              Отправляя сообщения вы соглашаетесь отправлять свои персональные
              данные
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
