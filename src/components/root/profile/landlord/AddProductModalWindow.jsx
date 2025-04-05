import { XIcon } from 'lucide-react'

export const AddProductModalWindow = ({ close }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={close}
    >
      <div
        className="w-[400px] sm:w-[600px] md:w-[700px] lg:w-[1000px] min-h-[400px] bg-white p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <XIcon
          className={`absolute right-2 top-2 text-red-500 font-black cursor-pointer`}
          onClick={close}
        />
        <div>
          <div>
            <div className={`flex flex-col gap-1`}>
              <label className={`font-semibold text-lg relative left-2`}>
                Заголовок
              </label>
              <input
                type="text"
                placeholder={`Заголовок объявления`}
                className={`border border-blue-500 px-3 py-1 rounded-md`}
              />
            </div>
            <div></div>
          </div>
          <div className={`flex flex-col gap-1`}>
            <label className={`font-semibold text-lg relative left-2`}>
              Описание
            </label>
            <textarea
              cols={'50'}
              rows={'10'}
              placeholder={`Заголовок объявления`}
              className={`border border-blue-500 px-3 py-1 rounded-md`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
