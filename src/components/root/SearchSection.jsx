import { ChevronDownIcon } from 'lucide-react'

export const SearchSection = () => {
  return (
    <section className="bg-[url('https://static.cdn-cian.ru/frontend/frontend-mainpage/banner-bg@2x.e6b6c557e44b8141d98a.jpg')] bg-center bg-cover bg-no-repeat">
      <div className={`container mx-auto p-20 py-32 space-y-5`}>
        <h1 className={`text-white text-4xl font-semibold`}>
          Если недвижимость, то Циан
        </h1>
        <div>
          <div className={`bg-black relative rounded-md p-2 w-32`}>
            <span className={`text-white text-xl`}>Арендовать</span>
          </div>
          <div className="flex items-center justify-center w-full">
            <div
              className={`w-1/4 border border-gray-300 bg-white rounded-l-xl px-2 py-3`}
            >
              <p className={`flex justify-between items-center`}>
                <span>тип недвижимости</span>
                <ChevronDownIcon />
              </p>
            </div>
            <div className={`w-1/5 border border-gray-300 bg-white px-2 py-3`}>
              <p className={`flex justify-between items-center`}>
                <span>Цена</span>
                <ChevronDownIcon />
              </p>
            </div>
            <div className={`w-1/5 border border-gray-300 bg-white px-2 py-3`}>
              <p className={`flex justify-between items-center`}>
                <span>Площадь</span>
                <ChevronDownIcon />
              </p>
            </div>
            <div className={`w-[35%] border border-gray-300 rounded-r-xl`}>
              <input
                type="text"
                placeholder={`Город, улица, адрес, район`}
                className={`bg-white border-gray-300 rounded-r-xl w-full py-3 px-2`}
              />
            </div>
          </div>
          <div className={`py-2 text-end`}>
            <button
              className={`bg-blue-600 rounded-md px-6 py-1 text-white text-xl`}
            >
              Найти
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
