import MultiSelect from '@/components/root/Search/MultiSelect'
import PriceSelect from '@/components/root/Search/PriceSelect'
import AreaSelect from '@/components/root/Search/AreaSelect'

export const SearchSection = () => {
  return (
    <section className="bg-[url('https://static.cdn-cian.ru/frontend/frontend-mainpage/banner-bg@2x.e6b6c557e44b8141d98a.jpg')] bg-center bg-cover bg-no-repeat">
      <div className={`container mx-auto p-20 py-32 space-y-5`}>
        <h1 className="text-white text-4xl font-semibold mb-5 pb-1 px-2  inline-block">
          Если недвижимость, то{' '}
          <span className="text-4xl pb-2 font-bold bg-gradient-to-r from-[rgb(12,130,237)] to-[rgb(5,25,34)] bg-clip-text text-transparent">
            EasyRent
          </span>
        </h1>

        <div className={`space-y-2`}>
          <div
            className={`bg-black/50 relative rounded-md rounded-b-[0px] p-2 w-32`}
          >
            <span className={`text-white text-xl`}>Арендовать</span>
          </div>
          <div className="flex items-center justify-center w-full">
            <div
              className={`w-1/4 border border-gray-300 bg-white px-2 py-3 rounded-bl-xl`}
            >
              <MultiSelect defaultTitle={'Выберите срок аренды'} />
            </div>
            <div className={`w-1/5 border border-gray-300 bg-white px-2 py-3`}>
              <PriceSelect />
            </div>
            <div className={`w-1/5 border border-gray-300 bg-white px-2 py-3`}>
              <AreaSelect />
            </div>
            <div className={`w-[35%] border border-gray-300 rounded-r-xl`}>
              <input
                type="text"
                placeholder={`Город, улица, адрес, район`}
                className={`bg-white border-gray-300 rounded-r-xl w-full py-3 px-2`}
              />
            </div>
          </div>
          <div className={`text-end`}>
            <button
              className={`bg-blue-600 md:hover:bg-blue-700 duration-300 cursor-pointer rounded-md px-6 py-1 text-white text-xl`}
            >
              Найти
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
